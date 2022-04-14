export function initFaq() {
    const questionItems = document.querySelectorAll('.js-faq-question');
    const answerItems = document.querySelectorAll('.js-faq-answer');

    questionItems.forEach((questionItem, index) => {
        const answerItem = answerItems[index]
        questionItem.addEventListener('click', () => {
            if (!questionItem.classList.contains('faq-menu__question_active')) {
                questionItem.classList.add('faq-menu__question_active');
                answerItem.classList.add('faq-menu__answer_open');
            } else {
                questionItem.classList.remove('faq-menu__question_active');
                answerItem.classList.remove('faq-menu__answer_open');
            }
        })
    })
}