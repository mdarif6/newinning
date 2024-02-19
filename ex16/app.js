//set default value to DOM
window.volume = 20;

//create object

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: "8",
  pocketNum: "3",
  newVolume: function (volumePara) {
    console.log("this.volume in the method:", this.volume); //here- object ke andar jo method hai wahaa this.volume=8
    this.volume = volumePara; // reassign kar diya- this.volume me volume
    console.log("this.volume after update:", this.volume);

    (function () {
      console.log("this.volume is nested funtion:", this.volume); // yaha 20 ayega- b/c window.volume me 20 define kia hai
    })(); // and b/c ye func declaration hai isliye hoisted to global scope

    //with arrow function
    (() => {
      // iske paas apna this nahi hai isliye ye closeiest scope ko search karega
      console.log("this.volume is nested funtion:", this.volume); // yaha 5 ayega- b/c colseest available scope object hai
    })(); // and b/c ye func declaration hai isliye hoisted to global scope
  },
};

console.log(greenPack.newVolume(5));
