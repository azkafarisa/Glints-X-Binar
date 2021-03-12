/*
 * DON'T CHANGE
 * */
//declare data as array
const data = [];
let filtered = [];
let sorted = [];
//declare randomNumber
const randomNumber = Math.floor(Math.random() * 100);

//function to create array
function createArray() {
  for (let i = 0; i < randomNumber; i++) {
    data.push(createArrayElement())
  }

  // Recursive
  if (data.length == 0) {
    createArray();
  }
}

//function to add element to array
function createArrayElement() {
  let random = Math.floor(Math.random() * 1000);

  return [null, random][Math.floor(Math.random() * 2)]
}

createArray();

/*
 * Code Here!
 * */

//print data
// ini ngeprint jadi string
//console.log(`BEFORE \n${data}`);
console.log(`BEFORE`);
//ini ngeprint jadi array
console.log(data);


//function to clean data from null value
function clean(data) {
  // Code here
  filtered = data.filter(function (el) {
    return el != null;
  });

  //print data
  // ini ngeprint jadi string
  // console.log(`AFTER \n${filtered}`);
  console.log(`AFTER`);
  //ini ngeprint jadi array
  console.log(filtered);
  bubbleSort(filtered);
}


//function to sort data using bubble sort algorithm
function bubbleSort(filtered) {
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
  // ini ngeprint jadi string
  //console.log(`SORTING \n${filtered}`);
  console.log(`SORTING`);
  //ini ngeprint jadi array
  console.log(filtered); 
}
//clean(data);
//bubbleSort(filtered);

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
    console.error(err.message);
  }
}

