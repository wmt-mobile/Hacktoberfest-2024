import numpy as np

def simple_linear_regression_gradient_descent(X, y, learning_rate=0.01, epochs=1000):
    """
    Function for implementing Simple Linear Regression using Gradient Descent.

    Parameters:
    - X: List or numpy array.
    - y: List or numpy array.
    - learning_rate: The step size for each iteration.
    - epochs: Number of iterations to run the gradient descent.

    Returns:
    - m: Learned slope.
    - c: Learned intercept.
    """
    X = np.array(X)
    y = np.array(y)
    n = len(X)
    m = 0.0
    c = 0.0
    
    for epoch in range(epochs):
        y_pred = m * X + c
        loss = (1/n) * np.sum((y_pred - y) ** 2)
        dm = (2/n) * np.sum(X * (y_pred - y))
        dc = (2/n) * np.sum(y_pred - y)
        m -= learning_rate * dm
        c -= learning_rate * dc
        if (epoch+1) % 100 == 0:
            print(f"Epoch {epoch+1}: Loss = {loss:.4f}, m = {m:.4f}, c = {c:.4f}")
    
    return m, c

if __name__ == "__main__":

    X = [1, 2, 3, 4]
    y = [2, 3, 4, 5]
    
    # Training the model
    slope, intercept = simple_linear_regression_gradient_descent(X, y, learning_rate=0.01, epochs=1000)
    
    print(f"\nLearned Parameters:\nSlope (m) = {slope:.4f}\nIntercept (c) = {intercept:.4f}")
