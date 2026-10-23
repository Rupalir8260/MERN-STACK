const user={
    name:"Ram",
    age:22
};
const great =(user)=>{
    return`Hello ${user.name},you are ${user.age} years old.`;
};
console.log(great(user));