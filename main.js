const cat1 = { name: "Cat1", img: "andy.jpg", clicks: 0 };
const cat2 = { name: "Cat2", img: "bob.jpg", clicks: 0 };
const cat3 = { name: "Cat3", img: "david.jpg", clicks: 0 };
const cat4 = { name: "Cat4", img: "charlie.jpg", clicks: 0 };
const cat5 = { name: "Cat5", img: "effy.jpg", clicks: 0 };
const cats = [cat1, cat2, cat3, cat4, cat5];

// Select cats list place holder
const ul = document.querySelector("ul");
// render cats into html
for (cat of cats) {
  const li = document.createElement("li");
  li.textContent = cat.name;
  li.classList.add("list-group-item");
  li.addEventListener(
    "click",
    (catCopy => {
      return () => {
        renderCat(catCopy);
      };
    })(cat)
  );
  ul.appendChild(li);
}

// Select Display area
const display = document.querySelector("#display");

function renderCat(cat) {
  // reset display area
  display.innerHTML = "";
  // Create name, image and clicks
  const name = document.createElement("h3");
  name.textContent = cat.name;

  const image = document.createElement("img");
  image.src = cat.img;
  image.addEventListener("click", () => {
    cat.clicks++;
    clicks.textContent = `clicks: ${cat.clicks}`;
  });

  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${cat.clicks}`;

  // append into display
  display.appendChild(name);
  display.appendChild(image);
  display.appendChild(clicks);
}
