function nestedobject(){
    var mahasiswa = {
        nama : "shani",
        ipk : {
            semester1 : 3.8,
            semester2 : 3.7,
            semester3 : 3.9,
            semester4 : 3.5,
        }
    }
    console.log(mahasiswa.ipk.semester1)
}
nestedobject();