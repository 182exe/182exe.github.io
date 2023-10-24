function generateImage() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const image = canvas.toDataURL('image/png')

    const ogImageTag = document.getElementById('ogImage');
    const shortcutIconTag = document.getElementById('shortcutIcon');
    const iconTag = document.getElementById('icon')

    ogImageTag.content = image;
    shortcutIconTag.href = image;
    iconTag.href = image

    const imgElement = new Image();
    imgElement.src = image
    document.body.appendChild(imgElement);
}
generateImage()