function panggilobject(){
    var mahasiswa = {
        nama : "tri",
        umur : 23 ,
        jurusan : "teknik informatika",
        semester : 7,
    }
    for(var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}
panggilobject();