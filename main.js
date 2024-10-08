// CRUD операции - create, read, update, delete

// fetch() - встроенная функция для выполнения сетевых запросов

// GET запросы - запрс для получения каких либо данных

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Ошибка при получеии пользователей'))
// }
// getUsers()

let users = document.querySelector(".users");

async function getUsers() {
  try {
    let res = await fetch("https://dummyjson.com/products");
    let products = await res.json();
    console.log(products.products);
    products.products.forEach((el) => {
      let item = document.createElement("div");
      item.classList.add("item");

      item.innerHTML = `
            <h2>${el.title}r</h2>
                <p>${el.description}</p>
                <p>${el.price}</p>
                <img src="${el.thumbnail}" alt="">
            `;

      // let title = document.createElement('h2')
      // let price = document.createElement('p')
      // let description = document.createElement('p')
      // let thumbnail = document.createElement('div')

      // title.textContent = `название: ${el.title}`
      // price.textContent = `цена: ${el.price}`
      // description.textContent = `описание: ${el.description}`
      // thumbnail.innerHTML = `<img src="${el.thumbnail}" alt="" />`

      // item.append(price, description, thumbnail,title)
      users.append(item)
    });
  } catch (error) {
    console.log("Ошибка при получении данных", error);
  }
}

window.addEventListener("DOMContentLoaded", () => getUsers());
