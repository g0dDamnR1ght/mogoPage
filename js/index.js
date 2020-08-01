let btnShow = document.querySelectorAll('.service-list-item-name'); 
const burgerButton = document.querySelector('.burger-button'); 
const burgerButtonItem = document.querySelector('.burger-button-item2'); 
const burgerButtonItem1 = document.querySelector('.burger-button-item1'); 
const burgerButtonItem3 = document.querySelector('.burger-button-item3'); 
const burgerListgroup = document.querySelector('.burger-listgroup'); 
let serviceListItems = document.querySelectorAll(".service-list-item")
serviceListItems = Array.from(serviceListItems)

console.log(serviceListItems);
console.log(burgerListgroup);

// burger button

const showBurgerMenu = (e) => {

    burgerButtonItem.classList.toggle('showX')
    burgerButtonItem1.classList.toggle('yyy')
    burgerButtonItem3.classList.toggle('xxx')
    burgerListgroup.classList.toggle("burger-listgroup-show")
}

burgerButton.addEventListener('click', showBurgerMenu)


// =========== show text ===============

const showText = (e) => {
    for(let i = 0; i < serviceListItems.length; i++){
       const listItemText = serviceListItems[i].querySelector('#text')
       if(listItemText.matches('.active_emerging')) {
        listItemText.classList.remove('active_emerging');
       }
    }
    // const listItemName = e.target.closest('.service-list-item-name');
    const name = e.target.closest('.service-list-item'); 
    const child = name.querySelector('#text')
    child.classList.add('active_emerging')
    // listItemName.classList.toggle('arrowUp')
}

btnShow.forEach(b => {
    b.addEventListener('click', showText)
})



