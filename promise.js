const promise = new Promise((reslove,reject)=>{
    if(true) reslove("Promise Resloved");
    reject("Errors");
});
promise.then(()=>{
    console.log(reslove);
}).catch(()=>{
    console.log("Error");
});
console.log(promise.reslove)
console.log(promise.reject)