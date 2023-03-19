const baseBox = 2;
const newBox = 0;

function calculation(rooms, people) {
  if (rooms === 1 && people === 1) {
    const elementOne = document.querySelector(".hidden2");
    elementOne.classList.add("visible");
  } else {
    const newBox = baseBox * rooms + baseBox * people;
    return newBox;
  }

  console.log(newBox);
}

function clickHandler() {
  const rooms = document.getElementById("rooms").value;
  const people = document.getElementById("people").value;
  console.log("Rooms: " + rooms);
  console.log("People: " + people);

  const elementMain = document.querySelector(".hidden");
  elementMain.classList.add("visible");

  console.log(newBox);

  calculation(rooms, people);
}
