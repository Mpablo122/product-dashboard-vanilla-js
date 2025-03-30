//Task 2 Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => console.log(product.fields.name));
      })
      .catch(error => console.error('Error fetching products:', error));
  }
   // Task 3 Fetch Products with async/await
  async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  //Task 4 Display the Products
  function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    
    products.slice(0, 5).forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
          <h2>${product.fields.name}</h2>
          <p>$${(product.fields.price / 100).toFixed(2)}</p>
        `;
        container.appendChild(productElement);
      });
    }
  // Task 5 reusable error handler 
  function handleError(error) {
    console.error('Error fetching products:', error);
  }
  // Task 6: Call Your Fetch Functions fro the website 
  fetchProductsThen();
  fetchProductsAsync();
  
  
  