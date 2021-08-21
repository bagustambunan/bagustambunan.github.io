const BOOKS_KEY = "all-my-books";

document.getElementById("form_tambah").addEventListener("submit", function(e) {
    e.preventDefault();
    tambah_buku();

    // document.getElementById("i_judul").value = "";
    // document.getElementById("i_penulis").value = "";
    // document.getElementById("i_tahun").value = "";
    // document.getElementById("i_selesai").checked = false;
});

function render_components(){
    document.getElementById("buku-selesai").innerHTML='';
    document.getElementById("buku-belum").innerHTML='';
    for (buku of semua_buku) {
        const comp_buku = Buku(buku.id_buku, buku.judul, buku.penulis, buku.tahun, buku.selesai);
        if(buku.selesai) {
            document.getElementById("buku-selesai").append(comp_buku);
        } else{
            document.getElementById("buku-belum").append(comp_buku);
        }
    }
    simpan_storage();
}

function ambil_storage(){
    let data = JSON.parse(localStorage.getItem(BOOKS_KEY));
    if (data !== null) semua_buku = data;
}

function simpan_storage(){
    localStorage.setItem(BOOKS_KEY, JSON.stringify(semua_buku));
}

ambil_storage();
render_components();