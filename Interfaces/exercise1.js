var user1 = function (user) {
    console.log("name is ".concat(user.name, " age is ").concat(user.age, " address is ").concat(user.address));
};
var user2 = function (user) {
    console.log("name is ".concat(user.name, " age is ").concat(user.age));
};
var u1 = {
    name: "ultra",
    age: 50,
    address: "east"
};
var u2 = {
    name: "kumar",
    age: 10,
};
user1(u1);
user2(u2);
