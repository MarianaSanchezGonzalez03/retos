function countHours(year, holidays) {
    let extraHours = 0;
      holidays.forEach(holiday => {
        const fecha = new Date(`${holiday}/${ year}`);
        const dayOfWeek = fecha.getDay();
        dayOfWeek > 0 && dayOfWeek < 6 ? extraHours +=2 :  extraHours = extraHours;
      })
      return extraHours;
    }
  
  
  const year = 2022;
  const holidays = ['01/06', '04/01', '12/25']; // formato MM/DD