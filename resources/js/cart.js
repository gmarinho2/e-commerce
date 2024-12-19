window.addCarrinho = (event, id) => {
    event.preventDefault()
  
    fetch('/carrinho/adicionar', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        quantity: 1,
      }),
    })
      .then((response) => response.ok && window.location.reload())
      .catch((error) => alert('Erro ao adicionar ao carrinho!'))
}
  
window.removerCarrinho = (event, id) => {
event.preventDefault()

fetch('/carrinho/remover', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    id,
    }),
})
    .then((response) => response.ok && window.location.reload())
    .catch((error) => alert('Erro ao remover do carrinho!'))
}
  
window.checkout = (event) => {
event.preventDefault()

fetch('/carrinho/cart', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
})
    // .then(
    // (response) =>
    //     response.ok && window.location.reload()
    // )
    .then((response) => response.ok && window.location.reload())
    .catch(() => alert('Erro ao finalizar compra!'))
}
  