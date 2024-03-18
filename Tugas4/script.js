// Function untuk menampilkan masukan jumlah pilihan
function tampilMasukanJumlahPilihan() {
    // Mengambil nilai input nama
    var nama = document.getElementById("dataInputNama").value;
    // Eror trapping untuk input nama
    if (nama.trim() === "") {
      alert("Masukkan nama Anda!");
      return;
    }
  
    // Mengambil nilai input jumlah
    var jumlah = parseInt(document.getElementById("dataInputJumlah").value);
    var tag = "";
  
    // Eror trapping untuk input jumlah
    if (isNaN(jumlah) || jumlah < 1) {
      alert("Masukkan jumlah pilihan dengan angka positif dan tidak boleh 0!");
      return;
    }
  
    // Membuat tag HTML untuk input pilihan berdasarkan jumlah yang dimasukkan
    for (var i = 1; i <= jumlah; i++) {
      tag +=
        "Pilihan " + i + ' : <input type="text" id="inputPilihan' + i + '"> <br>';
    }
    document.getElementById("isi").innerHTML = tag;
    document.getElementById("tombolOKPilihan").style.display = "block";
}

// Menambahkan event listener untuk tombol OK Pilihan
document
  .getElementById("tombolOKPilihan")
  .addEventListener("click", function () {
    // Mendapatkan nilai input jumlah
    var jumlah = parseInt(document.getElementById("dataInputJumlah").value);
    // Membuat radio button pilihan berdasarkan jumlah yang dimasukkan
    for (var i = 1; i <= jumlah; i++) {
      var inputPilihan = document.getElementById("inputPilihan" + i);
      var radioPilihan = document.createElement("input");
      radioPilihan.type = "radio";
      radioPilihan.id = "radioPilihan" + i;
      radioPilihan.name = "pilihan";
      radioPilihan.value = inputPilihan.value;
  
      var label = document.createElement("label");
      label.for = "radioPilihan" + i;
      label.textContent = "Pilihan " + i + " : " + inputPilihan.value;
      // Menambahkan radio button dan label ke dalam form
      document.querySelector("form").appendChild(radioPilihan);
      document.querySelector("form").appendChild(label);
      document.querySelector("form").appendChild(document.createElement("br"));
    }
    document.getElementById("tampilkanData").style.display = "block";
  });

// Function untuk menampilkan data terpilih
function tampilkanDataTerpilih() {
    // Mengambil semua radio button dengan name 'pilihan'
    var radioButtons = document.getElementsByName("pilihan");
    var dataTerpilih = "";
    // Loop untuk mencari radio button yang terpilih
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        dataTerpilih = radioButtons[i].value;
        break;
      }
    }
    // Mengambil nilai input nama
    var nama = document.getElementById("dataInputNama").value;
    // Mengambil nilai input jumlah
    var jumlah = document.getElementById("dataInputJumlah").value;
    var pilihan = "";
  
    // Eror trapping untuk pilihan yang tidak dipilih
    if (dataTerpilih === "") {
      alert("Pilih salah satu dari pilihan yang tersedia!");
      return;
    }
  
    // Membuat teks output berdasarkan nilai input
    for (var i = 1; i <= jumlah; i++) {
      var inputPilihan = document.getElementById("inputPilihan" + i);
      pilihan += "Pilihan " + i + " : " + inputPilihan.value +  ", ";
    }
    
    var output = "Hallo, Nama saya " + nama + ", saya mempunyai sejumlah " + jumlah + 
    " pilihan, yaitu : " + pilihan + "dan saya memilih " + dataTerpilih;
    
    // Menampilkan output pada elemen dengan id 'hasilTampil'
    document.getElementById("hasilTampil").innerHTML = output;
}
