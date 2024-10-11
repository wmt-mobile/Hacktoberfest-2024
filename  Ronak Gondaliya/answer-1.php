<?php
function rotate(array $arr,int $k) {
    $a = array_slice($arr, 0,$k);
    $b = array_slice($arr,$k);
    return array_merge($b,$a);
}
print_r(rotate([1,2,3,4,5,6,7],3));
?>