const itemLength = document.querySelectorAll(".item");
console.log("Number of categories:",itemLength.length)

const categories = itemLength.forEach(item =>{
    console.log("Category:", document.querySelector("h2").textContent);
    console.log("Elements:", item.querySelectorAll("li").length)})