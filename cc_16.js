//Task 2 Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => console.log(product.fields.name));
      })
      .catch(error => console.error('Error fetching products:', error));
  }
   // Task 3 Fetch Products with async/awai
  async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  
  function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
        <h2>${product.fields.name}</h2>
        <p>$${product.fields.price / 100}</p>
      `;
      container.appendChild(productElement);
    });
  }
  
  function handleError(error) {
    console.error('Error fetching products:', error);
  }
  
  fetchProductsThen();
  fetchProductsAsync();
  
  
  