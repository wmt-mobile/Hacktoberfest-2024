<?php 

function permutation(string $a, string $b){

    if(strlen($a) != strlen($b)){
        return false;
    }
    $a = str_split($a);
    $b = str_split($b);
    sort($a);
    sort($b);
    return $a == $b;
}

print_r(permutation('abcd','dcba') ? "True" : "False");

?>