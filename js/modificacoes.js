function mudaImagem(identificaImagem) {

    var imagens = [
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner1.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner2.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner3.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner4.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner5.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner6.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner7.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner8.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner9.jpg')",
        "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50) 100%), url('imgBanner/imgBanner10.jpg')"
    ];

    var nomesFilmes = [
        "The Umbrella Academy",
        "Star Wars: Episódio IX",
        "Pokémon: Detetive Pikachu",
        "Capitão América: Guerra Civil",
        "O Hobbit: A Batalha dos Cinco Exércitos",
        "Breaking Bad: A Química do Mal",
        "Dr. House",
        "Sobrenatural",
        "Smallville: As Aventuras do Superboy",
        "Vingadores: Guerra Infinita"
    ];

    var descricaoFilmes = [
        "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.",
        "Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia.",
        "O desaparecimento do detetive Harry Goodman faz com que seu filho Tim parta à sua procura. Ao seu lado ele conta com Pikachu que perdeu a memória recentemente.",
        "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade.",
        "O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo.",
        "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.",
        "Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho.",
        "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.",
        "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville.",
        "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos."
    ]

    document.getElementById('descreveFilmes').textContent = descricaoFilmes[identificaImagem];
    document.getElementById('nomeFilme').textContent = nomesFilmes[identificaImagem];
    document.getElementById('imgPrincipal').style.background = imagens[identificaImagem];
    document.getElementById('imgPrincipal').style.fontSize = "16px";
    document.getElementById('imgPrincipal').style.height = "400px";
    document.getElementById('imgPrincipal').style.backgroundSize = "cover";
    document.getElementById('imgPrincipal').style.display = "flex";
    document.getElementById('imgPrincipal').style.flexDirection = "column";
    document.getElementById('imgPrincipal').style.justifyContent = "center";
    document.getElementById('imgPrincipal').style.alignItems = "flex-start";
}

