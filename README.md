# Project Setup Instructions
This project consists of a React.js frontend and a Node.js backend. Follow the steps below to set up both parts of the project locally.


## 1. Setting Up the Project
### Step 1: Clone the Repository
Clone the repository to your local machine:

```cd
git clone <repository-url>
cd <repository-folder>
```
### Step 2: Install Dependencies
* **Install backend dependencies (inside the backend folder):**

```cd
cd backend
npm install
```
* **Install frontend dependencies (inside the frontend folder):**

```cd
cd ../frontend
npm install
```
## 2. Running the Backend Server
Navigate to the backend folder and start the server:

```cd
cd backend
npm start
```
The backend will run on http://localhost:3000.

## 3. Running the Frontend Server
Now, navigate to the frontend folder and start the frontend:

```cd
cd ../frontend
npm start
```
The frontend will run on http://localhost:5173.

## 4. Connecting the Frontend and Backend
The frontend will fetch data from the backend at http://localhost:3000/api. Ensure both the frontend and backend servers are running before using the app.

### CORS Setup
The backend is set up with CORS enabled, which allows requests from the frontend running on a different port (e.g., 5173). If you encounter any CORS issues, check that the backend server is running correctly.

## 5. Using the App
* **Country List Page:** View a list of countries fetched from the backend. Click on a country name to view its borders.
* **Country Info Page**: Displays a list of countries that border the selected country. Click on any border country to navigate to its borders

