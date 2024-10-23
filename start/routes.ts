import router from '@adonisjs/core/services/router'

//lazy import: só vai importar ao ser utilizado. é uma promise? 
//vantagem: diminui a sobrecarga de operações na inicialização do sistema

const UsersController =()=>import('#controllers/user_controller')
const ProductsController = () =>import('#controllers/product_controller')

router.group(() => {
    router.get('/', [UsersController, 'index']).as('lista')
    router.get('/:id', [UsersController, 'show']).where('id', router.matchers.number()).as('show')

    router.post('/', [UsersController, 'add']).as('adiciona')
    router.put('/:id', [UsersController, 'update']).where('id', router.matchers.number()).as('atualiza')
    router.delete('/:id', [UsersController, 'remove']).where('id', router.matchers.number()).as('deleta.user')
}).prefix('users').as('users')

//rotas do produto
router.group(() => {
    router.get('/', [ProductsController, 'index']).as('lista.produtos')
    router.get('/:id', [ProductsController, 'show']).where('id', router.matchers.number()).as('show.produto')

    router.post('/', [ProductsController, 'add']).as('adiciona')
    router.put('/:id', [ProductsController, 'update']).where('id', router.matchers.number()).as('atualiza')
    router.delete('/:id', [ProductsController, 'remove']).where('id', router.matchers.number()).as('deleta.produto')
}).prefix('products').as('products')