// callback hell
function getBurger(callback) {
  setTimeout(() => {
    const burger = "🍔";
    console.log("here the burger", burger);
    callback(burger);
  }, 2000);
}
getBurger((burger) => {
  console.log("got the burger", burger);
});
