// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const stringInput = "EIGEN1";
function reverseAlphabet(value) {
  const reverse = value.replace(/[a-zA-Z]+/gm, function (item) {
    return item.split("").reverse().join("");
  });

  console.log(reverse);
  //   Split string
  // const string =
}

reverseAlphabet(stringInput);
