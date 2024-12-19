import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import { args } from '@adonisjs/core/ace'

//lazy import: só vai importar ao ser utilizado. é uma promise? 
//vantagem: diminui a sobrecarga de operações na inicialização do sistema

const CategoryController = () => import('#controllers/categories_controller')
const UsersController = () => import('#controllers/user_controller')
const ProductsController = () => import('#controllers/product_controller')
const AuthController = () => import('#controllers/auth_controller')
const CartsController = () => import('#controllers/carts_controller')

// router.on('/').render('pages/home/show').as('home.show')

//Rotas Users, criando todas que tem no controller de forma automatica, para comentar o de cima
//para ver, rodar:    node ace list:routes
// router.resource('users', 'user_controller')

//rotas do produto
// router.resource('products', 'product_controller')

router.on('/').render('pages/home/show').as('home.show')
// router.on('/').render('pages/home/show').as('home.show').use(middleware.auth())

router.get('/login', [AuthController, 'create']).as('auth.create')
router.post('/login', [AuthController, 'store']).as('auth.store') //fazer
router.get('/logout', [AuthController, 'destroy']).as('auth.destroy') //fazer

router.group(() => {
    router.get('/:id/edit', [UsersController, 'edit']).where('id', router.matchers.number()).use(middleware.auth()).as('edit')
    router.post('/:id', [UsersController, 'update']).where('id', router.matchers.number()).use(middleware.auth()).as('update') //put na teoria mas form nao aceita entao eh push
    router.get('/:id', [UsersController, 'show']).where('id', router.matchers.number()).use(middleware.auth()).as('show')
    router.post('/', [UsersController, 'add']).as('store')
    router.get('/new', [UsersController, 'create']).as('create')
}).prefix('users').as('users')



router.group(()=>{
    router.get('/', [ProductsController, 'index']).as('index')
    router.get('/:id', [ProductsController, 'show']).where('id', router.matchers.number()).as('show')
}).prefix('guest/products').as('guest')

router.group(()=>{
    router.get('/', [ProductsController, 'index']).use(middleware.auth()).as('index')
    router.get('/new', [ProductsController, 'create']).use(middleware.auth()).as('create')
    router.get('/:id', [ProductsController, 'show']).where('id', router.matchers.number()).use(middleware.auth()).as('show')
    router.post('/', [ProductsController, 'store']).use(middleware.auth()).as('store')
    router.delete('/:id', [ProductsController, 'destroy']).where('id', router.matchers.number()).use(middleware.auth()).as('destroy')
    router.patch('/:id', [ProductsController, 'patch']).where('id', router.matchers.number()).use(middleware.auth()).as('patch')
    router.get('/stock', [ProductsController, 'stock']).use(middleware.auth()).as('stock')

}).prefix('products').as('products')

router.get('/categories/:id', [CategoryController, 'show']).as('categories.show')

// router.get('/Cart', [CartsController, 'show']).as('cart.show')

router.group(() => {
    router.get('/', [CartsController, 'index']).as('index').use(middleware.auth())
}).prefix('cart').as('cart')