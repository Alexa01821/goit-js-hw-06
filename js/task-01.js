const listWithIdRef = document.querySelector("#categories");
console.log(
  "Number of categories:" + listWithIdRef.childElementCount
);
// console.log('Number of categories:'+ listWithIdRef.children.length);

const itemCategory = document.querySelectorAll('.item');
itemCategory.forEach(category => console.log(`Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.childElementCount}`)
);
