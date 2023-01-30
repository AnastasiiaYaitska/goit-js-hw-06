
const catigoriesElChildren = document.querySelectorAll('.item')



 function counterListEl(array) {
     let sum = 0;

     array.forEach((element, index) => {
         sum += index;
        });
        return `Number of categories: ${sum}`
        
        //  console.log(`Number of categories: ${array.length}`)
}

console.log(counterListEl(catigoriesElChildren))

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// const printTitleAndCountLiItems = (array) => {

//     const iterrateOverCategories = [...array].forEach(element => {
       
//         const listArray = element.querySelectorAll('li');

//    console.log({
//         category: element.firstElementChild.textContent,
//         elements: listArray.length,
//         }) })
    
// }

// console.log(printTitleAndCountLiItems(catigoriesElChildren));


catigoriesElChildren.forEach(el => {
    console.log(`Category:${el.firstElementChild.textContent},
    Elements: ${el.lastElementChild.children.length}`)
});
