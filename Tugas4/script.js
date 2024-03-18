function tampilMasukanJumlahPilihan() {
    var nama = document.getElementById("dataInputNama").value;
    //Eror traping Input nama
    if (nama.trim() === "") {
      alert("Masukkan nama Anda!");
      return;
    }
  
    var jumlah = parseInt(document.getElementById("dataInputJumlah").value);
    var tag = "";
  
    // Eror Traping Input jumlah
    if (isNaN(jumlah) || jumlah < 1) {
      alert("Masukkan jumlah pilihan dengan angka positif dan tidak boleh 0!");
      return;
    }
  
    for (var i = 1; i <= jumlah; i++) {
      tag +=
        "Pilihan " + i + ' : <input type="text" id="inputPilihan' + i + '"> <br>';
    }
    document.getElementById("isi").innerHTML = tag;
    document.getElementById("tombolOKPilihan").style.display = "block";
  }
  
  