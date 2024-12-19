document.getElementById('search-query').addEventListener('input', function() {
    const query = this.value.trim(); 

    if (query.length < 3) {
      document.getElementById('search-results').innerHTML = '<p>Digite pelo menos 3 caracteres...</p>';
      return;
    }
  

    fetch(`/search?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; 
  
        if (data.length > 0) {
          
          data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('result-item', 'cursor-pointer', 'p-2', 'border-b');
            productItem.innerHTML = `<a href="/products/${product.id}">${product.name}</a>`;
            resultsContainer.appendChild(productItem);
          });
        } else {
          resultsContainer.innerHTML = '<p>Nenhum produto encontrado.</p>';
        }
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
        document.getElementById('search-results').innerHTML = '<p>Ocorreu um erro ao buscar os produtos.</p>';
      });
  });
  