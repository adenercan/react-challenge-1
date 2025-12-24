
const questions = [

  {
    category: "HTML",
    text: "HTML neyin kısaltmasıdır?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Machine Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    category: "HTML",
    text: "Bir HTML belgesinin kök etiketi hangisidir?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    answer: "<html>"
  },
  {
    category: "HTML",
    text: "Sayfa başlığı (tarayıcı sekmesi) hangi etiketle tanımlanır?",
    options: ["<meta>", "<title>", "<h1>", "<header>"],
    answer: "<title>"
  },
  {
    category: "HTML",
    text: "Link vermek için hangi etiket kullanılır?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    category: "HTML",
    text: "Resim eklemek için hangi etiket kullanılır?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answer: "<img>"
  },


  {
    category: "CSS",
    text: "CSS neyin kısaltmasıdır?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Syntax"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    category: "CSS",
    text: "HTML’de harici CSS dosyası bağlamak için hangi etiket kullanılır?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    answer: "<link>"
  },
  {
    category: "CSS",
    text: "Bir elementin yazı rengini değiştiren CSS özelliği hangisidir?",
    options: ["font-style", "text-color", "color", "background"],
    answer: "color"
  },
  {
    category: "CSS",
    text: "Elementleri yatayda hizalamak için en çok kullanılan layout yöntemi hangisidir?",
    options: ["Float", "Grid", "Flexbox", "Inline"],
    answer: "Flexbox"
  },
  {
    category: "CSS",
    text: "Responsive tasarım için kullanılan yapı hangisidir?",
    options: ["Keyframes", "Media Query", "Variables", "Animation"],
    answer: "Media Query"
  },

  {
    category: "JavaScript",
    text: "JavaScript ne için kullanılır?",
    options: [
      "Sayfa stillendirmek",
      "Veritabanı oluşturmak",
      "Web sayfasını dinamik yapmak",
      "Sunucu kurmak"
    ],
    answer: "Web sayfasını dinamik yapmak"
  },
  {
    category: "JavaScript",
    text: "Değişken tanımlamak için hangisi kullanılır?",
    options: ["var", "let", "const", "Hepsi"],
    answer: "Hepsi"
  },
  {
    category: "JavaScript",
    text: "Aşağıdakilerden hangisi bir JavaScript veri tipi değildir?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: "Character"
  },
  {
    category: "JavaScript",
    text: "Bir fonksiyon nasıl tanımlanır?",
    options: [
      "function myFunc() {}",
      "def myFunc() {}",
      "func myFunc() {}",
      "create myFunc() {}"
    ],
    answer: "function myFunc() {}"
  },
  {
    category: "JavaScript",
    text: "Bir butona tıklama olayı hangi event ile yakalanır?",
    options: ["onhover", "onchange", "onclick", "onpress"],
    answer: "onclick"
  },


  {
    category: "Accessibility",
    text: "Web’de accessibility’nin amacı nedir?",
    options: [
      "Sayfayı hızlandırmak",
      "Daha güzel tasarım yapmak",
      "Herkesin kullanabilmesini sağlamak",
      "SEO’yu kapatmak"
    ],
    answer: "Herkesin kullanabilmesini sağlamak"
  },
  {
    category: "Accessibility",
    text: "Görseller için hangi özellik zorunludur?",
    options: ["title", "src", "alt", "aria"],
    answer: "alt"
  },
  {
    category: "Accessibility",
    text: "Klavye ile gezinme için en önemli HTML özelliği hangisidir?",
    options: ["tabindex", "role", "aria-hidden", "cursor"],
    answer: "tabindex"
  },
  {
    category: "Accessibility",
    text: "Ekran okuyucular için kullanılan özellik hangisidir?",
    options: ["placeholder", "aria-label", "class", "style"],
    answer: "aria-label"
  },
  {
    category: "Accessibility",
    text: "Aşağıdakilerden hangisi erişilebilir buton için doğrudur?",
    options: [
      "Sadece icon kullanmak",
      "div kullanmak",
      "button etiketi kullanmak",
      "span kullanmak"
    ],
    answer: "button etiketi kullanmak"
  }
];
export default questions;