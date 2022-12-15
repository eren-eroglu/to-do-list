const input = document.querySelector(".form-control");
const plus = document.querySelector(".plus");
const container = document.querySelector('.container');

plus.addEventListener("click", () => {
  function setLocal(){
   

    
    
  }
  

createDiv()

});

function createDiv() {
  const div = document.createElement("div");
  div.classList.add('input-group')
  div.classList.add('mb-3')

  const input_group = document.createElement('div')
  input_group.classList.add('input-group-prepend')
  
  const span = document.createElement('span');
  span.classList.add('input-group-text')
  span.classList.add('bg-info')
  span.setAttribute('id', 'inputGroup-sizing-default');
  span.value = 'Added';

  const input2 = document.createElement('INPUT')
  input2.type = 'text';
  input2.classList.add('form-control');
  input2.readOnly = true;
  input2.setAttribute('aria-describedby','inputGroup-sizing-default')

  const del = document.createElement('button');
  del.classList.add('bg-danger')
  del.classList.add('delete')
  del.classList.add('text-white')
  del.classList.add('m-2')

  container.appendChild(div);
  div.appendChild(input_group)
  div.appendChild(span);
  div.appendChild(input2);
  div.appendChild(del)

  let inputString = JSON.stringify(input.value)

  localStorage.setItem('todo', JSON.stringify(inputString));
  del.innerText = 'del'
  span.innerText = 'Added'
  input2.value = input.value
  del.addEventListener('click', ()=> {
        div.remove()
  })
}
