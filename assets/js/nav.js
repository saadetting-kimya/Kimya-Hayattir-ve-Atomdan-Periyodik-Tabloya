/* =========================================================
   AtomLab 9 — nav.js
   Paylaşılan üst menüyü enjekte eder ve aktif sayfayı işaretler.
   ========================================================= */
import { readProgress } from "./quiz-engine.js?v=2";

// Sayfa "moduller/" içindeyse "../" ile köke çık, sitede değilse dosya adını doğrudan kullan.
const inModules = location.pathname.includes("/moduller/");
function link(path) {
  if (!inModules) return path;
  return path.startsWith("moduller/") ? path.slice("moduller/".length) : "../" + path;
}

const LINKS = [
  { href: link("index.html"), label: "Ana Sayfa", key: "home", num: "" },
  { href: link("moduller/01-gunluk-hayatta-kimya.html"), label: "Günlük Hayatta Kimya", key: "gunluk", num: "1" },
  { href: link("moduller/02-alt-disiplinler.html"), label: "Alt Disiplinler", key: "disiplin", num: "2" },
  { href: link("moduller/03-kariyer-olanaklari.html"), label: "Kariyer Olanakları", key: "kariyer", num: "3" },
  { href: link("moduller/04-madde-guvenligi.html"), label: "Madde Güvenliği", key: "guvenlik", num: "4" },
  { href: link("moduller/05-atom-teorileri.html"), label: "Atom Teorileri", key: "teori", num: "5" },
  { href: link("moduller/06-orbitaller-elektron-dizilimi.html"), label: "Orbitaller & Dizilim", key: "orbital", num: "6" },
  { href: link("moduller/07-periyodik-tabloda-yer-bulma.html"), label: "Periyodik Tabloda Yer Bulma", key: "yerbulma", num: "7" },
  { href: link("moduller/08-periyodik-ozellikler.html"), label: "Periyodik Özellikler", key: "ozellikler", num: "8" },
   { href: link("yanlislarim.html"), label: "❌ Yanlışlarım", key: "wrong", num: "" },
  { href: link("Kimya%209%20Ders%20Defteri.pdf"), label: "📘 Ders Defteri", key: "defter", num: "" },
];

export function mountNav(activeKey) {
  const host = document.getElementById("nav-root");
  if (!host) return;
  const progress = readProgress();

  host.innerHTML = `
    <nav class="topnav">
      <div class="topnav-inner">
        <a class="brand" href="${link("index.html")}">
          <span class="brand-badge"></span>
          <span>AtomLab 9</span>
        </a>
        <div class="navlinks">
          ${LINKS.map(l => {
            const done = progress[l.key] && (progress[l.key].visited || progress[l.key].score !== undefined);
            return `<a href="${l.href}" class="${l.key === activeKey ? "active" : ""}">
              ${l.num ? `<span class="num">${l.num}</span>` : ""}${l.label}${done && l.key !== "home" && l.key !== "defter" ? " ✓" : ""}
            </a>`;
          }).join("")}
        </div>
      </div>
    </nav>
  `;
}

export function mountNextModule(activeKey) {
  const host = document.getElementById("next-module-root");
  if (!host) return;
  const modules = LINKS.filter(l => l.num !== "");
  const idx = modules.findIndex(l => l.key === activeKey);
  if (idx === -1) return;

  if (idx < modules.length - 1) {
    const next = modules[idx + 1];
    host.innerHTML = `
      <div class="container">
        <a class="next-module-btn" href="${next.href}">
          <span class="nm-label">Sonraki Modül</span>
          <span class="nm-title">${next.num}. ${next.label} →</span>
        </a>
      </div>
    `;
  } else {
    host.innerHTML = `
      <div class="container">
        <a class="next-module-btn" href="${link("index.html")}">
          <span class="nm-label">Tüm Modülleri Tamamladın 🎉</span>
          <span class="nm-title">Ana Sayfaya Dön →</span>
        </a>
      </div>
    `;
  }
}

export function mountFooter() {
  const host = document.getElementById("footer-root");
  if (!host) return;
  host.innerHTML = `
    <footer>
      <div class="container">
        <p style="margin-bottom:6px"><strong style="color:var(--ink)">AtomLab 9</strong> — 9. Sınıf Kimya, "Kimya Hayattır ve Atomdan Periyodik Tabloya" teması için etkileşimli sanal laboratuvar.</p>
        <p class="mt-0">İçerik KİM.9.1.1 – KİM.9.1.8 kazanımlarıyla sınırlıdır: kimyanın günlük hayattaki yeri, alt disiplinleri, kariyer olanakları, kimyasal madde güvenliği, atom teorileri, atom orbitalleri ve elektron dizilimi, periyodik tabloda yer bulma, periyodik özellikler.</p>
      </div>
    </footer>
  `;
}
