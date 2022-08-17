<?php

$var_username = 'username';
$var_pass = 'password';

$users = [
    [
        $var_username => 'bob',
        $var_pass => 'bob'
    ],
    [
        $var_username => 'bob2',
        $var_pass => 'bob2'
    ]
    ];

    $data = $_POST;

    $username = $data[$var_username] ?? '';
    $pass = $data[$var_pass] ?? '';

    $isMatch = false;

    foreach($users as $user){
        if($username === $user[$var_username]){
            if($pass === $user[$var_pass]){
                $isMatch = true;
                break;
            }
        }
    }

    if ($isMatch){
        echo "Hello {$username}";
    }else{
        echo "Get out of my swamp";
    }