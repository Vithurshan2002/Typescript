interface USER{
    name:string,
    age:number
}
const res='{"name":"vithu","age":100}'
const userr=JSON.parse(res) as USER;

console.log(`${userr.name} ${userr.age}`)