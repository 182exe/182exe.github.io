var splashColors = {
    Tropics: { primary: '#FF8A00', secondary: '#E52E71' },
    Blend: { primary: '#14E597', secondary: '#4265FF' },
    Malibu: { primary: '#FF4C5B', secondary: '#8900E5' },
    Foxfire: { primary: '#9BEFE8', secondary: '#75B0EF' },
    Nectarine: { primary: '#FFDA26', secondary: '#FF5400' },
    Vanadium: { primary: '#E107ED', secondary: '#6D10EF' },
    Sweetness: { primary: '#84EDE4', secondary: '#FF7FE7' },
    Lagoon: { primary: '#00A8CC', secondary: '#003D5B' },
    Sorbet: { primary: '#FF6B6B', secondary: '#FFE66D' },
    Galactic: { primary: '#9B2F23', secondary: '#00D4FF' },
    Mystique: { primary: '#58355E', secondary: '#C38D9E' },
    Chloride: { primary: '#FFD100', secondary: '#4F9900' },
    Botany: { primary: '#00FFD1', secondary: '#68FF96' },
    Doppelganger: { primary: '#FF1F00', secondary: '#1880FF' },
    Hallowed: { primary: '#693A52', secondary: '#B5B6BC' },
    Superslate: { primary: '#222433', secondary: '#C3CCC9' },
    Nostradamic: { primary: '#FFB6C1', secondary: '#9783A8' },
    Apotropaic: { primary: '#97DDFF', secondary: '#7F92FF' },
    Brewery: { primary: '#CD5510', secondary: '#88CC9A' },
    Lych: { primary: '#2A1A70', secondary: '#FF951C' },
    Ethereal: { primary: '#FF70D6', secondary: '#027F66' },
    Depository: { primary: '#D8B184', secondary: '#6B3D3A' },
    Strength: { primary: '#D30A0A', secondary: '#514C60' },
    Unknown: { primary: '#EFE6E6', secondary: '#AFA8AA' },
    Toxica: { primary: '#363636', secondary: '#00FF00' },
    Verdant: { primary: '#008080', secondary: '#4B0082' },
    Valentine: { primary: '#E0115F', secondary: '#A52A2A' },
    Forgetmenot: { primary: '#A3A9E0', secondary: '#4287F5' },
    Inferno: { primary: '#FF2400', secondary: '#3F3935' },
    Strength: { primary: '#D30A0A', secondary: '#514C60' },
    Entropy: { primary: '#3D59AB', secondary: '#5571A9' },
    Satin: { primary: '#6C1A1A', secondary: '#BC4B4B' },
    Amaranth: { primary: '#E52B50', secondary: '#ED2939' },
    Obscura: { primary: '#4A4E4D', secondary: '#424642' },
    Frostbite: { primary: '#B2E8FF', secondary: '#0000FF' },
    Marigold: { primary: '#800080', secondary: '#FFA500' },
    Lightwave: { primary: '#FF1493', secondary: '#77F1FF' },
    Affinity: { primary: '#401960', secondary: '#DD0042' },
    Graveyard: { primary: '#618F52', secondary: '#45425E'},
    Melody: { primary: '#C1D7FF', secondary: '#FCE8FF'},
    Sockeye: { primary: '#3E7E75', secondary: '#FF8468'},
    Necromancy: { primary: '#00B783', secondary: '#3F2C2C'},
    Loathing: { primary: '#A09A78', secondary: '#8C1C00'},
    Anthranilate: { primary: '#742EBA', secondary: '#544B4B'},
};

var randomColorGroup = 0;
function color() {
    const randomThemePosition = Math.floor(Math.random() * Object.keys(splashColors).length);
    const randomThemeName = Object.keys(splashColors)[randomThemePosition];
    randomColorGroup = splashColors[randomThemeName];
    
    document.documentElement.style.cssText = `--splash1:${randomColorGroup.primary};--splash2:${randomColorGroup.secondary};`;
    document.getElementById("themedisplay").innerHTML = `<strong>${randomThemeName}</strong>`
}
color();

export { randomColorGroup };

var painting = false;
document.getElementById("themedisplay").addEventListener("click", function() {
    if (painting) { return }
    painting = true
    fadeInOut();
    setTimeout(() => {
        color();
        const colorChangeEvent = new Event('colorChange');
        document.dispatchEvent(colorChangeEvent);
        setTimeout(() => {
            fadeInOut();
        }, 250);
    }, 500);
    setTimeout(() => {
        painting = false
    }, 1500);
});

function fadeInOut() {
    const fadeElement = document.getElementById("fade");
    
    // Check the current opacity and toggle it
    if (fadeElement.style.opacity === "0" || fadeElement.style.opacity === "") {
        fadeElement.style.opacity = "1";
    } else {
        fadeElement.style.opacity = "0";
    }
}

function getDistanceToViewportEdge(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    const distanceToTop = rect.top;
    const distanceToBottom = windowHeight - rect.bottom;
  
    return Math.min(distanceToTop, distanceToBottom);
}
function getVerticalDistanceToViewportCenter(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowCenter = windowHeight / 2;
  
    const elementCenter = rect.top + rect.height / 2;
    const distanceToCenter = Math.abs(windowCenter - elementCenter);
  
    return distanceToCenter;
}
function getRandomCensorChar() {
    const characters = [" ", "#", "$", "%", "&", "*", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "?", "@"];
    return characters[Math.floor(Math.random() * characters.length)];
}
function animateTitle() {
    var originalTitle = document.title;
    var interval = 100; // Duration between character replacements (in milliseconds)
    var timeout = 2000; // Duration of the animation (in milliseconds)
    var title = document.title;
    var newTitle = '';
    
    for (var i = 0; i < title.length; i++) {
        (function(index) {
            setTimeout(function() {
                newTitle = '';
                for (var j = 0; j < title.length; j++) {
                    newTitle += (j === index) ? getRandomCensorChar() : title[j];
                }
                document.title = newTitle;

                if (index === title.length - 1) {
                    setTimeout(function() {
                        document.title = originalTitle;
                    }, timeout);
                }
            }, interval * index);
        })(i);      
    }
}

window.addEventListener("load", () => {
    document.getElementById("watermark").innerHTML = document.getElementById("watermark").innerHTML.replace(/XXXX/g, new Date().getFullYear());
    setInterval(() => {
        animateTitle()
    }, 5000);
});