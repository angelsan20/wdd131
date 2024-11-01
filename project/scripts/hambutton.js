const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    }
});