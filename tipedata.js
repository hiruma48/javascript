function tipedata(){
    var data = true;
    console.log(typeof(data))
    if(data === true){
        return data
    }
    else{
        return 'gagal'
    }
}

console.log(tipedata())