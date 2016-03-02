$('#myCarousel').carousel({
  interval: 5000
});

$('#myCarousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

new WOW().init();


var weekDay = ['satarday','sunday','monday','tuesday','wednesday','thirsday','friday'],
  clockTime = {13:1,14:2,15:3,16:4,17:5,18:6,19:7,20:8,21:9,22:10,23:11,24:12};
  var date = new Date(),day,hour;
    day = date.getDay();
    time = date.getHours();
    min = date.getMinutes();
    
 
    console.log('today is : ' + weekDay[day]);
    if(time > 12){
      console.log('current time is ' + clockTime[time] +':'+ min +' PM'  );
    }else{
      console.log('current time is ' + time +':'+ min +' AM'  );
    }

 
    


