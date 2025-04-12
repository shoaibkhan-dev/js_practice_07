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

//   const day = "monday"
//   switch(day){
//     case "monday":
//     console.log("today is MONDAY");
//     console.log("monday monday monday")
//     break;
//     case "tuesday":
//     console.log("today is tuesday");
//     break
//     case "wednesday":
//     console.log("today is wednesday");
//     break
//     default: 
//     console.log("invalid data");
//     break
//   }


//   const x = 10;
//   switch (x){
//     case 8:
//         console.log("this is incorrect");
//         break
//     case 9:
//         console.log("this is incorrect");
//         break
//   }


//   function clickHandler(color){
      
//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
//   }
//   document.getElementById("orange").onclick = clickHandler("orange")



  const month = "may"
  switch(april){
    case "april":
    console.log("this month is april");
    break
    case "may":
    console.log("next month is may");
    break
    case "june":
    console.log("june will be after may");
    break
    case "july":
    console.log("july will be after june");
    break
    case "august":
    console.log("august will be so hot");
    break
    default:
    console.log("invalid month");
  }

  const day = 1
  switch(monday){
    case "monday":
        console.log("today is monday");
    break;
    case 2:
        console.log("this is tuesday");
    break;
    case 3:
        console.log("this is wednesday");
    break;
    case 4:
        console.log("this is thirsday");
    default:
        console.log("invalid data")
  }


