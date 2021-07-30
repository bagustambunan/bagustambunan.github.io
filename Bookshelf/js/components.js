function TombolHapus(id_buku) {
    const comp_hapus = document.createElement("button");
    comp_hapus.classList.add("btn", "btn-sm", "btn-outline-danger");
    comp_hapus.innerHTML = 'Hapus';

    comp_hapus.addEventListener("click", function () {
        hapus_buku(id_buku);
    });

    return comp_hapus;
}

function TombolSudahSelesai(id_buku) {
    const comp_tombol = document.createElement("button");
    comp_tombol.classList.add("btn", "btn-sm", "btn-outline-primary");
    comp_tombol.innerHTML = 'Selesai dibaca';

    comp_tombol.addEventListener("click", function () {
        toggle_selesai(id_buku);
    });

    return comp_tombol;
}

function TombolBatalSelesai(id_buku) {
    const comp_tombol = document.createElement("button");
    comp_tombol.classList.add("btn", "btn-sm", "btn-outline-warning");
    comp_tombol.innerHTML = 'Belum selesai';

    comp_tombol.addEventListener("click", function () {
        toggle_selesai(id_buku);
    });

    return comp_tombol;
}

function Buku(id_buku, judul, penulis, tahun, selesai){
    const comp_buku = document.createElement("div");
    comp_buku.classList.add("border", "rounded", "p-2");

    const comp_judul = document.createElement("div");
    const teks_judul = document.createElement("span");
    teks_judul.classList.add("fw-bold");
    teks_judul.innerText = judul;
    comp_judul.append(teks_judul);

    const comp_penulis = document.createElement("div");
    const teks_penulis = document.createElement("span");
    teks_penulis.innerText = penulis;
    comp_penulis.append(teks_penulis);

    const comp_tahun = document.createElement("div");
    const teks_tahun = document.createElement("span");
    teks_tahun.classList.add("text-secondary");
    teks_tahun.innerText = tahun;
    comp_tahun.append(teks_tahun);

    const comp_hapus = TombolHapus(id_buku);
    const comp_toggle = selesai? TombolSudahSelesai(id_buku) : TombolBatalSelesai(id_buku);

    comp_buku.append(comp_judul, comp_penulis, comp_tahun, comp_hapus, comp_toggle);

    return comp_buku;
}