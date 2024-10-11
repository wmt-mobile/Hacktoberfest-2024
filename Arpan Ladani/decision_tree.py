import numpy as np

class DecisionTreeNode:
    def __init__(self, feature_index=None, threshold=None, left=None, right=None, *, value=None):
        """
        Contructor method for DecisionTreeNode.
        """
        self.feature_index = feature_index
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value

    def is_leaf_node(self):
        return self.value is not None

class DecisionTreeClassifier:
    def __init__(self, max_depth=100, min_samples_split=2):
        """
        Initializes the Decision Tree Classifier.

        Parameters:
        - max_depth: Maximum depth of the tree.
        - min_samples_split: Minimum number of samples required to split an internal node.
        """
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.root = None

    def fit(self, X, y):
        """
        Builds the decision tree classifier.

        Parameters:
        - X: Training features, a list of lists or 2D numpy array.
        - y: Training labels, a list or 1D numpy array.
        """
        self.root = self._build_tree(np.array(X), np.array(y))

    def predict(self, X):
        """
        Predicts class labels for the given test set.

        Parameters:
        - X: Test features, a list of lists or 2D numpy array.

        Returns:
        - List of predicted class labels.
        """
        return [self._traverse_tree(x, self.root) for x in X]

    def _gini(self, y):
        """
        Calculates the Gini Impurity for a list of labels.

        Parameters:
        - y: Numpy array of labels.

        Returns:
        - Gini Impurity.
        """
        classes, counts = np.unique(y, return_counts=True)
        impurity = 1.0 - sum((count / len(y)) ** 2 for count in counts)
        return impurity

    def _best_split(self, X, y):
        """
        Finds the best feature and threshold to split on.

        Parameters:
        - X: Numpy array of features.
        - y: Numpy array of labels.

        Returns:
        - best_feature: Index of the best feature.
        - best_threshold: Threshold value for the best split.
        """
        best_gini = 1.0
        best_feature, best_threshold = None, None
        n_features = X.shape[1]

        for feature_index in range(n_features):
            thresholds, classes = zip(*sorted(zip(X[:, feature_index], y)))
            num_left = [0] * len(np.unique(y))
            num_right = list(np.bincount(y))
            for i in range(1, len(y)):
                c = classes[i - 1]
                num_left[c] += 1
                num_right[c] -= 1

                gini_left = 1.0 - sum((num_left[x] / i) ** 2 for x in range(len(num_left)) if i > 0)
                gini_right = 1.0 - sum((num_right[x] / (len(y) - i)) ** 2 for x in range(len(num_right)) if (len(y) - i) > 0)
                
                gini = (i * gini_left + (len(y) - i) * gini_right) / len(y)

                if thresholds[i] == thresholds[i - 1]:
                    continue

                if gini < best_gini:
                    best_gini = gini
                    best_feature = feature_index
                    best_threshold = (thresholds[i] + thresholds[i - 1]) / 2  # Midpoint

        return best_feature, best_threshold

    def _build_tree(self, X, y, depth=0):
        """
        Recursively builds the decision tree.

        Parameters:
        - X: Numpy array of features.
        - y: Numpy array of labels.
        - depth: Current depth of the tree.

        Returns:
        - DecisionTreeNode
        """
        num_samples, num_features = X.shape
        num_labels = len(np.unique(y))

        if (depth >= self.max_depth or num_labels == 1 or num_samples < self.min_samples_split):
            leaf_value = self._majority_class(y)
            return DecisionTreeNode(value=leaf_value)

        feature_index, threshold = self._best_split(X, y)
        if feature_index is None:
            leaf_value = self._majority_class(y)
            return DecisionTreeNode(value=leaf_value)

        left_indices = X[:, feature_index] <= threshold
        right_indices = X[:, feature_index] > threshold
        left = self._build_tree(X[left_indices], y[left_indices], depth + 1)
        right = self._build_tree(X[right_indices], y[right_indices], depth + 1)
        return DecisionTreeNode(feature_index, threshold, left, right)

    def _majority_class(self, y):
        """
        Determines the majority class in the labels.

        Parameters:
        - y: Numpy array of labels.

        Returns:
        - Majority class label.
        """
        values, counts = np.unique(y, return_counts=True)
        return values[np.argmax(counts)]

    def _traverse_tree(self, x, node):
        """
        Traverses the tree to make a prediction for a single instance.

        Parameters:
        - x: Single test instance.
        - node: Current node in the tree.

        Returns:
        - Predicted class label.
        """
        if node.is_leaf_node():
            return node.value

        if x[node.feature_index] <= node.threshold:
            return self._traverse_tree(x, node.left)
        else:
            return self._traverse_tree(x, node.right)

if __name__ == "__main__":
    X_train = [[1, 2], [2, 3], [3, 1], [6, 5]]
    y_train = [0, 0, 1, 1]
    X_test = [[1, 1], [7, 5]]

    # Training Classifier
    clf = DecisionTreeClassifier(max_depth=3)
    clf.fit(X_train, y_train)

    # Make predictions
    predictions = clf.predict(X_test)

    print(f"Predictions for X_test: {predictions}")
