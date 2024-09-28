import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load the dataset
df = pd.read_csv('diabetes.csv')

# Display the first few rows of the dataset
print("Dataset preview:")
print(df.head())

# Define features and target variable
X = df.drop('Outcome', axis=1)  # Features
y = df['Outcome']  # Target variable

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Standardize features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the model
model = RandomForestClassifier(random_state=42)
model.fit(X_train_scaled, y_train)

# Make predictions
y_pred = model.predict(X_test_scaled)

# Evaluate the model
print("Accuracy Score:", accuracy_score(y_test, y_pred))
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Predicting new data
def predict_diabetes(new_data):
    new_data_scaled = scaler.transform([new_data])
    prediction = model.predict(new_data_scaled)
    return "Diabetic" if prediction[0] == 1 else "Non-diabetic"

# Example prediction
new_patient = [5, 166, 72, 19, 175, 25.8, 0.587, 51]  # Replace with new patient data
print("Prediction for new patient:", predict_diabetes(new_patient))
