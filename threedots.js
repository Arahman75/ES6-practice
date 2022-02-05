const ages = [12, 13, 14, 15, 16, 17];
const ages2 = [18, 19, 20, 21];
const ages3 = [22, 23, 25, 26];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

const ages = [ 12, 13, 14, 15];
const ages2 = [16, 17, 18, 19];
const ages3 = [20, 21, 22, 23];
const allAges2 = [ages, ages2, 5, ages3];
console.log(allAges2);

const ages = [ 12, 13, 14, 15];
const ages2 = [16, 17, 18, 19];
const ages3 = [20, 21, 22, 23];
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPaisa =[650, 450, 250];
const maximum = Math.max(...takaPaisa);
console.log(maximum);