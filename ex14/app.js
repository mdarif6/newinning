const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "laptop",
  "light bulb",
  "USB drive",
  "elephant",
];

const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];
  console.log(newDeskArr);

  // Your code goes here
  console.log("remove last item", newDeskArr.pop());
  console.log("sorting ", newDeskArr.sort());
  console.log("remove last item", newDeskArr.unshift(newDeskArr.pop()));
  console.log(newDeskArr);
  //usb on last -first find index then splice and push on last
  const usbIndex = newDeskArr.indexOf("USB drive");
  console.log(newDeskArr.splice(usbIndex, 1), "usb index");
  newDeskArr.push(newDeskArr.splice(usbIndex, 1));

  const laptopIndex = newDeskArr.indexOf("laptop");
  newDeskArr.splice(laptopIndex, 1);
  console.log(laptopIndex);
  console.log(newDeskArr);
  // Your code ends here

  return newDeskArr;
};
const result = processArray(deskArray);
