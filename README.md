# React User Management Application

A React application that integrates with the Reqres API to perform basic user management functions including authentication, listing users, editing and deleting users.

## 📝 Features

### Level 1: Authentication
- Login form with credential validation
- Token-based authentication
- Secure route protection

### Level 2: User Listing
- Paginated user display
- User details shown in card format
- Loading states for better UX

### Level 3: User Management
- Edit functionality with pre-filled forms
- Delete functionality with confirmation
- Success/error notifications

### Bonus Features
- Client-side search functionality
- Responsive design using Tailwind CSS
- React Router for seamless navigation

## 🚀 Technologies Used

- React.js
- React Router DOM
- Axios for API integration
- Tailwind CSS for styling
- React Toastify for notifications
- Context API for state management

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/reqres-user-management.git
cd reqres-user-management
```

```bash
Install dependencies:
npm install
```

Start the development server:

```bash
npm start
```
Open your browser and navigate to http://localhost:3000


🔑 Demo Credentials
The application uses the Reqres API for authentication. Use these credentials to log in:

Email: eve.holt@reqres.in

Password: cityslicka

📚 API Reference
This application uses the Reqres API with the following endpoints:

Authentication: POST /api/login

Get Users: GET /api/users?page={page_number}

Update User: PUT /api/users/{id}

Delete User: DELETE /api/users/{id}

🔧 Environment Setup
No environment variables are required to run this application as it uses a public API.

📱 Responsive Design
The application is fully responsive and works well on:

Desktop devices

Tablets

Mobile phones

🤔 Assumptions and Considerations
The Reqres API is a demo API that simulates real backend responses but doesn't actually modify data on the server

Deleted users will appear again if you refresh the page as changes aren't persisted on the server

The token provided by the API doesn't expire in this demo version
