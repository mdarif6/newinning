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
        <img src=${everydayPack.image} alt="" loading="lazy" />
      </figure>
      <h1 class="backpack__name">${everydayPack.name}</h1>
      <ul class="backpack__features">
        <li class="feature backpack__volume">Volume:<span> ${
          everydayPack.volume
        }l</span></li>
        <li class="feature backpack__color">Color:<span> ${
          everydayPack.color
        }</span></li>
        <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
        <li class="feature backpack__pockets">Number of pockets:<span> ${
          everydayPack.pocketNum
        }</span></li>
        <li class="feature backpack__strap">Left strap length:<span> ${
          everydayPack.strapLength.left
        } inches</span></li>
        <li class="feature backpack__strap">Right strap length:<span> ${
          everydayPack.strapLength.right
        } inches</span></li>
        <li class="feature backpack__lid">Lid status:<span> ${
          everydayPack.lidOpen ? "open" : "closed"
        }</span></li>
      </ul>
    `;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

// const usedStatus = () => {
//   let age = everydayPack.backpackAge();
//   let description;
//   if (age >= 30) {
//     if (age >= 365) {
//       if (age >= 1095) {
//         description = "old";
//       } else {
//         description = "used";
//       }
//     } else {
//       description = "lightly used";
//     }
//   } else {
//     description = "new";
//   }

//   console.log(`
//     Age: ${age} days
//     Status: ${description}
//     `);
// };

// usedStatus();

const usedStatus = () => {
  let age = everydayPack.backpackAge();
  age = 2000;
  let description;

  switch (true) {
    case age < 30:
      description = "new";
      break;
    case age >= 30 && age < 400:
      description = "slighty used";
      break;
    case age >= 400 && age < 900:
      description = "used";
      break;
    default:
      console.log(`no descript for the ${age} `);
  }

  console.log(`
      Age: ${age} days
      Status: ${description}
      `);
};

usedStatus();
