$(document).ready(function(){
    $('#btnInserir').click(function(){
        $.ajax({
            url:'../app/server.php',
            type: 'POST',
            data:{
                acao: 'inserir',
                nome: $('#nome').val()
            },
            success: (resultado)=>{
                alert('Sucesso');
            }
        });
    })
    $('#btnMostrar').click(function(){
        $.ajax({
            url:'../app/server.php',
            type: 'POST',
            data:{
                acao: 'mostrar'
            },
            success: (resultado)=>{
                nomes = JSON.parse(resultado);
                
                var lista = '<ul>';
                for(var i=0; i<nomes.length; i++)
                    lista += `<li>${nomes[i]}</li>`;
                lista += '</ul>';

                $('#saida').html(lista);
            }
        });
    })
});