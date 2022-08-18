function toHours(minutes) {
  return parseFloat((minutes / 60).toFixed(3))
}
console.log(toHours(60)) // => 0.75
console.log(toHours(45)) // => 1.25
console.log(toHours(125)) // => 2.083