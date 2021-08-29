console.log("this is weather app using newDate")
var curDate=document.getElementById('date');
 let weathercon=document.getElementById('weathercon');
 const tempStatus="clouds";
 const getCurrentDay=()=>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
     let currentTime=new Date();
     let a=weekday[currentTime.getDay()];
      return a;
 };
 const getCurrentTime=()=>{
      let months= [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",  
          "August",
          "Sept",
          "Aug",
          "Nov",
          "Dec",
      ];
     var newDate=new Date(); /* yha pr newDate ki wjaay agr tm date ko as a variable create kroge to dikkat aayegi */
     var month=months[newDate.getMonth()];
     var date=newDate.getDate();
     let hours=newDate.getHours();
     let minutes=newDate.getMinutes();
     let period="AM";
     if(hours>11)
     {
         period="PM";
         if(hours>12)
         hours=hours-12;
     }
     if(minutes<10)
     {
         minutes="0"+minutes;
     }
     
    return `${date} ${month} | ${hours}:${minutes} ${period}`; /*this is a template literal*/
 };
    curDate.innerHTML= getCurrentDay()+ " | "+ getCurrentTime();
