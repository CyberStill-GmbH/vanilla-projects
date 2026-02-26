const generatePhrase = document.getElementById("new-quote");
const phraseSection = document.getElementById("phres-pos");
const cardElement = document.querySelector(".card-container");
const changeBodyStyle = document.body;

let pastPhrase = '';
let newContentPhrase = '';

const hexNumbers = '0123456789abcdef';

const frasesCliche = [
  "No cuentes los días, haz que los días cuenten.",
  "El tren de las oportunidades no pasa dos veces.",
  "Lo que no te mata, te hace más fuerte.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No busques la felicidad, créala.",
  "El cielo es el límite.",
  "Cree en ti y todo será posible.",
  "La vida es un viaje, no un destino.",
  "Donde hay voluntad, hay un camino.",
  "La sonrisa es el espejo del alma.",
  "Hazlo hoy, porque el mañana es una promesa que nadie tiene.",
  "Si puedes soñarlo, puedes hacerlo.",
  "La mejor forma de predecir el futuro es creándolo.",
  "No hay mal que por bien no venga.",
  "La paciencia es la madre de la ciencia.",
  "A mal tiempo, buena cara.",
  "Todo sucede por una razón.",
  "La suerte es lo que ocurre cuando la preparación se encuentra con la oportunidad.",
  "No juzgues un libro por su portada.",
  "La vida empieza donde termina tu zona de confort.",
  "Querer es poder.",
  "Menos es más.",
  "El tiempo lo cura todo.",
  "Sigue a tu corazón.",
  "Lo bueno se hace esperar.",
  "Haz el bien sin mirar a quién.",
  "El que la sigue, la consigue.",
  "La esperanza es lo último que se pierde.",
  "Vivir el presente es el mejor regalo.",
  "Sé la mejor versión de ti mismo.",
  "A quien madruga, Dios le ayuda.",
  "Más vale tarde que nunca.",
  "En la variedad está el gusto.",
  "No dejes para mañana lo que puedas hacer hoy.",
  "El saber no ocupa lugar.",
  "Ojos que no ven, corazón que no siente.",
  "Lo cortés no quita lo valiente.",
  "Cosecharás lo que siembras.",
  "Cada día es una nueva oportunidad.",
  "La disciplina tarde o temprano vencerá a la inteligencia.",
  "Tu único límite eres tú.",
  "Vive, ama, ríe.",
  "No sueñes tu vida, vive tus sueños.",
  "La belleza está en el interior.",
  "Lo que está destinado a ser, será.",
  "Solo se vive una vez.",
  "El dinero no da la felicidad, pero ayuda.",
  "La actitud es la que marca la diferencia.",
  "Para atrás ni para tomar impulso.",
  "Si la vida te da limones, haz limonada."
];
// Create a hexadecimal number generator function.
function hexadecimalNumber() {
    const numberHexa = [];
    for (let i = 0; i < 6; i++) {
        numberHexa.push(hexNumbers[
            Math.floor(Math.random() * 
            hexNumbers.length)
        ]);
    }
    return numberHexa.join("");
}
// Pick a phrase from the array avoiding repetition.
function newPhrase() {
    do {
        newContentPhrase = frasesCliche[Math.floor(Math.random() * frasesCliche.length)];
    }while (pastPhrase === newContentPhrase);
    pastPhrase = newContentPhrase;
    return newContentPhrase;
}

generatePhrase.addEventListener("click", () => {
    console.log("New Generated Phrase: ", newContentPhrase);
    phraseSection.textContent = newPhrase();
    console.log("New background color...");
    changeBodyStyle.style.background = '#' + hexadecimalNumber();
    cardElement.classList.remove('card-glow');
    void cardElement.offsetWidth;
    cardElement.classList.add('card-glow');
});