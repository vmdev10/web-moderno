function setDay(dayYear) {
  let dayWeek = dayYear % 7;

  switch (dayWeek) {
    case 1:
      console.log("it's weekend");
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("It's business day");
      break;
    case 0:
      console.log("It's weekend");
      break;
    default:
      console.log("Invalid day");
  }
}

setDay(15);
setDay(31);
setDay(24);
setDay(1);
setDay(2);
setDay(3);
setDay(4);
setDay(5);
setDay(6);
