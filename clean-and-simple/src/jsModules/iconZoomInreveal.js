export const iconZoomReveal = () => {
    const images = document.querySelectorAll('.js-image');
    const zoomIcons = document.querySelectorAll('.js-zoom-icon');
    console.log(images);

    images.forEach((image, i) => {
        const zoomIcon = zoomIcons[i];
        image.addEventListener('mouseover', () => {
            zoomIcon.classList.add('images_zoom-icon');
            image.appendChild(zoomIcon)
            console.log(zoomIcon);
        })
        zoomIcon, image.addEventListener('mouseout', () => {
            image.removeChild(zoomIcon)
        })
    })
}