const promise = new Promise((reslove,reject)=>{
    if(!true) reslove("Promise Resloved");
    reject("Errors");
});
promise.then(()=>{
    console.log("Promise ");
}).catch(()=>{
    console.log("Error");
});