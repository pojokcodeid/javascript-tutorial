// function filterFunction(){
//   let i,txtValue;
//   let input=document.querySelector("#filter");
//   let filter=input.value.toUpperCase();
//   const list=document.querySelector("#list");
//   for(i=0;i<list.options.length;i++){
//     txtValue=list.options[i].text;
//     if(txtValue.toUpperCase().indexOf(filter)>-1){
//       list.options[i].style.display="";
//     }else{
//       list.options[i].style.display="none";
//     }
//   }
// }

function filterFunction(){
  let i,txtValue;
  let input=document.querySelector("#filter");
  let filter=input.value.toUpperCase();
  const list=document.querySelector("#list");
  const temp=document.querySelector("#listtemp");
  var tmpID=" ";
  for(i=0;i<list.options.length;i++){
    txtValue=list.options[i].text;
    if(txtValue.toUpperCase().indexOf(filter) <= -1){
      temp.options[temp.length]=new Option(list.options[i].text,list.options[i].value);
      tmpID=tmpID+","+i;
    }
  }

  dataDel=tmpID.split(",");
  for(i=dataDel.length-1;i>0;i--){
    list.options[dataDel[i]]=null;
  }

  //kembalikan
  var tmpID2=" ";
  for(i=0;i<temp.options.length;i++){
    txtValue=temp.options[i].text;
    if(txtValue.toUpperCase().indexOf(filter)>-1){
      list.options[list.length]=new Option(temp.options[i].text,temp.options[i].value);
      tmpID2=tmpID2+","+i;
    }
  }
  dataDel2=tmpID2.split(",");
  for(i=dataDel2.length-1;i>0;i--){
    temp.options[dataDel2[i]]=null;
  }

}

let input=document.querySelector("#filter");
input.addEventListener("keyup",filterFunction);