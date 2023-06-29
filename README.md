# NQBApp - Django REST API with JWT and React App

NQBApp is a web application built with Django REST Framework on the backend and React on the frontend. It provides a platform for users to perform various actions related to NQB (Name, Quantity, and Barcode) data.

## Features

- User authentication using JWT (JSON Web Tokens)
- CRUD operations for managing NQB data
- User registration and login
- React frontend for seamless user experience

## Technologies Used

- Django: A high-level Python web framework for rapid development and clean design
- Django REST Framework: A powerful and flexible toolkit for building Web APIs
- Django REST Framework SimpleJWT: Provides JWT authentication for Django REST Framework
- React: A JavaScript library for building user interfaces
- React Router: A routing library for React applications
- Bootstrap: A popular CSS framework for responsive web design

## Installation

### Backend Setup

1. Clone the repository:

   ```shell
   git clone https://github.com/ifecog/nqbapp.git

    Navigate to the backend directory:

    shell

cd nqbapp/backend

Create and activate a virtual environment (recommended):

shell

python -m venv env
source env/bin/activate

Install the required dependencies:

shell

pip install -r requirements.txt

Apply database migrations:

shell

python manage.py migrate

Run the Django development server:

shell

    python manage.py runserver

    The backend API will be accessible at http://localhost:8000/api/.

Frontend Setup

    Navigate to the frontend directory:

    shell

cd ../frontend

Install the required dependencies:

shell

npm install

Start the development server:

shell

    npm start

    The React app will be accessible at http://localhost:3000/.

API Endpoints

    GET /api/users/login - logins a user with access tokens
    POST /api/users/register - Create a new user with JWT authentication
    GET /api/nqb/{id}/ - Get details of a specific NQB record
    PUT /api/nqb/{id}/ - Update a specific NQB record
    DELETE /api/nqb/{id}/ - Delete a specific NQB record
    POST /api/token/ - Obtain JWT access and refresh tokens by providing username and password
    POST /api/token/refresh/ - Refresh JWT access token by providing the refresh token
    POST /api/user/register/ - Register a new user

Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
License

This project is licensed under the MIT License.

vbnet


Feel free to customize this README file according to your project's specific details and requirements.

