const cervejas = [
  {
    titulo: "IPA (India Pale Ale)",
    descricao: "Cerveja de alta fermentação, amargor intenso, aroma cítrico e frutado.",
    link: "https://pt.wikipedia.org/wiki/India_Pale_Ale",
    harmonizacoes: {
      carnes: "Frango grelhado, Carnes vermelhas assadas, Hambúrgueres",
      queijos: "Gorgonzola, Cheddar, Queijos azuis",
      sobremesas: "Brownie, Torta de chocolate, Cheesecake",
      cozinhasTradicionais: "Indiana, Mexicana, Americana"
    },
    tags: 'Frango grelhado Carnes vermelhas assadas Hambúrgueres Gorgonzola Cheddar Queijos azuis Brownie Torta de chocolate Cheesecake Indiana Mexicana Americana'
  },
  {
    titulo: "APA (American Pale Ale)",
    descricao: "Versão americana da IPA, com amargor mais equilibrado e aroma frutado.",
    link: "https://www.beeradvocate.com/beer/styles/13/",
    harmonizacoes: {
      carnes: "Frango assado, Peixes grelhados, Salmão",
      queijos: "Cheddar branco, Gouda jovem, Gruyère",
      sobremesas: "Frutas frescas, sorvete, torta de maçã",
      cozinhasTradicionais: "Americana"
    },
    tags: "Frango assado Peixes grelhados Salmão Cheddar branco Gouda jovem Gruyère Frutas frescas sorvete torta de maçã Americana"
  },
  {
    titulo: "Bock",
    descricao: "Cerveja de origem alemã, com diversas variações, geralmente mais encorpada e maltada.",
    link: "https://www.beeradvocate.com/beer/styles/16/",
    harmonizacoes: {
      carnes: "Carnes assadas, embutidos, queijos fortes",
      queijos: "Gorgonzola, Cheddar forte, Queijos defumados",
      sobremesas: "Chocolate amargo, tortas de frutas secas",
      cozinhasTradicionais: "Alemã"
    },
    tags: "Carnes assadas embutidos queijos fortes Gorgonzola Cheddar forte Queijos defumados Chocolate amargo tortas de frutas secas Alemã"
  },
  {
    titulo: "Weissbier",
    descricao: "Cerveja de trigo alemã, turva, com sabor frutado e levemente picante.",
    link: "https://www.beeradvocate.com/beer/styles/15/",
    harmonizacoes: {
      carnes: "Frango assado, Salsichas, Peixes brancos grelhados, Suínas",
      sobremesas: "Strudel de maçã, Tortas de frutas, Pudins de leite, Doces de frutas",
      queijos: "Muenster, Brie, Camembert, Limburger",
      cozinhasTradicionais: "Alemã, Austríaca, Tcheca"
    },
    tags: 'Frango assado Salsichas Peixes brancos grelhados Suínas Strudel de maçã Tortas de frutas Pudins de leite Doces de frutas Muenster Brie Camembert Limburger Alemã Austríaca Tcheca'
  },
  {
    titulo: "Stout",
    descricao: "Cerveja escura, com sabor intenso de malte torrado, café e chocolate.",
    link: "https://www.beeradvocate.com/beer/styles/2/",
    harmonizacoes: {
      carnes: "Carnes vermelhas braseadas, cordeiro, queijos azuis",
      sobremesas: "Brownie de chocolate, torta de chocolate, sorvete de creme",
      queijos: 'Roquefort, Gorgonzola, Stilton, Cheddar envelhecido, Gruyère, Comté, Queijo de cabra maduro, Gouda defumado, Cheddar defumado',
      cozinhasTradicionais: 'Inglesa, Irlandesa, Americana, Mexicana'
    },
    tags: 'Carnes vermelhas braseadas cordeiro queijos azuis Brownie de chocolate torta de chocolate sorvete de creme Roquefort Gorgonzola Stilton Cheddar envelhecido Gruyère Comte Queijo de cabra maduro Gouda defumado Cheddar defumado Inglesa Irlandesa Americana Mexicana'
  },
  {
    titulo: "Belgian Dubbel",
    descricao: "Cerveja belga de alta fermentação, cor âmbar escura, sabor frutado e levemente adocicado.",
    link: "https://www.beeradvocate.com/beer/styles/31/",
    harmonizacoes: {
      carnes: "Coelho, pato, carnes de caça",
      queijos: "Gouda defumado, Trappist, Queijos semi-duros",
      sobremesas: "Chocolate amargo, tortas de frutas vermelhas",
      queijos: 'Gruyère, Gouda envelhecido, Comte, Roquefort, Gorgonzola, Queijos de cabra',
      cozinhasTradicionais: 'Belga, Francesa, Oriente Médio'
    },
    tags: 'Coelho pato carnes de caça Gruyère Gouda envelhecido Comte Roquefort Gorgonzola Queijos de cabra Chocolate amargo tortas de frutas vermelhas Belga Francesa Oriente Médio'
  },
  {
    titulo: "Berliner Weisse",
    descricao: "Cerveja alemã de baixa fermentação, leve, ácida e refrescante, frequentemente com adição de frutas.",
    link: "https://www.beeradvocate.com/beer/styles/14/",
    harmonizacoes: {
      carnes: "Frango assado, Peixes leves",
      queijos: "Queijos frescos, Ricota",
      sobremesas: "Sobremesas leves, Frutas frescas, Iogurte",
      cozinhasTradicionais: 'Japonesa (sushi), Mediterrânea (saladas, pratos leves e frescos)'
    },
    tags: 'Frango assado Peixes leves Queijos frescos Ricota Sobremesas leves Frutas frescas Iogurte Japonesa (sushi) Mediterrânea (saladas pratos leves e frescos)'
  }
];