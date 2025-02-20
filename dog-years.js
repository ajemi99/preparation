const planet = {
    earth:1,
    mercury:0.2408467,
    venus: 0.61519726,
    mars:1.8808158 ,
    jupiter: 11.862615,
    saturn:29.447498,
    uranus:84.016846,
    neptune: 164.79132
}
function dogYears (namePlanet, age){
 let res = convertYear(age) *7
res = parseFloat((res /planet[namePlanet]).toFixed(2))
console.log(typeof(res));

return res
}
const convertYear = arg => arg/(60*60*24*365.25)
console.log(dogYears('earth',1000000000));

