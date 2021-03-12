//declare array
let fridge = ["tomato", "broccoli", "kale", "cabbage", "apple"];

// check from all fridge
for (let i=0; i<fridge.length; i++) {
    // if apple skip
    if (fridge[i] === 'apple') continue;
    //else print text
    else console.log(`${fridge[i]} is a healthy food, it's definitely worth to eat`);
}
