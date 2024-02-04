class Bagpack {
  constructor(
    name,
    volume,
    color,
    strapLengthL,
    strapLengthR,
    pocketNum,
    dateacquired,
    lidOpen,
    image
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.image = image;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.pocketNum = pocketNum;
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
  15,
  "Jul 12 1989 22:53:32 PST",
  true,
  "../asset/images/everyday.svg"
);
const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everyDayBagPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everyDayBagPack.name}</h1>
    <ul class="backpack__features">
      <li class="backpack__volume">Volume:<span> ${
        everyDayBagPack.volume
      }l</span></li>
      <li class="backpack__color">Color:<span> ${
        everyDayBagPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everyDayBagPack.backpackAge()} days old</span></li>
      <li class="backpack__pockets">Number of pockets:<span> ${
        everyDayBagPack.pocketNum
      }</span></li>
      <li class="backpack__strap">Left strap length:<span> ${
        everyDayBagPack.strapLength.left
      } inches</span></li>
      <li class="backpack__strap">Right strap length:<span> ${
        everyDayBagPack.strapLength.right
      } inches</span></li>
      <li class="backpack__lid">Lid status:<span> ${
        everyDayBagPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

console.log("complete Object :", everyDayBagPack);
console.log("date acquired :", everyDayBagPack.dateacquired);
console.log("Age of bag: ", everyDayBagPack.backpackAge());
main.innerHTML = content;
