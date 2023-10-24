document.addEventListener("DOMContentLoaded", function() {
    let tiltElements = document.querySelectorAll('.tilt-element');
    if ('ontouchstart' in document.documentElement) {
        return;
    } else {
        tiltElements.forEach((tiltElement) => {
            document.addEventListener('mousemove', (event) => {
                let tiltElementRect = tiltElement.getBoundingClientRect();
                let x, y;
                x = event.clientX - ((tiltElementRect.right + tiltElementRect.left) / 2);
                y = event.clientY - ((tiltElementRect.top + tiltElementRect.bottom) / 2);
                
                // Calculate the distance from the center of the element
                let distance = Math.sqrt(x * x + y * y);
                
                // Apply an exponential tilt based on distance
                let tiltAmount = Math.pow(distance, 1.5) / 2000000;
                
                tiltElement.style.transform = `rotateY(${x * tiltAmount}deg) rotateX(${-y * tiltAmount}deg)`;
            });
        });
    }
});