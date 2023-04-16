const baseBox = 2;
let newBox = 0;

function clickHandler() {
  const rooms = Number(document.getElementById("rooms").value);
  const people = Number(document.getElementById("people").value);
  const btn1 = Number(
    document.querySelector('input[name="button"]:checked').value
  );
  const btn2 = Number(
    document.querySelector('input[name="button2"]:checked').value
  );
  console.log(rooms);
  console.log(people);

  if (rooms === 1 && people === 1 && btn1 === true && btn2 === true) {
    console.log(`You only need ${baseBox} boxes!`);
    return newBox;
    const elementMain = document.querySelector(".hidden");
    elementMain.classList.add("visible");
    const elementOne = document.querySelector(".hidden2");
    elementOne.classList.add("visible");
  } else {
    console.log("need to calculate how many boxes");
    newBox = Math.ceil(baseBox * btn1 * btn2 * (rooms + people));

    // return (newBox = Math.ceil(baseBox * btn1 * btn2 * (rooms + people)));
  }

  console.log("rooms " + rooms);
  console.log("people " + people);
  console.log("button value " + btn1);
  console.log("button2 value " + btn2);
  console.log(baseBox * btn1 * btn2 * (rooms + people));
  console.log(`You only need ${newBox} boxes!`);

  document.getElementById("boxAmm").innerHTML = `You need ${newBox} boxes NEW`;
  const elementMain = document.querySelector(".hidden");
  elementMain.classList.add("visible");
  const elementOne = document.querySelector(".hidden2");
  elementOne.classList.add("visible");
  // document.getElementById("boxAmm").innerHTML = `${newBox}`;
  // const para = document.createElement("p");

  // const node = document.createTextNode(`You need ${newBox} boxes`);
  // para.appendChild(node);
  // document.body.innerHTML = node2;
  // const element = document.getElementById("boxAmm");
  // element.appendChild(para);

  // console.log("Rooms: " + rooms);
  // console.log("People: " + people);

  // const elementMain = document.querySelector(".hidden");
  // elementMain.classList.add("visible");

  // console.log(newBox);

  // calculation(rooms, people);
}

// async function output(newBox) {
//   const para = document.createElement("p");
//   const node = document.createTextNode(`You need ${newBox} boxes`);
//   para.appendChild(node);
//   const element = document.getElementById("boxAmm");
//   element.appendChild(para);
// }

// SLIDER SCRIPT
function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
}

// onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)"
