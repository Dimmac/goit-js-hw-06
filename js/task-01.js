const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) =>
  console.log(`Category: ${item.firstElementChild.textContent}
  Elements: ${item.lastElementChild.children.length}`)
);
