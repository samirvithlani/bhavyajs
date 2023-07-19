// var student = {
//     id:1,
//     name:"raj",
//     age:20,
//     gender:"male",
//     address:{
//         city:"chennai",
//         state:"tamilnadu",
//         country:"india"
//     },
//     hobbies:["music","sports","reading"]

// }
// console.log(student);
// console.log(student.age);
// console.log(student.address.city);
// console.log(student.hobbies);


var students =[
    {
        id:1,
        name:"raj",
        age:20,
        hobbies:[
            {
                name:"music",
                level:1
            },{
                name:"sports",
                level:2
            }
        ]
    },{
        id:2,
        name:"ram",
        age:21,
        hobbies:[
            {
                name:"reading",
                level:4
            }
        ]
    },{
        id:3,
        name:"ravi",
        age:22,
        hobbies:[
            {
                name:"music",
                level:1
            },{
                name:"sports",
                level:2
            },
            {
                name:"reading",
                level:4
            }
        ]
    }
]

// console.log(students);

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name);
// }

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name);
//     for(let j=0;j<students[i].hobbies.length;j++){
//         console.log(students[i].hobbies[j].name);
//     }
// }

//students[i]
// students.forEach((stu)=>{
//     console.log(stu.name);
// })

students.forEach((stu)=>{
    console.log(stu.name);
    stu.hobbies.forEach((hob)=>{
        console.log(hob.name);
    })
})

// names = students.map((stu)=>{
    
//     return stu.name.toUpperCase();
// })
// console.log(names);

// students = students.map((stu)=>{
//     return(
//         {
//             id:stu.id*1,
//             name:stu.name.toUpperCase(),
//             age:stu.age*10
//         }
//     )
// })
// console.log(students);

var countries =[
    {
        name:"India",
        states:[
            {
                name:"Gujarat",
                cities:[
                    {
                        name:"Ahmedabad",
                        population:100000
                        
                    },
                    {
                        name:"Surat",
                        population:10000
                        
                    }

                ]
            },
            {
                name:"Rajasthan",
                cities:[
                    {
                        name:"Jaipur",
                        population:2345
                        
                    },
                    {
                        name:"Jodhpur",
                        population:3450
                        
                    }

                ]
            }
        ]
    },
    {
        name:"USA",
        states:[
            {
                name:"New York",
                cities:[
                    {
                        name:"New York City",
                        population:24567
                        
                    },
                    {
                        name:"Buffalo",
                        population:2000
                        
                    }

                ]
            },
            {
                name:"California",
                cities:[
                    {
                        name:"Los Angeles",
                        population:2200
                        
                    },
                    {
                        name:"San Francisco",
                        population:3000
                        
                    }

                ]
            }
        ]
    }
]


//find world population
//find india population
//find usa population
//find which state has highest population
//find which city has highest population