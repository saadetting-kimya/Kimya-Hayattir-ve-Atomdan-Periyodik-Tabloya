// Ders Defteri PDF üretici.
//
// Düz `chromium --print-to-pdf` komutu (README'nin önceki sürümünde belgelenmişti)
// yalnızca Chrome'un varsayılan, özelleştirilemeyen başlık/altbilgisini destekler —
// bu da dosya yolunu (file:///...) çirkin biçimde altbilgiye yazar ve gerçek sayfa
// numarası stilini (küçük punto, "Kimya 9 · Ders Defteri" etiketiyle birlikte)
// vermeye izin vermez. Sayfa numaraları CDP'nin (Playwright üzerinden) sunduğu
// footerTemplate mekanizmasıyla, HER fiziksel sayfada güvenilir biçimde üretilir.
//
// Kullanım:
//   npm install
//   node tools/build-pdf.js
const path = require("path");
const { chromium } = require("playwright");

async function main() {
  const root = path.resolve(__dirname, "..");
  const src = "file://" + path.join(root, "defter", "index.html");
  const out = path.join(root, "Kimya 9 Ders Defteri.pdf");

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(src, { waitUntil: "networkidle" });

  await page.pdf({
    path: out,
    preferCSSPageSize: true, // defter/index.html'deki @page{size:210mm 297mm} kullanılır
    displayHeaderFooter: true,
    headerTemplate: "<span></span>", // üstte içerik yok
    footerTemplate: `
      <div style="width:100%; margin:0 15mm; display:flex; justify-content:space-between;
                  font-family:Arial,Helvetica,sans-serif; font-size:9px; color:#8a8ea8;">
        <span>Kimya 9 &middot; Ders Defteri</span>
        <span>Sayfa <span class="pageNumber"></span> / <span class="totalPages"></span></span>
      </div>`,
    // Sol/sağ/üst 16mm/15mm defter/index.html'deki @page kenar boşluğuyla aynı;
    // alt boşluk, altbilgi metnine yer açmak için 16mm yerine 20mm.
    margin: { top: "16mm", bottom: "20mm", left: "15mm", right: "15mm" },
  });

  await browser.close();
  console.log("Yazıldı:", out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
