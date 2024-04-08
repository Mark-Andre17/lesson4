// 1 задание
let buttonCLick = document.getElementById('click');
// buttonCLick.addEventListener('click', () => console.log('Кнопка была нажата'));
buttonCLick.addEventListener('click', () => alert('Кнопка была нажата'));
// 2 задание
let buttonDoubleClick = document.getElementById('double-click');

// 1 способ
// console.log(buttonDoubleClick);
// function changer() {
//     document.getElementById('div').style.backgroundColor = 'tomato';
// }
// buttonDoubleClick.addEventListener('dblclick', changer);

// 2 способ
buttonDoubleClick.addEventListener('dblclick', () => {
    document.getElementById('div').style.backgroundColor = 'tomato'
});

let itemsTd = document.querySelectorAll('td');
console.log(itemsTd);
for (let item of itemsTd){
    item.addEventListener('dblclick', () => {
        item.innerHTML = 'double click';
    })
}


let animals = document.querySelectorAll('.animal-img');
console.log(animals);
for (let animal of animals) {
    animal.addEventListener('dblclick', () => {
        alert(animal.alt)
    })
}


let titlePage = document.querySelector('h1');
console.log(titlePage);
titlePage.addEventListener('dblclick', () => {
    titlePage.innerHTML = 'double click';
})
// 3 задание
document.addEventListener('keydown', (event) => {
    console.log(event.key);
})

let question = prompt('Напишите что-нибудь');
console.log(question);

document.addEventListener('keyup', (event) => {
   console.log(event.key);
})