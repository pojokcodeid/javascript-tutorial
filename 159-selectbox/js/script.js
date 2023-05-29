// get selected index
const btn1=document.getElementById("btn1");
const language=document.getElementById("language");
btn1.addEventListener("click",function(event){
  event.preventDefault();
  alert(language.selectedIndex);
})

//get value
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(event){
  event.preventDefault();
  alert(language.value);
})

//get value multiple
const btn3=document.getElementById("btn3");
const sb=document.getElementById("framework");
btn3.addEventListener("click",function(event){
  event.preventDefault();
  const selectedValue=[].filter
  .call(sb.options,option=>option.selected)
  .map(option=>option.value);
  alert(selectedValue);
})

// select dinamis
let root=document.getElementById("root");
let array=["Volvo","BMW","Toyota","Ford","Audi"];
let selectList=document.createElement("select");
selectList.id="muSelect";
root.appendChild(selectList);

for(let i=0;i<array.length;i++){
  let option=document.createElement("option");
  option.value=array[i];
  option.innerHTML=array[i];
  selectList.appendChild(option);
}