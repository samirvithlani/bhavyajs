var users =[
    {
        id:1,
        name:"John",
        age:30,
        gender:"male",
        child:0

    },
    {
        id:2,
        name:"parth",
        age:40,
        gender:"male",
        child:1
    },
    {
        id:3,
        name:"Neha",
        age:30,
        gender:"female",
        child:1
    }
]

// var filusers = users.filter((user)=>{
//     return user.age<40
// })

var filusers = users.filter((user)=>user.age<40)

// for(let i=0;i<users.length;i++){

//     if(users[i].age<40){
//         filusers.push(users[i])
//     }
// }

console.log(filusers)

// find user who is female and having child
// find user who is male and not having child
// find all female user
// find all male user
// find all female user who is sr citizen
// find male who is not eligible for vote