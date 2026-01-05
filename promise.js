function process(oId){
    return new Promise((resolve,reject)=>{
        const time = 500 + Math.random()*100 + 5000;
        setTimeout(() => {
            if(5500<time) return reject("Error");
            resolve({
                oId,status:"Completed",ptime: Math.round(time)
            });
        },time );
    })
}
const obatch = ["o1","o2","o3"];
Promise.all(obatch.map(process)).then((res)=>{
    console.log("All orders are complete");
    console.table(res);  
}).catch((e)=>console.log(e));

 const pri= new Promise((resolve)=>{
    resolve("yes")
 })
 pri.then((msg)=>{
    console.log(`hello ${msg}`);
 })