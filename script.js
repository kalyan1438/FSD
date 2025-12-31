const display=document.getElementById("dis");

const getdata = async (id)=>{
    try{
    if(id<1 || id>10) throw Error("Id Not Found");
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    display.innerHTML=`<h1>User Name:${data.name}</h1><br><p>${data.email}</p>`;
    }
    catch(e){
        alert("Please Enter Vaild Id",e);
    }
}
function sample(){
    const id = document.getElementById("num").value;
    getdata(id);
}