//This code will return several type errors
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year?.setAttribute('datetime', thisYear)
// year?.textContent = thisyear; 

//1st variaton

// let year: HTMLElement | null;
// year = document.getElementById('year')
// let thisYear: string;
// thisYear = new Date().getFullYear().toString()
// if(year)  {
//   year?.setAttribute('datetime', thisYear)
//   year?.textContent = thisyear
// }

//2nd Variation
const year = document.getElementById('year') as HTMLSpanElement;

const thisYear: string = new Date().getFullYear().toString();

year.setAttribute('datetime', thisYear)
year.textContent = thisYear