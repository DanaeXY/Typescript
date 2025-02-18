enum Color {Red, Green, Blue};
let a: Color = Color.Red;
let c: Color = Color.Green;
console.log("enum c", c)
console.log("enum a", a)

enum Color2 {Red = 1, Green = 2, Blue = 4};
let a2: Color = Color.Red; // 1
let b2: Color = Color.Blue;// 4
let c2: Color = Color.Green; // 2

console.log("enum b2 ", b2);
console.log("enum c2 ", c2);