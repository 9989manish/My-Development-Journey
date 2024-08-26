const URL="https://cat-fact.herokuapp.com/facts";
let fact=document.querySelector("#factPara");
let btn=document.querySelector("#btn");
const gettingData=async()=>{
    let response= await fetch(URL);
    // console.log(response.status);
    let data= await response.json();
    fact.innerText=data[0].text
    
    
}
btn.addEventListener("click",gettingData);