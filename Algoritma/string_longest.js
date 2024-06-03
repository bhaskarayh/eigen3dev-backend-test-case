// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

const sentence = "Saya sangat senang mengerjakan soal algoritma";

longest(sentence);
// mengerjakan: 11 character

function longest(sentence) {
  const longest = sentence.split(" ").sort((a, b) => b.length - a.length)[0];

  console.log(`${longest}: ${longest.length} character`);
}
