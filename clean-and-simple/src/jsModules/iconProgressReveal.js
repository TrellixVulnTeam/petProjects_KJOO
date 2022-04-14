export const revealProgressIcon = () => {
    const chartDots = document.querySelectorAll('.js-chart-dot');
    const progressIcons = document.querySelectorAll('.js-chart-dot__progressIcon');

    chartDots.forEach((dot, index) => {
        let progressIcon = progressIcons[index]
        dot.addEventListener('mouseover', () => {
            progressIcon.classList.add('increase-block__speed-rect');
            dot.appendChild(progressIcon)
        })
        dot, progressIcon.addEventListener('mouseout', () => {
            setTimeout(function() {
                dot.removeChild(progressIcon)
            }, 1000)
        })
    })
}