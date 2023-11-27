var time=[
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title:" Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]



// function daily( ){
//   console.log(time[0].timeframes).
//   document.getElementById('work').innerHTML =`${time[1].timeframes.daily.current}`
//   document.getElementById('work').innerHTML =`Last week - ${time[1].timeframes.daily.current}`


// document.getElementById("daily").style.color = "Red"
// document.getElementById("weekly").style.color = "Black"


// var text = ["hello", "goodbye", "morning","wait", "bye"]
// for(var i=0; i < 5; i++){
//     document.getElementById("p" +(i+1)).innerHTML= text[i]
// }





  function daily(){
    for(var i = 0;  i < time.length; i++){
     
      document.getElementById("c" +i).innerHTML= time[i].timeframes.daily.current + "hrs"

    }
    document.getElementById("p1").style.color = "Red"
    document.getElementById("p2").style.color = "grey"
    document.getElementById("p3").style.color = "grey"

  }

   function weekly(){
    for(var i = 0;  i < time.length; i++){
     
      document.getElementById("c" +i).innerHTML= time[i].timeframes.weekly.current + "hrs"
    }
    document.getElementById("p1").style.color = "grey"
    document.getElementById("p2").style.color = "red"
    document.getElementById("p3").style.color = "grey"

   }
  
   function monthly(){
    for(var i = 0;  i < time.length; i++){
     
      document.getElementById("c" +i).innerHTML= time[i].timeframes.monthly.current + "hrs"
    }
    document.getElementById("p1").style.color = "grey"
    document.getElementById("p2").style.color = "grey"
    document.getElementById("p3").style.color = "red"


 }
