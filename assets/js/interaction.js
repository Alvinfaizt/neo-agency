// [TAG: INTERACTION_LOGIC] Fungsi reusable untuk memberikan logika respon saat tombol diklik
function triggerButtonFeedback(buttonIdentifier) {
    console.log(`[LOG] Aksi dipicu dari elemen: ${buttonIdentifier}`);
    alert(`Aksi sukses! Berinteraksi langsung dengan Vanilla JS via target: ${buttonIdentifier}`);
}