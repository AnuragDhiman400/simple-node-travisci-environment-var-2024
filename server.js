
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const favoriteFood = process.env.FAVORITE_FOOD;
async function main() {

console.log(`My favorite food is ${favoriteFood}`);
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}



main();
