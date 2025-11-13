interface User{
    name:string,age:number,address?:string
}

const user1=(user:User)=>{
console.log(`name is ${user.name} age is ${user.age} address is ${user.address}`)
}

const user2=(user:User)=>{
console.log(`name is ${user.name} age is ${user.age}`)
}

const u1={
    name:"ultra",
    age:50,
    address:"east"
}

const u2={
    name:"kumar",
    age:10,
}

user1(u1);
user2(u2);