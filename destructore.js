const person = {name:"Jack William", age : 17, work : "faceBooking", gfName: "Ema watson",address : "Kochu khet", phone: "01717112211", friends : ['Tom hange','Tom cruse','Tom yarn']};
console.log(person.gfName);
console.log(person.gfName);
console.log(person.gfName);
console.log(person.gfName);

const person = {name:"Jack William", age : 17, work : "faceBooking", gfName: "Ema watson",address : "Kochu khet", phone: "01717112211", friends : ['Tom hange','Tom cruse','Tom yarn']};
const gfName = person.gfName;

console.log(gfName);
console.log(gfName);
console.log(gfName);
console.log(gfName);

const person = {name:"Jack William", age : 17, work : "faceBooking", gfName: "Ema watson",address : "Kochu khet", phone: "01717112211", friends : ['Tom hange','Tom cruse','Tom yarn']};
const gfName = person.gfName;
const phone = person.phone;
console.log(gfName,phone);
console.log(gfName,phone);

const person = {name:"Jack William", age : 17, work : "faceBooking", gfName: "Ema watson",address : "Kochu khet", phone: "01717112211", friends : ['Tom hange','Tom cruse','Tom yarn']};
const {gfName, phone,salary, address} = person;
console.log(gfName,phone,address,salary);
console.log(gfName,phone,address,salary);

const friends = ['Sakib khan', 'Arman khan', 'Amir khan', 'sharuk khan'];
const [chotoFriend,nextFriend,...restFriends] = friends;
console.log(restFriends);

const friends = ['Sakib khan', 'Arman khan', 'Amir khan', 'sharuk khan'];
const [chotoFriend,...olderF] = friends;
console.log(olderF);



