document.addEventListener('DOMContentLoaded', function() {
    const nameElemento = document.getElementById('name');
    const userNameElemeto = document.getElementById('username');
    const avatarElemento = document.getElementById('avatar');
    const repositorio = document.getElementById('repositorio');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const userLink = document.getElementById('userlink')

    fetch('https://api.github.com/users/Welliveltondev')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameElemento.innerText = json.name;
        userNameElemeto.innerText = json.login;
        avatarElemento.src = json.avatar_url;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        repositorio.innerText = json.Welliveltondev.tab.repositories;
        userLink.href = json.html_url;
    })
})