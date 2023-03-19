const baseBox = 2;
const newBox = 0;

function clickHandler() {
  const rooms = Number(document.getElementById("rooms").value);
  const people = Number(document.getElementById("people").value);
  console.log(rooms);
  console.log(people);

  if (rooms === 1 && people === 1) {
    console.log(`You only need ${baseBox} boxes!`);
    const elementMain = document.querySelector(".hidden");
    elementMain.classList.add("visible");
    const elementOne = document.querySelector(".hidden2");
    elementOne.classList.add("visible");
  } else {
    console.log("need to calculate how many boxes");
    const newBox = baseBox * (rooms + people);
    console.log(`You only need ${newBox} boxes!`);
  }

  // console.log("Rooms: " + rooms);
  // console.log("People: " + people);

  // const elementMain = document.querySelector(".hidden");
  // elementMain.classList.add("visible");

  // console.log(newBox);

  // calculation(rooms, people);
}
