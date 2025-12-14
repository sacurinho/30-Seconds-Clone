const questionEl = document.querySelector(".question");
const answersEl = document.querySelectorAll(".answer");
const start_btn = document.querySelector(".start_btn");
const restart_btn = document.querySelector(".restart_btn");
const header_quiz = document.querySelector(".header_quiz");
const scoreEl = document.querySelector(".score");
const timerEl = document.querySelector(".timer");
const end_screen = document.querySelector(".end_screen");
const final_score_text = document.querySelector(".final_score_text");
const answersList = document.querySelector(".answers");

const perguntas = [
    {
        quest: "Qual cantor é conhecido como o Rei do Pop",
        options: ["Elvis", "Prince", "Michael Jackson", "Madonna"],
        cor: "Michael Jackson"
    },
    {
        quest: "Qual é a capital da França",
        options: ["Berlim", "Roma", "Paris", "Lisboa"],
        cor: "Paris"
    },
    {
        quest: "Quem escreveu Dom Quixote",
        options: ["Victor Hugo", "Miguel de Cervantes", "Shakespeare", "Tolstói"],
        cor: "Miguel de Cervantes"
    },
    {
        quest: "Qual planeta é conhecido como Planeta Vermelho",
        options: ["Terra", "Vénus", "Marte", "Júpiter"],
        cor: "Marte"
    },
    {
        quest: "Qual é o maior rio do mundo",
        options: ["Nilo", "Amazonas", "Yangtzé", "Mississipi"],
        cor: "Amazonas"
    },
    {
        quest: "Quem pintou a Mona Lisa",
        options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Rembrandt"],
        cor: "Leonardo da Vinci"
    },
    {
        quest: "Qual é o elemento químico com símbolo O",
        options: ["Ouro", "Oxigénio", "Hidrogénio", "Carbono"],
        cor: "Oxigénio"
    },
    {
        quest: "Quem foi o primeiro presidente dos EUA",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        cor: "George Washington"
    },
    {
        quest: "Qual é o continente mais populoso",
        options: ["Europa", "América do Norte", "Ásia", "África"],
        cor: "Ásia"
    },
    {
        quest: "Qual é o órgão responsável pelo bombeamento de sangue",
        options: ["Pulmões", "Coração", "Fígado", "Rins"],
        cor: "Coração"
    },
    {
        quest: "Qual time ganhou a Copa do Mundo 2018",
        options: ["Alemanha", "França", "Brasil", "Argentina"],
        cor: "França"
    },
    {
        quest: "Qual série tem o personagem Walter White",
        options: ["Stranger Things", "Game of Thrones", "Breaking Bad", "Friends"],
        cor: "Breaking Bad"
    },
    {
        quest: "Qual é a capital do Japão",
        options: ["Pequim", "Seul", "Tóquio", "Bangkok"],
        cor: "Tóquio"
    },
    {
        quest: "Quem descobriu a gravidade",
        options: ["Galileo", "Isaac Newton", "Albert Einstein", "Copérnico"],
        cor: "Isaac Newton"
    },
    {
        quest: "Qual jogador é conhecido como CR7",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé"],
        cor: "Cristiano Ronaldo"
    },
    {
        quest: "Qual é a fórmula da água",
        options: ["CO2", "H2O", "O2", "H2"],
        cor: "H2O"
    },
    {
        quest: "Qual banda lançou Bohemian Rhapsody",
        options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
        cor: "Queen"
    },
    {
        quest: "Qual é a capital da Austrália",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        cor: "Canberra"
    },
    {
        quest: "Quem escreveu Hamlet",
        options: ["Dostoiévski", "Tolstói", "Shakespeare", "Camões"],
        cor: "Shakespeare"
    },
    {
        quest: "Qual o deserto mais quente do mundo",
        options: ["Gobi", "Sahara", "Kalahari", "Atacama"],
        cor: "Sahara"
    },
    {
        quest: "Qual planeta é conhecido pelos anéis",
        options: ["Terra", "Saturno", "Júpiter", "Urano"],
        cor: "Saturno"
    },
    {
        quest: "Qual é o maior oceano do mundo",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        cor: "Pacífico"
    },
    {
        quest: "Qual cientista desenvolveu a teoria da relatividade",
        options: ["Newton", "Albert Einstein", "Galileo", "Faraday"],
        cor: "Albert Einstein"
    },
    {
        quest: "Qual é a moeda do Reino Unido",
        options: ["Euro", "Dólar", "Libra", "Iene"],
        cor: "Libra"
    },
    {
        quest: "Quem pintou O Grito",
        options: ["Picasso", "Edvard Munch", "Van Gogh", "Monet"],
        cor: "Edvard Munch"
    },
    {
        quest: "Qual é o ponto mais alto da Terra",
        options: ["Mont Blanc", "Everest", "K2", "Kilimanjaro"],
        cor: "Everest"
    },
    {
        quest: "Qual cidade é conhecida como Big Apple",
        options: ["Los Angeles", "Nova Iorque", "Chicago", "Miami"],
        cor: "Nova Iorque"
    },
    {
        quest: "Qual jogador marcou mais gols na história do futebol",
        options: ["Pele", "Cristiano Ronaldo", "Messi", "Romário"],
        cor: "Cristiano Ronaldo"
    },
    {
        quest: "Qual é a capital da Alemanha",
        options: ["Viena", "Berlim", "Munique", "Hamburgo"],
        cor: "Berlim"
    },
    {
        quest: "Qual é o símbolo químico do ouro",
        options: ["Au", "Ag", "O", "Hg"],
        cor: "Au"
    },
    {
        quest: "Quem é autor de 1984",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Tolkien"],
        cor: "George Orwell"
    },
    {
        quest: "Qual é a maior lua de Saturno",
        options: ["Europa", "Titã", "Ganimedes", "Io"],
        cor: "Titã"
    },
    {
        quest: "Qual é a capital da Itália",
        options: ["Veneza", "Roma", "Milão", "Florença"],
        cor: "Roma"
    },
    {
        quest: "Quem inventou a lâmpada elétrica",
        options: ["Edison", "Thomas Edison", "Tesla", "Bell"],
        cor: "Thomas Edison"
    },
    {
        quest: "Qual é o idioma mais falado no mundo",
        options: ["Espanhol", "Inglês", "Mandarim", "Hindi"],
        cor: "Mandarim"
    },
    {
        quest: "Qual é o maior país do mundo em área",
        options: ["Canadá", "Brasil", "Rússia", "China"],
        cor: "Rússia"
    },
    {
        quest: "Quem foi o líder da Revolução Francesa",
        options: ["Napoleão", "Robespierre", "Louis XVI", "Danton"],
        cor: "Robespierre"
    },
    {
        quest: "Qual filme tem personagens chamados Simba e Mufasa",
        options: ["Shrek", "O Rei Leão", "Aladdin", "Tarzan"],
        cor: "O Rei Leão"
    },
    {
        quest: "Qual é o maior animal terrestre",
        options: ["Rinoceronte", "Elefante Africano", "Girafa", "Hippopotamo"],
        cor: "Elefante Africano"
    },
    {
        quest: "Qual é a capital da Espanha",
        options: ["Madrid", "Barcelona", "Sevilha", "Valência"],
        cor: "Madrid"
    },
    {
        quest: "Qual é o mais famoso quadro de Van Gogh",
        options: ["Guernica", "Noite Estrelada", "A Persistência da Memória", "O Grito"],
        cor: "Noite Estrelada"
    },
    {
        quest: "Quem foi o primeiro homem a pisar na Lua",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        cor: "Neil Armstrong"
    },
    {
        quest: "Qual cidade é conhecida como a cidade luz",
        options: ["Paris", "Londres", "Roma", "Berlim"],
        cor: "Paris"
    },
    {
        quest: "Qual é o maior planeta do Sistema Solar",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        cor: "Júpiter"
    },
    {
        quest: "Qual é a capital da Argentina",
        options: ["Córdoba", "Buenos Aires", "Mendoza", "Rosário"],
        cor: "Buenos Aires"
    },
    {
        quest: "Qual é a bebida típica do Japão",
        options: ["Sakê", "Tequila", "Vodka", "Cerveja"],
        cor: "Sakê"
    },
    {
        quest: "Quem é autor de O Pequeno Príncipe",
        options: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Mark Twain", "Charles Dickens"],
        cor: "Antoine de Saint-Exupéry"
    },
    {
        quest: "Qual é o maior lago de água doce do mundo",
        options: ["Lago Victoria", "Lago Michigan", "Lago Superior", "Lago Baikal"],
        cor: "Lago Superior"
    },
    {
        quest: "Quem pintou Guernica",
        options: ["Picasso", "Pablo Picasso", "Van Gogh", "Monet"],
        cor: "Pablo Picasso"
    },
    {
        quest: "Qual time venceu a Copa Libertadores 2022",
        options: ["Flamengo", "Palmeiras", "Boca Juniors", "River Plate"],
        cor: "Flamengo"
    },
    {
        quest: "Qual é a capital da Suécia",
        options: ["Oslo", "Estocolmo", "Helsínquia", "Copenhaga"],
        cor: "Estocolmo"
    },
    {
        quest: "Qual o metal líquido à temperatura ambiente",
        options: ["Ferro", "Mercúrio", "Prata", "Alumínio"],
        cor: "Mercúrio"
    },
    {
        quest: "Quem foi o autor de A Divina Comédia",
        options: ["Dante Alighieri", "Camões", "Cervantes", "Goethe"],
        cor: "Dante Alighieri"
    },
    {
        quest: "Qual é o continente que tem o deserto de Kalahari",
        options: ["África", "América", "Ásia", "Oceania"],
        cor: "África"
    },
    {
        quest: "Qual o nome da rede social fundada por Mark Zuckerberg",
        options: ["Facebook", "Instagram", "Twitter", "TikTok"],
        cor: "Facebook"
    },
    {
        quest: "Quem inventou o telefone",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Marconi"],
        cor: "Alexander Graham Bell"
    },
    {
        quest: "Qual país é famoso por seus tulipas",
        options: ["Bélgica", "Países Baixos", "Alemanha", "Suíça"],
        cor: "Países Baixos"
    },
    {
        quest: "Quem é o autor de Harry Potter",
        options: ["J.K. Rowling", "Tolkien", "Suzanne Collins", "George R.R. Martin"],
        cor: "J.K. Rowling"
    },
    {
        quest: "Qual país é conhecido como Terra do Sol Nascente",
        options: ["Japão", "China", "Coreia", "Tailândia"],
        cor: "Japão"
    },
    {
        quest: "Quem foi o primeiro imperador romano",
        options: ["Júlio César", "Augusto", "Nero", "Calígula"],
        cor: "Augusto"
    },
    {
        quest: "Qual instrumento tem teclas pretas e brancas",
        options: ["Guitarra", "Violino", "Piano", "Flauta"],
        cor: "Piano"
    },
    {
        quest: "Qual animal é símbolo da Austrália",
        options: ["Canguru", "Koala", "Dingo", "Emu"],
        cor: "Canguru"
    },
    {
        quest: "Qual é a capital do Canadá",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        cor: "Ottawa"
    },
    {
        quest: "Qual país tem a maior população",
        options: ["Índia", "China", "EUA", "Indonésia"],
        cor: "China"
    },
    {
        quest: "Quem pintou A Última Ceia",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Botticelli"],
        cor: "Leonardo da Vinci"
    },
    {
        quest: "Qual é o maior deserto do mundo",
        options: ["Kalahari", "Gobi", "Sahara", "Atacama"],
        cor: "Sahara"
    },
    {
        quest: "Qual time venceu a Champions League 2023",
        options: ["PSG", "Real Madrid", "Manchester City", "Bayern"],
        cor: "Manchester City"
    },
    {
        quest: "Quem é conhecido como o Pai da Psicanálise",
        options: ["Sigmund Freud", "Carl Jung", "Pavlov", "Skinner"],
        cor: "Sigmund Freud"
    },
    {
        quest: "Qual é o nome do rio que passa pelo Egito",
        options: ["Nilo", "Amazonas", "Mississippi", "Danúbio"],
        cor: "Nilo"
    },
    {
        quest: "Qual é o elemento químico com símbolo Fe",
        options: ["Ferro", "Prata", "Ouro", "Cobre"],
        cor: "Ferro"
    },
    {
        quest: "Quem escreveu O Senhor dos Anéis",
        options: ["Tolkien", "J.R.R. Tolkien", "C.S. Lewis", "George Martin", "Rowling"],
        cor: "J.R.R. Tolkien"
    },
    {
        quest: "Qual país criou a pizza",
        options: ["Espanha", "França", "Itália", "Grécia"],
        cor: "Itália"
    },
    {
        quest: "Qual é a capital da Índia",
        options: ["Nova Deli", "Mumbai", "Calcutá", "Chennai"],
        cor: "Nova Deli"
    },
    {
        quest: "Qual é a estrela mais próxima da Terra",
        options: ["Sol", "Proxima Centauri", "Sirius", "Vega"],
        cor: "Sol"
    },
    {
        quest: "Quem inventou o avião",
        options: ["Santos Dumont", "Irmãos Wright", "Leonardo da Vinci", "Edison"],
        cor: "Santos Dumont"
    },
    {
        quest: "Qual país é conhecido pelo carnaval",
        options: ["Portugal", "Argentina", "Brasil", "México"],
        cor: "Brasil"
    },
    {
        quest: "Qual é o maior felino do mundo",
        options: ["Leão", "Tigre", "Leopardo", "Guepardo"],
        cor: "Tigre"
    },
    {
        quest: "Quem é o autor de O Morro dos Ventos Uivantes",
        options: ["Emily Brontë", "Jane Austen", "Mary Shelley", "Louisa May Alcott"],
        cor: "Emily Brontë"
    },
    {
        quest: "Qual cidade é famosa pelo Big Ben",
        options: ["Paris", "Londres", "Nova Iorque", "Roma"],
        cor: "Londres"
    },
    {
        quest: "Qual é a moeda do Japão",
        options: ["Iene", "Dólar", "Yuan", "Libra"],
        cor: "Iene"
    },
    {
        quest: "Quem foi o líder da Independência dos EUA",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        cor: "George Washington"
    },
    {
        quest: "Qual planeta é conhecido como gigante gasoso",
        options: ["Júpiter", "Marte", "Vénus", "Saturno"],
        cor: "Júpiter"
    },
    {
        quest: "Qual é a capital da Turquia",
        options: ["Ancara", "Istambul", "Izmir"],
        cor: "Ancara"
    },
    {
        quest: "Quem pintou A Persistência da Memória",
        options: ["Salvador Dalí", "Picasso", "Van Gogh", "Monet"],
        cor: "Salvador Dalí"
    },
    {
        quest: "Qual é a maior cadeia de montanhas do mundo",
        options: ["Himalaia", "Andes", "Alpes", "Rocosas"],
        cor: "Himalaia"
    },
    {
        quest: "Qual jogador brasileiro é conhecido como O Rei do Futebol",
        options: ["Zico", "Romário", "Pelé", "Neymar"],
        cor: "Pelé"
    },
    {
        quest: "Qual é o oceano que banha o Japão",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        cor: "Pacífico"
    },
    {
        quest: "Quem escreveu Macbeth",
        options: ["Shakespeare", "Tolstói", "Cervantes", "Goethe"],
        cor: "Shakespeare"
    },
    {
        quest: "Qual é a capital da Rússia",
        options: ["Moscovo", "São Petersburgo", "Kiev", "Minsk"],
        cor: "Moscovo"
    },
    {
        quest: "Qual é o metal usado em moedas de 1 euro",
        options: ["Ouro", "Cobre", "Níquel", "Prata"],
        cor: "Níquel"
    },
    {
        quest: "Qual personagem é o arqui-inimigo do Batman",
        options: ["Joker", "Lex Luthor", "Pinguim", "Duas-Caras", "Charada"],
        cor: "Joker"
    },
    {
        quest: "Qual é a capital da Noruega",
        options: ["Oslo", "Estocolmo", "Helsínquia", "Copenhaga"],
        cor: "Oslo"
    },
    {
        quest: "Quem é conhecido por desenvolver o primeiro computador eletrônico",
        options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
        cor: "Charles Babbage"
    },
    {
        quest: "Qual é o maior país da África",
        options: ["Nigéria", "África do Sul", "Argélia", "Egito"],
        cor: "Argélia"
    },
    {
        quest: "Qual é a capital da Grécia",
        options: ["Atenas", "Esparta", "Corinto", "Tessalónica"],
        cor: "Atenas"
    },
    {
        quest: "Qual é a bebida típica da Escócia",
        options: ["Whisky", "Vodka", "Rum", "Cerveja"],
        cor: "Whisky"
    },
    {
        quest: "Qual é o maior mamífero aquático",
        options: ["Tubarão", "Baleia Azul", "Golfinho", "Orca"],
        cor: "Baleia Azul"
    },
    {
        quest: "Quem escreveu Crime e Castigo",
        options: ["Dostoiévski", "Tolstói", "Camus", "Kafka"],
        cor: "Dostoiévski"
    },
    {
        quest: "Qual é o planeta mais próximo do Sol",
        options: ["Vénus", "Mercúrio", "Terra", "Marte"],
        cor: "Mercúrio"
    },
    {
        quest: "Quem inventou a internet",
        options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Elon Musk"],
        cor: "Tim Berners-Lee"
    },
    {
        quest: "Qual é o nome do satélite natural da Terra",
        options: ["Marte", "Lua", "Júpiter", "Vénus"],
        cor: "Lua"
    },
    {
        quest: "Quem descobriu a América",
        options: ["Cristóvão Colombo", "Vasco da Gama", "Magalhães"],
        cor: "Cristóvão Colombo"
    },
    {
        quest: "Qual é a capital da Bélgica",
        options: ["Bruxelas", "Amsterdã", "Paris"],
        cor: "Bruxelas"
    },
    {
        quest: "Qual é a principal língua falada na Argentina",
        options: ["Espanhol", "Português", "Italiano"],
        cor: "Espanhol"
    },
    {
        quest: "Qual é o maior rio da África",
        options: ["Nilo", "Congo", "Zambeze", "Niger"],
        cor: "Nilo"
    },
    {
        quest: "Quem pintou A Criação de Adão",
        options: ["Michelangelo", "Leonardo", "Raphael", "Donatello"],
        cor: "Michelangelo"
    },
    {
        quest: "Qual é o metal mais leve",
        options: ["Ouro", "Lítio", "Alumínio", "Prata"],
        cor: "Lítio"
    },
    {
        quest: "Quem é conhecido como O Pai da Computação",
        options: ["Alan Turing", "Steve Jobs", "Charles Babbage", "Bill Gates"],
        cor: "Charles Babbage"
    },
    {
        quest: "Qual cidade é famosa pelo Taj Mahal",
        options: ["Mumbai", "Agra", "Nova Deli", "Jaipur"],
        cor: "Agra"
    },
    {
        quest: "Qual país é conhecido pelo kimchi",
        options: ["China", "Coreia do Sul", "Japão", "Vietname"],
        cor: "Coreia do Sul"
    },
    {
        quest: "Quem escreveu O Retrato de Dorian Gray",
        options: ["Oscar Wilde", "Shakespeare", "Poe", "Shelley"],
        cor: "Oscar Wilde"
    },
    {
        quest: "Qual é a capital do México",
        options: ["Guadalajara", "Monterrey", "Cidade do México", "Cancún"],
        cor: "Cidade do México"
    },
    {
        quest: "Qual é o maior país da América do Sul",
        options: ["Brasil", "Argentina", "Chile", "Peru"],
        cor: "Brasil"
    },
    {
        quest: "Quem descobriu a penicilina",
        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch"],
        cor: "Alexander Fleming"
    },
    {
        quest: "Qual é o nome da teoria que explica a origem do universo",
        options: ["Big Bang", "Relatividade", "Evolução", "Gravitação"],
        cor: "Big Bang"
    },
    {
        quest: "Qual é a capital da Finlândia",
        options: ["Estocolmo", "Helsínquia", "Oslo", "Copenhaga"],
        cor: "Helsínquia"
    },
    {
        quest: "Qual é o maior predador terrestre",
        options: ["Tigre", "Urso-pardo", "Leão", "Hiena"],
        cor: "Tigre"
    },
    {
        quest: "Quem é o autor de O Código Da Vinci",
        options: ["Dan Brown", "Stephen King", "J.K. Rowling"],
        cor: "Dan Brown"
    },
    {
        quest: "Qual animal produz seda",
        options: ["Bicho-da-seda", "Aranha", "Abelhas", "Lagarta comum"],
        cor: "Bicho-da-seda"
    },
    {
        quest: "Qual é o oceano mais frio",
        options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        cor: "Ártico"
    },
    {
        quest: "Quem foi o primeiro-ministro britânico durante a Segunda Guerra Mundial",
        options: ["Churchill", "Winston Churchill", "Thatcher", "Blair"],
        cor: "Winston Churchill"
    },
    {
        quest: "Qual é a capital da Turquia",
        options: ["Ancara", "Istambul", "Antalya", "Izmir"],
        cor: "Ancara"
    },
    {
        quest: "Qual é o maior estado do Brasil",
        options: ["São Paulo", "Rio de Janeiro", "Amazonas", "Minas Gerais"],
        cor: "Amazonas"
    },
    {
        quest: "Quem inventou o rádio",
        options: ["Guglielmo Marconi", "Tesla", "Edison", "Bell"],
        cor: "Guglielmo Marconi"
    },
    {
        quest: "Qual país é famoso pelo flamenco",
        options: ["Espanha", "Portugal", "Itália", "França"],
        cor: "Espanha"
    },
    {
        quest: "Qual é o maior animal terrestre africano",
        options: ["Rinoceronte", "Elefante", "Girafa", "Hipopótamo"],
        cor: "Elefante"
    },
    {
        quest: "Quem escreveu O Hobbit",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "George Martin", "Lewis Carroll"],
        cor: "J.R.R. Tolkien"
    },
    {
        quest: "Qual planeta é o mais distante do Sol",
        options: ["Netuno", "Saturno", "Urano", "Plutão"],
        cor: "Netuno"
    },
    {
        quest: "Qual é a capital da Nova Zelândia",
        options: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
        cor: "Wellington"
    },
    {
        quest: "Qual é a bebida alcoólica típica da Rússia",
        options: ["Vodka", "Rum", "Whisky", "Tequila"],
        cor: "Vodka"
    },
    {
        quest: "Qual cientista formulou a lei da gravitação universal",
        options: ["Newton", "Isaac Newton", "Galileo", "Einstein"],
        cor: "Isaac Newton"
    },
    {
        quest: "Qual é o maior rio da Europa",
        options: ["Reno", "Volga", "Danúbio", "Sena"],
        cor: "Volga"
    },
    {
        quest: "Quem pintou O Jardim das Delícias",
        options: ["Hieronymus Bosch", "Bruegel", "Dürer"],
        cor: "Hieronymus Bosch"
    },
    {
        quest: "Qual é a capital da Coreia do Sul",
        options: ["Pyongyang", "Seul", "Busan", "Incheon"],
        cor: "Seul"
    },
    {
        quest: "Qual é o maior planeta anão do Sistema Solar",
        options: ["Plutão", "Ceres", "Eris", "Makemake"],
        cor: "Eris"
    },
    {
        quest: "Quem escreveu Orgulho e Preconceito",
        options: ["Jane Austen", "Emily Brontë", "Charles Dickens", "Mary Shelley"],
        cor: "Jane Austen"
    },
    {
        quest: "Qual é o símbolo químico da prata",
        options: ["Ag", "Au", "Pt", "Pb"],
        cor: "Ag"
    },
    {
        quest: "Qual é o maior estádio de futebol do mundo",
        options: ["Maracanã", "Camp Nou", "Rungrado 1º de Maio", "Wembley"],
        cor: "Rungrado 1º de Maio"
    },
    {
        quest: "Qual país é conhecido pela Oktoberfest",
        options: ["Alemanha", "Áustria", "Suíça", "Bélgica"],
        cor: "Alemanha"
    },
    {
        quest: "Quem pintou Noite Estrelada sobre o Ródano",
        options: ["Van Gogh", "Monet", "Renoir", "Cézanne"],
        cor: "Van Gogh"
    },
    {
        quest: "Qual é o maior lago da África",
        options: ["Lago Tanganica", "Lago Malawi", "Lago Vitória", "Lago Chade"],
        cor: "Lago Vitória"
    },
    {
        quest: "Quem é autor de O Apanhador no Campo de Centeio",
        options: ["J.D. Salinger", "Harper Lee", "Steinbeck", "Fitzgerald"],
        cor: "J.D. Salinger"
    },
    {
        quest: "Qual é o maior estado dos EUA em área",
        options: ["Texas", "Flórida", "Alasca", "Califórnia"],
        cor: "Alasca"
    },
    {
        quest: "Qual é a capital do Canadá",
        options: ["Vancouver", "Montreal", "Ottawa", "Toronto"],
        cor: "Ottawa"
    },
    {
        quest: "Quem inventou a vacina contra a varíola",
        options: ["Edward Jenner", "Louis Pasteur", "Fleming", "Koch"],
        cor: "Edward Jenner"
    },
    {
        quest: "Qual é o país do chocolate e dos relógios",
        options: ["Suíça", "Bélgica", "França", "Alemanha"],
        cor: "Suíça"
    },
    {
        quest: "Quem foi o primeiro presidente da África do Sul pós-apartheid",
        options: ["Nelson Mandela", "Thabo Mbeki", "Jacob Zuma"],
        cor: "Nelson Mandela"
    },
    {
        quest: "Qual é o menor país do mundo",
        options: ["Vaticano", "Mónaco", "Liechtenstein", "Nauru"],
        cor: "Vaticano"
    },
    {
        quest: "Quem escreveu A Metamorfose",
        options: ["Franz Kafka", "Dostoiévski", "Camus", "Sartre"],
        cor: "Franz Kafka"
    },
    {
        quest: "Qual é a capital do Marrocos",
        options: ["Casablanca", "Marrakesh", "Rabat", "Fez"],
        cor: "Rabat"
    },
    {
        quest: "Qual é a maior ilha do mundo",
        options: ["Groenlândia", "Madagascar", "Sumatra", "Bornéu"],
        cor: "Groenlândia"
    },
    {
        quest: "Quem inventou o avião",
        options: ["Santos Dumont", "Irmãos Wright", "Leonardo da Vinci", "Bell"],
        cor: "Santos Dumont"
    },
    {
        quest: "Qual animal é símbolo dos EUA",
        options: ["Águia-careca", "Urso", "Lobo", "Búfalo"],
        cor: "Águia-careca"
    },
    {
        quest: "Qual é a moeda da Austrália",
        options: ["Dólar", "Dólar australiano", "Libra", "Euro", "Iene"],
        cor: "Dólar australiano"
    },
    {
        quest: "Quem pintou A Ronda Noturna",
        options: ["Rembrandt", "Vermeer", "Van Gogh", "Monet"],
        cor: "Rembrandt"
    },
    {
        quest: "Qual planeta tem mais luas conhecidas",
        options: ["Saturno", "Júpiter", "Marte", "Urano"],
        cor: "Saturno"
    },
    {
        quest: "Qual é a capital da Dinamarca",
        options: ["Copenhaga", "Oslo", "Helsínquia", "Estocolmo"],
        cor: "Copenhaga"
    },
    {
        quest: "Quem foi o líder da Revolução Russa de 1917",
        options: ["Lenin", "Stalin", "Trotsky", "Kerensky"],
        cor: "Lenin"
    },
    {
        quest: "Qual é a capital da Hungria",
        options: ["Budapeste", "Praga", "Viena", "Bratislava"],
        cor: "Budapeste"
    },
    {
        quest: "Qual é o maior país do Oriente Médio",
        options: ["Arábia Saudita", "Irã", "Iraque", "Turquia"],
        cor: "Arábia Saudita"
    },
    {
        quest: "Quem escreveu O Processo",
        options: ["Franz Kafka", "Camus", "Dostoiévski", "Orwell"],
        cor: "Franz Kafka"
    },
    {
        quest: "Qual é o maior animal aquático",
        options: ["Baleia Azul", "Tubarão", "Orca", "Golfinho"],
        cor: "Baleia Azul"
    },
    {
        quest: "Qual país tem o Cristo Redentor",
        options: ["Brasil", "México", "Portugal", "Espanha"],
        cor: "Brasil"
    },
    {
        quest: "Qual é a capital da Escócia",
        options: ["Edimburgo", "Glasgow", "Aberdeen", "Dundee"],
        cor: "Edimburgo"
    },
    {
        quest: "Quem inventou o telefone",
        options: ["Alexander Graham Bell", "Edison", "Tesla", "Marconi"],
        cor: "Alexander Graham Bell"
    },
    {
        quest: "Qual é o deserto mais frio do mundo",
        options: ["Antártico", "Gobi", "Kalahari", "Atacama"],
        cor: "Antártico"
    },
    {
        quest: "Qual planeta é conhecido como gigante gasoso",
        options: ["Júpiter", "Marte", "Vénus", "Mercúrio"],
        cor: "Júpiter"
    },
    {
        quest: "Quem pintou O Nascimento de Vénus",
        options: ["Botticelli", "Leonardo", "Michelangelo", "Rafael"],
        cor: "Botticelli"
    },
    {
        quest: "Qual é o maior país do Sudeste Asiático",
        options: ["Indonésia", "Tailândia", "Filipinas", "Malásia"],
        cor: "Indonésia"
    },
    {
        quest: "Quem escreveu O Velho e o Mar",
        options: ["Ernest Hemingway", "Steinbeck", "Faulkner", "Orwell"],
        cor: "Ernest Hemingway"
    }
];

// Variáveis de Estado
let perguntasRestantes = [];
let perguntaAtual;
let bloqueado = false;
let score = 0;
let timerInterval;
const TEMPO_POR_PERGUNTA = 10; // Segundos

// --- Funções Principais ---

// Inicializa o quiz
function iniciarQuiz() {
    score = 0;
    scoreEl.textContent = "Score: 0";
    perguntasRestantes = [...perguntas];

    // Oculta botões e telas
    start_btn.style.display = "none";
    restart_btn.style.display = "none";
    end_screen.style.display = "none";
    
    // Mostra elementos do quiz
    header_quiz.style.display = "flex";
    questionEl.style.display = "block";
    answersEl.forEach(a => a.style.display = "list-item");
    answersList.style.display = "grid";

    renderQuestion();
}

// Renderiza a pergunta
function renderQuestion() {
    // 1. Fim do Quiz
    if (perguntasRestantes.length === 0) {
        return finalizarQuiz();
    }

    // Reseta o estado para a nova pergunta
    bloqueado = false;
    answersEl.forEach(a => {
        a.classList.remove("correct", "incorrect", "locked");
    });
    clearInterval(timerInterval); // Limpa o timer anterior
    iniciarTimer(); // Inicia um novo timer

    // 2. Seleciona a Pergunta
    const index = Math.floor(Math.random() * perguntasRestantes.length);
    perguntaAtual = perguntasRestantes.splice(index, 1)[0];
    questionEl.textContent = perguntaAtual.quest + "?";

    // 3. Embaralha e Renderiza as Opções
    const shuffled = [...perguntaAtual.options].sort(() => Math.random() - 0.5);

    let letterArray = ["A", "B", "C", "D"];
    answersEl.forEach((answer, i) => {
        answer.textContent = letterArray[i] + ". " + shuffled[i];
        answer.dataset.option = shuffled[i]; // Armazena o texto da opção
        answer.dataset.correct = shuffled[i] === perguntaAtual.cor;
    });
}

// Lógica de clique na resposta
function handleAnswerClick(clickedAnswer) {
    if (bloqueado) return;
    bloqueado = true;
    clearInterval(timerInterval); // Para o timer ao responder

    const isCorrect = clickedAnswer.dataset.correct === "true";

    if (isCorrect) {
        clickedAnswer.classList.add("correct");
        score++;
        scoreEl.textContent = `Score: ${score}`;
    } else {
        clickedAnswer.classList.add("incorrect");
        // Mostra a resposta correta
        answersEl.forEach(a => {
            if (a.dataset.correct === "true") {
                a.classList.add("correct");
            }
        });
    }

    // Espera um pouco e carrega a próxima
    setTimeout(() => {
        renderQuestion();
    }, 1200);
}

// --- Funções de Timer e Finalização ---

// Inicia o timer
function iniciarTimer() {
    let tempoRestante = TEMPO_POR_PERGUNTA;
    timerEl.textContent = `Tempo: ${tempoRestante}s`;

    timerInterval = setInterval(() => {
        tempoRestante--;
        timerEl.textContent = `Tempo: ${tempoRestante}s`;

        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            bloqueado = true;
            questionEl.textContent = "Tempo esgotado! A resposta era: " + perguntaAtual.cor;
            answersEl.forEach(a => a.classList.add("locked")); // Bloqueia clicks

            // Mostra a resposta correta
            answersEl.forEach(a => {
                if (a.dataset.correct === "true") {
                    a.classList.add("correct");
                }
            });

            // Vai para a próxima pergunta após um delay
            setTimeout(() => {
                renderQuestion();
            }, 2000);
        }
    }, 1000);
}

// Finaliza o Quiz
function finalizarQuiz() {
    clearInterval(timerInterval);
    
    // Oculta elementos do quiz
    header_quiz.style.display = "none";
    questionEl.style.display = "none";
    answersEl.forEach(a => a.style.display = "none");
    answersList.style.display = "none";

    // Mostra a tela final
    end_screen.style.display = "block";
    final_score_text.textContent = `Sua pontuação final é: ${score} de ${perguntas.length} perguntas.`;
    restart_btn.style.display = "block"; // Mostra o botão de reiniciar
}

// --- Listeners de Eventos ---

// Clique nas respostas
answersEl.forEach(answer => {
    answer.addEventListener("click", () => {
        handleAnswerClick(answer);
    });
});

// Botão Iniciar
start_btn.addEventListener("click", iniciarQuiz);

// Botão Reiniciar
restart_btn.addEventListener("click", iniciarQuiz);