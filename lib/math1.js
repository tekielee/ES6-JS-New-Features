export * from "math"
export var e = 2.71828182846
export default (x) => Math.exp(x)

//  someApp.js
import exp, { pi, e } from "math1"
console.log("e^{π} = " + exp(pi))