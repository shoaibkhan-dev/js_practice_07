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
  document.getElementById("black").onclick = clickHandler("black")