function Bagpack(
  //define parameters
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  //define properties

  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };

  this.lidOpen = lidOpen;

  //Adding methods too

  this.toggleLid = function (lidstatus) {
    this.lidOpen = lidstatus;
  };
  this.newStrapLength = function (leftLength, rightLength) {
    this.strapLength.left = leftLength;
    this.strapLength.right = rightLength;
  };
}
const everyDayBagPack = new Bagpack(
  "everyDayBagPackUsingTempLieteral",
  30,
  "gray",
  28,
  50,
  60,
  false
);

const content = `
<main>
      <article>
      <h1>Tempelate Literals with Documant Object Model</h1>
        <h1>${everyDayBagPack.name}</h1>
        <ul>
          <li>Volume:${everyDayBagPack.volume}</li>
          <li>Color:${everyDayBagPack.color}</li>
          <li>Age:</li>
          <li>Number of pockets:${everyDayBagPack.pocketNum}</li>
          <li>Left strap length:${everyDayBagPack.strapLength.left}</li>
          <li>Right strap length:${everyDayBagPack.strapLength.right}</li>
          <li>Lid status:${everyDayBagPack.lidOpen}</li>
        </ul>
      </article>
    </main>
`;

document.body.innerHTML = content;

console.log("Every Day Ex: ", everyDayBagPack);
console.log("Pocketnum Value: ", everyDayBagPack.pocketNum);
