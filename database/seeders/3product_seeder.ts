import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Camisa Flamengo Preta - 23/24',
        price: 200.00,
        description: 'Camisa do Flamengo preta modelo 23/24',
        categoryId: 1, 
        teamId: 1,  // Flamengo
        stock: 3,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away1-3cba3d9a1af64f21c117175440195340-1024-1024.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Flamengo Rosa',
        price: 150.00,
        description: 'Camisa Flamengo Rosa Unissex',
        categoryId: 1, 
        teamId: 1,  // Flamengo
        stock: 5,
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/402/723/products/img_0334-202c5c51adc0a22bff17083579637526-1024-1024.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Fluminense Branca - 2023',
        price: 180.00,
        description: 'Camisa do Fluminense branca, edição 2023',
        categoryId: 2, 
        teamId: 2,  // Fluminense
        stock: 10,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/479/469/products/6a99291d1-23a5929455aab5183a16838311111804-1024-1024.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Fluminense Tricolor',
        price: 220.00,
        description: 'Camisa tradicional do Fluminense, tricolor',
        categoryId: 2, 
        teamId: 2,  // Fluminense
        stock: 7,
        imageUrl: 'https://dcdn.mitiendanube.com/stores/003/161/166/products/camisa-feminina-fluminense-home-tricolor-umbro-23-24-11-8cc6203af255edfa5c16871002461518-1024-1024-6e76c4daf965415e6d16896357915968-1024-1024.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Vasco Preto',
        price: 190.00,
        description: 'Camisa preta do Vasco da Gama modelo 2023',
        categoryId: 3, 
        teamId: 3,  // Vasco
        stock: 5,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/935/203/products/camisa-vasco-goleiro-preto-i-1-titular-kappa-22-231-acf827bf60359fa01116887522675511-1024-1024.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Botafogo Preta',
        price: 200.00,
        description: 'Camisa preta do Botafogo 2023',
        categoryId: 1, 
        teamId: 4,  // Botafogo
        stock: 6,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/536/162/products/camisa-botafogo-away-22-23-kappa-torcedor-masculino-preto-imagem1-jpeg1-8b3134586777f8cb5a16926605636169-640-0.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Botafogo Tradicional',
        price: 170.00,
        description: 'Camisa tradicional do Botafogo, modelo 2023',
        categoryId: 1, 
        teamId: 4,  // Botafogo
        stock: 3,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIU3YzUCB0I8hUfnBYLSLkhA1u8c8gu0kXwA&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Bangu Alvinegro',
        price: 180.00,
        description: 'Camisa do Bangu Alvinegro modelo 2023',
        categoryId: 2, 
        teamId: 5,  // Bangu
        stock: 4,
        imageUrl: 'https://imgcentauro-a.akamaihd.net/1366x1366/M14D7501.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Bangu Tricolor',
        price: 200.00,
        description: 'Camisa Tricolor do Bangu modelo 2023',
        categoryId: 2, 
        teamId: 5,  // Bangu
        stock: 5,
        imageUrl: 'https://images.tcdn.com.br/img/img_prod/759560/camisa_do_bangu_listrada_887_1_3e0f6b3f90c500aa3dcb14513027bdaa.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa São Paulo 2023',
        price: 220.00,
        description: 'Camisa do São Paulo 2023',
        categoryId: 3, 
        teamId: 6,  // São Paulo
        stock: 8,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/831/121/products/7aa7648b-9fb76ba82b91b020a016973002888400-1024-1024.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Palmeiras 2023',
        price: 240.00,
        description: 'Camisa do Palmeiras 2023, verde',
        categoryId: 3, 
        teamId: 7,  // Palmeiras
        stock: 6,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/831/121/products/bf9d4602-d2ca-475b-80b0-44ae20b395031-e37844de2462c2f83a16760722592432-1024-1024.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Corinthians 2023',
        price: 230.00,
        description: 'Camisa preta do Corinthians 2023',
        categoryId: 1, 
        teamId: 8,  // Corinthians
        stock: 5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQxMGj4ZmGHaIjBlgdZAecCYLbM-a3WlQyQ&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Santos 2023',
        price: 210.00,
        description: 'Camisa do Santos 2023, branca',
        categoryId: 2, 
        teamId: 9,  // Santos
        stock: 7,
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/247/013/products/96e8e8e21-a8482078f68797c0f016897999565021-1024-1024.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Grêmio 2023',
        price: 200.00,
        description: 'Camisa do Grêmio 2023',
        categoryId: 3, 
        teamId: 10,  // Grêmio
        stock: 9,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDnZNwA23WxA703fL9S91n_7CpTL5c-XMMw&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Internacional 2023',
        price: 220.00,
        description: 'Camisa do Internacional 2023',
        categoryId: 3, 
        teamId: 11,  // Internacional
        stock: 4,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/066/468/products/81-10a6c0685514ce282716623156028198-640-0.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Cruzeiro 2023',
        price: 180.00,
        description: 'Camisa do Cruzeiro 2023',
        categoryId: 2, 
        teamId: 12,  // Cruzeiro
        stock: 6,
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/247/013/products/97c1b2371-7d6b2484e6d269aa0716897930297634-480-0.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Atlético Mineiro 2023',
        price: 200.00,
        description: 'Camisa do Atlético Mineiro 2023',
        categoryId: 1, 
        teamId: 13,  // Atlético Mineiro
        stock: 5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzg4MzivSfO2KQgSJUcSeUsiNUIxaIrMKoA&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Bahia 2023',
        price: 190.00,
        description: 'Camisa do Bahia 2023, azul e branco',
        categoryId: 2, 
        teamId: 14,  // Bahia
        stock: 6,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLtcSQ7E6pALb-INzeqZFxaO9seu-jbVbfg&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Fortaleza 2023',
        price: 210.00,
        description: 'Camisa do Fortaleza 2023',
        categoryId: 3, 
        teamId: 15,  // Fortaleza
        stock: 8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0hcZgUhs7wHinFoiqSV1jt36w7Zlv0XKNQ&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Ceará 2023',
        price: 230.00,
        description: 'Camisa do Ceará 2023',
        categoryId: 1, 
        teamId: 16,  // Ceará
        stock: 7,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/536/162/products/camisa-ceara-away-23-24-torcedor-masculina-branco-imagem3-jpeg1-e9d9f2e650ef59cbfd16928317325218-1024-1024.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Sport Recife 2023',
        price: 190.00,
        description: 'Camisa do Sport Recife 2023',
        categoryId: 2, 
        teamId: 17,  // Sport Recife
        stock: 5,
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/055/309/products/camisa-do-sport-recife-umbro-2024-2025-home-1-casa-titular-i-vermelha-preta-torcedor-masculina-homem-uniforme-original-oficial-lancamento-nova-1-35279ad44bd326f90f17186381203220-1024-1024.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Botafogo-SP 2023',
        price: 210.00,
        description: 'Camisa do Botafogo-SP 2023',
        categoryId: 3, 
        teamId: 18,  // Botafogo-SP
        stock: 4,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuRaOJ5iMzF1UtKrg2eoYkLMdO94deDznpQ&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Vila Nova 2023',
        price: 200.00,
        description: 'Camisa do Vila Nova 2023',
        categoryId: 1, 
        teamId: 19,  // Vila Nova
        stock: 7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm_OkeIq9hDc9l_KoUJMN67b_3Z_qN-1Uag&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Ponte Preta 2023',
        price: 180.00,
        description: 'Camisa da Ponte Preta 2023',
        categoryId: 2, 
        teamId: 20,  // Ponte Preta
        stock: 3,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuRaOJ5iMzF1UtKrg2eoYkLMdO94deDznpQ&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Náutico 2023',
        price: 210.00,
        description: 'Camisa do Náutico 2023',
        categoryId: 1, 
        teamId: 21,  // Náutico
        stock: 4,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm_OkeIq9hDc9l_KoUJMN67b_3Z_qN-1Uag&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Paraná Clube 2023',
        price: 220.00,
        description: 'Camisa do Paraná Clube 2023',
        categoryId: 2, 
        teamId: 22,  // Paraná Clube
        stock: 8,
        imageUrl: '', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Atlético Paranaense 2023',
        price: 230.00,
        description: 'Camisa do Atlético Paranaense 2023',
        categoryId: 3, 
        teamId: 23,  // Atlético Paranaense
        stock: 5,
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/402/723/products/061652f11-3f0d7fcc89e2c0328116851509829458-640-0.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Fluminense Classica',
        price: 190.00,
        description: 'Camisa do Fluminense Classica',
        categoryId: 1, 
        teamId: 24,  // Fluminense de Feira
        stock: 4,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/066/468/products/211-9c19eb116031c85ec816593603330622-640-0.jpg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Chapecoense 2023',
        price: 210.00,
        description: 'Camisa da Chapecoense 2023',
        categoryId: 2, 
        teamId: 25,  // Chapecoense
        stock: 6,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjGq_jmBLRO_HMVic1-tbiOe0n6lqIh9BSg&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Coritiba 2023',
        price: 200.00,
        description: 'Camisa do Coritiba 2023',
        categoryId: 3, 
        teamId: 26,  // Coritiba
        stock: 8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUKZCzR1NqlfXvhNXN9OcgkciWK-mHEcpKA&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Vasco da Gama 2023',
        price: 230.00,
        description: 'Camisa do Vasco da Gama 2023',
        categoryId: 1, 
        teamId: 27,  // Vasco da Gama
        stock: 5,
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/055/309/products/29292ac31-7b31763ad528e2549f16747359581229-1024-1024.jpeg', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa América Mineiro 2023',
        price: 210.00,
        description: 'Camisa do América Mineiro 2023',
        categoryId: 2, 
        teamId: 28,  // América Mineiro
        stock: 6,
        imageUrl: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbk0-ll19yoazgaawfc', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Figueirense 2023',
        price: 190.00,
        description: 'Camisa do Figueirense 2023',
        categoryId: 3, 
        teamId: 29,  // Figueirense
        stock: 7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_DfkYwkm4Kh47EE5kYlZUMYIx_ZAgMXjVw&s', // Preencha com a URL da imagem
      },
      {
        name: 'Camisa Criciúma 2023',
        price: 200.00,
        description: 'Camisa do Criciúma 2023',
        categoryId: 1, 
        teamId: 30,  // Criciúma
        stock: 5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwZYAS-ss2GcKtsePg2P661fcejh-tlVIyQ&s', // Preencha com a URL da imagem
      },
    ])
  }
}
