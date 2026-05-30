// [TAG: DOM_ELEMENTS_INIT] Pengambilan elemen DOM setelah script dimuat
const btnNavbarCta = document.getElementById('btn-cta-nav');
const btnHeroPrimaryAction = document.getElementById('btn-hero-primary');
const btnHeroSecondaryAction = document.getElementById('btn-hero-secondary');

// [TAG: EVENT_LISTENERS_ASSIGNMENT] Menghubungkan element dengan aksi interaksi
if (btnNavbarCta) {
    btnNavbarCta.addEventListener('click', function () {
        // Mengambil elemen target seksi kontak
        const contactSection = document.getElementById('contact');

        if (contactSection) {
            // Mengambil tinggi navbar untuk offset kalkulasi agar posisi scroll pas
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            // Kalkulasi posisi target dikurangi tinggi navbar biar tidak tertutup sticky menu
            const targetPosition = contactSection.offsetTop - navbarHeight;

            // Eksekusi gulir halaman (scroll) secara mulus murni menggunakan Vanilla JS
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Efek Micro-Interaction: Berikan fokus otomatis ke input nama setelah scroll selesai
            setTimeout(function () {
                const inputName = document.getElementById('contact-name');
                if (inputName) inputName.focus();
            }, 800); // Delay 800ms menunggu animasi scroll selesai
        }
    });
}

// [TAG: SMOOTH_SCROLL_NAVIGATION_LOGIC] Smooth scroll for About & Services nav links
// Mirrors the Contact Us button workflow: prevent default, calc offset, smooth scroll
const navScrollLinks = document.querySelectorAll('.nav-scroll-link');

navScrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Mengambil ID target dari atribut data-target
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Mengambil tinggi navbar untuk offset kalkulasi agar posisi scroll pas
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            // Kalkulasi posisi target dikurangi tinggi navbar biar tidak tertutup sticky menu
            const targetPosition = targetSection.offsetTop - navbarHeight;

            // Eksekusi gulir halaman (scroll) secara mulus murni menggunakan Vanilla JS
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// [TAG: HERO_EXPLORE_SCROLL_BINDING] Refactor click listener to scroll to Portfolio section with offset
if (btnHeroPrimaryAction) {
    btnHeroPrimaryAction.addEventListener('click', function (event) {
        event.preventDefault();
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = portfolioSection.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

if (btnHeroSecondaryAction) {
    btnHeroSecondaryAction.addEventListener('click', function () {
        triggerButtonFeedback('Hero Services Button');
    });
}
// [TAG: INITIALIZATION_CALL] Menjalankan fungsi validasi form dari interaction.js
initContactValidation();
// [TAG: SCROLL_REVEAL_INIT] Mengaktifkan animasi entrance saat scroll
initScrollReveal();
// [TAG: KINETIC_STATS_TICKER] Menjalankan animasi hitung cepat statistik bento
initKineticStatsTicker();
// Inisialisasi filter portofolio
initPortfolioFilter();