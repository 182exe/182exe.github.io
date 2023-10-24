function applyTwemojiToAllTextElements() {
    const textElements = document.querySelectorAll('.has-emoji');
    textElements.forEach((element) => {
        // Get the text content of the element
        const text = element.textContent;
        
        // Apply twemoji.parse to the text content
        const emojiText = twemoji.parse(text);
        element.addEventListener("contextmenu", function (e) {
            e.preventDefault(); // This prevents the context menu from appearing
        }, false);
        
        // Set the innerHTML of the element with the parsed text
        element.innerHTML = emojiText;
    })
}
  
  // Call the function to apply Twemoji to all text elements when the document is ready
  document.addEventListener('DOMContentLoaded', applyTwemojiToAllTextElements);