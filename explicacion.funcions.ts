function getAverageString(a: number, b: number, c: number): string {
    const total = a + b + c;
    const average = total / 3;
    //return average.toString()
    return 'The average is ' + average;
   }
const result = getAverageString(4, 3, 8); // 'The average is 5'

console.log(result)


function getAverageNumber(a: number, b: number, c: number): number {
    const total = a + b + c;
    const average = total / 3;
    return average;
   }
const resultNumber = getAverageNumber(4, 3, 8); // 'The average is 5'

console.log(resultNumber)