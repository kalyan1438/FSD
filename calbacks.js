function say(name,callback){
    console.log("Name:",name);
    callback();
}
const sam = ()=>{
    console.log("Hello to you");
}
say("Kalyna",sam);