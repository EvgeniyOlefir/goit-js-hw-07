const countRef = document.querySelector("#categories").children.length;
console.log(`В списке ${countRef} категории.`);

const arrayItem = document.querySelectorAll(".item");
arrayItem.forEach((arrayItem) =>
  console.log(
    `Категория: ${arrayItem.firstElementChild.textContent} Количество элементов: ${arrayItem.lastElementChild.children.length}`
  )
);
