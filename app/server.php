<?php
    session_start();

    $acao = $_POST['acao'];

    if($acao == 'inserir'){
        // $_POST['nome']
        if(!isset($_SESSION['nomes'])){
            $_SESSION['nomes'] = Array();
        }
        $_SESSION['nomes'][] = $_POST['nome'];
    }
    else if($acao == 'mostrar'){
        echo json_encode($_SESSION['nomes']);
    }
?>