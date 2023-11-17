const EventEmitter = require("events");
const myEmitter = new EventEmitter();

//Event listeners
myEmitter.on("bithday", () => {
  console.log(`Happy Birthday!`);
});

myEmitter.on("bithday", (gift) => {
   console.log(`I will send a ${gift}!`);
});

myEmitter.emit("bithday", 'watch')