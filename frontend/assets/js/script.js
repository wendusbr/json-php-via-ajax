$('#cadastrar').on('submit', function(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const corFav = document.getElementById('corFav').value;
    
    $.ajax({
        url: '../app/server.php',
        type: 'POST',
        data:{
            acao: 'inserir',
            nome: nome,
            email: email,
            corFav: corFav
        }
    })
})

$('#btnMostrar').click(function(){
    $.ajax({
        url:'../app/server.php',
        type: 'POST',
        data:{
            acao: 'mostrar'
        },
        success: (response)=>{
            const list = JSON.parse(response);
            
            document.getElementById('saida').innerHTML = '';
            for(var i=0; i<list.length; i++){
                var pessoa = '<tr>';
                pessoa += `
                    <td>${list[i]['id']}</td>
                    <td>${list[i]['nome']}</td>
                    <td>${list[i]['email']}</td>
                    <td>${list[i]['cor_fav']}</td>
                `;
                pessoa += '</tr>';

                document.getElementById('saida').innerHTML += pessoa;
            }
        }
    });
});