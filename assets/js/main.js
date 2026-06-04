// [TAG: DOM_ELEMENTS_INIT] Pengambilan elemen DOM setelah script dimuat
const btnNavbarCta = document.getElementById('btn-cta-nav');
const btnHeroPrimaryAction = document.getElementById('btn-hero-primary');
const btnHeroSecondaryAction = document.getElementById('btn-hero-secondary');
const navHome = document.getElementById('nav-home');
const navLogo = document.getElementById('nav-logo');

// [TAG: EVENT_LISTENERS_ASSIGNMENT] Menghubungkan element dengan aksi interaksi

// [TAG: SMOOTH_SCROLL_TO_TOP_JS] Hubungkan Home dan Logo dengan scroll ke atas mulus
if (navHome) {
    navHome.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (navLogo) {
    navLogo.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

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

// [TAG: NAVBAR_SERVICES_SCROLL_BINDING] Refactor click listener to scroll to Services section with offset
if (btnHeroSecondaryAction) {
    btnHeroSecondaryAction.addEventListener('click', function (event) {
        event.preventDefault();
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = servicesSection.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
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
// Inisialisasi efek hover layanan
initServicesHoverEffect();

// [TAG: THEME_TOGGLE_LOGIC] Dark/light theme toggle with local storage persistence
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggleBtn.innerHTML = isDark ? '<span class="toggle-icon">☀</span>' : '<span class="toggle-icon">◑</span>';
    });
    
    // Check localStorage on load to set theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<span class="toggle-icon">☀</span>';
    }
}