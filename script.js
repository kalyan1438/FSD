const display=document.getElementById("dis");

const getdata = async (id)=>{
    try{
    if(id<1 || id>10) throw Error("Id Not Found");
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const data = await res.json();
    display.innerHTML=`<h1>User Name:${data.name}</h1><br><p>${data.email}</p>`;
    }
    catch(e){
        console.error(e);
        alert("Please Enter Vaild Id",e);
    }
}
function sample(){
    getdata();
}