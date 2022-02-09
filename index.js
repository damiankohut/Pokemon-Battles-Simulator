//PAGE 1


//TITLE
let title = document.getElementById("title");


//CONTAINER
let containerPg1 = document.getElementById("container");


//TEXT ALIGN
let arrayToAlign = [title, containerPg1];
arrayToAlign.forEach( el => {
  el.style.textAlign = "center";
})

//RESET
function resetTitle(){
title.empty()
}

characters = [
  {
    name: "haunter",
    type: 'ghost',
    weakness: ['ghost'],
    img: {
      default: ""
    },
    hp: {
      current: 100,
    },
    attacks: [
      {
        name: "shadow ball",
        hp: randomNum(40,20),
        avail: {
          total: 30,
          remaining: 30
        }
      },
      {
        name: "shadow claw",
        hp: randomNum(60,45),
        avail: {
          total: 10,
          remaining: 10
        }
      },
      {
        name: "curse",
        hp: randomNum(75,60),
        avail: {
          total: 5,
          remaining: 5
        }
      },
      {
        name: "astonish",
        hp: randomNum(160, 130),
        avail: {
          total: 2,
          remaining: 2
        }
      }
    ]
  } ]
