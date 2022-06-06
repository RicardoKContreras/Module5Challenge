var tasks = {};
$("p#currentDay.lead").replaceWith(moment().format('MMMM Do YYYY, h:mm:ss a'));



  var moringTask = $(".task1")
  var testingEl = $("p#currentDay.lead").replaceWith(moment().format('MMMM Do YYYY, h:mm:ss a'));





whatsDue = [moringTask];
console.log(moringTask);


    var taskOne = $(".btn1").on("click",function(){
         tasks = localStorage.setItem("task", JSON.stringify(whatsDue));
        console.log("I am clicked");

    });






