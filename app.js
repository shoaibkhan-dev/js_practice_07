// function clickHandler(color){
// // document.body.style.backgroundColor = `${color}`

//     return function (){
//         document.body.style.backgroundColor = `${color}`
//     }
    
// }
// document.getElementById("green").onclick = clickHandler("green")
// document.getElementById("blue").onclick = clickHandler("blue")
// document.getElementById("orange").onclick = clickHandler("orange")
// document.getElementById("yellow").onclick = clickHandler("yellow")
// document.getElementById("red").onclick = clickHandler("red")

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`

    return function (){
      document.body.style.backgroundColor = `${color}`
    }
  }

  document.getElementById("orange").onclick = clickHandler("orange");
  document.getElementById("green").onclick = clickHandler("green");
  document.getElementById("red").onclick = clickHandler("red");
  document.getElementById("blue").onclick = clickHandler("blue");
  document.getElementById("purple").onclick = clickHandler("purple");
  document.getElementById("yellow").onclick = clickHandler("yellow");
  document.getElementById("silver").onclick = clickHandler("silver");
  document.getElementById("black").onclick = clickHandler("black");
  document.getElementById("grey").onclick = clickHandler("grey")

  const day = "monday"
  switch(day){
    case "monday":
    console.log("today is monday");
    console.log("monday monday monday")
    break;
    case "tuesday":
    console.log("today is tuesday");
    break
    case "wednesday":
    console.log("today is wednesday");
    break
    default: 
    console.log("invalid data");
    break
  }