/*
 * DON'T CHANGE
 * */

const data = [];
const randomNumber = Math.floor(Math.random() * 100);

function createArray() {
    for (let i = 0; i < randomNumber; i++) {
      data.push(createArrayElement())
    }
  
    // Recursive
    if (data.length == 0) {
      createArray();
    }
  }
  
  function createArrayElement() {
    let random = Math.floor(Math.random() * 1000);
  
    return [null, random][Math.floor(Math.random() * 2)]
  }
  
  createArray()
/*
 * Code Here!
 * */


//=====clean data v1=====
// function clean(data) {
//   console.log(`BEFORE`);
//   console.log(data);
//   console.log(`AFTER`);
//   filtered = data.filter(el => el != null);
//   console.log(filtered);
//   bubbleSort
// }

//=====clean data v2=====
function clean(data) {
  console.log(`BEFORE`);
  console.log(data);
  console.log(`AFTER`);
  filtered = data.filter(i => typeof i === 'number');
  console.log(filtered);
  bubbleSortAsc(filtered);
}


//function to sort data ASCENDING using bubble sort algorithm
function bubbleSortAsc(filtered) {
  let temp;
  for(let i=0; i<filtered.length; i++) {
      for (let j=0; j<filtered.length-i-1; j++) { 
          if (filtered[j] > filtered[j+1]) {
            temp = filtered[j];
            filtered[j] = filtered[j+1];
            filtered[j+1] = temp;
          }
      }
  }
  //print data
  console.log(`SORT ASCENDING`);
  console.log(filtered);
  bubbleSortDesc(filtered); 
}


//function to sort data DESCENDING using bubble sort algorithm
function bubbleSortDesc(filtered) {
  let temp;
  for(let i=0; i<filtered.length; i++) {
      for (let j=0; j<filtered.length-i-1; j++) { 
          if (filtered[j] < filtered[j+1]) {
            temp = filtered[j];
            filtered[j] = filtered[j+1];
            filtered[j+1] = temp;
          }
      }
  }
  //print data
  console.log(`SORT DESCENDING`);
  console.log(filtered); 
}

/*
 * DON'T CHANGE
 * */

if (process.argv.slice(2)[0] == "test") {
  try {
    clean(data).forEach(i => {
      if (i == null) {
        throw new Error("Array still contains null");
      }
    })
  }
  catch(err) {
   // console.error(err.message);
  }
}
  
