const list = document.querySelector('.list');
const priceList = document.querySelector('.priceList');

const menuField = document.querySelector('.menuField');
const priceField = document.querySelector('.price')

const click = document.querySelector('.click')


click.addEventListener('click', function(){

    //Create new li tag programmatically
    const newLi = document.createElement("LI");
    const priceLi = document.createElement("LI")

    //get the values of the input
    const liContent = document.createTextNode(menuField.value)
    const priceContent = document.createTextNode(priceField.value)

    //Add the input inside the new li
    newLi.appendChild(liContent);
    priceLi.appendChild(priceContent)

    //Attach the li to the menu list
    list.appendChild(newLi);
    priceList.appendChild(priceLi);
    
})



