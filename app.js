function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value ;
    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado! Você precisa digitar o nome de um atleta ou esporte</p>";
        return
    } 
    
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // cria novo elemento
            resultados += `
            <div class="item-resultado">
                 <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
                 </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `
        }
       
    }

    if (!resultados) {
        resultados = "<p>Nada encontrado</p>"
    }
    
    section.innerHTML = resultados
}





