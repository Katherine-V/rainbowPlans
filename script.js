$(document).ready(function () {
  var today= dayjs();
    $('#1a').text(today.format('MMM D, YYYY'));
  
  let displayDate.innerHTML= today;
  let currentHour= dayjs().hour()

  var saveButton = document.getElementById("save");
    saveButton.addEventListener("click", function (event){
      event.preventDefault();
    })  

  var enterToDo9 = ToDo9.Input.value;
    localStorage.setItem("enterToDo9", 9);
  var enterToDo10 = ToDo10.Input.value;
    localStorage.setItem("enterToDo10", 10);
  var enterToDo11 = ToDo11.Input.value;
    localStorage.setItem("enterToDo11", 11);
  var enterToDo12 = ToDo12.Input.value;
  localStorage.setItem("enterToDo12", 12);  

  var enterToDo13 = ToDo13.Input.value;
    localStorage.setItem("enterToDo13", 13); 
  var enterToDo14 = ToDo14.Input.value;
    localStorage.setItem("enterToDo14", 14); 
  var enterToDo15 = ToDo15.Input.value;
    localStorage.setItem("enterToDo15", 15); 
  var enterToDo16 = ToDo16.Input.value;
    localStorage.setItem("enterToDo16", 16); 
  var enterToDo17 = ToDo17.Input.value;
    localStorage.setItem("enterToDo17", 17); 




  //grabs hour from each time slot and compares it to actual time
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //grabs values and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("ToDo9"));
  $("#hour-10 .time-block").val(localStorage.getItem("ToDo10"));
  $("#hour-11 .time-block").val(localStorage.getItem("ToDo11"));
  $("#hour-12 .time-block").val(localStorage.getItem("ToDo12"));
  $("#hour-13 .time-block").val(localStorage.getItem("ToDo13"));
  $("#hour-14 .time-block").val(localStorage.getItem("ToDo14"));
  $("#hour-15 .time-block").val(localStorage.getItem("ToDo15"));
  $("#hour-16 .time-block").val(localStorage.getItem("ToDo16"));
  $("#hour-17 .time-block").val(localStorage.getItem("ToDo17"));
});

dayjs.format('HH:m');
dayjs({})
dayjs().hour()

/* var calendarEntry= prompt("Things to be done", "enter toDo");
   var calendarEntry= document.createElement(calendarToDo);
 calendarEntry.textContent="Now is" +calendarToDo+".";
 document.body.appendChild(calendarEntry);
});
*/
