/*
 * DON'T CHANGE
 * */

const data = [];
const randomNumber = Math.floor(Math.random() * 100);

function createArray() {
    for (let i = 0; i < randomNumber; i++) {
      data.push(createArrayElement());
    }
  
    // Recursive
    if (data.length == 0) {
      createArray();
    }
  }
  
  function createArrayElement() {
    let random = Math.floor(Math.random() * 1000);
  
    return [null, random][Math.floor(Math.random() * 2)];
  }
  
  createArray();
/*
 * Code Here!
 * */


//=====clean data v1=====
// function clean(data) {
//   console.log(`BEFORE`);
//   console.log(data);
//   console.log(`AFTER`);
//   console.log(data.filter(el => el != null));
// }

//=====clean data v2=====
function clean() {
  console.log(`BEFORE`);
  console.log(data);
  console.log(`AFTER`);
  console.log(data.filter(i => typeof i === 'number'));
  //return data.filter(i => typeof i === 'number');
}

/*
 * DON'T CHANGE
 * */

if (process.argv.slice(2)[0] == "test") {
  try {
    clean().forEach(i => {
      if (i == null) {
        throw new Error("Array still contains null");
      }
    })
    // clean().forEach(element => {console.log(element)
    // });
  }
  catch(err) {
    console.error(err.message);
  }
}
  
