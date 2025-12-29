function process(oId){
    return new Promise((reslove,reject)=>{
        const time = 500 + Math.random()*100 + 5000;
        setTimeout(() => {
            reslove({
                oId,status:"Completed",ptime: Math.round(time)
            });
        },time );
    })
}
const obatch = ["o1","o2","o3"];
Promise.all(obatch.map(process)).then((res)=>{
    console.log("All orders are complete");
    console.table(res);
})

