const minDate = (dateOne, dateTwo) => {

    let [dayOne, monthOne, yearOne] = dateOne.split("/").map(Number);
    let [dayTwo, monthTwo, yearTwo] = dateTwo.split("/").map(Number);
    
    if (yearOne === yearTwo) {
      if (monthOne === monthTwo) {
        if (dayOne === dayTwo)
          return dateOne;
        else return (dayOne < dayTwo) ? dateOne:dateTwo;
      } else return (monthOne < monthTwo) ? dateOne:dateTwo;
    } else return (yearOne < yearTwo) ? dateOne:dateTwo;
  }
    // console.log(typeof dayOne)

console.log(minDate('20006/01/2021', '2005/011/20211'))
// minDate('20/01/2021', '2005/011/20211')
// minDate('20006/01/2021', '2005/011/20211')
// minDate('20006/01/2021', '2005/011/20211')
