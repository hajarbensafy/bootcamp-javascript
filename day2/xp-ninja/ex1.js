const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Nombre aléatoire: ${randomNum}`);
console.log("Nombres pairs:");

for (let i = 0; i <= randomNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}