/**
 * siznax 2015
 */

/** 
 * https://github.com/jasonblewis/color-theme-wombat 
 */
var wombat = {
    'fg':       "#f6f3e8",
    'bg':       "#242424",
    'green':    "#95e454", 
    'green+1':  "#cae682",
    'green+2':  "#4BC98A",
    'red-1':    "#e5786d",
    'red':      "#95e454",
    'blue-2':   "#2e3436",
    'blue-1':   "#64a8d8",
    'blue':     "#8ac6f2",
    'magenta':  "#cc99cc",
    'orange-1': "#f57900",
    'orange':   "#e65c00",
    'orange+1': "#e9b96e",
    'orange+2': "#ffc125",
    'purple-1': "#ad7fa8",
    'purple':   "#cc99cc",
    'pink-1':   "#f283b6",
    'pink':     "#F6B3DF",
    'gray-1':   "#444444",
    'gray':     "#424242",
    'gray+1':   "#99968b"
};

/**
 * Knuth-Fisher-Yates  http://bost.ocks.org/mike/shuffle/
 */
function shuffle(array) {

    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    
    return array;
}


/** 
 * Chars contains a selection of Unicode characters that may have 
 * interesting Wikipedia entries. See 
 * http://en.wikipedia.org/wiki/Script_%28Unicode%29
 * 
 * @author siznax 
 * @version 2015
 */
var Chars = function() {
    this.alphanum = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
};

Chars.prototype.braille = "⠁ ⠂ ⠃ ⠄ ⠅ ⠆ ⠇ ⠈ ⠉ ⠊ ⠋ ⠌ ⠍ ⠎ ⠏ ⠐ ⠑ ⠒ ⠓ ⠔ ⠕ ⠖ ⠗ ⠘ ⠙ ⠚ ⠛ ⠜ ⠝ ⠞ ⠟ ⠠ ⠡ ⠢ ⠣ ⠤ ⠥ ⠦ ⠧ ⠨ ⠩ ⠪ ⠫ ⠬ ⠭ ⠮ ⠯ ⠰ ⠱ ⠲ ⠳ ⠴ ⠵ ⠶ ⠷ ⠸ ⠹ ⠺ ⠻ ⠼ ⠽ ⠾ ⠿ ⡀ ⡁ ⡂ ⡃ ⡄ ⡅ ⡆ ⡇ ⡈ ⡉ ⡊ ⡋ ⡌ ⡍ ⡎ ⡏ ⡐ ⡑ ⡒ ⡓ ⡔ ⡕ ⡖ ⡗ ⡘ ⡙ ⡚ ⡛ ⡜ ⡝ ⡞ ⡟ ⡠ ⡡ ⡢ ⡣ ⡤ ⡥ ⡦ ⡧ ⡨ ⡩ ⡪ ⡫ ⡬ ⡭ ⡮ ⡯ ⡰ ⡱ ⡲ ⡳ ⡴ ⡵ ⡶ ⡷ ⡸ ⡹ ⡺ ⡻ ⡼ ⡽ ⡾ ⡿ ⢀ ⢁ ⢂ ⢃ ⢄ ⢅ ⢆ ⢇ ⢈ ⢉ ⢊ ⢋ ⢌ ⢍ ⢎ ⢏ ⢐ ⢑ ⢒ ⢓ ⢔ ⢕ ⢖ ⢗ ⢘ ⢙ ⢚ ⢛ ⢜ ⢝ ⢞ ⢟ ⢠ ⢡ ⢢ ⢣ ⢤ ⢥ ⢦ ⢧ ⢨ ⢩ ⢪ ⢫ ⢬ ⢭ ⢮ ⢯ ⢰ ⢱ ⢲ ⢳ ⢴ ⢵ ⢶ ⢷ ⢸ ⢹ ⢺ ⢻ ⢼ ⢽ ⢾ ⢿ ⣀ ⣁ ⣂ ⣃ ⣄ ⣅ ⣆ ⣇ ⣈ ⣉ ⣊ ⣋ ⣌ ⣍ ⣎ ⣏ ⣐ ⣑ ⣒ ⣓ ⣔ ⣕ ⣖ ⣗ ⣘ ⣙ ⣚ ⣛ ⣜ ⣝ ⣞ ⣟ ⣠ ⣡ ⣢ ⣣ ⣤ ⣥ ⣦ ⣧ ⣨ ⣩ ⣪ ⣫ ⣬ ⣭ ⣮ ⣯ ⣰ ⣱ ⣲ ⣳ ⣴ ⣵ ⣶ ⣷ ⣸ ⣹ ⣺ ⣻ ⣼ ⣽ ⣾".split(' ');

Chars.prototype.currency = "₠ ₡ ₢ ₣ ₤ ₥ ₦ ₧ ₨ ₩ ₪ ₫ € ₭ ₮ ₯ ₰ ₱ ₲ ₳ ₴ ₵ ₶ ₷ ₸ ₹ ₺ ₻ ₼ ₽".split(' ');

Chars.prototype.cyrillic = "Ѐ Ё Ђ Ѓ Є Ѕ І Ї Ј Љ Њ Ћ Ќ Ѝ Ў Џ А Б В Г Д Е Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я а б в г д е ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я ѐ ё ђ ѓ є ѕ і ї ј љ њ ћ ќ ѝ ў џ Ѡ ѡ Ѣ ѣ Ѥ ѥ Ѧ Ѩ Ѫ Ѭ Ѯ Ѱ Ѳ Ѵ Ѷ Ѹ Ѻ Ѽ Ѿ Ҁ Ҋ Ҍ Ҏ Ґ Ғ Ҕ Җ Ҙ Қ Ҝ Ҟ Ҡ Ң Ҥ Ҧ Ҩ Ҫ Ҭ Ү Ұ Ҳ Ҵ Ҷ Ҹ Һ Ҽ Ҿ Ӏ Ӂ Ӄ Ӆ Ӈ Ӊ Ӌ Ӎ ӏ Ӑ ӑ Ӓ ӓ Ӕ ӕ Ӗ ӗ Ә ә Ӛ ӛ Ӝ ӝ Ӟ ӟ Ӡ ӡ Ӣ ӣ Ӥ ӥ Ӧ ӧ Ө ө Ӫ ӫ Ӭ ӭ Ӯ ӯ Ӱ ӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ Ӹ ӹ Ӻ ӻ Ӽ ӽ Ӿ".split(' ');

Chars.prototype.devaganari = "ऄ अ आ इ ई उ ऊ ऋ ऌ ऍ ऎ ए ऐ ऑ ऒ ओ औ क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न ऩ प फ ब भ म य र ऱ ल ळ ऴ व श ष स ह ॐ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़ ॠ ॡ ० १ २ ३ ४ ५ ६ ७ ८ ९ ॲ ॳ ॴ ॵ ॶ ॷ ॸ ॹ ॺ ॻ ॼ ॾ".split(' ');

Chars.prototype.greek = "Ͳ Ͷ Έ Ή Ί Ό Ύ Ώ ΐ Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω Ϊ Ϋ ά έ ή ί ΰ α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ ς σ τ υ φ χ ψ ω ϊ ϋ ό ύ ώ Ϗ ϐ ϑ ϒ ϓ ϔ ϕ ϖ ϗ Ϙ ϙ Ϛ ϛ Ϝ ϝ Ϟ ϟ Ϡ ϡ Ϣ ϣ Ϥ ϥ Ϧ ϧ Ϩ ϩ Ϫ ϫ Ϭ ϭ Ϯ ϯ ϰ ϱ ϲ ϳ ϴ ϵ ϶ Ϸ ϸ Ϲ Ϻ ϻ ϼ Ͻ Ͼ".split(' ');

// [unichr(x) for x in range(0x10a0,0x10ff)]
Chars.prototype.georgian = "Ⴀ Ⴁ Ⴂ Ⴃ Ⴄ Ⴅ Ⴆ Ⴇ Ⴈ Ⴉ Ⴊ Ⴋ Ⴌ Ⴍ Ⴎ Ⴏ Ⴐ Ⴑ Ⴒ Ⴓ Ⴔ Ⴕ Ⴖ Ⴗ Ⴘ Ⴙ Ⴚ Ⴛ Ⴜ Ⴝ Ⴞ Ⴟ Ⴠ Ⴡ Ⴢ Ⴣ Ⴤ Ⴥ ა ბ გ დ ე ვ ზ თ ი კ ლ მ ნ ო პ ჟ რ ს ტ უ ფ ქ ღ ყ შ ჩ ც ძ წ ჭ ხ ჯ ჰ ჱ ჲ ჳ ჴ ჵ ჶ ჷ ჸ ჹ ჺ ჻".split(' ');

// [unichr(x) for x in range(0x05be,0x05f4)]
Chars.prototype.hebrew = "א ב ג ד ה ו ז ח ט י ך כ ל ם מ ן נ ס ע ף פ ץ צ ק ר ש ת װ ױ".split(' ');

// [unichr(x) for x in range(0x3040,0x309F)]
Chars.prototype.hiragana = "あ い う え お か が き ぎ く ぐ け げ こ ご さ ざ し じ す ず せ ぜ そ ぞ た だ ち ぢ つ づ て で と ど な に ぬ ね の は ば ぱ ひ び ぴ ふ ぶ ぷ へ べ ぺ ほ ぼ ぽ ま み む め も や ゆ よ ら り る れ ろ ゎ わ ゐ ゑ を ん ゔ".split(' ');

// http://en.wikipedia.org/wiki/Kangxi_radical
Chars.prototype.kangxi = "⼀ ⼁ ⼂ ⼃ ⼄ ⼅ ⼆ ⼇ ⼈ ⼉ ⼊ ⼋ ⼌ ⼍ ⼎ ⼏ ⼐ ⼑ ⼒ ⼓ ⼔ ⼕ ⼖ ⼗ ⼘ ⼙ ⼚ ⼛ ⼜ ⼝ ⼞ ⼟ ⼠ ⼡ ⼢ ⼣ ⼤ ⼥ ⼦ ⼧ ⼨ ⼩ ⼪ ⼫ ⼬ ⼭ ⼮ ⼯ ⼰ ⼱ ⼲ ⼳ ⼴ ⼵ ⼶ ⼷ ⼸ ⼹ ⼺ ⼻ ⼼ ⼽ ⼾ ⼿ ⽀ ⽁ ⽂ ⽃ ⽄ ⽅ ⽆ ⽇ ⽈ ⽉ ⽊ ⽋ ⽌ ⽍ ⽎ ⽏ ⽐ ⽑ ⽒ ⽓ ⽔ ⽕ ⽖ ⽗ ⽘ ⽙ ⽚ ⽛ ⽜ ⽝ ⽞ ⽟ ⽠ ⽡ ⽢ ⽣ ⽤ ⽥ ⽦ ⽧ ⽨ ⽩ ⽪ ⽫ ⽬ ⽭ ⽮ ⽯ ⽰ ⽱ ⽲ ⽳ ⽴ ⽵ ⽶ ⽷ ⽸ ⽹ ⽺ ⽻ ⽼ ⽽ ⽾ ⽿ ⾀ ⾁ ⾂ ⾃ ⾄ ⾅ ⾆ ⾇ ⾈ ⾉ ⾊ ⾋ ⾌ ⾍ ⾎ ⾏ ⾐ ⾑ ⾒ ⾓ ⾔ ⾕ ⾖ ⾗ ⾘ ⾙ ⾚ ⾛ ⾜ ⾝ ⾞ ⾟ ⾠ ⾡ ⾢ ⾣ ⾤ ⾥ ⾦ ⾧ ⾨ ⾩ ⾪ ⾫ ⾬ ⾭ ⾮ ⾯ ⾰ ⾱ ⾲ ⾳ ⾴ ⾵ ⾶ ⾷ ⾸ ⾹ ⾺ ⾻ ⾼ ⾽ ⾾ ⾿ ⿀ ⿁ ⿂ ⿃ ⿄ ⿅ ⿆ ⿇ ⿈ ⿉ ⿊ ⿋ ⿌ ⿍ ⿎ ⿏ ⿐ ⿑ ⿒ ⿓ ⿔ ⿕".split(' ');

// [unichr(x) for x in range(0x30A0,0x30FF)]
Chars.prototype.katakana = "ア イ ウ エ オ カ ガ キ ギ ク グ ケ ゲ コ ゴ サ ザ シ ジ ス ズ セ ゼ ソ ゾ タ ダ チ ヂ ツ ヅ テ デ ト ド ナ ニ ヌ ネ ノ ハ バ パ ヒ ビ ピ フ ブ プ ヘ ベ ペ ホ ボ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン ヴ ヷ ヸ ヹ ヺ".split(' ');

// http://www.csun.edu/~ll51106/top300.html
Chars.prototype.han300 = "安 八 把 百 包 报 北 被 本 比 便 表 别 并 不 部 才 产 场 常 长 车 成 出 处 此 次 从 达 打 大 代 但 当 到 道 德 得 的 等 地 第 点 电 定 东 动 都 度 对 多 而 儿 二 发 法 反 方 分 风 服 干 感 高 告 个 各 给 更 工 公 古 股 关 光 广 国 果 过 海 好 和 合 黑 很 红 后 华 化 话 还 回 会 活 或 机 几 己 济 记 家 加 价 间 见 件 将 交 教 接 解 界 金 进 京 经 九 酒 就 军 开 看 可 克 口 来 劳 老 理 里 利 立 力 联 两 了 林 流 路 马 么 没 每 美 门 们 面 民 明 名 目 那 南 难 内 能 你 年 女 票 品 平 期 七 其 起 企 气 钱 前 亲 青 情 请 球 去 全 却 然 让 人 认 日 如 入 三 色 山 上 少 社 身 深 声 生 师 十 时 什 实 识 使 世 事 是 市 收 手 受 数 说 斯 私 司 四 所 他 它 她 台 特 体 天 通 同 统 头 外 完 万 为 位 文 问 我 无 五 物 西 下 先 现 相 想 向 象 小 校 些 谢 新 心 信 形 行 学 样 要 也 业 一 已 以 意 因 应 用 由 有 又 于 与 元 原 员 月 再 在 摘 者 这 真 正 政 知 之 只 至 制 中 种 重 主 着 资 子 自 总 走 最 做 作".split(' ');

// [unichr(x) for x in range(0x2100,0x214f)]
Chars.prototype.letterlike = "℀ ℁ ℂ ℃ ℄ ℅ ℆ ℇ ℈ ℉ ℊ ℋ ℌ ℍ ℎ ℏ ℐ ℑ ℒ ℓ ℔ ℕ № ℗ ℘ ℙ ℚ ℛ ℜ ℝ ℞ ℟ ℠ ℡ ™ ℣ ℤ ℥ Ω ℧ ℨ ℩ K Å ℬ ℭ ℮ ℯ ℰ ℱ Ⅎ ℳ ℴ ℵ ℶ ℷ ℸ ℹ ℺ ℻ ℼ ℽ ℾ ℿ ⅀ ⅁ ⅂ ⅃ ⅄ ⅅ ⅆ ⅇ ⅈ ⅉ ⅊ ⅋ ⅍ ⅎ".split(' ');

// selection of U+2600..U+26FF
Chars.prototype.misc = "☀ ☁ ☂ ☃ ☄ ★ ☆ ☇ ☈ ☉ ☊ ☋ ☌ ☍ ☎ ☏ ☐ ☑ ☒ ☓ ☖ ☗ ☘ ☙ ☚ ☛ ☜ ☝ ☞ ☟ ☠ ☡ ☢ ☣ ☤ ☥ ☦ ☧ ☨ ☩ ☪ ☫ ☬ ☭ ☮ ☯ ☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷ ☸ ☹ ☺ ☻ ☼ ☽ ☾ ☿ ♀ ♁ ♂ ♃ ♄ ♅ ♆ ♇ ♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟ ♠ ♡ ♢ ♣ ♤ ♥ ♦ ♧ ♨ ♩ ♪ ♫ ♬ ♭ ♮ ♯ ♰ ♱ ♲ ♳ ♴ ♵ ♶ ♷ ♸ ♹ ♺ ♻ ♼ ♽ ♾ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ⚆ ⚇ ⚈ ⚉ ⚊ ⚋ ⚌ ⚍ ⚎ ⚏ ⚐ ⚑ ⚒ ⚔ ⚕ ⚖ ⚗ ⚘ ⚙ ⚚ ⚛ ⚜ ⚠ ⚢ ⚣ ⚤ ⚥ ⚦ ⚧ ⚨ ⚩ ⚬ ⚭ ⚮ ⚯ ⚰ ⚱ ⚲".split(' ');

// Misc. Symbols that render as emoji or codepoint on Mac OS X 10.10.2
Chars.prototype.misc_emoji = "☔ ☕ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ♿ ⚓ ⚡ ⚪ ⚫ ⚳ ⚴ ⚵ ⚶ ⚷ ⚸ ⚹ ⚺ ⚻ ⚼ ⚽ ⚾ ⚿ ⛀ ⛁ ⛂ ⛃ ⛄ ⛅ ⛆ ⛇ ⛈ ⛉ ⛊ ⛋ ⛌ ⛍ ⛎ ⛏ ⛐ ⛑ ⛒ ⛓ ⛔ ⛕ ⛖ ⛗ ⛘ ⛙ ⛚ ⛛ ⛜ ⛝ ⛞ ⛟ ⛠ ⛡ ⛢ ⛣ ⛤ ⛥ ⛦ ⛧ ⛨ ⛩ ⛪ ⛫ ⛬ ⛭ ⛮ ⛯ ⛰ ⛱ ⛲ ⛳ ⛴ ⛵ ⛶ ⛷ ⛸ ⛹ ⛺ ⛻ ⛼ ⛽ ⛾".split(' ');

// [unichr(x) for x in range(0x2000,0x2060)]
Chars.prototype.punctuation = "― ‖ ‗ ‘ ’ ‚ ‛ “ ” „ ‟ † ‡ • ‣ ․ ‥ … ‧ ‰ ‱ ′ ″ ‴ ‵ ‶ ‷ ‸ ‹ › ※ ‼ ‽ ‾ ‿ ⁀ ⁁ ⁂ ⁃ ⁄ ⁅ ⁆ ⁇ ⁈ ⁉ ⁊ ⁋ ⁌ ⁍ ⁎ ⁏ ⁐ ⁑ ⁒ ⁓ ⁔ ⁕ ⁖ ⁗ ⁘ ⁙ ⁚ ⁛ ⁜ ⁝ ⁞".split(' ');

// [unichr(x) for x in range(0x16A0,0x16FF)]
Chars.prototype.runic = "ᚠ ᚡ ᚢ ᚣ ᚤ ᚥ ᚦ ᚧ ᚨ ᚩ ᚪ ᚫ ᚬ ᚭ ᚮ ᚯ ᚰ ᚱ ᚲ ᚳ ᚴ ᚵ ᚶ ᚷ ᚸ ᚹ ᚺ ᚻ ᚼ ᚽ ᚾ ᚿ ᛀ ᛁ ᛂ ᛃ ᛄ ᛅ ᛆ ᛇ ᛈ ᛉ ᛊ ᛋ ᛌ ᛍ ᛎ ᛏ ᛐ ᛑ ᛒ ᛓ ᛔ ᛕ ᛖ ᛗ ᛘ ᛙ ᛚ ᛛ ᛜ ᛝ ᛞ ᛟ ᛠ ᛡ ᛢ ᛣ ᛤ ᛥ ᛦ ᛧ ᛨ ᛩ ᛪ ᛫ ᛬ ᛭ ᛮ ᛯ ᛰ".split(' ');

Chars.prototype.all = function() {
    var chars = this.alphanum
        .concat(this.braille)
        // .concat(this.cjk_enclosed)
        .concat(this.currency)
        .concat(this.cyrillic)
        .concat(this.devaganari)
        .concat(this.greek)
        .concat(this.han300)
        .concat(this.hebrew)
        .concat(this.hiragana)
        .concat(this.kangxi)
        .concat(this.katakana)
        .concat(this.letterlike)
        .concat(this.misc)
        .concat(this.punctuation)
        .concat(this.runic);
    return shuffle(this.bopomofo);
}
