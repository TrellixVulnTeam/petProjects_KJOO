export function initSlider() {
    var elem = document.querySelector('.quotes-cards');
    var flkty = new Flickity(elem, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        freeScroll: false,
        wrapAround: false,
        prevNextButtons: false
    });
}