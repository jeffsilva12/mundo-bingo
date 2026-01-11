let cartela = [];
let sorteados = [];
const viagens = [

    {
        lugar: '<h2>Maldivas</h2>',
        frase: '<h4>Água cristalina, paz absoluta… até acabar o dinheiro 😌</h4>',
        img: '<img class="img-viagem" src="https://ilhasmaldivas.com.br/wp-content/uploads/2021/10/ilhas-maldivas-galeria-vakkaru-resort-02.jpg">'
    },

    {
        lugar: '<h2>Faixa de Gaza</h2>',
        frase: '<h4>Boa sorte… o colete à prova de bala é item básico 😬</h4>',
        img: '<img class="img-viagem" src="https://i0.wp.com/apublica.org/wp-content/uploads/2025/10/Capa_O-que-vem-depois-do-cessar-fogo-na-Faixa-de-Gaza-1.jpg?fit=1400%2C933&ssl=1">'
    },

    {
        lugar: '<h2>Fernando de Noronha</h2>',
        frase: '<h4>Lindo, exclusivo… e cada respiração custa caro 🐠</h4>',
        img: '<img class="img-viagem" src="https://www.rodamundo.tur.br/blog/wp-content/uploads/2019/03/Ba%C3%ADa-dos-Porcos-em-Fernando-de-Noronha-rodamundo-1.jpg">'
    },

    {
        lugar: '<h2>Coreia do Norte</h2>',
        frase: '<h4>Sorria pouco, fale menos ainda… e obedeça sempre 😶</h4>',
        img: '<img class="img-viagem" src="https://images.adsttc.com/media/images/64f0/d1ad/bbf5/636b/2a7d/ee39/large_jpg/natal-em-pyongyang-uma-cronica-fotografica-sobre-a-capital-da-coreia-do-norte_32.jpg?1693503952">'
    },

    {
        lugar: '<h2>Santorini – Grécia</h2>',
        frase: '<h4>Pôr do sol romântico nível Instagram 📸 E um beijo diferente...</h4>',
        img: '<img class="img-viagem" src="https://media.staticontent.com/media/pictures/cdc46a03-9eb3-4e5e-8dd2-aa4d5bf30033">'
    },

    {
        lugar: '<h2>Morro do Alemão</h2>',
        frase: '<h4>Turismo de adrenalina… corre que é bala 😅</h4>',
        img: '<img class="img-viagem" src="https://www.vozdascomunidades.com.br/wp-content/uploads/2016/05/historiadocomplexo.jpg">'
    },

    {
        lugar: '<h2>Bora Bora</h2>',
        frase: '<h4>Bangalozinho sobre o mar e zero boletos por alguns dias 🌴</h4>',
        img: '<img class="img-viagem" src="https://media.staticontent.com/media/pictures/fe332867-b9e4-4db8-a4eb-f3d757d89664">'
    },

    {
        lugar: '<h2>Ucrânia</h2>',
        frase: '<h4>Escolha errada de época… muito errada 💥</h4>',
        img: '<img class="img-viagem" src="https://imagens.publico.pt/imagens.aspx/2057898?tp=UH&db=&type=&w=320&h=180&act=cropResize">'
    },

    {
        lugar: '<h2>Gramado</h2>',
        frase: '<h4>Chocolate quente, friozinho e paz no coração ☕</h4>',
        img: '<img class="img-viagem" src="https://media.staticontent.com/media/pictures/9804ef39-84a4-4011-9d10-7566f9c92945">'
    },

    {
        lugar: '<h2>Beco de Zé Borges</h2>',
        frase: '<h4>GPS perde sinal e o juízo também 🏃‍♂️</h4>',
        img: '<img class="img-viagem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFc_dOMAKVDFrSu1MVX2uojKgHISPdk9Hs9Q&s">'
    },

    {
        lugar: '<h2>Guarabira</h2>',
        frase: '<h4>Calor nível inferno… mas o povo é gente boa 🔥</h4>',
        img: '<img class="img-viagem" src="https://brejo.com/wp-content/uploads/2020/05/guarabira-rose-video.jpg">'
    }

];


criarCartela();

function criarCartela() {
    cartela = [];
    sorteados = [];
    document.getElementById("cartela").innerHTML = "";
    document.getElementById("numeroAtual").innerText = "—";
    document.getElementById("tabelaContainer").classList.add("d-none");
    document.getElementById("tabelaBingo").innerHTML = "";

    while (cartela.length < 5) {
        let n = Math.floor(Math.random() * 75) + 1;
        if (!cartela.includes(n)) cartela.push(n);
    }

    cartela.forEach(num => {
        let label = document.createElement("label");
        let input = document.createElement("input");
        let span = document.createElement("span");

        input.type = "checkbox";
        span.innerText = num;

        label.appendChild(input);
        label.appendChild(span);

        document.getElementById("cartela").appendChild(label);
    });
}

function recriarCartela() {
    if (confirm("Tem certeza que deseja recriar sua cartela?")) {
        criarCartela();
    }
}

function sortearNumero() {
    if (sorteados.length === 75) return;

    let numero;
    do {
        numero = Math.floor(Math.random() * 75) + 1;
    } while (sorteados.includes(numero));

    sorteados.push(numero);
    document.getElementById("numeroAtual").innerText = numero;
    document.getElementById("tabelaContainer").classList.remove("d-none");

    atualizarTabela();
}

function atualizarTabela() {
    let tabela = document.getElementById("tabelaBingo");
    tabela.innerHTML = "";

    for (let i = 1; i <= 75; i++) {
        let div = document.createElement("div");
        div.innerText = i;
        if (sorteados.includes(i)) {
            div.classList.add("ativo");
        }
        tabela.appendChild(div);
    }
}

function sortearViagem() {
    const viagem = viagens[Math.floor(Math.random() * viagens.length)];

    document.getElementById("resultadoViagem").innerHTML = `
        <div class="viagem-card">
            ${viagem.lugar}
            <div class="img-container">${viagem.img}</div>            
            ${viagem.frase}
        </div>
    `;
}

