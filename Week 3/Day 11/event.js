//const ass2 = require('../Week 2/Day 10/ass2.js');


const EventEmitter = require("events")
const readline = require("readline")
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
})
const my = new EventEmitter();

my.on("Login Failed", email => {
    console.log(`${email} is failed to login!`);
    rl.close();
})

my.on("Login Success", email => {
    console.log(`${email} login success!`);
    require('../../Week 2/Day 10/ass2.js');
    rl.close();
})

function login (email, password) {
    const passwordInDb = "12345"
    if (password != passwordInDb) {
        my.emit("Login Failed", email)
    }
    else {
        my.emit("Login Success", email)
    }
}

rl.question("Email: ", email => {
    rl.question("Password: ", password => {
        login(email, password)
    })
})