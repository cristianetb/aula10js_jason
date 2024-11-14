const livros = [
    {
        "titulo": "Outlander - A Viajante do tempo - Livro 1",
        "autor": "Diana Gabaldon",
        "anoPublicacao": "2018",
        "capa": "https://m.media-amazon.com/images/I/61C4rFG-oYL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        "titulo": "Outlander - A libélula no âmbar - Livro 2",
        "autor": "Diana Gabaldon",
        "anoPublicacao": "2018",
        "capa": "https://m.media-amazon.com/images/I/71N1LwdVFEL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        "titulo": "Outlander - O resgate no mar - Livro 3",
        "autor": "Diana Gabaldon",
        "anoPublicacao": "2018",
        "capa": "https://m.media-amazon.com/images/I/61tpKt86eXL._AC_UF1000,1000_QL80_.jpg"
    }
]

function carregarLivros(livros) {

    const divBiblioteca = document.querySelector('#biblioteca')
    divBiblioteca.innerHTML = ''
    
    livros.forEach(livro =>{
        const estruturaHtml = `
        <h2>${livro.titulo}</h2>
        <ul></ul>
        <li>Autor: ${livro.autor}</li>
        <li>Ano de Publicação: ${livro.anoPublicacao}</li>
        <li>
        <img src="${livro.capa}" alt="">
        
        </li>
        <hr>`
        divBiblioteca.innerHTML += estruturaHtml
    })
}
carregarLivros(livros)
