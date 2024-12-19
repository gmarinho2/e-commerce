import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import { args } from '@adonisjs/core/ace'
import Team from '#models/team'


//lazy import: só vai importar ao ser utilizado. é uma promise? 
//vantagem: diminui a sobrecarga de operações na inicialização do sistema
const SearchController = () => import('#controllers/search_controller')
const CategoryController = () => import('#controllers/categories_controller')
const UsersController = () => import('#controllers/user_controller')
const ProductsController = () => import('#controllers/product_controller')
const AuthController = () => import('#controllers/auth_controller')
const CartsController = () => import('#controllers/carts_controller')
const TeamController = () => import('#controllers/team_controller')

// router.on('/').render('pages/home/show').as('home.show')

//Rotas Users, criando todas que tem no controller de forma automatica, para comentar o de cima
//para ver, rodar:    node ace list:routes
// router.resource('users', 'user_controller')

//rotas do produto
// router.resource('products', 'product_controller')

router.on('/').render('pages/home/show').as('home.show')

router.get('/login', [AuthController, 'create']).as('auth.create')
router.post('/login', [AuthController, 'store']).as('auth.store') //fazer
router.get('/logout', [AuthController, 'destroy']).as('auth.destroy') //fazer

router.get('/team/:teamId', [TeamController, 'find'])

router.group(() => {
    router.get('/:id/edit', [UsersController, 'edit']).where('id', router.matchers.number()).use(middleware.auth()).as('edit')
    router.post('/:id', [UsersController, 'update']).where('id', router.matchers.number()).use(middleware.auth()).as('update') //put na teoria mas form nao aceita entao eh push
    router.get('/:id', [UsersController, 'show']).where('id', router.matchers.number()).use(middleware.auth()).as('show')
    router.post('/', [UsersController, 'add']).as('store')
    router.get('/new', [UsersController, 'create']).as('create')
}).prefix('users').as('users')


router.get('/search/result', [SearchController, 'index'])

router.group(()=>{
    router.get('/', [ProductsController, 'index']).as('index')
    router.get('/:id', [ProductsController, 'show']).where('id', router.matchers.number()).as('show')
}).prefix('guest/products').as('guest')

router.group(() => {
  
  router.get('/', [ProductsController, 'index']).use(middleware.auth()).as('index')
  router.get('/new', [ProductsController, 'create']).use(middleware.auth()).as('create')
  router.get('/:id', [ProductsController, 'show']).where('id', router.matchers.number()).use(middleware.auth()).as('show')
 
  router.post('/:id', [ProductsController, 'patch']).where('id', router.matchers.number()).use(middleware.auth()).as('patch')  // Correção de rota para edição
  
  router.post('/', [ProductsController, 'store']).use(middleware.auth()).as('store')
  router.delete('/:id', [ProductsController, 'destroy']).where('id', router.matchers.number()).use(middleware.auth()).as('destroy')
  router.get('/:id/edit', [ProductsController, 'edit']).use(middleware.auth()).as('edit')

 
  router.put('/:id/stock', [ProductsController, 'removeStock']).where('id', router.matchers.number()).use(middleware.auth()).as('removeStock')
  router.put('/:id/stock/add', [ProductsController, 'addStock']).where('id', router.matchers.number()).use(middleware.auth()).as('addStock')
  router.get('/stock', [ProductsController, 'stock']).use(middleware.auth()).as('stock')
}).prefix('products').as('products')


router.get('/teams', [TeamController, 'index'])

router.get('/categories/:id', [CategoryController, 'show']).as('categories.show')

router.group(() => {
        router.get('/', [CartsController, 'index']).use(middleware.auth()).as('index')
        router.post('adicionar', [CartsController, 'addCarrinho']).as('addCarrinho')
        router.post('remover', [CartsController, 'removerCarrinho']).as('removerCarrinho')
        router.post('cart_finalizar', [CartsController, 'checkout']).as('checkout')
        router.delete('limpar', [CartsController, 'limparCarrinho']).as('limparCarrinho')
}).prefix('carrinho').as('carrinho')