export function buttonsStyleChange() {
    const buttonsPAMBlock = document.querySelectorAll('.js-pAm-buttons').forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('text-block__button_active')) {
                button.classList.add('text-block__button_active');
            } else {
                button.classList.remove('text-block__button_active');
            }
        })
    })
    const buttonsGetStartedBlock = document.querySelectorAll('.js-started-block-button').forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('started-block__button_active')) {
                button.classList.add('started-block__button_active');
            } else {
                button.classList.remove('started-block__button_active');
            }
        })
    })

    const buttonsFeaturesBlock = document.querySelectorAll('.js-features-block-button').forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('features-block__button_active')) {
                button.classList.add('features-block__button_active');
            } else {
                button.classList.remove('features-block__button_active');
            }
        })
    })
}