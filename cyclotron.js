function cyclotron(particle, size) {
  let result = [];

  for (let i = 0; i < size; i++) {
      let row = [];

      for (let j = 0; j < size; j++) {
        
          if (particle === 'e') {
              if (i === 0 || j === size - 1) {
                  row.push('e');
              } else {
                  row.push('1');
              }

          } else if (particle === "p") {
              if ((i === 0 ||
                      j === 0 ||
                      (i === size - 1) ||
                      (j === size - 1) ||
                      (i === size - 2 && j === size - 2)
                  ) && !(i === size - 1 && j === size - 1)) {
                  row.push('p');
              } else {
                  row.push('1');
              }
              
          } else if (particle === "n") {
            if (i === 0) {
              row.push('n');
            } else {
              row.push('1')
            }
          }

          else {
              row.push('1');
          }
      }
      result.push(row);
  }
  return result;
}



const eletron = cyclotron('e', 4)

const proton = cyclotron('p', 4)

const neutron = cyclotron('n', 4)

console.log("eletron", eletron)
console.log("proton", proton)
console.log("neutron", neutron)


