const btnAdd=document.querySelector('#btnAdd');
const btnRemove=document.querySelector('#btnRemove');
const listBox=document.querySelector('#list');
const framework=document.querySelector('#framework');

btnAdd.addEventListener('click',(e)=>{
  e.preventDefault();
  if(framework.value==""){
    alert("Framework belum diisi");
    return;
  }
  const option=new Option(framework.value,framework.value);
  listBox.add(option,undefined);
  framework.value="";
  framework.focus();
})

//remove option
btnRemove.addEventListener('click',(e)=>{
  e.preventDefault();
  let selected=[];
  for(let i=0;i<listBox.options.length;i++){
    selected[i]=listBox.options[i].selected;
  }
  //remove all selected
  let index=listBox.options.length;
  while(index--){
    if(selected[index]){
      listBox.remove(index);
    }
  }
})

//double list box
function changeMember(objSource,objTarget){
  let start=0;
  let tempId=" ";
  for(i=parseInt(start);i<objSource.length;i++){
    if(objSource[i].selected){
      objTarget.options[objTarget.length]=new Option(objSource.options[i].text,objSource.options[i].value);
      objTarget.options[objTarget.length-1].selected=true;
      tempId=tempId+","+i;
    }
  }
  dataDel=tempId.split(",");
  for(i=dataDel.length-1;i>0;i--){
    objSource.options[dataDel[i]]=null;
  }
}

let btnGet=document.querySelector('#btnGet');
let list1=document.querySelector('#car');
let list2=document.querySelector('#car2');
btnGet.addEventListener('click',(e)=>{
  e.preventDefault();
  changeMember(list1,list2);
})

let btnDel=document.querySelector('#btnDel');
btnDel.addEventListener('click',(e)=>{
  e.preventDefault();
  changeMember(list2,list1);
})