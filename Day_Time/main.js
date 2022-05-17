// Declare the variables to request the day and add the week array
let today = new Date();
  let day = today.getDay();
  let week = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  // show in console the date
  console.log("Today is : " + week[day] + ".");
  // We declare the variables that will have the hour, minute and second
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  // Make a function to evaluate if the time is given in pm or am
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
  // show in console the time
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);