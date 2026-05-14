/**
 * generate-resume.ts
 *
 * src/data/resumeData.ts 와 src/data/projects.ts 를 읽어
 * public/이창열_이력서.html 을 자동으로 생성합니다.
 *
 * 실행: yarn generate:resume
 * 빌드 시 자동 실행: yarn build (prebuild 훅에 등록됨)
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ── resumeData.ts 의 타입 재선언 (import type 은 런타임에서 제거됨)
import {
  personalInfo,
  profileSummary,
  experiences,
  education,
  skillCategories,
  awards,
  coreStrengths,
  type ExperienceData,
  type EducationData,
  type SkillCategory,
  type AwardItem,
  type CoreStrength,
} from '../src/data/resumeData.ts';

import { projects } from '../src/data/projects.ts';

// ── 경로 설정 ──────────────────────────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT = resolve(__dirname, '../public/이창열_이력서.html');

// ── 유틸 ───────────────────────────────────────────────────────────────────────
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** https://www.example.com/path → example.com */
function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

// ── 각 섹션 렌더러 ─────────────────────────────────────────────────────────────

function renderCoreStrengths(list: CoreStrength[]): string {
  return `<div class="strengths-grid">${list
    .map(
      (s) => `
        <div class="strength-item">
          <div class="strength-title">${esc(s.title)}</div>
          <div class="strength-desc">${esc(s.description)}</div>
        </div>`,
    )
    .join('')}</div>`;
}

function renderExperiences(list: ExperienceData[]): string {
  return list
    .map(
      (exp) => `
        <div class="exp-item">
          <div class="exp-header">
            <div class="exp-company">${esc(exp.company)}<span class="exp-badge">${esc(exp.type)}</span></div>
            <div class="exp-period">${esc(exp.period)}</div>
          </div>
          <div class="exp-meta">${esc(exp.role)}</div>
          ${exp.summary ? `<div class="exp-summary">${esc(exp.summary)}</div>` : ''}
          ${exp.projects
            .map(
              (proj) => `
          <div class="exp-project">
            <div class="exp-project-name">▸ ${esc(proj.name)}</div>
            ${
              proj.clients && proj.clients.length > 0
                ? `<div class="exp-clients">${proj.clients.map((c) => `<span class="tag tag-client">${esc(c)}</span>`).join('')}</div>`
                : ''
            }
            ${
              proj.tech && proj.tech.length > 0
                ? `<div class="exp-tech">${proj.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>`
                : ''
            }
            <ul class="exp-tasks">
              ${proj.tasks.map((t) => `<li>${esc(t)}</li>`).join('\n              ')}
            </ul>
          </div>`,
            )
            .join('\n')}
          ${
            exp.siteUrl
              ? `<a class="proj-link" href="${esc(exp.siteUrl)}" target="_blank">🔗 ${esc(hostname(exp.siteUrl))}</a>`
              : ''
          }
        </div>`,
    )
    .join('\n');
}

function renderEducation(list: EducationData[]): string {
  return list
    .map(
      (edu) => `
        <div class="edu-item">
          <div>
            <div class="edu-school">${esc(edu.school)}<span class="edu-badge">${esc(edu.status)}</span></div>
            <div class="edu-major">${esc(edu.major)}</div>
          </div>
          <div class="edu-period">${esc(edu.period)}</div>
        </div>`,
    )
    .join('\n');
}

function renderSkills(list: SkillCategory[]): string {
  return list
    .map(
      (cat) => `
        <div class="skill-row">
          <div class="skill-label">${esc(cat.label)}</div>
          <div class="skill-tags">
            ${cat.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join('')}
          </div>
        </div>`,
    )
    .join('\n');
}

function renderProjects(): string {
  // 이력서에는 featured 프로젝트만 포함 (최대 4개)
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return featured
    .map(
      (p) => `
        <div class="proj-item">
          <div class="proj-header">
            <div class="proj-name">${esc(p.title)}</div>
          </div>
          <div class="proj-desc">${esc(p.description)}${p.category === 'team' ? ' (팀 프로젝트)' : ''}</div>
          <div class="proj-stack">
            ${p.techStack.map((s) => `<span class="tag">${esc(s)}</span>`).join('')}
          </div>
          <ul class="proj-tasks">
            ${p.highlights.slice(0, 3).map((h) => `<li>${esc(h)}</li>`).join('\n            ')}
          </ul>
          ${p.demoUrl ? `<a class="proj-link" href="${esc(p.demoUrl)}" target="_blank">🔗 ${esc(hostname(p.demoUrl))}</a>` : ''}
        </div>`,
    )
    .join('\n');
}

function renderAwards(list: AwardItem[]): string {
  return list
    .map(
      (a) => `
        <div class="award-item">
          <span>${esc(a.title)}</span>
          <span>${esc(a.year)}</span>
        </div>`,
    )
    .join('\n');
}

// ── 프로필 사진 ──────────────────────────────────────────────────────────────
const photoSrc = '/profile.JPG';

// ── HTML 전체 템플릿 ───────────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(personalInfo.name)} — Frontend Developer 이력서</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
    />
    <style>
      /* ── 기본 ── */
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { font-size: 14px; }
      body {
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
        color: #1e1e2e;
        background: #f5f5f5;
        -webkit-font-smoothing: antialiased;
      }

      /* ── 페이지 래퍼 ── */
      .page {
        width: 210mm;
        min-height: 297mm;
        margin: 24px auto;
        background: #fff;
        padding: 14mm 16mm 14mm 16mm;
        box-shadow: 0 4px 24px rgba(0,0,0,0.10);
      }

      /* ── 헤더 ── */
      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid #6366f1; gap: 16px; }
      .header-identity { display: flex; align-items: center; gap: 14px; }
      .header-photo { width: 58px; height: 58px; border-radius: 50%; object-fit: cover; border: 2px solid #6366f1; flex-shrink: 0; }
      .header-left h1 { font-size: 2rem; font-weight: 800; color: #1e1e2e; letter-spacing: -0.02em; }
      .header-left .sub { font-size: 0.95rem; color: #6366f1; font-weight: 600; margin-top: 4px; }
      .header-right { text-align: right; font-size: 0.78rem; color: #555; line-height: 1.9; }
      .header-right a { color: #6366f1; text-decoration: none; }
      .header-right a:hover { text-decoration: underline; }

      /* ── 섹션 ── */
      section { margin-bottom: 18px; }
      .section-title {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #6366f1;
        border-bottom: 1px solid #e0e7ff;
        padding-bottom: 5px;
        margin-bottom: 12px;
      }

      /* ── 경력 ── */
      .exp-item { margin-bottom: 14px; }
      .exp-header { display: flex; justify-content: space-between; align-items: baseline; }
      .exp-company { font-size: 0.9rem; font-weight: 700; color: #1e1e2e; }
      .exp-period { font-size: 0.72rem; color: #888; }
      .exp-meta { font-size: 0.75rem; color: #6366f1; font-weight: 600; margin-top: 2px; }
      .exp-badge {
        display: inline-block;
        font-size: 0.65rem;
        font-weight: 600;
        background: #eef2ff;
        color: #6366f1;
        border-radius: 4px;
        padding: 1px 6px;
        margin-left: 6px;
        vertical-align: middle;
      }
      .exp-tasks { margin-top: 6px; padding-left: 0; list-style: none; }
      .exp-tasks li { font-size: 0.78rem; color: #444; line-height: 1.6; padding-left: 12px; position: relative; }
      .exp-tasks li::before { content: '·'; position: absolute; left: 0; color: #6366f1; font-weight: 700; }
      .exp-summary { font-size: 0.76rem; color: #666; margin-top: 2px; margin-bottom: 8px; }
      .exp-project { margin-top: 8px; padding-top: 8px; border-top: 1px solid #f0f0f0; }
      .exp-project:first-of-type { border-top: none; padding-top: 4px; }
      .exp-project-name { font-size: 0.8rem; font-weight: 700; color: #4f46e5; margin-bottom: 4px; }
      .exp-clients { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 4px; }
      .exp-tech { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 4px; }
      .tag-client { background: #f3f0ff; color: #7c3aed; border: 1px solid #ddd6fe; }

      /* ── 핵심역량 ── */
      .strengths-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
      .strength-item { background: #f8f8ff; border: 1px solid #e0e7ff; border-radius: 6px; padding: 8px 10px; }
      .strength-title { font-size: 0.76rem; font-weight: 700; color: #4f46e5; margin-bottom: 3px; }
      .strength-desc { font-size: 0.68rem; color: #555; line-height: 1.55; }

      /* ── 학력 ── */
      .edu-item { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 7px; }
      .edu-school { font-size: 0.85rem; font-weight: 700; }
      .edu-major { font-size: 0.75rem; color: #666; margin-top: 1px; }
      .edu-period { font-size: 0.72rem; color: #888; }
      .edu-badge {
        display: inline-block;
        font-size: 0.65rem;
        font-weight: 600;
        background: #ecfdf5;
        color: #059669;
        border-radius: 4px;
        padding: 1px 6px;
        margin-left: 6px;
      }

      /* ── 기술 ── */
      .skill-row { display: flex; gap: 8px; align-items: baseline; margin-bottom: 6px; }
      .skill-label { font-size: 0.72rem; font-weight: 700; color: #6366f1; width: 140px; flex-shrink: 0; }
      .skill-tags { display: flex; flex-wrap: wrap; gap: 4px; }
      .tag {
        font-size: 0.7rem;
        font-weight: 500;
        background: #f3f4f6;
        color: #374151;
        border-radius: 4px;
        padding: 2px 7px;
      }

      /* ── 프로젝트 ── */
      .proj-item { margin-bottom: 13px; }
      .proj-header { display: flex; justify-content: space-between; align-items: baseline; }
      .proj-name { font-size: 0.88rem; font-weight: 700; color: #1e1e2e; }
      .proj-period { font-size: 0.72rem; color: #888; }
      .proj-desc { font-size: 0.76rem; color: #555; margin: 3px 0 5px 0; }
      .proj-stack { display: flex; flex-wrap: wrap; gap: 3px; margin-bottom: 5px; }
      .proj-stack .tag { background: #eef2ff; color: #6366f1; }
      .proj-tasks { padding-left: 0; list-style: none; }
      .proj-tasks li { font-size: 0.76rem; color: #444; line-height: 1.6; padding-left: 12px; position: relative; }
      .proj-tasks li::before { content: '▸'; position: absolute; left: 0; color: #6366f1; font-size: 0.6rem; top: 3px; }
      .proj-link { font-size: 0.7rem; color: #6366f1; text-decoration: none; }

      /* ── 수상/활동 ── */
      .award-item { display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 5px; color: #444; }
      .award-item span:first-child { font-weight: 600; color: #1e1e2e; }

      /* ── 인쇄 버튼 (화면 전용) ── */
      .print-btn {
        display: block;
        width: 210mm;
        margin: 0 auto 12px;
        padding: 9px;
        background: #6366f1;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-family: inherit;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
      }
      .print-hint { width: 210mm; margin: 0 auto 6px; font-size: 0.72rem; color: #888; text-align: center; }

      /* ── 인쇄 ── */
      @media print {
        body { background: #fff; }
        .page { margin: 0; padding: 12mm 14mm; box-shadow: none; width: 100%; }
        .print-btn, .print-hint { display: none; }
        a { color: inherit; text-decoration: none; }
        .page-break-before { break-before: page; page-break-before: always; }
      }
    </style>
  </head>
  <body>
    <p class="print-hint">💡 인쇄 시 여백 "없음"으로 설정하면 A4 한 장에 맞게 출력됩니다.</p>
    <button class="print-btn" onclick="window.print()">🖨️ PDF로 저장 / 인쇄</button>

    <div class="page">

      <!-- ── 헤더 ── -->
      <div class="header">
        <div class="header-identity">
          <img class="header-photo" src="${photoSrc}" alt="${esc(personalInfo.name)} 프로필 사진" />
          <div class="header-left">
            <h1>${esc(personalInfo.name)}</h1>
            <div class="sub">Frontend Developer</div>
          </div>
        </div>
        <div class="header-right">
          <div>📱 ${esc(personalInfo.phone)}</div>
          <div>📧 <a href="mailto:${esc(personalInfo.email)}">${esc(personalInfo.email)}</a></div>
          <div>🔗 <a href="${esc(personalInfo.github)}" target="_blank">${esc(personalInfo.github.replace('https://', ''))}</a></div>
          <div>🏆 <a href="${esc(personalInfo.solvedac)}" target="_blank">${esc(personalInfo.solvedac.replace('https://', ''))}</a></div>
          <div>🌐 <a href="${esc(personalInfo.portfolio)}" target="_blank">포트폴리오 사이트</a></div>
        </div>
      </div>

      <!-- ── 프로필 ── -->
      <section>
        <div class="section-title">Profile</div>
        <p style="font-size:0.82rem; color:#444; line-height:1.8;">
          ${esc(profileSummary)}
        </p>
      </section>

      <!-- ── 핵심역량 ── -->
      <section>
        <div class="section-title">Core Strengths</div>
        ${renderCoreStrengths(coreStrengths)}
      </section>

      <!-- ── 기술 스택 ── -->
      <section>
        <div class="section-title">Tech Stack</div>
        ${renderSkills(skillCategories)}
      </section>

      <!-- ── 경력 ── -->
      <section class="page-break-before">
        <div class="section-title">Experience</div>
        ${renderExperiences(experiences)}
      </section>

      <!-- ── 프로젝트 ── -->
      <section class="page-break-before">
        <div class="section-title">Projects</div>
        ${renderProjects()}
      </section>

      <!-- ── 학력 ── -->
      <section>
        <div class="section-title">Education</div>
        ${renderEducation(education)}
      </section>

      <!-- ── 수상 및 활동 ── -->
      <section>
        <div class="section-title">Awards &amp; Activities</div>
        ${renderAwards(awards)}
      </section>

    </div>
  </body>
</html>
`;

// ── 파일 출력 ───────────────────────────────────────────────────────────────────
writeFileSync(OUTPUT, html, 'utf-8');
console.log(`이력서 생성 완료: ${OUTPUT}`);
