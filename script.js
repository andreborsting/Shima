// Slider logik
let bgmSlider = document.getElementById("bgmRange");
let bgmOutput = document.getElementById("bgm-volume-value")
let sfxSlider = document.getElementById("sfxRange");
let sfxOutput = document.getElementById("sfx-volume-value")

// sliders default setting
bgmOutput.innerHTML = bgmSlider.value;
sfxOutput.innerHTML = sfxSlider.value;

bgmSlider.oninput = function () {
    bgmOutput.innerHTML = this.value;

    // sætter volumen på baggrundsmusikken
    backgroundMusic.volume = this.value / 100;
};

sfxSlider.oninput = function() {
    sfxOutput.innerHTML = this.value;

    // sætter volumen på sfx
   for (let i = 0; i < ouchSounds.length; i++) {
        ouchSounds[i].volume = this.value / 100;
   }
};

// Deklarationer
const gameScreen = document.getElementById("game-screen");
const splashScreen = document.getElementById("splash-screen");

const startGameBtn = document.getElementById("startGameBtn");
const optionsBtn = document.getElementById("optionsBtn");
const backBtn = document.getElementById("backBtn");
const extrasBtn = document.getElementById("extrasBtn");
const animationsBtn = document.getElementById("animationsBtn");
const backToOptionsBtn = document.getElementById("backToOptionsBtn");
const backToOptionsFromAnimationsBtn = document.getElementById("backToOptionsFromAnimationsBtn");
const backToOptionsFromSettingsBtn = document.getElementById("backToOptionsFromSettingsBtn");

const settingsBtn = document.getElementById("settingsBtn");

const optionsMenu = document.getElementById("options-menu");
const extrasMenu = document.getElementById("extras-menu");
const animationsMenu = document.getElementById("animations-menu");

const settingsMenu = document.getElementById("settings-menu");

const menuBtn = document.getElementById("menu-button");

// baggrundsmusik
const backgroundMusic = new Audio('sounds/Im looking at the clouds(shima version1).mp3')

// "Ouch"-lyde
const ouchSounds = [
    new Audio('sounds/ouchShima1-first.mp3'),
    new Audio('sounds/ouchShima1-second.mp3'),
    new Audio('sounds/ouchShima1-third.mp3'),
    new Audio('sounds/ouchShima1-fourth.mp3'),
    new Audio('sounds/ouchShima1-fifth.mp3'),
    new Audio('sounds/ouchShima1-sixth.mp3')
];


// Menuer - sidehåndtering

startGameBtn.addEventListener("click", function () {
    gameScreen.style.display = "flex";
    optionsMenu.style.display = "none";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";

    // baggrundsmusik
    backgroundMusic.loop = true;
    backgroundMusic.play();
});

optionsBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "flex";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";
});

backBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "none";
    splashScreen.style.display = "flex";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";
});

extrasBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "none";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "flex";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";
});

animationsBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "none";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "flex";
    settingsMenu.style.display = "none";
});

backToOptionsBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "flex";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";
});

backToOptionsFromAnimationsBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "flex";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";
});

settingsBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "none";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "flex";
});

backToOptionsFromSettingsBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "flex";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";
});

menuBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    optionsMenu.style.display = "flex";
    splashScreen.style.display = "none";
    extrasMenu.style.display = "none";
    animationsMenu.style.display = "none";
    settingsMenu.style.display = "none";
})

// Notifikationssystem: 
// "duration" = tiden notifikationen vises før ".hide" oprettes)
// "fadeOutTime" = tid før ".hide" fjernes i DOM efter oprettelse)
function showNotification(message, type = 'default', duration = 1000 * 2, fadeOutTime = 1000 * 3) {
    const notificationContainer = document.getElementById('notification-container')
    const notificationBox = document.createElement('div');
    notificationBox.classList.add('notification', type);
    notificationBox.textContent = message;

    notificationContainer.appendChild(notificationBox);

    setTimeout(() => {
        notificationBox.classList.add('hide');
        setTimeout(() => notificationBox.remove(), fadeOutTime);
    }, duration);
}

// "Auto Notifikation - til "automatisk kør" under styling (comment out when done)

// function runNotifications() {
//     setInterval(() => {
//         showNotification("Test notification!", "success");
//     }, 1000 * 3);
// }
// runNotifications();

// Health Bar logikken 
let health = 100;
const healthFill = document.getElementById("health-fill");
const healthValue = document.getElementById("health-value");

function updateHealth(change) {
    health = Math.max(0, Math.min(100, health + change));

    healthFill.style.width = health + "%";

    healthValue.textContent = health;

    if (health <= 0) {
        showNotification("You died!", "error");
    }
}

// knapper til debugging/gameplay mechanics
const oneWormBtn = document.getElementById("oneWormBtn")
const oneDmgBtn = document.getElementById("oneDmgBtn")
const fiveDmgBtn = document.getElementById("fiveDmgBtn")
const eatWormBtn = document.getElementById("eatWormBtn")

// Worm logik
let worms = 0;
const wormsValue = document.getElementById("worms-value");

function updateWorms(change) {

    worms = Math.max(0, Math.min(5, worms + change));

    wormsValue.textContent = worms;

    // Fejl: Efter implementering af if...else.
    // Problem: Notifikation "You Collected a Worm!" skal kun vises når der indsamles en orm.
    // Løsning: tjekke om "change" er et positivt tal("når ormen indsamles")
    // "Collection"(change = +1) vs "Consuming"(change = -1) - og derfor:
    if (change > 0) {
        if (worms >= 5) {
            showNotification("You Cannot Carry anymore Worms", "error");
        } else {
            showNotification("You collected a Worm!", "success");
        }
    };

    // Dynamisk div (worms stacking)
    const wormsContainer = document.getElementById("worms-container");
    wormsContainer.innerHTML = "";

    for (let i = 0; i < worms; i++) {
        const wormImg = document.createElement("img");
        wormImg.src = "sprites/one-worm4.png";
        wormImg.alt = "Worm image";
        wormsContainer.appendChild(wormImg);
    }
}

// Debugging Screen Buttons logik her
oneWormBtn.addEventListener("click", function (e) {

    console.log('Du klikkede på "Acquire 1 Worm" knappen!')

    updateWorms(1);
});

eatWormBtn.addEventListener("click", function (e) {

    console.log('Du klikkede på "Eat Worm" knappen!')

    if (worms > 0) {
        updateWorms(-1);
        updateHealth(5);
        showNotification("You ate a Worm! Gained 5 HP", "success");
    } else {
        showNotification("No more worms :(", "error");
    }
});

// "Ouch"-lyde logik - sættes på "Dmg"-knapper med "modulus" løsning
let currentOuchSoundIndex = 0;

oneDmgBtn.addEventListener("click", function (e) {

    console.log('Du klikkede på "Take 1 Damage" knappen!')

    updateHealth(-1);

    // afspiller arrayets "aktuelle" lyd
    ouchSounds[currentOuchSoundIndex].play();

    // opdaterer "currentOuchIndex" til at afspille den næste lyd i rækkefølgen(med et loop forårsaget af modulus)
    currentOuchSoundIndex = (currentOuchSoundIndex + 1) % ouchSounds.length;

    showNotification("You took 1 Damage!", "error");
});

fiveDmgBtn.addEventListener("click", function (e) {

    console.log('Du klikkede på "Take 5 Damage" knappen!')

    updateHealth(-5);

    // afspiller arrayets "aktuelle" lyd
    ouchSounds[currentOuchSoundIndex].play();

    // opdaterer "currentOuchIndex" til at afspille den næste lyd i rækkefølgen(med et loop forårsaget af modulus)
    currentOuchSoundIndex = (currentOuchSoundIndex + 1) % ouchSounds.length;

    showNotification("You took 5 Damage!", "error");
});