# Deerlink 테스트·CI 보강 가이드

> Next.js 16 + React 19 + Prisma + LibSQL 기반 Deerlink에 적용.
> 목표: 이력서 한 줄 "실서비스에 Vitest 단위 70%+ / Playwright E2E / GitHub Actions CI 구축".
>
> 적용 후 README에 결과(커버리지 %, Lighthouse 점수 before/after) 표로 박을 것.

---

## 0. 적용 순서 (총 1~2주)

| 단계 | 항목 | 예상 시간 |
|---|---|---|
| 1 | Vitest + RTL 설치·세팅 | 0.5일 |
| 2 | 단위 테스트 5~10개 (핵심 유틸·hook) | 1일 |
| 3 | 컴포넌트 테스트 3~5개 (방 생성/응답 폼) | 1일 |
| 4 | Playwright 설치·E2E 1~2 시나리오 | 1일 |
| 5 | GitHub Actions CI yml | 0.5일 |
| 6 | Lighthouse CI (선택) | 0.5일 |
| 7 | Sentry 연동 (선택) | 0.5일 |
| 8 | README 결과 정리 | 0.5일 |

---

## 1. Vitest + React Testing Library

### 설치

```bash
yarn add -D vitest @vitejs/plugin-react jsdom \
  @testing-library/react @testing-library/jest-dom @testing-library/user-event \
  @vitest/coverage-v8
```

### `vitest.config.ts`

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['**/*.config.*', '**/node_modules/**', '.next/**'],
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
```

### `src/test/setup.ts`

```ts
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => cleanup());
```

### `package.json` 스크립트

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:cov": "vitest run --coverage"
  }
}
```

### 첫 단위 테스트 (예시)

`src/lib/__tests__/room.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { generateRoomId, isAllResponded } from '../room';

describe('generateRoomId', () => {
  it('returns a 8-char alphanumeric id', () => {
    const id = generateRoomId();
    expect(id).toMatch(/^[a-zA-Z0-9]{8}$/);
  });

  it('returns unique ids on consecutive calls', () => {
    const ids = new Set(Array.from({ length: 100 }, generateRoomId));
    expect(ids.size).toBe(100);
  });
});

describe('isAllResponded', () => {
  it('returns true when participants === responses', () => {
    expect(isAllResponded({ participants: 4, responses: 4 })).toBe(true);
  });
  it('returns false when responses < participants', () => {
    expect(isAllResponded({ participants: 4, responses: 3 })).toBe(false);
  });
});
```

### 컴포넌트 테스트 (예시)

`src/components/__tests__/ResponseForm.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ResponseForm from '../ResponseForm';

describe('ResponseForm', () => {
  it('disables submit until an option is selected', async () => {
    render(<ResponseForm options={['A', 'B']} onSubmit={vi.fn()} />);
    expect(screen.getByRole('button', { name: /제출/i })).toBeDisabled();
    await userEvent.click(screen.getByLabelText('A'));
    expect(screen.getByRole('button', { name: /제출/i })).toBeEnabled();
  });

  it('calls onSubmit with selected option', async () => {
    const onSubmit = vi.fn();
    render(<ResponseForm options={['A', 'B']} onSubmit={onSubmit} />);
    await userEvent.click(screen.getByLabelText('B'));
    await userEvent.click(screen.getByRole('button', { name: /제출/i }));
    expect(onSubmit).toHaveBeenCalledWith('B');
  });
});
```

### 우선 테스트 대상 (Deerlink 도메인 기준)

- 방 ID 생성·검증 유틸
- 응답 집계 로직 (모두 응답했는지 판단)
- 일괄 공개 트리거 조건
- 익명 세션 식별 (쿠키/localStorage 기반)
- OG 메타 생성 함수
- 응답 폼 컴포넌트 (선택 → 제출 흐름)

**목표 커버리지 70%+**. 100% 욕심 안 부려도 됩니다.

---

## 2. Playwright E2E

### 설치

```bash
yarn create playwright
# TypeScript 선택, tests 폴더는 'e2e' 권장
```

`playwright.config.ts`에서 baseURL을 로컬 dev로 설정:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'yarn dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    { name: 'chromium', use: devices['Desktop Chrome'] },
  ],
});
```

### 핵심 시나리오 1개부터

`e2e/room-flow.spec.ts`:

```ts
import { test, expect } from '@playwright/test';

test('방 생성 → 참여 → 응답 완료 → 결과 공개', async ({ browser }) => {
  // 호스트: 방 생성
  const host = await browser.newContext();
  const hostPage = await host.newPage();
  await hostPage.goto('/');
  await hostPage.getByRole('button', { name: /방 만들기/ }).click();
  await hostPage.getByLabel(/질문/).fill('짜장 vs 짬뽕?');
  await hostPage.getByLabel(/선택지 1/).fill('짜장');
  await hostPage.getByLabel(/선택지 2/).fill('짬뽕');
  await hostPage.getByRole('button', { name: /시작/ }).click();
  await expect(hostPage).toHaveURL(/\/room\/.+/);
  const url = hostPage.url();

  // 호스트 응답
  await hostPage.getByLabel('짜장').click();
  await hostPage.getByRole('button', { name: /제출/ }).click();

  // 게스트(다른 컨텍스트로 익명 분리)
  const guest = await browser.newContext();
  const guestPage = await guest.newPage();
  await guestPage.goto(url);
  await guestPage.getByLabel('짬뽕').click();
  await guestPage.getByRole('button', { name: /제출/ }).click();

  // 결과 공개 확인
  await expect(hostPage.getByText(/짜장.*1/)).toBeVisible();
  await expect(hostPage.getByText(/짬뽕.*1/)).toBeVisible();
});
```

**처음엔 이 시나리오 1개만 안정적으로 통과시키는 게 목표**. 늘리는 건 그 다음.

`package.json`:

```json
{
  "scripts": {
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui"
  }
}
```

---

## 3. GitHub Actions CI

`.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: yarn
      - run: yarn install --frozen-lockfile
      - run: yarn lint
      - run: yarn test:cov
      - uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/

  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: yarn
      - run: yarn install --frozen-lockfile
      - run: npx playwright install --with-deps chromium
      - run: yarn e2e
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

배지를 README 상단에 박으면 채용담당자 시선 흡수:

```markdown
![CI](https://github.com/ckdduf138/deerlink/actions/workflows/ci.yml/badge.svg)
```

---

## 4. Lighthouse CI (선택, 0.5일)

성능 점수 정량 지표는 이력서 우대사항 90% 이상에서 언급됨.

```bash
yarn add -D @lhci/cli
```

`.lighthouserc.json`:

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "startServerCommand": "yarn start",
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.95 }]
      }
    }
  }
}
```

`ci.yml`에 추가:

```yaml
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: yarn }
      - run: yarn install --frozen-lockfile
      - run: yarn build
      - run: npx lhci autorun
```

---

## 5. Sentry (선택, 0.5일)

실서비스 운영 중이라는 게 강점인데, **실제 에러 트래킹을 했다**는 사례가 있으면 이력서 highlights에 박을 수 있습니다.

```bash
yarn add @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

Wizard가 `sentry.client.config.ts` / `sentry.server.config.ts` / `next.config.js` 까지 자동 셋업.

**핵심**: 한 달 정도 운영하다가 잡힌 에러 한두 건 정리해서 글로 쓰기:
- "응답 제출 시 race condition 으로 중복 응답 발생 → optimistic update 제거로 해결"
- "Prisma + LibSQL edge runtime에서 connection pooling 문제 → 단일 connection 패턴으로 변경"

이런 한 줄이 면접에서 30분짜리 깊은 질문 받는 트리거 됩니다.

---

## 6. README 결과 정리 (마무리, 가장 중요)

테스트·CI 다 해놓고도 README가 "프로젝트 설명만 있는 평범한 모양"이면 안 봅니다. 아래 섹션을 박아넣으세요:

```markdown
## 📊 품질 지표

| 항목 | 값 |
|---|---|
| Test Coverage | 72% (lines) |
| Lighthouse Performance | 95 |
| Lighthouse Accessibility | 98 |
| Lighthouse SEO | 100 |
| Bundle Size (gzip) | 142 KB |

## 🔎 성능 개선 사례

- **이미지 LCP**: next/image + AVIF 적용으로 LCP 3.2s → 1.4s (-56%)
- **번들 분할**: 라우트별 dynamic import 로 First Load JS 240KB → 142KB

## 🧪 테스트

- 단위/통합: Vitest + RTL — `yarn test:cov`
- E2E: Playwright — `yarn e2e`
- CI: GitHub Actions (PR 마다 자동 실행)

## 🛠 운영 사례

- Sentry 로 실서비스 에러 추적, 응답 중복 발행 race condition 발견 후 optimistic update 패턴 제거로 해결 (오류율 X% → 0)
```

수치는 적용 후 실제 값으로 교체.

---

## 7. 이력서 highlights 갱신 후보

위 작업 완료되면 [src/data/projects.ts](../src/data/projects.ts) Deerlink highlights에 추가:

```ts
'Vitest + RTL 단위·통합 테스트 70%+ 커버리지, Playwright E2E 시나리오 구축',
'GitHub Actions CI 도입 (lint·test·E2E 자동화)',
'Lighthouse Performance 95+ / Accessibility 98+ 달성 (이미지 LCP 56% 개선)',
'Sentry 운영 모니터링으로 race condition 이슈 추적·해결 사례 확보',
```

이 4줄이 박히면 면접 질문이 "어떤 게이밍 회사 다니셨어요?" 가 아니라 "테스트 전략 어떻게 짜셨어요?" 로 바뀝니다.

---

## 체크리스트

- [ ] Vitest + RTL 설치, 첫 테스트 통과
- [ ] 핵심 유틸 단위 테스트 5개
- [ ] 컴포넌트 테스트 3개
- [ ] Playwright 설치, E2E 1개 통과
- [ ] GitHub Actions CI 통과 (배지 표시)
- [ ] Lighthouse 점수 측정 + 개선 1건
- [ ] (선택) Sentry 연동
- [ ] README 품질 지표 섹션
- [ ] projects.ts Deerlink highlights 4줄 추가
- [ ] 이력서 PDF 재생성 후 PDF 한 장 안에 들어가는지 확인
