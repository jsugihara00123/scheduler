//Todays date-set in variable using moment(). More up to date way is to use the Vanilla JS Date API
const currentDate = moment().format('dddd, MMM Do, YYYY');

$('#currentDay').html('Todays date is: ' + currentDate);

function timeCompare() {
  
  //Used this method over moment() to try a diffferent method. Not sure if this is "acceptible" by todays standards.
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  if(h == '0') {h = 24}

  var currentHour = h;

  console.log("Current Hour: " + currentHour);


  $(".time-block").each(function() {
    var slotTime = $(this).attr('value');

    if (slotTime < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");

    } else if (slotTime == currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");

    }else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }

  });
}

$(document).ready(function() {

  $('.saveBtn').on('click', function (){
    var selectedTimeSlot = $(this).parent().attr('id');
    var toDoDescription = $(this).siblings('.description').val();

    localStorage.setItem(selectedTimeSlot, toDoDescription);

    console.log('localStorage: ' + selectedTimeSlot + ': ' + toDoDescription);
  })

  for (var i = 22; i > localStorage.length; i--){
    var id1 = '#hour_' + i + ' .description'
    var id2 = 'hour_' + i;
  
    $(id1).val(localStorage.getItem(id2));

  }

  timeCompare();
})