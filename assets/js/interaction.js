// [TAG: INTERACTION_LOGIC] Fungsi reusable untuk memberikan logika respon saat tombol diklik
function triggerButtonFeedback(buttonIdentifier) {
    console.log(`[LOG] Aksi dipicu dari elemen: ${buttonIdentifier}`);
    alert(`Aksi sukses! Berinteraksi langsung dengan Vanilla JS via target: ${buttonIdentifier}`);
}
// [TAG: CONTACT_VALIDATION_LOGIC] Logika Validasi Formulir Murni Tanpa Library

function initContactValidation() {
    const contactForm = document.getElementById('neo-contact-form');

    if (!contactForm) return; // Mencegah error jika form tidak ditemukan di halaman aktif

    // Mengambil element input dan penanda error
    const inputName = document.getElementById('contact-name');
    const inputEmail = document.getElementById('contact-email');
    const inputMessage = document.getElementById('contact-message');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');

    // Fungsi pembantu mengecek validitas format email menggunakan regex
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Event saat formulir dikirim/submit
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Menghentikan pengiriman default bawaan browser

        let isFormValid = true;

        // Validasi Input Nama (Tidak boleh kosong / minimal 2 karakter)
        if (inputName.value.trim().length < 2) {
            errorName.style.display = 'block';
            inputName.style.borderColor = '#FF0033';
            isFormValid = false;
        } else {
            errorName.style.display = 'none';
            inputName.style.borderColor = 'var(--dark-black)';
        }

        // Validasi Input Email
        if (!isValidEmail(inputEmail.value.trim())) {
            errorEmail.style.display = 'block';
            inputEmail.style.borderColor = '#FF0033';
            isFormValid = false;
        } else {
            errorEmail.style.display = 'none';
            inputEmail.style.borderColor = 'var(--dark-black)';
        }

        // Validasi Input Pesan
        if (inputMessage.value.trim().length < 10) {
            errorMessage.textContent = "Pesan minimal berisi 10 karakter!";
            errorMessage.style.display = 'block';
            inputMessage.style.borderColor = '#FF0033';
            isFormValid = false;
        } else {
            errorMessage.style.display = 'none';
            inputMessage.style.borderColor = 'var(--dark-black)';
        }

        // Eksekusi jika semua input lolos validasi
        if (isFormValid) {
            console.log(`[SUBMIT_SUCCESS] Data Berhasil Divalidasi:`, {
                nama: inputName.value,
                email: inputEmail.value,
                pesan: inputMessage.value
            });

            // [TAG: TRUST_SIGNALS_FORM] Secure submit button visual transition
            const submitBtn = document.getElementById('btn-submit-contact');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'TRANSMITTING DATA...';
            }

            // Memberikan notifikasi sukses kaku khas neubrutalism setelah render selesai
            setTimeout(function () {
                alert(`TERIMA KASIH ${inputName.value.toUpperCase()}!\nPesan Anda berhasil dikirim secara asinkron.`);

                // Mengosongkan form kembali setelah sukses
                contactForm.reset();

                // Mengembalikan tombol submit ke state awal
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'SEND MESSAGE ↗';
                }
            }, 100);
        }
    });
}

// [TAG: SCROLL_REVEAL_LOGIC] IntersectionObserver for scroll-triggered entrance animations
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    if (!revealElements.length) return;

    // [TAG: SCROLL_REVEAL_OBSERVER] Configure observer with threshold and offset
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Animasi hanya dipicu sekali
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
        observer.observe(el);
    });
}

// [TAG: KINETIC_STATS_TICKER] Scroll-triggered count-up animation for About section bento box
function initKineticStatsTicker() {
    const statNode = document.querySelector('.stat-number');
    if (!statNode) return;

    const targetVal = parseInt(statNode.getAttribute('data-target'), 10) || 0;
    
    // Intersection Observer to run animation only when visible in viewport
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCount(statNode, 0, targetVal, 1200); // animate over 1200ms
                observer.unobserve(entry.target); // run only once
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(statNode);

    function animateCount(element, start, end, duration) {
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = Math.floor(progress * (end - start) + start);
            element.textContent = currentVal + '+';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }
}