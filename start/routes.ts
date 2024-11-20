import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

//lazy import: só vai importar ao ser utilizado. é uma promise? 
//vantagem: diminui a sobrecarga de operações na inicialização do sistema

const CategoryController = () => import('#controllers/categories_controller')
const UsersController = () => import('#controllers/user_controller')
const ProductsController = () => import('#controllers/product_controller')
const AuthController = () => import('#controllers/auth_controller')

// router.on('/').render('pages/home/show').as('home.show')

//Rotas Users, criando todas que tem no controller de forma automatica, para comentar o de cima
//para ver, rodar:    node ace list:routes
// router.resource('users', 'user_controller')

//rotas do produto
// router.resource('products', 'product_controller')

router.on('/').render('pages/home/show').as('home.show').use(middleware.auth())


router.get('/login', [AuthController, 'create']).as('auth.create')
router.post('/login', [AuthController, 'store']).as('auth.store') //fazer
// router.get('/logout', [AuthController, 'destroy']).as('auth.destroy') //fazer

router.group(()=>{
    router.get('/', [UsersController, 'create']).as('create')
    router.post('/', [UsersController, 'add']).as('store')
    
}).prefix('users').as('users')


router.group(()=>{
    router.get('/', [ProductsController, 'index']).as('index')
    router.get('/new', [ProductsController, 'create']).as('create')
    router.get('/:id', [ProductsController, 'show']).as('show')
    router.post('/', [ProductsController, 'store']).as('store')
    router.delete('/:id', [ProductsController, 'destroy']).as('destroy')
    router.patch('/:id', [ProductsController, 'patch']).as('patch')

}).prefix('products').as('products').use(middleware.auth())

router.get('/categories/:id', [CategoryController, 'show']).as('categories.show')