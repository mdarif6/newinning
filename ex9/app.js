class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired,
    image
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../asset/images/everyday.svg"
);

const content = `
    
      <figure class="backpack__image">
        <img src=${everydayPack.image} alt="" />
      </figure>
      <h1 class="backpack__name">${everydayPack.name}</h1>
      <ul class="backpack__features">
        <li class="packprop backpack__volume">Volume:<span> ${
          everydayPack.volume
        }l</span></li>
        <li class="packprop backpack__color">Color:<span> ${
          everydayPack.color
        }</span></li>
        <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
        <li class="packprop backpack__pockets">Number of pockets:<span> ${
          everydayPack.pocketNum
        }</span></li>
        <li class="packprop backpack__strap">Left strap length:<span> ${
          everydayPack.strapLength.left
        } inches</span></li>
        <li class="packprop backpack__strap">Right strap length:<span> ${
          everydayPack.strapLength.right
        } inches</span></li>
        <li class="packprop backpack__lid">Lid status:<span> ${
          everydayPack.lidOpen
        }</span></li>
      </ul>

  `;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
// main.innerHTML = content;
newArticle.innerHTML = content;
main.append(newArticle);
