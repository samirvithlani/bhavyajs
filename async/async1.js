var d;

const sendData = ()=>{

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Data received successfully');
        }, 3000);
    })
}

async function getData(){


    var data = await sendData(); //resolve
    console.log(data);
    d = data;
    console.log(d);    

}
getData();

const getData1 = async () => {
    var data = await sendData();
    console.log(data);
    d = data;
    console.log(d);
}

