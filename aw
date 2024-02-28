<!DOCTYPE html>
<html>
  <head>
    <title>Program Radio Button</title>
  </head>
  <body>
    <h1>Program Radio Button</h1>
    <label for="name">Nama:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="number">Angka:</label>
    <input type="number" id="number" name="number"><br><br>
    <button onclick="generateRadioButtons()">OK</button><br><br>
    <div id="radioButtons"></div>
    <button onclick="showResults()">OK</button><br><br>
    <div id="results"></div>
    <script>
      function generateRadioButtons() {
        var number = document.getElementById("number").value;
        var radioButtonsHTML = "";
        for (var i = 1; i <= number; i++) {
          radioButtonsHTML += '<input type="radio" id="option' + i + '" name="option" value="' + i + '"> <label for="option' + i + '">Pilihan ' + i + '</label><br>';
        }
        document.getElementById("radioButtons").innerHTML = radioButtonsHTML;
      }
      function showResults() {
        var name = document.getElementById("name").value;
        var selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption !== null) {
          var optionValue = selectedOption.value;
          var resultsHTML = "Hai, " + name + "! Kamu memilih pilihan nomor " + optionValue + ".";
          document.getElementById("results").innerHTML = resultsHTML;
        } else {
          alert("Mohon pilih salah satu pilihan.");
        }
      }
    </script>
  </body>
</html>
