const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



  
const liItems = ingredients.map(item => {
  const liItem = document.createElement(`li`);
 liItem.classList.add( "item" );
  liItem.textContent = item; 
  return liItem;
  })

  const final = document.querySelector('#ingredients');
final.append(...liItems)

console.log(final)

 