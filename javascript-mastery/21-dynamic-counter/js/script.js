console.log("Script cargado correctamente");

let number = 0;
const display = document.getElementById("counter");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");

//Make the code more robust including elements checking after begin the operations.
if (btnPlus && display) {
    btnPlus.addEventListener("click", () => {
        number++;
        display.textContent = number;
        console.log("Nuevo valor:", number);
    });
} else {
    console.error("No se encontraron los elementos. Revisa los IDs y Clases.");
}
if(btnMinus && display) {
    btnMinus.addEventListener("click", () => {
        if (number > 0) {
            number--;
            display.textContent = number;
            console.log("New Value:", number)
        }
    });
} else {
    console.error("No se encontraron los elementos. Revisa los IDs y Clases.");
}
