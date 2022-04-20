export const iconZoomReveal = () => {
    const images = document.querySelectorAll('.js-image');
    const zoomIcon = document.querySelector('.js-zoom-icon');

    images.forEach((image, i) => {
        // const zoomIcon = zoomIcons[i];
        image.addEventListener('mouseover', () => {
            zoomIcon.classList.add('images__zoom-icon');
            image.appendChild(zoomIcon);
        })

        // image.addEventListener('mouseout', () => {
        //     zoomIcon.classList.remove('images__zoom-icon');
        // })
    })

    zoomIcon.addEventListener('click', () => {
        console.log('fuck you');
    })
}