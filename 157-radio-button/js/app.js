const size=['XS','S','M','L','XL','XXL'];
const group=document.querySelector('#group');
group.innerHTML=size.map((size)=>
`<div>
<input type="radio" name="size" id="${size}" value="${size}"/>
<label for="${size}size+'">${size}</label>
</div>`).join('');

const radioButtons=document.querySelectorAll('input[name="size"]');
for(const radioButton of radioButtons){
  radioButton.addEventListener('change',(e)=>{
    if(e.target.checked){
      document.querySelector('#output').innerText=`Anda memilih ${e.target.value}`;
    }
  })
}