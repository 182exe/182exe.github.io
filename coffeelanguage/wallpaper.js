document.addEventListener("DOMContentLoaded", function () {
    const fadeContainer = document.getElementById("fade");
    fadeContainer.style.opacity = 0;
});

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);
let animationFrameId

var canvasBlur = document.getElementById('canvas-blur');
canvasBlur.width = width; // Set the width of the duplicate canvas
canvasBlur.height = height; // Set the height of the duplicate canvas

// Perlin noise function
let permutation = generateRandomPermutation();
setInterval(() => {
    permutation = generateRandomPermutation()
}, 1000);

function generateRandomPermutation() {
    const array = [];
    for (let i = 0; i < 256; i++) {
        array.push(i);
    }
    
    // Randomize the array using Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // Duplicate the array to make it 512 elements long
    return array.concat(array);
}

function perlin(x, y) {
    const p = new Array(512);
    const permutationModulo = 256;

    for (let i = 0; i < 256; i++) {
        p[i] = p[i + 256] = permutation[i];
    }

    const floorX = Math.floor(x);
    const floorY = Math.floor(y);

    const X = floorX & 255;
    const Y = floorY & 255;

    const gi00 = p[X + p[Y]] % 12;
    const gi01 = p[X + p[Y + 1]] % 12;
    const gi10 = p[X + 1 + p[Y]] % 12;
    const gi11 = p[X + 1 + p[Y + 1]] % 12;

    let n00 = dot2D(permutationModulo, gi00, x, y);
    let n10 = dot2D(permutationModulo, gi10, x - 1, y);
    let n01 = dot2D(permutationModulo, gi01, x, y - 1);
    let n11 = dot2D(permutationModulo, gi11, x - 1, y - 1);

    const u = fade(x - floorX);
    const v = fade(y - floorY);

    const nx0 = mix(n00, n10, u);
    const nx1 = mix(n01, n11, u);

    return mix(nx0, nx1, v);
}

function dot2D(permutationModulo, hash, x, y) {
    switch (hash) {
        case 0:
            return x + y;
        case 1:
            return -x + y;
        case 2:
            return x - y;
        case 3:
            return -x - y;
        case 4:
            return x;
        case 5:
            return -x;
        case 6:
            return y;
        case 7:
            return -y;
        case 8:
            return x + y;
        case 9:
            return -x + y;
        case 10:
            return x - y;
        case 11:
            return -x - y;
        case 12:
            return y;
        case 13:
            return -y;
        case 14:
            return x;
        case 15:
            return -x;
        default:
            return 0;
    }
}

function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}

function mix(a, b, t) {
    return (1 - t) * a + t * b;
}

import { randomColorGroup } from "./main.js";

document.addEventListener('colorChange', function () {
    restart();
});

function randomColor() {
    const color1 = randomColorGroup.primary;
    const color2 = randomColorGroup.secondary;

    // Extract RGB components of color1
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    // Extract RGB components of color2
    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    // Generate random factor between 0 and 1
    const factor = Math.random();

    // Interpolate RGB values based on the random factor
    const r = Math.floor((1 - factor) * r1 + factor * r2);
    const g = Math.floor((1 - factor) * g1 + factor * g2);
    const b = Math.floor((1 - factor) * b1 + factor * b2);

    // Convert RGB to hex format
    const hex = `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}00`;

    return hex;
}

function createParticles() {
    const particles = [];
    const scaleSmallParticleCount = Math.round((screen.width * screen.height) / 2400);
    const scaleBigParticleCount = Math.round((screen.width * screen.height) / 40000)
    for (let i = 0; i < scaleSmallParticleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 10 + 1;
        const color = randomColor();
        const pdx = 0; // Initialize pdx to 0
        const pdy = 0; // Initialize pdy to 0

        particles.push({ x, y, radius, color, pdx, pdy });
    }
    for (let i = 0; i < scaleBigParticleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 20 + 20;
        const color = randomColor();
        const pdx = 0; // Initialize pdx to 0
        const pdy = 0; // Initialize pdy to 0

        particles.push({ x, y, radius, color, pdx, pdy });
    }

    return particles;
}

function brightnessModHexColor(hexColor, darkenMult) {
    // Remove the '#' if it's present
    hexColor = hexColor.replace(/^#/, '');

    // Parse the hex color into RGB components
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);

    // Calculate the new RGB values (making them half as dark)
    const darkenedR = Math.max(0, Math.round(r * darkenMult));
    const darkenedG = Math.max(0, Math.round(g * darkenMult));
    const darkenedB = Math.max(0, Math.round(b * darkenMult));

    // Convert the darkened RGB components back to hexadecimal
    const darkenedHexColor = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;

    return darkenedHexColor;
}

function renderParticles(particles) {
    function getModifiedParticleColor(particle) {
        // Define the maximum distance for full darkness (adjust as needed)
        const maxDistance = Math.sqrt(Math.pow(width / 4, 2) + Math.pow(height, 2));
        // Calculate darkenMult based on distance
        const distance = Math.sqrt(Math.pow(particle.x - width / 2, 2) + Math.pow(particle.y - height / 2, 2));

        // Calculate darkness effect based on distance
        const darknessEffect = 1 - (1 * distance / maxDistance);

        // Calculate opacity based on distance (inverse relationship)
        const opacity = 1 - (darknessEffect / 5);

        // Apply the darkness effect and opacity to the color
        return `${brightnessModHexColor(particle.color, darknessEffect)}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
    }

    // Render particles on the original canvas
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = getModifiedParticleColor(particle);
        context.fill();
    });

    const blurContext = canvasBlur.getContext('2d');
    blurContext.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
        blurContext.beginPath();
        blurContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        blurContext.fillStyle = getModifiedParticleColor(particle);
        blurContext.fill();
    });
}

let windStrength = 700;
let dx, dy, windAngle, windTimer = 0
const windInterval = 5000; // Interval between gusts of wind in milliseconds
const windEasing = 0.02; // Easing value for wind movement

// Update the gas cloud particles' positions
function updateParticles(particles) {
    particles.forEach((particle) => {
        const noiseX = perlin(particle.x * 0.005, particle.y * 0.005) - 0.5;
        const noiseY = perlin(particle.y * 0.005, particle.x * 0.005) - 0.5;
        const speed = 0.1;

        // Calculate the easing factor (adjust the value to control the easing)
        const easingFactor = 0.015;

        // Interpolate between the previous dx and dy values and the new ones
        dx = particle.pdx + ((noiseX * speed) / (particle.radius / 5) - particle.pdx) * easingFactor;
        dy = particle.pdy + ((noiseY * speed) / (particle.radius / 5) - particle.pdy) * easingFactor;

        // Update the previous dx and dy values
        particle.pdx = dx;
        particle.pdy = dy;

        // Wrap around the screen with repulsion force
        if (particle.x <= -150 || particle.x >= width + 150 || particle.y <= -150 || particle.y >= height + 150) {
            particle.x = width - particle.x
            particle.y = height - particle.y
            dx = -100 * dx
            dy = -100 * dy
        }
        particle.x += dx;
        particle.y += dy;
    });

    // Update the wind timer
    windTimer -= 16; // Assuming a 60 FPS frame rate

    // Check if the wind timer has reached zero
    if (windTimer <= 0) {
        // Generate a new gust of wind
        generateGustOfWind();

        // Reset the wind timer
        windTimer = Math.random() * windInterval;
    }
}

// Generate a gust of wind
function generateGustOfWind() {
    // Set a random wind angle
    windAngle = Math.random() * Math.PI * 2;

    // Set a stronger wind strength
    windStrength = Math.random() * 5 + 10;
}

// Animation loop
function loop(particles) {
    context.clearRect(0, 0, width, height);

    updateParticles(particles);
    renderParticles(particles);

    // Draw the duplicate canvas on top of the original canvas
    context.drawImage(canvasBlur, 0, 0);

    animationFrameId = requestAnimationFrame(() => loop(particles)); // Store the animation frame ID
}

// Function to stop the animation loop
function stopAnimation() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
}

// Initialize the background
function init() {
    stopAnimation(); // Stop any existing animation
    const particles = createParticles();
    loop(particles);
}

// Function to restart the script on resize
function restart() {
    stopAnimation(); // Stop the current animation
    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Update canvas dimensions
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    
    // Update the duplicate canvas dimensions
    canvasBlur.width = width;
    canvasBlur.height = height;

    // Call init() again to regenerate particles and restart the animation
    init();
}

// Initial setup
init();

// Listen for window resize events
window.addEventListener("resize", () => {
    restart();
});