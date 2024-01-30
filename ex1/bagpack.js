const bagPack = {
    name: "Every Day Bagpack",
    color: "gray",
    volume: 50,
    strapLength: {
        left: 30,
        right: 30
    },
    lidOpen: false,
    toggleLid: function (lidstatus) {
        this.lidOpen = lidstatus
    },
    newStapLength: function (leftLenght, rightLength) {
        this.strapLength.left = leftLenght;
        this.strapLength.right = rightLength
    }
}
console.log("Bagpack :", bagPack)
console.log("Lid status on before:", bagPack.lidOpen)
bagPack.toggleLid(true)
console.log("Lid status on after :", bagPack.lidOpen)

console.log("Straplength left before :", bagPack.strapLength.left)
bagPack.newStapLength(40, 40)
console.log("Straplenght left after :", bagPack.strapLength.left)