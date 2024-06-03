/* INPUT = ['xc', 'dz', 'bbb', 'dz']
QUERY = ['bbb', 'ac', 'dz']

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT */

const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

function countQuery(input, query) {
  let output = [];
  //   const input = input;

  //   console.log(input);

  query.forEach((each) => {
    // console.log(each);
    // console.log(input.filter((eachInput) => eachInput === each));
    const findData = input.filter((eachInput) => eachInput === each);

    output.push(findData.length);
  });

  console.log(output);
}

// console.log(countQuery(input, query));
countQuery(input, query);
