def matrix_multiply(A, B):
    """
    Multiplies two matrices A and B.

    Parameters:
    - A: List of lists where each sublist represents a row in matrix A.
    - B: List of lists where each sublist represents a row in matrix B.

    Returns:
    - List of lists representing the product matrix.

    Raises:
    - ValueError: If the matrices cannot be multiplied due to incompatible dimensions.
    """
    num_rows_A = len(A)
    num_cols_A = len(A[0]) if A else 0
    num_rows_B = len(B)
    num_cols_B = len(B[0]) if B else 0

    if num_cols_A != num_rows_B:
        raise ValueError(f"Incompatible dimensions for matrix multiplication: "
                         f"A is {num_rows_A}x{num_cols_A}, B is {num_rows_B}x{num_cols_B}.")

    result = [[0 for _ in range(num_cols_B)] for _ in range(num_rows_A)]

    for i in range(num_rows_A):
        for j in range(num_cols_B):
            for k in range(num_cols_A):
                result[i][j] += A[i][k] * B[k][j]

    return result

if __name__ == "__main__":
    A = [
        [1, 2],
        [3, 4]
    ]
    B = [
        [5, 6],
        [7, 8]
    ]

    try:
        C = matrix_multiply(A, B)
        print("Matrix A:")
        for row in A:
            print(row)
        print("\nMatrix B:")
        for row in B:
            print(row)
        print("\nMatrix A x B = Matrix C:")
        for row in C:
            print(row)
    except ValueError as e:
        print(e)
