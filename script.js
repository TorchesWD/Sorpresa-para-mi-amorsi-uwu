const messages = [
    "Se te resbaló el dedo, yo lo sé uwu ",
    "Amor, se te volvió a resbalar el dedo, creo que deberías cambiar de mouse",
    "Bb, tres veces se te resbala, es que no me lo creo",
    "AMOOOOOOR, el botón del Sí está a la izquierda",
    "Amor, me voy a molestar si dices que no",
    "Bby, ya tengo todo planeado :<",
    "Tomaremos vinito y será muuuuy lindo bb",
    "Mi amor, deja de presionar que NOOOOOOOOOO",
    "Bb, ya en serio, ¿Por qué le das al NO? XD",
    "Amor, ya deja de darle al no, ¡AHHHHHHH! Michi asado*"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}