/* Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3 */

const matrixInput = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function calculateDiagonal(matrix) {
  let diagonal = { main: 0, second: 0, diagonalMain: [], diagonalSecond: [] };
  let matrixLength = matrix.length;

  for (let i = 0; i < matrixLength; i++) {
    diagonal.main += matrix[i][i];
    diagonal.diagonalMain.push(matrix[i][i]);

    diagonal.second += matrix[i][matrixLength - i - 1];
    diagonal.diagonalSecond.push(matrix[i][matrixLength - i - 1]);
  }

  const reduction = diagonal.main - diagonal.second;

  console.log(
    `Maka hasil dari diagonal ${diagonal.diagonalMain.toString()} dan ${diagonal.diagonalSecond.toString()} adalah ${reduction}`
  );
}

calculateDiagonal(matrixInput);
