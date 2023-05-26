const btn=document.querySelector('#btn');
const radioBUttons=document.querySelectorAll('input[name="size"]');
btn.addEventListener('click',()=>{
  let selectSize;
  for(const radioButton of radioBUttons){
    if(radioButton.checked){
      selectSize=radioButton.value;
      break;
    }
  }
  let output=document.querySelector('#output');
  output.innerText=selectSize ? `You selected ${selectSize}` : 'Please select a size';
})