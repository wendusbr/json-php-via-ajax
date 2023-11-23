<?php
    include('config.php');

    switch($_POST['acao']){
        case 'inserir':
            $nome = $_POST['nome'];
            $email = $_POST['email'];
            $corFav = $_POST['corFav'];

            $sql = "INSERT INTO pessoa(nome, email, cor_fav) VALUES ('{$nome}', '{$email}', '{$corFav}')";

            $result = $conexao->query($sql);
            break;
            
        case 'mostrar':
            $sql = "SELECT * FROM pessoa";
            $result = $conexao->query($sql);

            $qtd = $result->num_rows;

            if($qtd){
                $tuplas['rows'] = Array();
                while($row = $result->fetch_object()){
                    $tuplas['rows'][] = $row;
                }

                echo json_encode($tuplas['rows']);
            }
            break;
    }
?>