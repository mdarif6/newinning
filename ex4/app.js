class Bagpack {
  constructor(
    name,
    volume,
    color,
    strapLengthL,
    strapLengthR,
    dateacquired,
    lidOpen
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.year = year;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };

    this.lidOpen = lidOpen;
    this.dateacquired = dateacquired;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  newStrapLength(leftLength, rightLength) {
    this.strapLength.left = leftLength;
    this.strapLength.right = rightLength;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateacquired);
    let elapsed = now - acquired;
    let daySinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daySinceAcquired;
  }
}

const everyDayBagPack = new Bagpack(
  "MyBag Pack",
  50,
  "gray",
  40,
  40,
  "Jul 12 1989 22:53:32 PST",
  true
);

console.log("complete Object :", everyDayBagPack);
console.log("date acquired :", everyDayBagPack.dateacquired);
console.log("Age of bag: ", everyDayBagPack.backpackAge());
