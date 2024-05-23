# FriendyFY Chat Application

![Chat Application](path/to/your/logo.png)

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for real-time communication.

## Features

- Real-time messaging with Socket.IO
- User authentication and authorization
- Responsive UI with React and Tailwind CSS
- MongoDB for storing chat history and user data

## Screenshots

### Login Page
![Login Page](https://github.com/rishirawat04/FriendyFy/blob/main/client/OneDrive%20-%20Personal%205_23_2024%2010_35_58%20PM.png)

### Sign Up
![Sign Up](https://github.com/rishirawat04/FriendyFy/blob/main/client/FriendyFy%20__%20Chating%20App%20-%20Google%20Chrome%205_23_2024%2010_12_35%20PM.png)
### Message Page
![Message Page](https://github.com/rishirawat04/FriendyFy/blob/main/client/FriendyFy%20__%20Chating%20App%20-%20Google%20Chrome%205_23_2024%2010_23_29%20PM.png)

## Demo

You can access the live demo [here](https://github.com/rishirawat04/FriendyFy).

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend

1. Clone the repository:

    ```sh
    git clone = https://github.com/rishirawat04/FriendyFy
    cd your-repo
    ```

2. Navigate to the `server` directory and install dependencies:

    ```sh
    cd server
    npm install
    ```

3. Create a `.env` file in the `server` directory with the following content:

    ```plaintext
    PORT=3000
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
    REACT_APP_API_URL=http://localhost:3000
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

- **Name**: Rishi rawat
- **Email**: rishitech04@gmail.com
- **GitHub**: [Rishi Rawat](https://github.com/rishirawat04/)
- **LinkedIn**: [Rishi Rawat](https://www.linkedin.com/)

