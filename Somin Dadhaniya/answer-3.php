    <?php
    function productExceptSelf($nums)
    {
        $n = count($nums);
        $answer = array_fill(0, $n, 1);

        // Step 1: Calculate the product of all elements to the left of each index
        $leftProduct = 1;
        for ($i = 0; $i < $n; $i++) {
            $answer[$i] = $leftProduct;
            $leftProduct *= $nums[$i];
        }

        // Step 2: Calculate the product of all elements to the right of each index
        $rightProduct = 1;
        for ($i = $n - 1; $i >= 0; $i--) {
            $answer[$i] *= $rightProduct;
            $rightProduct *= $nums[$i];
        }

        return $answer;
    }

    // Example usage
    $nums = [1, 2, 3, 4];
    $result = productExceptSelf($nums);
    print_r($result);
