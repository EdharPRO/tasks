const name1 = document.querySelector('#input-name');
const date = document.querySelector('#input-date');
const amount = document.querySelector('#input-amount');

const btnAdd = document.querySelector('.btn-add');

const ulList = document.querySelector('.ul-add');




btnAdd.addEventListener('click', function() {
    const newLi = document.createElement('li')
    let values = name1.value + ' ' + amount.value + ' ' + date.value
    console.log(values)
    newLi.innerText = values
    
    ulList.append(newLi)


    name1.value = ''
    date.value = ''
    amount.value =''
})