let semua_buku = [];

function data_buku(id_buku, judul, penulis, tahun, selesai){
    return ({
        id_buku: id_buku,
        judul: judul,
        penulis: penulis,
        tahun: tahun,
        selesai: selesai
    })
}

function tambah_buku() {
    const id_buku = +new Date();
    const i_judul = document.getElementById("i_judul").value;
    const i_penulis = document.getElementById("i_penulis").value;
    const i_tahun = document.getElementById("i_tahun").value;
    const i_selesai = document.getElementById("i_selesai").checked;

    const buku = data_buku(id_buku, i_judul, i_penulis, i_tahun, i_selesai);

    semua_buku.push(buku);
    render_components();
}

function hapus_buku(id_buku) {
    for (let i = 0; i < semua_buku.length; i++) {
        if (semua_buku[i].id_buku == id_buku) {
            semua_buku.splice(i, 1);
            break;
        }
    }
    render_components();
}

function toggle_selesai(id_buku){

    console.log("aku disini");
    console.log(id_buku);
    for (let i = 0; i < semua_buku.length; i++) {
        if (semua_buku[i].id_buku == id_buku) {
            // semua_buku[i].selesai = !semua_buku[i].selesai;
            console.log("buku ditemukan");
            console.log(semua_buku[i].selesai);

            semua_buku[i].selesai = !semua_buku[i].selesai;
            console.log("sudah di toggle");
            console.log(semua_buku[i].selesai);
        }
    }
    render_components();
}