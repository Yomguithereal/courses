# http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/datasets/binary.html#webspam
from sklearn.datasets import load_svmlight_file
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import precision_score, recall_score

# Loading the files
print('Loading SVM file...')
X, y = load_svmlight_file('webspam-unigrams.svm')

# Splitting train & test
print('Splitting dataset...')
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=.1)

# Training the model
print('Training the model...')
clf = MultinomialNB()
clf.fit(X_train, y_train)

# Testing
print('Testing...')
y_predicted = [clf.predict(x) for x in X_test]

# Scores
print('Computing scores...')
precision = precision_score(y_test, y_predicted)
recall = recall_score(y_test, y_predicted)

print('Precision: ', precision)
print('Recall: ', recall)
