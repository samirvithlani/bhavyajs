//promise 3 states
//1. pending
//2. resolve
//3. reject

function getData(){

    
    var promise = new Promise((resolve, reject) => {

        setTimeout(() => {
        
            //resolve('Data received successfully');
            reject('Error in receiving data');
        }, 3000);
        

    })
    console.log(promise);

    promise.then((data) => {
        console.log(data);
    })
    promise.catch((error) => {
        console.log(error);
    })

}


//getData();


function printData(){

    return new Promise((success, failure) => {
            
            setTimeout(() => {
                success('Data received successfully');
            }, 3000);
    })
}

// var x = printData()
// console.log(x);
// x.then((data) => {
//     console.log(data);
// })
// x.catch((error) => {
//     console.log(error);
// })

var gdata;
printData().then((data)=>{
    gdata = data;
    console.log(data);
}).catch((error) => {
    console.log(error);
})
console.log(gdata);


