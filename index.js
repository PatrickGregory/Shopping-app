
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', Open);
// function Open(){
//     body.classList.add('active');
// }; same as next 3 lines


openShopping.addEventListener("click",()=>{
    body.classList.add('active');
})
closeShopping.addEventListener("click",()=>{
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        name:'Chicken',
        image:'chicken.jpeg',
        price:120000
    },
    {
        id:2,
        name:'Deer',
        image:'deer.jpg',
        price:130000
    },
    {
        id:3,
        name:'Goat',
        image:'GOAT.jpeg',
        price:180000
    },
    {
        id:4,
        name:'Lamb',
        image:'LAMB.jpeg',
        price:140000
    },
    {
        id:5,
        name:'Lamb-ribs',
        image:'LAMB.jpeg',
        price:170000
    },
    {
        id:6,
        name:'Goat-ribs',
        image:'GOAT.jpeg',
        price:140000
    },
];

let listCards =[];

// function initApp(){
//     products.map((value,key)=>{})
// }
let initApp = ()=>{
    products.map((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class"title">${value.name}</div>
            <div class"price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key.id})">Add to Cart</button>
        `
        list.appendChild(newDiv);
    });
}
initApp();
