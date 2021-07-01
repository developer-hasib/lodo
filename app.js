
document.querySelector('button').addEventListener('click', function () {
    let math = Math.floor(Math.random() * 6 + 1);

    document.querySelector('.single_box').innerHTML = ``;

    for (let i = 1; i <= math; i++) {

        document.querySelector('.single_box').innerHTML += `<i class="fas fa-circle"></i>`;

    }
})