/* =========================================================
   AtomLab 9 — periodic-data.js
   118 elementin temel verisi + Aufbau ilkesine göre elektron
   dizilimi hesaplayan yardımcı fonksiyonlar (KİM.9.1.5–9.1.8).
   Ana grup elementleri (1A,2A,13A-18A, periyot 1-6) için atom
   yarıçapı / 1. iyonlaşma enerjisi / elektronegatiflik verisi
   PROPS tablosunda ayrıca tutulur (periyodik özellik trendleri
   yalnızca bu kazanımların kapsamı olan ana grup elementleriyle
   sınırlıdır).
   ========================================================= */

// [Z, sembol, ad, kütle, kategori, periyot, grup]
// grup: 1-18 (ana tabloda), 0 = lantanit satırı, -1 = aktinit satırı
export const ELEMENTS = [
  [1,"H","Hidrojen",1.008,"hidrojen",1,1],
  [2,"He","Helyum",4.003,"soygaz",1,18],
  [3,"Li","Lityum",6.94,"alkali",2,1],
  [4,"Be","Berilyum",9.012,"toprak-alkali",2,2],
  [5,"B","Bor",10.81,"yarimetal",2,13],
  [6,"C","Karbon",12.011,"ametal",2,14],
  [7,"N","Azot",14.007,"ametal",2,15],
  [8,"O","Oksijen",15.999,"ametal",2,16],
  [9,"F","Flor",18.998,"halojen",2,17],
  [10,"Ne","Neon",20.180,"soygaz",2,18],
  [11,"Na","Sodyum",22.990,"alkali",3,1],
  [12,"Mg","Magnezyum",24.305,"toprak-alkali",3,2],
  [13,"Al","Alüminyum",26.982,"metal",3,13],
  [14,"Si","Silisyum",28.085,"yarimetal",3,14],
  [15,"P","Fosfor",30.974,"ametal",3,15],
  [16,"S","Kükürt",32.06,"ametal",3,16],
  [17,"Cl","Klor",35.45,"halojen",3,17],
  [18,"Ar","Argon",39.948,"soygaz",3,18],
  [19,"K","Potasyum",39.098,"alkali",4,1],
  [20,"Ca","Kalsiyum",40.078,"toprak-alkali",4,2],
  [21,"Sc","Skandiyum",44.956,"gecis",4,3],
  [22,"Ti","Titanyum",47.867,"gecis",4,4],
  [23,"V","Vanadyum",50.942,"gecis",4,5],
  [24,"Cr","Krom",51.996,"gecis",4,6],
  [25,"Mn","Mangan",54.938,"gecis",4,7],
  [26,"Fe","Demir",55.845,"gecis",4,8],
  [27,"Co","Kobalt",58.933,"gecis",4,9],
  [28,"Ni","Nikel",58.693,"gecis",4,10],
  [29,"Cu","Bakır",63.546,"gecis",4,11],
  [30,"Zn","Çinko",65.38,"gecis",4,12],
  [31,"Ga","Galyum",69.723,"metal",4,13],
  [32,"Ge","Germanyum",72.630,"yarimetal",4,14],
  [33,"As","Arsenik",74.922,"yarimetal",4,15],
  [34,"Se","Selenyum",78.971,"ametal",4,16],
  [35,"Br","Brom",79.904,"halojen",4,17],
  [36,"Kr","Kripton",83.798,"soygaz",4,18],
  [37,"Rb","Rubidyum",85.468,"alkali",5,1],
  [38,"Sr","Stronsiyum",87.62,"toprak-alkali",5,2],
  [39,"Y","İtriyum",88.906,"gecis",5,3],
  [40,"Zr","Zirkonyum",91.224,"gecis",5,4],
  [41,"Nb","Niyobyum",92.906,"gecis",5,5],
  [42,"Mo","Molibden",95.95,"gecis",5,6],
  [43,"Tc","Teknesyum",98,"gecis",5,7],
  [44,"Ru","Rutenyum",101.07,"gecis",5,8],
  [45,"Rh","Rodyum",102.906,"gecis",5,9],
  [46,"Pd","Paladyum",106.42,"gecis",5,10],
  [47,"Ag","Gümüş",107.868,"gecis",5,11],
  [48,"Cd","Kadmiyum",112.414,"gecis",5,12],
  [49,"In","İndiyum",114.818,"metal",5,13],
  [50,"Sn","Kalay",118.710,"metal",5,14],
  [51,"Sb","Antimon",121.760,"yarimetal",5,15],
  [52,"Te","Tellür",127.60,"yarimetal",5,16],
  [53,"I","İyot",126.904,"halojen",5,17],
  [54,"Xe","Ksenon",131.293,"soygaz",5,18],
  [55,"Cs","Sezyum",132.905,"alkali",6,1],
  [56,"Ba","Baryum",137.327,"toprak-alkali",6,2],
  [57,"La","Lantan",138.905,"lantanit",6,0],
  [58,"Ce","Seryum",140.116,"lantanit",6,0],
  [59,"Pr","Praseodim",140.908,"lantanit",6,0],
  [60,"Nd","Neodim",144.242,"lantanit",6,0],
  [61,"Pm","Prometyum",145,"lantanit",6,0],
  [62,"Sm","Samaryum",150.36,"lantanit",6,0],
  [63,"Eu","Evropiyum",151.964,"lantanit",6,0],
  [64,"Gd","Gadolinyum",157.25,"lantanit",6,0],
  [65,"Tb","Terbiyum",158.925,"lantanit",6,0],
  [66,"Dy","Disprozyum",162.500,"lantanit",6,0],
  [67,"Ho","Holmiyum",164.930,"lantanit",6,0],
  [68,"Er","Erbiyum",167.259,"lantanit",6,0],
  [69,"Tm","Tulyum",168.934,"lantanit",6,0],
  [70,"Yb","İterbiyum",173.045,"lantanit",6,0],
  [71,"Lu","Lutesyum",174.967,"lantanit",6,0],
  [72,"Hf","Hafniyum",178.49,"gecis",6,4],
  [73,"Ta","Tantal",180.948,"gecis",6,5],
  [74,"W","Volfram",183.84,"gecis",6,6],
  [75,"Re","Renyum",186.207,"gecis",6,7],
  [76,"Os","Osmiyum",190.23,"gecis",6,8],
  [77,"Ir","İridyum",192.217,"gecis",6,9],
  [78,"Pt","Platin",195.085,"gecis",6,10],
  [79,"Au","Altın",196.967,"gecis",6,11],
  [80,"Hg","Cıva",200.592,"gecis",6,12],
  [81,"Tl","Talyum",204.38,"metal",6,13],
  [82,"Pb","Kurşun",207.2,"metal",6,14],
  [83,"Bi","Bizmut",208.980,"metal",6,15],
  [84,"Po","Polonyum",209,"yarimetal",6,16],
  [85,"At","Astatin",210,"halojen",6,17],
  [86,"Rn","Radon",222,"soygaz",6,18],
  [87,"Fr","Fransiyum",223,"alkali",7,1],
  [88,"Ra","Radyum",226,"toprak-alkali",7,2],
  [89,"Ac","Aktinyum",227,"aktinit",7,-1],
  [90,"Th","Toryum",232.038,"aktinit",7,-1],
  [91,"Pa","Protaktinyum",231.036,"aktinit",7,-1],
  [92,"U","Uranyum",238.029,"aktinit",7,-1],
  [93,"Np","Neptünyum",237,"aktinit",7,-1],
  [94,"Pu","Plütonyum",244,"aktinit",7,-1],
  [95,"Am","Amerikyum",243,"aktinit",7,-1],
  [96,"Cm","Küriyum",247,"aktinit",7,-1],
  [97,"Bk","Berkelyum",247,"aktinit",7,-1],
  [98,"Cf","Kaliforniyum",251,"aktinit",7,-1],
  [99,"Es","Aynştaynyum",252,"aktinit",7,-1],
  [100,"Fm","Fermiyum",257,"aktinit",7,-1],
  [101,"Md","Mendelevyum",258,"aktinit",7,-1],
  [102,"No","Nobelyum",259,"aktinit",7,-1],
  [103,"Lr","Lavrensiyum",266,"aktinit",7,-1],
  [104,"Rf","Rutherfordyum",267,"gecis",7,4],
  [105,"Db","Dubniyum",268,"gecis",7,5],
  [106,"Sg","Seaborgiyum",269,"gecis",7,6],
  [107,"Bh","Bohriyum",270,"gecis",7,7],
  [108,"Hs","Hassiyum",269,"gecis",7,8],
  [109,"Mt","Meitneryum",278,"gecis",7,9],
  [110,"Ds","Darmstadtiyum",281,"gecis",7,10],
  [111,"Rg","Röntgenyum",282,"gecis",7,11],
  [112,"Cn","Kopernikyum",285,"gecis",7,12],
  [113,"Nh","Nihonyum",286,"metal",7,13],
  [114,"Fl","Flerovyum",289,"metal",7,14],
  [115,"Mc","Moskovyum",290,"metal",7,15],
  [116,"Lv","Livermoryum",293,"metal",7,16],
  [117,"Ts","Tennessin",294,"halojen",7,17],
  [118,"Og","Oganesson",294,"soygaz",7,18],
];

export const EL_BY_Z = Object.fromEntries(
  ELEMENTS.map(e => [e[0], { z:e[0], sym:e[1], name:e[2], mass:e[3], cat:e[4], period:e[5], group:e[6] }])
);

export const CAT_LABELS = {
  "hidrojen":"Hidrojen", "alkali":"Alkali Metal", "toprak-alkali":"Toprak Alkali Metal",
  "gecis":"Geçiş Metali", "lantanit":"Lantanit", "aktinit":"Aktinit",
  "metal":"Metal", "yarimetal":"Yarı Metal (Metaloit)", "ametal":"Ametal",
  "halojen":"Halojen", "soygaz":"Soy Gaz",
};

/* ---------- Ana grup elementleri için periyodik özellik verisi ----------
   Z=1-20 için değerler doğrudan kaynak ders kitabındaki (Kimya 9, Cilt 1,
   1.2.4 Periyodik Özellikler) tablolardan alınmıştır (atom yarıçapı pm,
   1. iyonlaşma enerjisi kJ/mol, Pauling elektronegatifliği). Z=31 ve
   sonrası için genel kabul görmüş referans değerleri kullanılmıştır.
   Yalnızca KİM.9.1.8 kapsamındaki ana grup (1A, 2A, 13A-18A) elementleri
   için verilmiştir. */
export const PROPS = {
  1:{r:37,ie:1312,en:2.20},                2:{r:31,ie:2372,en:null},
  3:{r:152,ie:520,en:0.98},   4:{r:112,ie:900,en:1.57},
  5:{r:85,ie:800,en:2.04},    6:{r:77,ie:1086,en:2.55},
  7:{r:70,ie:1402,en:3.04},   8:{r:73,ie:1314,en:3.44},
  9:{r:72,ie:1681,en:4.00},   10:{r:70,ie:2080,en:null},
  11:{r:186,ie:496,en:0.93},  12:{r:160,ie:738,en:1.31},
  13:{r:143,ie:577,en:1.61},  14:{r:118,ie:786,en:1.90},
  15:{r:110,ie:1012,en:2.19}, 16:{r:103,ie:1000,en:2.58},
  17:{r:99,ie:1255,en:3.16},  18:{r:98,ie:1520,en:null},
  19:{r:227,ie:419,en:0.82},  20:{r:197,ie:590,en:1.00},
  31:{r:136,ie:579,en:1.81},  32:{r:125,ie:762,en:2.01},
  33:{r:114,ie:947,en:2.18},  34:{r:103,ie:941,en:2.55},
  35:{r:94,ie:1140,en:2.96},  36:{r:88,ie:1351,en:3.00},
  37:{r:265,ie:403,en:0.82},  38:{r:219,ie:549,en:0.95},
  49:{r:156,ie:558,en:1.78},  50:{r:145,ie:709,en:1.96},
  51:{r:133,ie:834,en:2.05},  52:{r:123,ie:869,en:2.10},
  53:{r:115,ie:1008,en:2.66}, 54:{r:108,ie:1170,en:2.60},
  55:{r:298,ie:376,en:0.79},  56:{r:253,ie:503,en:0.89},
  81:{r:156,ie:589,en:1.80},  82:{r:154,ie:716,en:1.80},
  83:{r:143,ie:703,en:1.90},  84:{r:135,ie:812,en:2.00},
  85:{r:127,ie:920,en:2.20},  86:{r:120,ie:1037,en:null},
  87:{r:null,ie:380,en:0.70}, 88:{r:null,ie:509,en:0.90},
};

/* ---------- Aufbau (n+l kuralı) dolum sırası ----------
   Standart Madelung sırası: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p */
const FILL_ORDER = [
  "1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p",
];
const SUBSHELL_CAP = { s:2, p:6, d:10, f:14 };

/** Aufbau ilkesine göre (istisnasız, öğretim programı düzeyinde) Z elektronunu
 * dağıtır. Dönen dizi [{n, l, label, count, cap}] şeklindedir (dolum sırasıyla). */
export function buildConfig(z) {
  let remaining = z;
  const subshells = [];
  for (const label of FILL_ORDER) {
    if (remaining <= 0) break;
    const n = parseInt(label[0], 10);
    const l = label[1];
    const cap = SUBSHELL_CAP[l];
    const count = Math.min(cap, remaining);
    subshells.push({ n, l, label, count, cap });
    remaining -= count;
  }
  return subshells;
}

/** Dolum sırasındaki dizilimi n sonra l'ye göre (geleneksel yazım) sıralar. */
const L_RANK = { s:0, p:1, d:2, f:3 };
export function toConventionalOrder(subshells) {
  return [...subshells].sort((a, b) => (a.n - b.n) || (L_RANK[a.l] - L_RANK[b.l]));
}

export function configString(z, conventional = true) {
  const sub = buildConfig(z);
  const ordered = conventional ? toConventionalOrder(sub) : sub;
  return ordered.map(s => `${s.label}${toSuperscript(s.count)}`).join(" ");
}

/** En yakın (Z'den küçük) soy gazı bulup [Ne] 3s² gibi kısaltılmış gösterim üretir.
 * Not: bir soy gazın dolum-sırası dizilimi her zaman daha büyük Z'li elementlerin
 * diziliminin tam bir ön eki olduğundan (aynı FILL_ORDER kullanılır), çekirdek
 * çıkarımı basit bir dilimlemeyle yapılabilir. */
export function nobleGasShorthand(z) {
  const NOBLE = [2, 10, 18, 36, 54, 86, 118];
  let core = null;
  for (const nz of NOBLE) { if (nz < z) core = nz; else break; }
  if (!core) return configString(z);
  const full = buildConfig(z);
  const coreCount = buildConfig(core).length;
  const valence = full.slice(coreCount);
  const coreSym = EL_BY_Z[core].sym;
  const valenceOrdered = toConventionalOrder(valence);
  return `[${coreSym}] ` + valenceOrdered.map(s => `${s.label}${toSuperscript(s.count)}`).join(" ");
}

function toSuperscript(n) {
  const map = { "0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹" };
  return String(n).split("").map(d => map[d]).join("");
}

/** Elementin son (valans) katmanındaki elektron sayısını döndürür. */
export function valenceElectronCount(z) {
  const el = EL_BY_Z[z];
  if (!el) return null;
  if (el.group === 18) return z === 2 ? 2 : 8;
  if (el.group >= 1 && el.group <= 2) return el.group;
  if (el.group >= 13 && el.group <= 17) return el.group - 10;
  return null; // geçiş/lantanit/aktinit — bu temanın kapsamı dışında
}
