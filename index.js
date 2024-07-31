document.addEventListener('DOMContentLoaded', () => {
    const $button = document.getElementById('card-arrow')
    const $card_body = document.getElementById('card-body')

    $button.addEventListener('click', () => {
        $button.classList.toggle('rotate')
        $card_body.classList.toggle('card-body--text-hide')
    })

});