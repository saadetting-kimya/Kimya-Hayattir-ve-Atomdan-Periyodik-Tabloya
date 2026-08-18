/* =========================================================
   [SITE ADI] — GELİŞMİŞ ÖĞRENME TEMELLİ QUIZ MOTORU (AtomLab 9 şablonundan türetildi)
   ---------------------------------------------------------
   Amaç:
   - Soru havuzunu kullanmak
   - Kazanım temelli ölçme
   - Yanlış yapılan sorudan aynı kazanımda benzer soru üretmek
   - Öğrencinin cevap geçmişini tutmak
   - Kazanım bazlı başarı hesaplamak
   - Öğrenme gelişimini takip etmek
   - Zayıf kazanımları belirlemek
   - Güçlü kazanımları belirlemek
   - Keşif Günlüğünü korumak
   ========================================================= */

/* =========================================================
   STORAGE ANAHTARLARI
   ========================================================= */

const STORAGE_KEY = "atomlab9_progress";
const ERROR_KEY = "atomlab9_errors";
const LEARNING_KEY = "atomlab9_learning";
const HISTORY_KEY = "atomlab9_learning_history";


/* =========================================================
   YARDIMCI FONKSİYONLAR
   ========================================================= */

function safeParse(key, fallback = {}) {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    const parsed = JSON.parse(value);

    return parsed ?? fallback;

  } catch (error) {
    console.warn("LocalStorage okunamadı:", key, error);
    return fallback;
  }
}


function safeSave(key, value) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

    return true;

  } catch (error) {
    console.warn("LocalStorage yazılamadı:", key, error);
    return false;
  }
}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   VERİ TABLOSU / GRAFİK RENDER (sorulardaki table/chart alanları)
   ========================================================= */

function renderDataTable(table) {

  if (!table || !Array.isArray(table.headers) || !Array.isArray(table.rows)) {
    return "";
  }

  const theadCells = table.headers
    .map(h => `<th class="qtable-th">${escapeHTML(h)}</th>`)
    .join("");

  const bodyRows = table.rows
    .map(row => {
      const cells = row
        .map(cell => `<td class="qtable-td">${escapeHTML(cell)}</td>`)
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  const caption = table.caption
    ? `<div class="qtable-caption">${escapeHTML(table.caption)}</div>`
    : "";

  return `
    <div class="qtable-wrap">
      ${caption}
      <table class="qtable">
        <thead><tr>${theadCells}</tr></thead>
        <tbody>${bodyRows}</tbody>
      </table>
    </div>
  `;
}

function renderBarChart(chart) {

  const labels = Array.isArray(chart.labels) ? chart.labels : [];
  const values = Array.isArray(chart.values) ? chart.values.map(Number) : [];
  if (labels.length === 0 || values.length === 0) return "";

  const W = 480, H = 240;
  const padL = 40, padR = 20, padT = 30, padB = 46;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const maxVal = Math.max(...values, 0) * 1.15 || 1;
  const barGap = 14;
  const barW = (plotW - barGap * (values.length - 1)) / values.length;

  const bars = values
    .map((v, i) => {
      const barH = Math.max((v / maxVal) * plotH, 1);
      const x = padL + i * (barW + barGap);
      const y = padT + plotH - barH;
      const label = escapeHTML(labels[i] ?? "");
      return `
        <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" fill="var(--gas)" opacity="0.85" rx="3"></rect>
        <text x="${(x + barW / 2).toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="middle" font-size="11" fill="currentColor">${escapeHTML(String(v))}</text>
        <text x="${(x + barW / 2).toFixed(1)}" y="${(padT + plotH + 16).toFixed(1)}" text-anchor="middle" font-size="10.5" fill="currentColor">${label}</text>
      `;
    })
    .join("");

  const title = chart.title
    ? `<text x="${(W / 2).toFixed(1)}" y="16" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">${escapeHTML(chart.title)}</text>`
    : "";

  return `
    <div class="qchart-wrap">
      <svg class="qchart-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        ${title}
        <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="currentColor" stroke-opacity="0.35"></line>
        ${bars}
      </svg>
    </div>
  `;
}

function renderLineChart(chart) {

  const labels = Array.isArray(chart.labels) ? chart.labels : [];
  const values = Array.isArray(chart.values) ? chart.values.map(Number) : [];
  if (labels.length === 0 || values.length === 0) return "";

  const W = 480, H = 240;
  const padL = 44, padR = 20, padT = 30, padB = 46;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const range = (maxVal - minVal) || 1;
  const step = values.length > 1 ? plotW / (values.length - 1) : 0;

  const points = values.map((v, i) => {
    const x = padL + i * step;
    const y = padT + plotH - ((v - minVal) / range) * plotH;
    return { x, y, v, label: labels[i] };
  });

  const polyline = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

  const dots = points
    .map(p => `
      <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="var(--gas)"></circle>
      <text x="${p.x.toFixed(1)}" y="${(p.y - 10).toFixed(1)}" text-anchor="middle" font-size="10.5" fill="currentColor">${escapeHTML(String(p.v))}</text>
      <text x="${p.x.toFixed(1)}" y="${(padT + plotH + 16).toFixed(1)}" text-anchor="middle" font-size="10.5" fill="currentColor">${escapeHTML(String(p.label ?? ""))}</text>
    `)
    .join("");

  const title = chart.title
    ? `<text x="${(W / 2).toFixed(1)}" y="16" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">${escapeHTML(chart.title)}</text>`
    : "";

  return `
    <div class="qchart-wrap">
      <svg class="qchart-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        ${title}
        <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="currentColor" stroke-opacity="0.35"></line>
        <polyline points="${polyline}" fill="none" stroke="var(--gas)" stroke-width="2.5"></polyline>
        ${dots}
      </svg>
    </div>
  `;
}

function renderPhScale(chart) {

  const W = 480;
  const padL = 30, padR = 30;
  const plotW = W - padL - padR;
  const barY = 44, barH = 22;

  const points = Array.isArray(chart.points) && chart.points.length > 0
    ? chart.points
    : (typeof chart.value === "number" ? [{ value: chart.value, label: chart.label }] : []);

  if (points.length === 0) return "";

  const tiers = points.length > 1 ? 2 : 1;
  const H = 60 + tiers * 26 + barH + 20;

  const stops = `
    <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e53935"></stop>
      <stop offset="50%" stop-color="#8bc34a"></stop>
      <stop offset="100%" stop-color="#8e24aa"></stop>
    </linearGradient>
  `;

  const markers = points
    .map((p, i) => {
      const x = padL + (Math.max(0, Math.min(14, p.value)) / 14) * plotW;
      const tier = i % tiers;
      const labelY = barY + barH + 18 + tier * 22;
      const nearRight = x > padL + plotW - 60;
      const nearLeft = x < padL + 60;
      const anchor = nearRight ? "end" : nearLeft ? "start" : "middle";
      const dx = nearRight ? -4 : nearLeft ? 4 : 0;
      return `
        <polygon points="${x.toFixed(1)},${(barY - 4).toFixed(1)} ${(x - 6).toFixed(1)},${(barY - 14).toFixed(1)} ${(x + 6).toFixed(1)},${(barY - 14).toFixed(1)}" fill="currentColor"></polygon>
        <line x1="${x.toFixed(1)}" y1="${(barY + barH).toFixed(1)}" x2="${x.toFixed(1)}" y2="${labelY.toFixed(1)}" stroke="currentColor" stroke-opacity="0.4"></line>
        <text x="${(x + dx).toFixed(1)}" y="${(labelY + 12).toFixed(1)}" text-anchor="${anchor}" font-size="10.5" fill="currentColor">${escapeHTML(String(p.label ?? ("pH " + p.value)))}</text>
      `;
    })
    .join("");

  const title = chart.title
    ? `<text x="${(W / 2).toFixed(1)}" y="16" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">${escapeHTML(chart.title)}</text>`
    : "";

  return `
    <div class="qchart-wrap">
      <svg class="qchart-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>${stops}</defs>
        ${title}
        <rect x="${padL}" y="${barY}" width="${plotW}" height="${barH}" fill="url(#phGrad)" rx="4"></rect>
        <text x="${padL}" y="${(barY - 18).toFixed(1)}" font-size="9.5" fill="currentColor">0</text>
        <text x="${(padL + plotW / 2).toFixed(1)}" y="${(barY - 18).toFixed(1)}" text-anchor="middle" font-size="9.5" fill="currentColor">7</text>
        <text x="${(padL + plotW).toFixed(1)}" y="${(barY - 18).toFixed(1)}" text-anchor="end" font-size="9.5" fill="currentColor">14</text>
        ${markers}
      </svg>
    </div>
  `;
}

function renderOrbitalBoxes(diagram) {

  if (!diagram || !Array.isArray(diagram.subshells)) return "";

  const ARROW = { 0: "", 1: "↑", 2: "↑↓" };

  const groups = diagram.subshells.map(sub => {
    const boxes = (sub.electrons || [])
      .map(e => `<div class="obox">${ARROW[e] || ""}</div>`)
      .join("");
    return `
      <div class="osub">
        <div class="oboxes">${boxes}</div>
        <div class="olabel">${escapeHTML(sub.label)}</div>
      </div>
    `;
  }).join("");

  const caption = diagram.caption
    ? `<div class="odiagram-caption">${escapeHTML(diagram.caption)}</div>`
    : "";

  return `
    <div class="odiagram-wrap">
      ${caption}
      <div class="odiagram">${groups}</div>
    </div>
  `;
}

function renderCircleCompare(data) {

  if (!data || !Array.isArray(data.items) || data.items.length === 0) return "";

  const values = data.items.map(it => Number(it.value));
  const maxVal = Math.max(...values) || 1;
  const MAX_R = 44;

  const items = data.items.map(it => {
    const r = Math.max((Number(it.value) / maxVal) * MAX_R, 6);
    const label = escapeHTML(it.label);
    const valueLabel = escapeHTML(`${it.value}${data.unit ? " " + data.unit : ""}`);
    return `
      <div class="ccircle-item">
        <svg viewBox="0 0 96 96" width="96" height="96">
          <circle cx="48" cy="48" r="${r.toFixed(1)}" fill="var(--gas)" opacity="0.75"></circle>
        </svg>
        <div class="ccircle-label">${label}</div>
        <div class="ccircle-value">${valueLabel}</div>
      </div>
    `;
  }).join("");

  const title = data.title
    ? `<div class="ccompare-title">${escapeHTML(data.title)}</div>`
    : "";

  return `
    <div class="ccompare-wrap">
      ${title}
      <div class="ccompare-row">${items}</div>
    </div>
  `;
}

function renderPeriodicHighlight(data) {

  if (!data || !Array.isArray(data.cells) || data.cells.length === 0) return "";

  const periods = [...new Set(data.cells.map(c => c.period))].sort((a, b) => a - b);
  const groups = [...new Set(data.cells.map(c => c.group))].sort((a, b) => a - b);

  const cellMap = new Map(
    data.cells.map(c => [`${c.period}-${c.group}`, c])
  );

  const rows = periods.map(p => {
    const cols = groups.map(g => {
      const cell = cellMap.get(`${p}-${g}`);
      if (!cell) return `<div class="pgrid-cell pgrid-empty"></div>`;
      const cls = cell.highlighted ? "pgrid-cell pgrid-hl" : "pgrid-cell";
      return `<div class="${cls}">${escapeHTML(cell.symbol)}</div>`;
    }).join("");
    return `<div class="pgrid-row">${cols}</div>`;
  }).join("");

  const caption = data.caption
    ? `<div class="pgrid-caption">${escapeHTML(data.caption)}</div>`
    : "";

  return `
    <div class="pgrid-wrap">
      ${caption}
      <div class="pgrid" style="grid-template-columns:repeat(${groups.length},36px)">${rows}</div>
    </div>
  `;
}

/* =========================================================
   GHS TEHLİKE PİKTOGRAMLARI (özgün, sadeleştirilmiş çizimler)
   ========================================================= */

const GHS_ICONS = {
  flame: `
    <path d="M50,24 C41,35 37,47 40,57 C42,64 47,67 50,67 C53,67 58,64 60,57 C63,47 59,35 50,24 Z" fill="#000"></path>
    <path d="M50,40 C46,46 44,52 46,57 C47,60 49,61 50,61 C51,61 53,60 54,57 C56,52 54,46 50,40 Z" fill="#fff"></path>
  `,
  oxidizing: `
    <circle cx="50" cy="60" r="9" fill="#000"></circle>
    <path d="M50,26 C43,35 40,45 43,53 C45,58 48,60 50,60 C52,60 55,58 57,53 C60,45 57,35 50,26 Z" fill="#000"></path>
  `,
  explosive: `
    <circle cx="50" cy="58" r="10" fill="#000"></circle>
    <path d="M50,48 C52,44 51,40 47,38" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round"></path>
    <g stroke="#000" stroke-linecap="butt" stroke-linejoin="miter" fill="none">
      <path d="M58,50 L67,39" stroke-width="3"></path>
      <path d="M64,56 L77,52 L73,59" stroke-width="2.4"></path>
      <path d="M62,64 L73,71" stroke-width="3.2"></path>
      <path d="M54,70 L58,81" stroke-width="2.6"></path>
      <path d="M46,71 L42,82 L48,79" stroke-width="2.4"></path>
      <path d="M40,65 L28,69" stroke-width="3"></path>
      <path d="M39,56 L24,53 L30,58" stroke-width="2.4"></path>
      <path d="M43,49 L35,38" stroke-width="2.8"></path>
    </g>
  `,
  gas: `
    <rect x="42" y="34" width="16" height="34" rx="4" fill="none" stroke="#000" stroke-width="3.2"></rect>
    <rect x="46" y="26" width="8" height="8" fill="#000"></rect>
    <line x1="46" y1="34" x2="46" y2="68" stroke="#fff" stroke-width="0"></line>
  `,
  corrosive: `
    <g stroke="#000" stroke-width="2.6" fill="none">
      <path d="M34,28 L28,42 L40,42 Z"></path>
      <path d="M56,28 L50,44 L64,44 Z"></path>
    </g>
    <line x1="30" y1="52" x2="70" y2="52" stroke="#000" stroke-width="3"></line>
    <path d="M26,52 C24,58 22,62 18,66" fill="none" stroke="#000" stroke-width="2.6" stroke-linecap="round"></path>
    <path d="M40,52 C39,58 38,62 36,67" fill="none" stroke="#000" stroke-width="2.6" stroke-linecap="round"></path>
    <path d="M58,52 C58,58 59,63 61,68" fill="none" stroke="#000" stroke-width="2.6" stroke-linecap="round"></path>
  `,
  toxic: `
    <circle cx="50" cy="42" r="14" fill="none" stroke="#000" stroke-width="3.2"></circle>
    <circle cx="44" cy="40" r="2.6" fill="#000"></circle>
    <circle cx="56" cy="40" r="2.6" fill="#000"></circle>
    <path d="M46,48 C48,50 52,50 54,48" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"></path>
    <g stroke="#000" stroke-width="2.4" stroke-linecap="round">
      <line x1="34" y1="60" x2="66" y2="68"></line>
      <line x1="34" y1="68" x2="66" y2="60"></line>
    </g>
    <circle cx="34" cy="60" r="2" fill="#000"></circle>
    <circle cx="66" cy="68" r="2" fill="#000"></circle>
    <circle cx="34" cy="68" r="2" fill="#000"></circle>
    <circle cx="66" cy="60" r="2" fill="#000"></circle>
  `,
  irritant: `
    <rect x="46.5" y="26" width="7" height="26" rx="3" fill="#000"></rect>
    <circle cx="50" cy="60" r="4.4" fill="#000"></circle>
  `,
  "health-hazard": `
    <circle cx="50" cy="34" r="8" fill="#000"></circle>
    <path d="M36,68 C36,54 42,46 50,46 C58,46 64,54 64,68 Z" fill="#000"></path>
    <path d="M50,50 L54,58 L48,59 L53,67 L44,56 L50,55 Z" fill="#fff"></path>
  `,
  environment: `
    <line x1="24" y1="64" x2="76" y2="64" stroke="#000" stroke-width="2.6"></line>
    <path d="M38,64 L38,40" stroke="#000" stroke-width="3" stroke-linecap="round" fill="none"></path>
    <path d="M38,46 L30,38 M38,50 L47,42 M38,56 L29,50" stroke="#000" stroke-width="2.2" stroke-linecap="round" fill="none"></path>
    <path d="M58,58 C64,54 70,54 74,58 C70,62 64,62 58,58 Z" fill="#000"></path>
    <path d="M58,58 L52,54 L52,62 Z" fill="#000"></path>
  `
};

const GHS_LABELS = {
  flame: "Alevlenir",
  oxidizing: "Oksitleyici",
  explosive: "Patlayıcı",
  gas: "Basınçlı gaz",
  corrosive: "Aşındırıcı",
  toxic: "Toksik",
  irritant: "Zararlı / Tahriş edici",
  "health-hazard": "Sağlığa zararlı",
  environment: "Çevreye zararlı"
};

function renderGHSPictogram(code, tagLetter) {

  const icon = GHS_ICONS[code];
  if (!icon) return "";

  const label = tagLetter
    ? `<div class="ghs-label ghs-tag">${escapeHTML(tagLetter)}</div>`
    : `<div class="ghs-label">${escapeHTML(GHS_LABELS[code] || code)}</div>`;

  return `
    <div class="ghs-item">
      <svg viewBox="0 0 100 100" width="64" height="64">
        <rect x="18" y="18" width="64" height="64" rx="7" fill="#fff" stroke="#dc2626" stroke-width="6" transform="rotate(45 50 50)"></rect>
        ${icon}
      </svg>
      ${label}
    </div>
  `;
}

function renderGHSPictograms(data) {

  const codes = Array.isArray(data) ? data : (data && Array.isArray(data.codes) ? data.codes : null);
  if (!codes || codes.length === 0) return "";

  const title = (!Array.isArray(data) && data && data.title)
    ? `<div class="ghs-title">${escapeHTML(data.title)}</div>`
    : "";

  const hideLabels = !Array.isArray(data) && data && data.hideLabels;
  const items = codes.map((c, i) => renderGHSPictogram(c, hideLabels ? String.fromCharCode(97 + i) : null)).join("");

  return `
    <div class="ghs-wrap">
      ${title}
      <div class="ghs-row">${items}</div>
    </div>
  `;
}

/* =========================================================
   GÜNLÜK NESNE / LABORATUVAR MALZEMESİ İKONLARI (özgün çizimler)
   ========================================================= */

const OBJECT_ICONS = {
  detergent: `
    <rect x="30" y="30" width="20" height="8" rx="2" fill="#7c3aed"></rect>
    <path d="M28,38 h24 v34 a4,4 0 0 1 -4,4 h-16 a4,4 0 0 1 -4,-4 Z" fill="#a78bfa"></path>
    <rect x="34" y="46" width="12" height="18" rx="2" fill="#fff" opacity="0.7"></rect>
  `,
  battery: `
    <rect x="40" y="22" width="10" height="6" fill="#334155"></rect>
    <rect x="28" y="28" width="34" height="46" rx="3" fill="#22c55e"></rect>
    <rect x="28" y="46" width="34" height="14" fill="#166534"></rect>
    <text x="45" y="42" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">+</text>
    <text x="45" y="70" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">−</text>
  `,
  toothpaste: `
    <path d="M32,26 h20 l4,10 h-28 Z" fill="#0ea5e9"></path>
    <path d="M28,36 h28 v30 a6,6 0 0 1 -6,6 h-16 a6,6 0 0 1 -6,-6 Z" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="2"></path>
    <rect x="28" y="48" width="28" height="7" fill="#0ea5e9"></rect>
  `,
  soda: `
    <path d="M34,26 h16 l3,42 a4,4 0 0 1 -4,4 h-14 a4,4 0 0 1 -4,-4 Z" fill="#fde68a" stroke="#b45309" stroke-width="2"></path>
    <line x1="33.4" y1="42" x2="50.6" y2="42" stroke="#b45309" stroke-width="1.6"></line>
    <circle cx="40" cy="36" r="1.6" fill="#fff"></circle>
    <circle cx="45" cy="50" r="1.6" fill="#fff"></circle>
    <circle cx="41" cy="58" r="1.6" fill="#fff"></circle>
    <line x1="46" y1="18" x2="42" y2="28" stroke="#334155" stroke-width="2.4" stroke-linecap="round"></line>
  `,
  vinegar: `
    <path d="M44,22 h6 v8 h-6 Z" fill="#84cc16"></path>
    <path d="M36,30 h22 l4,8 v28 a4,4 0 0 1 -4,4 h-22 a4,4 0 0 1 -4,-4 v-28 Z" fill="#d9f99d" stroke="#4d7c0f" stroke-width="2"></path>
    <rect x="37" y="46" width="20" height="12" fill="#fff" opacity="0.8"></rect>
  `,
  beaker: `
    <path d="M38,24 h18 v14 l10,26 a4,4 0 0 1 -4,5.4 h-30 a4,4 0 0 1 -4,-5.4 l10,-26 Z" fill="none" stroke="#0f172a" stroke-width="2.6"></path>
    <path d="M34,54 h26" stroke="#0f172a" stroke-width="2"></path>
    <path d="M35,46 h24 l4.4,10 h-32.8 Z" fill="#7dd3fc" opacity="0.7"></path>
  `,
  flask: `
    <path d="M45,24 h6 v16 l14,26 a4,4 0 0 1 -3.6,5.8 h-27 a4,4 0 0 1 -3.6,-5.8 l14,-26 Z" fill="none" stroke="#0f172a" stroke-width="2.6"></path>
    <path d="M38,58 C41,53 47,53 50,56 C53,59 58,58 60,55 l2.4,4.4 a4,4 0 0 1 -3.6,5.8 h-27 a4,4 0 0 1 -3.6,-5.8 Z" fill="#86efac" opacity="0.8"></path>
    <line x1="43" y1="24" x2="43" y2="20" stroke="#0f172a" stroke-width="2.6"></line>
    <line x1="53" y1="24" x2="53" y2="20" stroke="#0f172a" stroke-width="2.6"></line>
  `,
  glove: `
    <path d="M32,60 v-22 a4,4 0 0 1 8,0 v-8 a4,4 0 0 1 8,0 v-8 a4,4 0 0 1 8,0 v8 a4,4 0 0 1 8,0 v6 a4,4 0 0 1 6,3.6 v14 a14,14 0 0 1 -14,14 h-10 a14,14 0 0 1 -14,-13.6 Z" fill="#fbbf24" stroke="#92400e" stroke-width="1.6"></path>
  `,
  extinguisher: `
    <rect x="40" y="20" width="10" height="8" rx="1.4" fill="#0f172a"></rect>
    <path d="M36,28 h18 l3,6 h-24 Z" fill="#0f172a"></path>
    <path d="M38,34 h14 v34 a7,7 0 0 1 -7,7 a7,7 0 0 1 -7,-7 Z" fill="#dc2626"></path>
    <path d="M52,38 l14,-6" stroke="#0f172a" stroke-width="2.4" stroke-linecap="round"></path>
    <circle cx="66" cy="32" r="2" fill="#0f172a"></circle>
  `,
  pill: `
    <rect x="26" y="42" width="48" height="18" rx="9" fill="#f87171" transform="rotate(-25 50 51)"></rect>
    <rect x="26" y="42" width="24" height="18" rx="9" fill="#fecaca" transform="rotate(-25 50 51)"></rect>
  `,
  foil: `
    <ellipse cx="50" cy="30" rx="16" ry="6" fill="#cbd5e1" stroke="#64748b" stroke-width="1.6"></ellipse>
    <path d="M34,30 v18 a16,6 0 0 0 32,0 v-18" fill="none" stroke="#64748b" stroke-width="1.6"></path>
    <path d="M34,48 l32,14" stroke="#94a3b8" stroke-width="2.4"></path>
  `
};

const OBJECT_LABELS = {
  detergent: "Deterjan şişesi",
  battery: "Pil",
  toothpaste: "Diş macunu",
  soda: "Gazlı içecek",
  vinegar: "Sirke şişesi",
  beaker: "Beher",
  flask: "Erlenmeyer",
  glove: "Koruyucu eldiven",
  extinguisher: "Yangın söndürücü",
  pill: "İlaç tableti",
  foil: "Alüminyum folyo"
};

function renderObjectIcon(type, customLabel) {

  const icon = OBJECT_ICONS[type];
  if (!icon) return "";

  const label = escapeHTML(customLabel || OBJECT_LABELS[type] || type);

  return `
    <div class="oicon-item">
      <svg viewBox="0 0 100 90" width="72" height="65">${icon}</svg>
      <div class="oicon-label">${label}</div>
    </div>
  `;
}

function renderObjectIcons(data) {

  const items = Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : null);
  if (!items || items.length === 0) return "";

  const title = (!Array.isArray(data) && data && data.title)
    ? `<div class="oicon-title">${escapeHTML(data.title)}</div>`
    : "";

  const rendered = items.map(it => {
    if (typeof it === "string") return renderObjectIcon(it);
    return renderObjectIcon(it.type, it.label);
  }).join("");

  return `
    <div class="oicon-wrap">
      ${title}
      <div class="oicon-row">${rendered}</div>
    </div>
  `;
}

/* =========================================================
   ÇOKLU İFADE LİSTESİ (I, II, III...) — kombinasyon sorularının
   ("Yalnız I", "I ve II", "I, II ve III" gibi) bağlam kutusu.
   ========================================================= */
const ROMAN = ["I","II","III","IV","V","VI","VII"];

function renderStatementList(statements) {

  if (!Array.isArray(statements) || statements.length === 0) return "";

  const items = statements.map((s, i) => `
    <div class="qstate-item">
      <span class="qstate-num">${ROMAN[i] || (i + 1)}.</span>
      <span>${escapeHTML(s)}</span>
    </div>
  `).join("");

  return `<div class="qstate-wrap">${items}</div>`;
}

/* =========================================================
   ÖĞRENCİ GÖRÜŞLERİ — farklı akıl yürütmeleri karşılaştırarak
   kavram yanılgısı ayıklama amaçlı konuşma balonu bağlamı.
   ========================================================= */
function renderDialogue(dialogue) {

  if (!Array.isArray(dialogue) || dialogue.length === 0) return "";

  const bubbles = dialogue.map((d, i) => `
    <div class="qdlg-bubble ${i % 2 === 0 ? "qdlg-a" : "qdlg-b"}">
      <span class="qdlg-who">${escapeHTML(d.who || `Öğrenci ${i + 1}`)}</span>
      <p>${escapeHTML(d.text || "")}</p>
    </div>
  `).join("");

  return `<div class="qdlg-wrap">${bubbles}</div>`;
}

/* =========================================================
   EŞLEŞTİRME — iki sütunlu (numaralı / harfli) eşleştirme
   bağlamı. Gerçek "doğru eşleşme" sonraki MC soruda sorulur.
   ========================================================= */
function renderMatchTable(match) {

  if (!match || !Array.isArray(match.left) || !Array.isArray(match.right)) return "";

  const leftItems = match.left.map((t, i) => `
    <div class="qmatch-item"><span class="qmatch-tag">${i + 1}</span><span>${escapeHTML(t)}</span></div>
  `).join("");

  const rightItems = match.right.map((t, i) => `
    <div class="qmatch-item"><span class="qmatch-tag qmatch-tag-alt">${String.fromCharCode(97 + i)}</span><span>${escapeHTML(t)}</span></div>
  `).join("");

  return `
    <div class="qmatch-wrap">
      <div class="qmatch-col">${leftItems}</div>
      <div class="qmatch-col">${rightItems}</div>
    </div>
  `;
}

/* =========================================================
   DOĞRU/YANLIŞ KONTROL LİSTESİ — işaretlenecek ifade grubu
   (görsel bağlam; puanlanan soru ayrıca sorulur).
   ========================================================= */
function renderChecklist(items) {

  if (!Array.isArray(items) || items.length === 0) return "";

  const rows = items.map(t => `
    <div class="qchk-item"><span class="qchk-box"></span><span>${escapeHTML(t)}</span></div>
  `).join("");

  return `<div class="qchk-wrap">${rows}</div>`;
}

function renderChart(chart) {

  if (!chart || !chart.type) return "";

  if (chart.type === "bar") return renderBarChart(chart);
  if (chart.type === "line") return renderLineChart(chart);
  if (chart.type === "ph") return renderPhScale(chart);

  return "";
}


/* =========================================================
   KARIŞTIRMA
   ========================================================= */

function shuffle(array) {

  const arr = [...array];

  for (
    let i = arr.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      arr[i],
      arr[j]
    ] = [
      arr[j],
      arr[i]
    ];

  }

  return arr;
}


/* =========================================================
   METİN NORMALİZASYONU
   ========================================================= */

function normalizeText(text) {

  return String(text || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/[.,!?;:()"'\[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

}


function getWords(text) {

  return new Set(
    normalizeText(text)
      .split(" ")
      .filter(word => word.length >= 4)
  );

}


/* =========================================================
   İLERLEME
   ========================================================= */

export function readProgress() {

  return safeParse(
    STORAGE_KEY,
    {}
  );

}


export function writeProgress(progress) {

  safeSave(
    STORAGE_KEY,
    progress
  );

}


export function markModuleScore(
  moduleKey,
  score,
  total
) {

  const progress =
    readProgress();

  progress[moduleKey] =
    progress[moduleKey] || {};

  progress[moduleKey].score =
    score;

  progress[moduleKey].total =
    total;

  progress[moduleKey].percentage =
    total > 0
      ? Math.round(
          (score / total) * 100
        )
      : 0;

  progress[moduleKey].at =
    Date.now();

  writeProgress(progress);

}


export function markVisited(
  moduleKey
) {

  const progress =
    readProgress();

  progress[moduleKey] =
    progress[moduleKey] || {};

  progress[moduleKey].visited =
    true;

  progress[moduleKey].lastVisited =
    Date.now();

  writeProgress(progress);

}


/* =========================================================
   YANLIŞ SORULAR
   ========================================================= */

function readErrors() {

  return safeParse(
    ERROR_KEY,
    {}
  );

}


function saveWrongQuestion(
  moduleKey,
  question,
  questionIndex
) {

  const errors =
    readErrors();

  if (!errors[moduleKey]) {
    errors[moduleKey] = {};
  }

  const key =
    `${moduleKey}_${questionIndex}`;

  if (!errors[moduleKey][key]) {

    errors[moduleKey][key] = {

      questionIndex,

      context:
        question.context || "",

      kazanim:
        question.kazanim || "",

      text:
        question.text || "",

      options:
        question.options || [],

      correct:
        question.correct,

      explain:
        question.explain || "",

      wrongCount:
        1,

      lastWrong:
        Date.now()

    };

  } else {

    errors[moduleKey][key].wrongCount =
      (
        errors[moduleKey][key].wrongCount || 0
      ) + 1;

    errors[moduleKey][key].lastWrong =
      Date.now();

  }

  safeSave(
    ERROR_KEY,
    errors
  );

}


/* =========================================================
   ÖĞRENME VERİSİ
   ========================================================= */

function readLearning() {

  return safeParse(
    LEARNING_KEY,
    {}
  );

}


function saveLearning(
  learning
) {

  safeSave(
    LEARNING_KEY,
    learning
  );

}


function readHistory() {

  return safeParse(
    HISTORY_KEY,
    []
  );

}


function saveHistory(
  history
) {

  safeSave(
    HISTORY_KEY,
    history
  );

}


/* =========================================================
   KAZANIM KAYDI
   ========================================================= */

function registerAnswer(
  question,
  isCorrect,
  moduleKey
) {

  const kazanim =
    question.kazanim ||
    "Kazanım belirtilmemiş";

  const learning =
    readLearning();

  if (!learning[kazanim]) {

    learning[kazanim] = {

      kazanim,

      attempts: 0,

      correct: 0,

      wrong: 0,

      firstAttempt:
        Date.now(),

      lastAttempt:
        Date.now(),

      streak: 0,

      bestStreak: 0,

      modules: {},

      questions: {}

    };

  }

  const data =
    learning[kazanim];

  data.attempts++;

  data.lastAttempt =
    Date.now();

  if (isCorrect) {

    data.correct++;

    data.streak++;

    data.bestStreak =
      Math.max(
        data.bestStreak,
        data.streak
      );

  } else {

    data.wrong++;

    data.streak = 0;

  }

  if (!data.modules[moduleKey]) {

    data.modules[moduleKey] = {

      attempts: 0,

      correct: 0,

      wrong: 0

    };

  }

  data.modules[moduleKey].attempts++;

  if (isCorrect) {

    data.modules[moduleKey].correct++;

  } else {

    data.modules[moduleKey].wrong++;

  }


  const questionKey =
    question.id ||
    `${moduleKey}_${question.text}`;

  if (!data.questions[questionKey]) {

    data.questions[questionKey] = {

      attempts: 0,

      correct: 0,

      wrong: 0,

      lastAttempt: null

    };

  }

  data.questions[questionKey].attempts++;

  data.questions[questionKey].lastAttempt =
    Date.now();

  if (isCorrect) {

    data.questions[questionKey].correct++;

  } else {

    data.questions[questionKey].wrong++;

  }


  saveLearning(
    learning
  );


  /* -------------------------------------------------------
     GEÇMİŞE DE KAYDET
     ------------------------------------------------------- */

  const history =
    readHistory();

  history.push({

    time:
      Date.now(),

    moduleKey,

    kazanim,

    correct:
      isCorrect,

    question:
      question.text || "",

    context:
      question.context || ""

  });


  /* Son 500 işlemden fazlasını tutma */

  if (history.length > 500) {

    history.splice(
      0,
      history.length - 500
    );

  }

  saveHistory(
    history
  );

}


/* =========================================================
   OTURUM İÇİ ÖĞRENME VERİSİ
   ---------------------------------------------------------
   Bu veri yalnızca öğrencinin bu quiz oturumunda gerçekten
   cevapladığı soruları içerir. Soru havuzundaki çözülmemiş
   sorular ve önceki oturumlar anlık rapora dahil edilmez.
   ========================================================= */

function registerSessionAnswer(
  sessionLearning,
  question,
  isCorrect
) {

  const kazanim =
    question.kazanim ||
    "Kazanım belirtilmemiş";

  if (!sessionLearning[kazanim]) {

    sessionLearning[kazanim] = {
      kazanim,
      attempts: 0,
      correct: 0,
      wrong: 0
    };

  }

  const data =
    sessionLearning[kazanim];

  data.attempts++;

  if (isCorrect) {
    data.correct++;
  } else {
    data.wrong++;
  }

}


/* =========================================================
   KAZANIM BAŞARI DURUMU
   ========================================================= */

function getMastery(
  kazanim
) {

  const learning =
    readLearning();

  const data =
    learning[kazanim];

  if (!data || !data.attempts) {

    return {

      percentage: 0,

      status: "Henüz ölçülmedi",

      level: 0

    };

  }

  const percentage =
    Math.round(
      (
        data.correct /
        data.attempts
      ) * 100
    );


  /*
   * Yeterlik düzeyleri
   */

  let status;
  let level;

  if (
    data.attempts < 2
  ) {

    status =
      "İlk ölçüm";

    level = 1;

  } else if (
    percentage >= 80
  ) {

    status =
      "Ulaştı";

    level = 3;

  } else if (
    percentage >= 60
  ) {

    status =
      "Gelişiyor";

    level = 2;

  } else {

    status =
      "Desteğe ihtiyaç var";

    level = 1;

  }

  return {

    percentage,

    status,

    level

  };

}


/* =========================================================
   BENZERLİK HESAPLAMA
   ========================================================= */

function similarityScore(
  source,
  candidate
) {

  let score = 0;


  /* -------------------------------------------------------
     AYNI KAZANIM
     EN ÖNEMLİ KRİTER
     ------------------------------------------------------- */

  if (
    source.kazanim &&
    candidate.kazanim &&
    source.kazanim ===
      candidate.kazanim
  ) {

    score += 100;

  } else {

    /*
     * Başka kazanımdan soru
     * mümkün olduğunca seçilmesin.
     */

    return -1000;

  }


  /* -------------------------------------------------------
     AYNI BAĞLAM
     ------------------------------------------------------- */

  if (
    source.context &&
    candidate.context &&
    source.context ===
      candidate.context
  ) {

    score += 40;

  }


  /* -------------------------------------------------------
     * METİN BENZERLİĞİ
     * ------------------------------------------------------- */

  const sourceWords =
    getWords(
      (
        source.context || ""
      ) +
      " " +
      (
        source.text || ""
      )
    );

  const candidateWords =
    getWords(
      (
        candidate.context || ""
      ) +
      " " +
      (
        candidate.text || ""
      )
    );


  candidateWords.forEach(
    word => {

      if (
        sourceWords.has(word)
      ) {

        score += 3;

      }

    }
  );


  return score;

}


/* =========================================================
   BENZER SORU BUL
   ---------------------------------------------------------
   Önce:
   1. Aynı kazanım
   2. Aynı bağlam
   3. Metinsel benzerlik
   4. Daha önce kullanılmamış soru
   ========================================================= */

function findSimilarQuestion(
  wrongQuestion,
  allQuestions,
  usedQuestions
) {

  if (
    !wrongQuestion ||
    !Array.isArray(allQuestions)
  ) {

    return null;

  }


  let candidates =
    allQuestions.filter(
      question => {

        if (
          question ===
          wrongQuestion
        ) {

          return false;

        }

        const index =
          allQuestions.indexOf(
            question
          );

        if (
          usedQuestions.has(index)
        ) {

          return false;

        }

        return (
          question.kazanim ===
          wrongQuestion.kazanim
        );

      }
    );


  /*
   * Öncelikle kullanılmamış sorular
   */

  if (
    candidates.length > 0
  ) {

    const scored =
      candidates.map(
        question => ({

          question,

          score:
            similarityScore(
              wrongQuestion,
              question
            )

        })
      );


    scored.sort(
      (a, b) =>
        b.score - a.score
    );


    const bestScore =
      scored[0].score;


    const best =
      scored.filter(
        item =>
          item.score ===
          bestScore
      );


    return best[
      Math.floor(
        Math.random() *
        best.length
      )
    ].question;

  }


  /*
   * Eğer aynı kazanımda
   * kullanılmamış soru kalmadıysa,
   * yine aynı kazanımdan daha önce
   * kullanılan sorular arasından seç.
   */

  const fallback =
    allQuestions
      .filter(
        question =>
          question !==
            wrongQuestion &&
          question.kazanim ===
            wrongQuestion.kazanim
      )
      .map(
        question => ({

          question,

          score:
            similarityScore(
              wrongQuestion,
              question
            )

        })
      )
      .sort(
        (a, b) =>
          b.score - a.score
      );


  if (
    fallback.length === 0
  ) {

    return null;

  }


  return fallback[0].question;

}


/* =========================================================
   BAŞLANGIÇ SORULARINI KAZANIMLARA DAĞIT
   ========================================================= */

function selectInitialQuestions(
  questions,
  count
) {

  if (
    !Array.isArray(questions) ||
    questions.length === 0
  ) {

    return [];

  }


  /*
   * Kazanımlara göre gruplandır
   */

  const groups = {};

  questions.forEach(
    question => {

      const key =
        question.kazanim ||
        "Bilinmeyen";

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(
        question
      );

    }
  );


  const kazanims =
    shuffle(
      Object.keys(groups)
    );


  const selected = [];

  let round = 0;


  /*
   * Kazanımları mümkün olduğunca
   * dengeli dağıt.
   */

  while (
    selected.length < count &&
    kazanims.length > 0
  ) {

    let addedThisRound =
      false;

    for (
      const kazanim
      of kazanims
    ) {

      if (
        selected.length >= count
      ) {

        break;

      }

      const pool =
        groups[kazanim];

      if (
        pool.length >
        round
      ) {

        selected.push(
          pool[round]
        );

        addedThisRound =
          true;

      }

    }

    if (!addedThisRound) {
      break;
    }

    round++;

  }


  /*
   * Soru sayısı yetmezse
   * kalan havuzdan doldur.
   */

  if (
    selected.length < count
  ) {

    const remaining =
      shuffle(
        questions.filter(
          question =>
            !selected.includes(
              question
            )
        )
      );

    selected.push(
      ...remaining.slice(
        0,
        count -
        selected.length
      )
    );

  }


  return selected;

}


/* =========================================================
   KAZANIM RAPORU OLUŞTUR
   ========================================================= */

function createLearningReport(
  sessionLearning = {}
) {

  return Object.values(
    sessionLearning
  )
    .filter(
      item =>
        item &&
        item.attempts > 0
    )
    .map(
      item => {

        const percentage =
          Math.round(
            (
              item.correct /
              item.attempts
            ) * 100
          );

        let status;

        if (percentage >= 80) {
          status = "Ulaştı";
        } else if (percentage >= 60) {
          status = "Gelişiyor";
        } else {
          status = "Desteğe ihtiyaç var";
        }

        return {
          kazanim: item.kazanim,
          attempts: item.attempts,
          correct: item.correct,
          wrong: item.wrong,
          percentage,
          status
        };

      }
    );

}


/* =========================================================
   ÖĞRENME RAPORU HTML
   ========================================================= */

function renderLearningReport(
  container,
  sessionLearning
) {

  if (!container) {
    return;
  }

  const report =
    createLearningReport(
      sessionLearning
    );

  if (report.length === 0) {
    container.innerHTML = "";
    return;
  }

  const statusClass =
    status => {

      if (status === "Ulaştı") {
        return "mastery-good";
      }

      if (status === "Gelişiyor") {
        return "mastery-mid";
      }

      return "mastery-low";

    };

  const rows =
    report.map(
      item => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid rgba(120,120,160,.18);font-weight:700;vertical-align:top;">
            ${escapeHTML(item.kazanim)}
          </td>
          <td style="padding:10px 12px;border-bottom:1px solid rgba(120,120,160,.18);text-align:center;white-space:nowrap;">
            ${item.correct}/${item.attempts}
          </td>
          <td style="padding:10px 12px;border-bottom:1px solid rgba(120,120,160,.18);text-align:center;white-space:nowrap;">
            ${item.percentage}%
          </td>
          <td style="padding:10px 12px;border-bottom:1px solid rgba(120,120,160,.18);white-space:nowrap;">
            <span class="${statusClass(item.status)}">
              ${escapeHTML(item.status)}
            </span>
          </td>
        </tr>
      `
    ).join("");

  container.innerHTML = `
    <section class="learning-report" style="margin-top:14px;">
      <div class="learning-report-title" style="font-weight:800;margin-bottom:4px;">
        🎯 Kazanım Öğrenme Profili
      </div>

      <div class="learning-report-subtitle" style="margin-bottom:10px;opacity:.78;">
        Yalnızca bu oturumda cevapladığın sorular analiz ediliyor.
      </div>

      <div style="overflow-x:auto;">
        <table class="learning-table" style="width:100%;border-collapse:collapse;min-width:620px;background:rgba(255,255,255,.02);border:1px solid rgba(120,120,160,.18);border-radius:12px;overflow:hidden;">
          <thead>
            <tr>
              <th style="padding:10px 12px;text-align:left;border-bottom:1px solid rgba(120,120,160,.28);">Kazanım</th>
              <th style="padding:10px 12px;text-align:center;border-bottom:1px solid rgba(120,120,160,.28);">Doğru / Deneme</th>
              <th style="padding:10px 12px;text-align:center;border-bottom:1px solid rgba(120,120,160,.28);">Başarı</th>
              <th style="padding:10px 12px;text-align:left;border-bottom:1px solid rgba(120,120,160,.28);">Durum</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </section>
  `;

}


/* =========================================================
   ÖĞRENME YORUMU
   ========================================================= */

function generateLearningComment(
  sessionLearning
) {

  const report =
    createLearningReport(
      sessionLearning
    );

  if (report.length === 0) {
    return "";
  }

  const weak =
    report.filter(
      item =>
        item.status ===
        "Desteğe ihtiyaç var"
    );

  const developing =
    report.filter(
      item =>
        item.status ===
        "Gelişiyor"
    );

  const strong =
    report.filter(
      item =>
        item.status ===
        "Ulaştı"
    );

  if (weak.length > 0) {

    return `
      <strong>Öğrenme analizi:</strong>
      Bu oturumdaki cevaplarına göre
      ${escapeHTML(weak[0].kazanim)}
      kazanımında daha fazla pekiştirmeye ihtiyaç var.
      Yanlış cevap verdiğinde aynı kazanımdan benzer soru sunuluyor.
    `;

  }

  if (developing.length > 0) {

    return `
      <strong>Öğrenme analizi:</strong>
      Bu oturumdaki cevaplarına göre
      ${escapeHTML(developing[0].kazanim)}
      kazanımında gelişim gösteriyorsun; biraz daha pratik yararlı olabilir.
    `;

  }

  if (strong.length === report.length) {

    return `
      <strong>Öğrenme analizi:</strong>
      Bu oturumda ölçülen kazanımlarda başarılı bir performans gösterdin.
    `;

  }

  return `
    <strong>Öğrenme analizi:</strong>
    Bu oturumda cevapladığın sorulara göre öğrenme sürecin izleniyor.
  `;

}


/* =========================================================
   QUIZ
   ========================================================= */

export function renderQuiz(
  hostEl,
  questions,
  moduleKey,
  extraPool
) {

  if (
    !hostEl ||
    !Array.isArray(questions) ||
    questions.length === 0
  ) {

    if (hostEl) {

      hostEl.innerHTML = `

        <div class="quiz-empty">

          Bağlam temelli soru bulunamadı.

        </div>

      `;

    }

    return;

  }


  markVisited(
    moduleKey
  );


  hostEl.innerHTML = "";


  /*
   * "Benzerini Çöz" için aday havuzu: modülün kendi soruları
   * + varsa harici bir pekiştirme havuzu (ör. question-bank.js).
   * extraPool yalnızca burada, yeniden deneme sorusu ararken
   * kullanılır — başlangıç sorularının seçimini etkilemez.
   */

  const remediationPool =
    Array.isArray(extraPool) && extraPool.length > 0
      ? questions.concat(extraPool)
      : questions;


  /* =======================================================
     AYARLAR
     ======================================================= */

  const QUESTION_COUNT =
    Math.min(
      5,
      questions.length
    );


  /*
   * Başlangıç soruları
   */

  let activeQuestions =
    selectInitialQuestions(
      questions,
      QUESTION_COUNT
    );


  /*
   * Kullanılmış sorular
   */

  const usedQuestions =
    new Set();


  activeQuestions.forEach(
    question => {

      const index =
        questions.indexOf(
          question
        );

      if (index >= 0) {

        usedQuestions.add(
          index
        );

      }

    }
  );


  /* =======================================================
     DURUM
     ======================================================= */

  const state = {

    answered: 0,

    correct: 0,

    totalAttempts: 0,

    remediationCount: 0,

    sessionLearning: {},

    completedPositions:
      new Set(),

    questionAttempts:
      {},

    finished:
      false

  };


  /* =======================================================
     ANA QUIZ ALANI
     ======================================================= */

  const wrap =
    document.createElement(
      "div"
    );

  wrap.className =
    "quiz";


  hostEl.appendChild(
    wrap
  );


  /* =======================================================
     ÖZET
     ======================================================= */

  const summary =
    document.createElement(
      "div"
    );

  summary.className =
    "quiz-summary";


  hostEl.appendChild(
    summary
  );


  /* =======================================================
     RAPOR ALANI
     ======================================================= */

  const reportContainer =
    document.createElement(
      "div"
    );

  reportContainer.className =
    "quiz-learning-container";


  hostEl.appendChild(
    reportContainer
  );


  /* =======================================================
     ÖZET GÜNCELLE
     ======================================================= */

  function updateSummary() {

    const percentage =
      state.answered > 0
        ? Math.round(
            (
              state.correct /
              state.answered
            ) * 100
          )
        : 0;


    summary.innerHTML = `

      <div>

        <div
          class="small"
          style="color:#c7bfe6"
        >
          Öğrenme ilerlemesi
        </div>

        <div class="score">

          ${state.answered}/${QUESTION_COUNT}
          temel soru

          ·

          <span>
            ${state.correct}
          </span>

          doğru

          ·

          ${percentage}%

        </div>

      </div>

      <div>

        ${
          state.remediationCount > 0
            ? `
              <div class="small">
                🔄 ${state.remediationCount}
                pekiştirme sorusu çözüldü
              </div>
            `
            : ""
        }

        ${
          state.finished
            ? `
              <div
                class="badge-live"
                style="color:#7CE0A8"
              >
                Öğrenme analizi hazır
              </div>
            `
            : ""
        }

      </div>

    `;


    renderLearningReport(
      reportContainer,
      state.sessionLearning
    );

  }


  /* =======================================================
     QUIZ TAMAMLAMA
     ======================================================= */

  function finishQuiz() {

    if (
      state.finished
    ) {

      return;

    }


    state.finished =
      true;


    markModuleScore(
      moduleKey,
      state.correct,
      QUESTION_COUNT
    );


    const comment =
      generateLearningComment(
        state.sessionLearning
      );


    const result =
      document.createElement(
        "div"
      );

    result.className =
      "learning-result";


    result.innerHTML = `

      <div class="learning-result-title">
        🧠 Öğrenme Süreci Analizi
      </div>

      <div class="learning-result-score">

        ${state.correct}/${QUESTION_COUNT}

        <span>
          temel soruda doğru
        </span>

      </div>

      <div class="learning-result-comment">

        ${comment}

      </div>

    `;


    hostEl.appendChild(
      result
    );


    updateSummary();

  }


  /* =======================================================
     BENZER SORUYU GETİR
     ======================================================= */

  function replaceWithSimilar(
    card,
    wrongQuestion
  ) {

    const similar =
      findSimilarQuestion(
        wrongQuestion,
        remediationPool,
        usedQuestions
      );


    if (!similar) {

      const feedback =
        card.querySelector(
          ".qfeedback"
        );

      if (feedback) {

        feedback.innerHTML += `

          <div class="similar-none">

            Bu kazanım için soru havuzunda
            başka soru bulunamadı.

          </div>

        `;

      }

      return;

    }


    const similarIndex =
      questions.indexOf(
        similar
      );


    if (
      similarIndex >= 0
    ) {

      usedQuestions.add(
        similarIndex
      );

    }


    const position =
      Number(
        card.dataset.position
      );


    activeQuestions[
      position
    ] = similar;


    state.remediationCount++;


    const newCard =
      createQuestionCard(
        similar,
        position,
        true
      );


    card.replaceWith(
      newCard
    );


    updateSummary();

  }


  /* =======================================================
     SORU KARTI
     ======================================================= */

  function createQuestionCard(
    question,
    position,
    isRemediation = false
  ) {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "qcard";


    card.dataset.position =
      position;


    card.dataset.remediation =
      isRemediation
        ? "1"
        : "0";


    card.innerHTML = `

      <div class="qhead">

        <span class="qn">

          SORU
          ${position + 1}/${QUESTION_COUNT}

        </span>

        ${
          isRemediation
            ? `
              <span
                class="badge-live"
                style="margin-left:8px"
              >
                🔄 Pekiştirme
              </span>
            `
            : ""
        }

      </div>


      ${
        question.kazanim
          ? `
            <div
              class="q-kazanim"
              style="
                font-size:.78rem;
                opacity:.72;
                margin-bottom:8px;
              "
            >
              ${escapeHTML(
                question.kazanim
              )}
            </div>
          `
          : ""
      }


      ${
        question.context
          ? `

            <div class="qcontext">

              ${escapeHTML(
                question.context
              )}

            </div>

          `
          : ""
      }

      ${renderDataTable(question.table)}

      ${renderChart(question.chart)}

      ${renderStatementList(question.statements)}

      ${renderDialogue(question.dialogue)}

      ${renderMatchTable(question.matchPairs)}

      ${renderChecklist(question.checklist)}

      ${renderOrbitalBoxes(question.orbitalBoxes)}

      ${renderCircleCompare(question.circleCompare)}

      ${renderPeriodicHighlight(question.periodicHighlight)}

      ${renderGHSPictograms(question.pictograms)}

      ${renderObjectIcons(question.objectIcons)}


      <div class="qtext">

        ${escapeHTML(
          question.text
        )}

      </div>


      <div class="qopts"></div>


      <div class="qfeedback"></div>

    `;


    const optsEl =
      card.querySelector(
        ".qopts"
      );


    const feedbackEl =
      card.querySelector(
        ".qfeedback"
      );


    /* =====================================================
       ŞIKLAR
       ===================================================== */

    question.options.forEach(
      (
        option,
        optionIndex
      ) => {

        const optionEl =
          document.createElement(
            "div"
          );


        optionEl.className =
          "qopt";


        optionEl.innerHTML = `

          <span class="bullet">

            ${String.fromCharCode(
              65 + optionIndex
            )}

          </span>

          <span>

            ${escapeHTML(
              option
            )}

          </span>

        `;


        optionEl.addEventListener(
          "click",
          () => {

            if (
              card.dataset.done
            ) {

              return;

            }


            card.dataset.done =
              "1";


            /* ---------------------------------------------
               ŞIKLARI KİLİTLE
               --------------------------------------------- */

            const allOptions =
              [
                ...optsEl.children
              ];


            allOptions.forEach(
              (
                element,
                index
              ) => {

                element.classList.add(
                  "disabled"
                );


                if (
                  index ===
                  question.correct
                ) {

                  element.classList.add(
                    "correct"
                  );

                }

              }
            );


            const isCorrect =
              optionIndex ===
              question.correct;


            /* ---------------------------------------------
               ÖĞRENME VERİSİNE KAYDET
               --------------------------------------------- */

            registerAnswer(
              question,
              isCorrect,
              moduleKey
            );

            registerSessionAnswer(
              state.sessionLearning,
              question,
              isCorrect
            );

            state.totalAttempts++;


            /* ---------------------------------------------
               DOĞRU
               --------------------------------------------- */

            if (isCorrect) {

              feedbackEl.classList.add(
                "show",
                "ok"
              );

              feedbackEl.innerHTML = `

                <div>
                  ✓ Doğru!
                </div>

                <div
                  class="q-explain"
                >
                  ${escapeHTML(
                    question.explain ||
                    ""
                  )}
                </div>

              `;

              /*
               * Yalnızca temel sorular
               * modül puanına eklenir.
               * Pekiştirme soruları ana 5 soruluk
               * skoru değiştirmez.
               */

              if (
                !isRemediation &&
                !state.completedPositions.has(
                  position
                )
              ) {

                state.correct++;

                state.completedPositions.add(
                  position
                );

                state.answered++;

              }

            }


            /* ---------------------------------------------
               YANLIŞ
               --------------------------------------------- */

            else {

              optionEl.classList.add(
                "wrong"
              );


              saveWrongQuestion(
                moduleKey,
                question,
                questions.indexOf(
                  question
                )
              );


              feedbackEl.classList.add(
                "show",
                "no"
              );


              feedbackEl.innerHTML = `

                <div>

                  ✕ Yanlış.

                </div>


                <div
                  class="q-explain"
                >

                  ${escapeHTML(
                    question.explain ||
                    ""
                  )}

                </div>


                <div
                  style="
                    margin-top:8px;
                    font-size:.9rem;
                    opacity:.85;
                  "
                >

                  Aynı kazanımdan
                  pekiştirme sorusu
                  çözerek tekrar deneyebilirsin.

                </div>


                <button
                  type="button"
                  class="btn similar-btn"
                  style="margin-top:10px"
                >

                  🔄 Benzerini Çöz

                </button>

              `;


              const similarButton =
                feedbackEl.querySelector(
                  ".similar-btn"
                );


              if (
                similarButton
              ) {

                similarButton.addEventListener(
                  "click",
                  () => {

                    replaceWithSimilar(
                      card,
                      question
                    );

                  }
                );

              }


              /*
               * Yanlış temel soru da
               * cevaplanmış kabul edilir.
               */

              if (
                !isRemediation &&
                !state.completedPositions.has(
                  position
                )
              ) {

                state.completedPositions.add(
                  position
                );

                state.answered++;

              }

            }


            updateSummary();


            /*
             * 5 temel soru tamamlandıysa
             * sonuç raporunu göster.
             */

            if (
              state.answered >=
              QUESTION_COUNT
            ) {

              finishQuiz();

            }

          }
        );


        optsEl.appendChild(
          optionEl
        );

      }
    );


    return card;

  }


  /* =======================================================
     İLK SORULARI OLUŞTUR
     ======================================================= */

  activeQuestions.forEach(
    (
      question,
      position
    ) => {

      const card =
        createQuestionCard(
          question,
          position,
          false
        );


      wrap.appendChild(
        card
      );

    }
  );


  updateSummary();

}


/* =========================================================
   KAZANIM RAPORUNU DIŞARIDAN OKUMA
   ---------------------------------------------------------
   İleride analiz ekranında kullanabiliriz.
   ========================================================= */

export function getLearningData() {

  return readLearning();

}


export function getLearningHistory() {

  return readHistory();

}


export function getMasteryReport() {

  const learning =
    readLearning();

  return Object.keys(
    learning
  ).map(
    kazanim => {

      const mastery =
        getMastery(
          kazanim
        );

      return {

        kazanim,

        ...learning[kazanim],

        ...mastery

      };

    }
  );

}


/* =========================================================
   ÖĞRENME VERİSİNİ SIFIRLA
   ---------------------------------------------------------
   Öğretmen/gelistirme amacıyla kullanılabilir.
   ========================================================= */

export function resetLearningData() {

  try {

    localStorage.removeItem(
      LEARNING_KEY
    );

    localStorage.removeItem(
      HISTORY_KEY
    );

    localStorage.removeItem(
      ERROR_KEY
    );

    console.log(
      "[SITE ADI] öğrenme verileri sıfırlandı."
    );

  } catch (error) {

    console.error(
      "Öğrenme verileri sıfırlanamadı:",
      error
    );

  }

}


/* =========================================================
   KEŞİF GÜNLÜĞÜ
   ---------------------------------------------------------
   Mevcut sistem korunmuştur.
   ========================================================= */

export function bindJournal(
  textareaEl,
  key
) {

  if (!textareaEl) {
    return;
  }


  const saveState =
    textareaEl.parentElement
      ?.querySelector(
        ".save-state"
      );


  const fullKey =
    "atomlab9_journal_" +
    key;


  const saved =
    localStorage.getItem(
      fullKey
    );


  if (saved !== null) {

    textareaEl.value =
      saved;

  }


  let timer;


  textareaEl.addEventListener(
    "input",
    () => {

      clearTimeout(
        timer
      );


      if (saveState) {

        saveState.textContent =
          "Kaydediliyor...";

      }


      timer =
        setTimeout(
          () => {

            try {

              localStorage.setItem(
                fullKey,
                textareaEl.value
              );


              if (saveState) {

                saveState.textContent =
                  "✓ Kaydedildi (bu tarayıcıda saklanır)";

              }

            } catch (error) {

              console.warn(
                "Günlük kaydedilemedi:",
                error
              );

            }

          },
          500
        );

    }
  );

}

export {
  escapeHTML,
  renderDataTable,
  renderChart,
  renderOrbitalBoxes,
  renderCircleCompare,
  renderPeriodicHighlight,
  renderGHSPictograms,
  renderObjectIcons,
  renderStatementList,
  renderDialogue,
  renderMatchTable,
  renderChecklist
};
