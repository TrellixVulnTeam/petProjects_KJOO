export const revealProgressIcon = () => {
    const chartDots = document.querySelectorAll('.js-chart-dot');
    const progressIcon = document.querySelector('.js-chart-dot__progressIcon');

    chartDots.forEach((dot, i) => {
        dot.addEventListener('mouseover', () => {
            progressIcon.classList.add('increase-block__speed-rect');
            dot.appendChild(progressIcon);
        })
        dot, progressIcon.addEventListener('mouseout', () => {
            setTimeout(function() {
                progressIcon.classList.remove('increase-block__speed-rect');
            }, 1000)
        })
    })
    progressIcon.addEventListener('click', () => {
        console.log('fuck you');
    })
}