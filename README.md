# Chat Application

![Chat Application](path/to/your/logo.png)

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for real-time communication.

## Features

- Real-time messaging with Socket.IO
- User authentication and authorization
- Create and join chat rooms
- Responsive UI with React and Tailwind CSS
- MongoDB for storing chat history and user data

## Screenshots

### Login Page
![Login Page](path/to/screenshots/login.png)

### Chat Room
![Chat Room](path/to/screenshots/chat-room.png)

## Demo

You can access the live demo [here](https://your-live-demo-url.com).

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Navigate to the `server` directory and install dependencies:

    ```sh
    cd server
    npm install
    ```

3. Create a `.env` file in the `server` directory with the following content:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:

    ```sh
    npm run dev
    ```

### Frontend

1. Navigate to the `client` directory and install dependencies:

    ```sh
    cd client
    npm install
    ```

2. Create a `.env` file in the `client` directory with the following content:

    ```plaintext
    REACT_APP_API_URL=http://localhost:5000
    ```

3. Start the frontend:

    ```sh
    npm start
    ```

## Usage

1. Register a new account or login with an existing account.
2. Create or join a chat room.
3. Start chatting in real-time with other users in the chat room.

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS
  - Axios

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - JWT (JSON Web Tokens)
  - Socket.IO

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Name**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [your-username](https://github.com/your-username)
- **LinkedIn**: [your-linkedin](https://linkedin.com/in/your-linkedin)

