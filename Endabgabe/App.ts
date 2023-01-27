namespace LernApp {

  //console.log("test");

//Wartet bis das Dokument vollständig geladen hat
  window.addEventListener("load", handleLoad);
}

//Bauplan für die Fragen-Objekte
interface Question {
  question: string;
  answers: string[];
  rightanswer: string;
  explaination: string;
  explainationlink: string;
}

//Globale Variablen
let score: number = 0;
let ablage: Question [] = [ ];
let question: Question;

//HTML-Fragen
let htmlquestions: Question [] = [
  {
    question: "Für was steht die Abkürzung DOM?",
    answers: ["Dominating Structure", "Document Object Model", "Direct Object Media"],
    rightanswer: "Document Object Model",
    explaination: "DOM steht für Document Object Model",
    explainationlink: "https://www.w3schools.com/whatis/whatis_htmldom.asp"
  },

  {
    question: "Welches dieser HTML-Elemente erzeugt einen Zeilenumbruch?",
    answers: ["br", "break", "div"],
    rightanswer: "br",
    explaination: "<br> erzeugt einen Zeilenumbruch",
    explainationlink: "https://www.w3schools.com/tags/tag_br.asp"
  },

  {
    question: "Mit welchem Befehl lässt sich Schrift kursiv darstellen?",
    answers: ["i", "b", "u"],
    rightanswer: "i",
    explaination: "Mit <i><i> lässt sich Schrift kursiv darstellen",
    explainationlink: "https://www.w3schools.com/tags/tag_i.asp"
  },

  {
    question: "Für was steht die Abkürzung HTML?",
    answers: ["Hyperlink Text Markup Languague", "Home Tool Markup Languague", "Hyper Text Markup Languague"],
    rightanswer: "Hyper Text Markup Languague",
    explaination: "HTML steht für Hyper Text Markup Languague",
    explainationlink: "https://www.w3schools.com/html/"
  },

  {
    question: "Für was wird das HTML-Canvas_Element gebraucht?",
    answers: ["Datenmanipulation", "Grafiksches Zeichnen", "Text anzeigen"],
    rightanswer: "Grafiksches Zeichnen",
    explaination: "Auf dem Canvas lassen sich grafische Teichnungen erstellen",
    explainationlink: "https://www.w3schools.com/html/html5_canvas.asp"
  },

  {
    question: "Wie wird eine Header-Sektion deklariert?",
    answers: ["section", "head", "header"],
    rightanswer: "header",
    explaination: "Der header wird mit einem <header>-tag gekennzeichnet",
    explainationlink: "https://www.w3schools.com/tags/tag_header.asp"
  }
];

let cssquestions: Question [] = [
  {
    question: "Für was steht die Abkürzung CSS?",
    answers: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
    rightanswer: "Cascading Style Sheets",
    explaination: "CSS steht für Cascading Style Sheets",
    explainationlink: "https://www.w3schools.com/css/"
  },

  {
    question: "Wo in der HTML-Datei wird das CSS-Stylesheet verlinkt?",
    answers: ["body", "head", "footer"],
    rightanswer: "head",
    explaination: "Das Stylesheet wird im header verlinkt",
    explainationlink: "https://www.w3schools.com/css/css_howto.asp"
  },

  {
    question: "Wie wird in CSS auf die Klasse eines HTML-Elements zugegriffen?",
    answers: [".", "#", "!"],
    rightanswer: ".",
    explaination: "Im Stylesheet wird mit . auf die Klasse eines HTML-Elements zugegriffen",
    explainationlink: "https://www.w3schools.com/cssref/css_selectors.php"
  },

  {
    question: "Mit welchem HTML-Tag lässt sich ein internes Stylesheet implementieren?",
    answers: ["script", "style", "css"],
    rightanswer: "style",
    explaination: "Mit style lässt sich in HTNL ein internes css-sheet implementieren",
    explainationlink: "https://www.w3schools.com/css/css_howto.asp"
  },

  {
    question: "Wie wird die Hintergrundfarbe geändert?",
    answers: ["background-color", "color", "bgcolor"],
    rightanswer: "background-color",
    explaination: "Die Hintergrundfarbe lässt sich mit background-color ändern",
    explainationlink: "https://www.w3schools.com/cssref/pr_background-color.php"
  },

  {
    question: "Wie wird die Farbe eines Elemnts geändert?",
    answers: ["color", "ecolor", "text-color"],
    rightanswer: "color",
    explaination: "Die Textfarbe lässt sich mit color ändern",
    explainationlink: "https://www.w3schools.com/css/css_text.asp"
  }
];

let tsquestions: Question [] = [
  {
    question: "Was sind die drei simplen Typen?",
    answers: ["boolean/number/string", "Array/Object/Symbol", "Array/boolean/Interface"],
    rightanswer: "boolean/number/string",
    explaination: "Boolean, Number und String sind die drei simplen Typen",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Welchen Typ besitzt die Variable let Kontostand = 1200?",
    answers: ["string", "number", "boolean"],
    rightanswer: "number",
    explaination: "Kontostand ist eine number",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Welchen Typ besitzt die Variable let Begrüßung = Hallo?",
    answers: ["number", "boolean", "string"],
    rightanswer: "string",
    explaination: "Begrüßung ist ein string",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Welchen Typ besitzt die Variable let Gecklickt = true?",
    answers: ["boolean", "string", "number"],
    rightanswer: "boolean",
    explaination: "Geklickt ist ein boolean",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Was markiert einen leeren Return?",
    answers: ["any", "void", "unknown"],
    rightanswer: "void",
    explaination: "Mit void markiert man einen leeren return",
    explainationlink: "https://www.w3schools.com/typescript/typescript_functions.php"
  },

  {
    question: "Welcher Modifier erlaubt Sichtbarkeit von methoden für alle Klassen?",
    answers: ["public", "private", "readonly"],
    rightanswer: "public",
    explaination: "Mit dem Modifier sind alle Eigenschften für alle Klassen sichtbar",
    explainationlink: "https://www.w3schools.com/typescript/typescript_classes.php"
  }
];

let gemischtquestions: Question [] = [
  {
    question: "Für was steht die Abkürzung DOM?",
    answers: ["Dominating Structure", "Document Object Model", "Direct Object Media"],
    rightanswer: "Document Object Model",
    explaination: "DOM steht für Document Object Model",
    explainationlink: "https://www.w3schools.com/whatis/whatis_htmldom.asp"
  },

  {
    question: "Welches dieser HTML-Elemente erzeugt einen Zeilenumbruch?",
    answers: ["br", "break", "div"],
    rightanswer: "br",
    explaination: "<br> erzeugt einen Zeilenumbruch",
    explainationlink: "https://www.w3schools.com/tags/tag_br.asp"
  },

  {
    question: "Mit welchem Befehl lässt sich Schrift kursiv darstellen?",
    answers: ["i", "b", "u"],
    rightanswer: "i",
    explaination: "Mit <i><i> lässt sich Schrift kursiv darstellen",
    explainationlink: "https://www.w3schools.com/tags/tag_i.asp"
  },

  {
    question: "Für was steht die Abkürzung HTML?",
    answers: ["Hyperlink Text Markup Languague", "Home Tool Markup Languague", "Hyper Text Markup Languague"],
    rightanswer: "Hyper Text Markup Languague",
    explaination: "HTML steht für Hyper Text Markup Languague",
    explainationlink: "https://www.w3schools.com/html/"
  },

  {
    question: "Für was wird das HTML-Canvas_Element gebraucht?",
    answers: ["Datenmanipulation", "Grafiksches Zeichnen", "Text anzeigen"],
    rightanswer: "Grafiksches Zeichnen",
    explaination: "Auf dem Canvas lassen sich grafische Teichnungen erstellen",
    explainationlink: "https://www.w3schools.com/html/html5_canvas.asp"
  },

  {
    question: "Wie wird eine Header-Sektion deklariert?",
    answers: ["section", "head", "header"],
    rightanswer: "header",
    explaination: "Der header wird mit einem <header>-tag gekennzeichnet",
    explainationlink: "https://www.w3schools.com/tags/tag_header.asp"
  },

  {
    question: "Für was steht die Abkürzung CSS?",
    answers: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
    rightanswer: "Cascading Style Sheets",
    explaination: "CSS steht für Cascading Style Sheets",
    explainationlink: "https://www.w3schools.com/css/"
  },

  {
    question: "Wo in der HTML-Datei wird das CSS-Stylesheet verlinkt?",
    answers: ["body", "head", "footer"],
    rightanswer: "head",
    explaination: "Das Stylesheet wird im header verlinkt",
    explainationlink: "https://www.w3schools.com/css/css_howto.asp"
  },

  {
    question: "Wie wird in CSS auf die Klasse eines HTML-Elements zugegriffen?",
    answers: [".", "#", "!"],
    rightanswer: ".",
    explaination: "Im Stylesheet wird mit . auf die Klasse eines HTML-Elements zugegriffen",
    explainationlink: "https://www.w3schools.com/cssref/css_selectors.php"
  },

  {
    question: "Mit welchem HTML-Tag lässt sich ein internes Stylesheet implementieren?",
    answers: ["script", "style", "css"],
    rightanswer: "style",
    explaination: "Mit style lässt sich in HTNL ein internes css-sheet implementieren",
    explainationlink: "https://www.w3schools.com/css/css_howto.asp"
  },

  {
    question: "Wie wird die Hintergrundfarbe geändert?",
    answers: ["background-color", "color", "bgcolor"],
    rightanswer: "background-color",
    explaination: "Die Hintergrundfarbe lässt sich mit background-color ändern",
    explainationlink: "https://www.w3schools.com/cssref/pr_background-color.php"
  },

  {
    question: "Wie wird die Farbe eines Elemnts geändert?",
    answers: ["color", "ecolor", "text-color"],
    rightanswer: "color",
    explaination: "Die Textfarbe lässt sich mit color ändern",
    explainationlink: "https://www.w3schools.com/css/css_text.asp"
  },

  {
    question: "Was sind die drei simplen Typen?",
    answers: ["boolean/number/string", "Array/Object/Symbol", "Array/boolean/Interface"],
    rightanswer: "boolean/number/string",
    explaination: "Boolean, Number und String sind die drei simplen Typen",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Welchen Typ besitzt die Variable let Kontostand = 1200?",
    answers: ["string", "number", "boolean"],
    rightanswer: "number",
    explaination: "Kontostand ist eine number",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Welchen Typ besitzt die Variable let Begrüßung = Hallo?",
    answers: ["number", "boolean", "string"],
    rightanswer: "string",
    explaination: "Begrüßung ist ein string",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Welchen Typ besitzt die Variable let Gecklickt = true?",
    answers: ["boolean", "string", "number"],
    rightanswer: "boolean",
    explaination: "Geklickt ist ein boolean",
    explainationlink: "https://www.w3schools.com/typescript/typescript_simple_types.php"
  },

  {
    question: "Was markiert einen leeren Return?",
    answers: ["any", "void", "unknown"],
    rightanswer: "void",
    explaination: "Mit void markiert man einen leeren return",
    explainationlink: "https://www.w3schools.com/typescript/typescript_functions.php"
  },

  {
    question: "Welcher Modifier erlaubt Sichtbarkeit von methoden für alle Klassen?",
    answers: ["public", "private", "readonly"],
    rightanswer: "public",
    explaination: "Mit dem Modifier sind alle Eigenschften für alle Klassen sichtbar",
    explainationlink: "https://www.w3schools.com/typescript/typescript_classes.php"
  }
];


function handleLoad (): void {
  //Zuweisung der Auswahlbuttons
  let htmlbutton: HTMLButtonElement = document.getElementById("htmlbutton") as HTMLButtonElement;
  let cssbutton: HTMLButtonElement = document.getElementById("cssbutton") as HTMLButtonElement;
  let tsbutton: HTMLButtonElement = document.getElementById("tsbutton") as HTMLButtonElement;
  let gemischtbutton: HTMLButtonElement = document.getElementById("gemischtbutton") as HTMLButtonElement;

  //Click-Listener für die Auswahlbuttons
  htmlbutton.addEventListener("click", chooseQuestionsHTML);
  cssbutton.addEventListener("click", chooseQuestionsCSS);
  tsbutton.addEventListener("click", chooseQuestionsTS);
  gemischtbutton.addEventListener("click", chooseQuestionsGemischt);
}

//Durch die Auswahl einer Kathegorie wird eine zufällige Frage dieser Kathegorie angezeigt

function chooseQuestionsHTML(): void {
  //Zufällige Auswahl einer Frage aus den HTML-Fragen
  let newhtmlquestion: Question = htmlquestions[Math.floor(Math.random())];
  
}

function chooseQuestionsCSS(): void {
  //Zufällige Auswahl einer Frage aus den CSS-Fragen
  let newcssquestion: Question = htmlquestions[Math.floor(Math.random())];

}

function chooseQuestionsTS(): void {
  //Zufällige Auswahl einer Frage aus den Typescript-Fragen
  let newtsquestion: Question = htmlquestions[Math.floor(Math.random())];

}

function chooseQuestionsGemischt(): void {
  //Zufällige Auswahl einer Frage aus den Gemischt-Fragen
  let newgemischtquestion: Question = htmlquestions[Math.floor(Math.random())];

}






 //Welchen Typ besitzt die Variable let Kontostand = 1200?
 //Welchen Typ besitzt die Variable let Begrüßung = "Hallo"?
 //Welchen Typ besitzt die Variable let Gecklickt = true?
 //Was markiert einen leeren Return?
   //any, void, unknown
 //Welcher Modifier erlaubt Sichtbarkeit von methoden für alle Klassen?
   //public, private, readonly