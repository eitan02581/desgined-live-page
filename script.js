function onHam() {

    document.querySelector('header').classList.toggle('header-height');
    document.querySelector('nav ul').classList.toggle('header-ul-top');

}

function onToggleModal() {
    $('.modal-wrapper').toggleClass('toggle-modal');
    $(".modal").click((ev) => event.stopPropagation());
}