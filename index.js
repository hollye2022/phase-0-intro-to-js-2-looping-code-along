// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names) {
   let message = []
    for (let i = 0; i < names.length; i++) {
      message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return message;
}
writeCards(names);

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }

}