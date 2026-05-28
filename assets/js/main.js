// [TAG: DOM_ELEMENTS_INIT] Pengambilan elemen DOM setelah script dimuat
const btnNavbarCta = document.getElementById('btn-cta-nav');
const btnHeroPrimaryAction = document.getElementById('btn-hero-primary');
const btnHeroSecondaryAction = document.getElementById('btn-hero-secondary');

// [TAG: EVENT_LISTENERS_ASSIGNMENT] Menghubungkan element dengan file interaction.js
if (btnNavbarCta) {
    btnNavbarCta.addEventListener('click', function () {
        triggerButtonFeedback('Navbar Contact Button');
    });
}

if (btnHeroPrimaryAction) {
    btnHeroPrimaryAction.addEventListener('click', function () {
        triggerButtonFeedback('Hero Explore Button');
    });
}

if (btnHeroSecondaryAction) {
    btnHeroSecondaryAction.addEventListener('click', function () {
        triggerButtonFeedback('Hero Services Button');
    });
}
// [TAG: INITIALIZATION_CALL] Menjalankan fungsi validasi form dari interaction.js
initContactValidation();