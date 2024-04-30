export const isLeap = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("is leap year");
      return true;
  } else {
      console.log("is not leap year");
      return false;
  }
};
