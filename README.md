User Management REST API

🚀 Features
•	Get all users (GET /api/users)
•	View user names in an HTML list (GET /users)
•	Get a specific user by ID (GET /api/users/:id)
•	Update a user's data (PATCH /api/users/:id)
•	Delete a user (DELETE /api/users/:id)
•	Add a new user (POST /api/users)

📁 Project Structure

project-root/
├── MOCK_DATA.json         # Sample user data
├── index.js               # Main server file
└── README.md              # You're here!

🔧 Setup Instructions
1.	Clone the repository:
git clone https://github.com/your-username/your-repo.git
cd your-repo
2.	Install dependencies:
npm install
3.	Start the server:
node index.js
4.	Server will run at: http://localhost:8000
📌 API Endpoints
Get All Users
GET /api/users
Returns all user data in JSON.
Get User Names in HTML
GET /users
Returns a simple HTML list of user first names.
Get User by ID
GET /api/users/:id
Returns a single user object by their ID.
Update User
PATCH /api/users/:id
Updates the user with provided fields in request body.
Delete User
DELETE /api/users/:id
Deletes the user and returns the deleted user object.
Create New User
POST /api/users
Adds a new user. Automatically assigns an ID.
Request Body Example (PATCH/POST)

{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com"
}

📝 Notes
Data is stored in MOCK_DATA.json, and written back to the file on user creation.
No database is used — this is a filesystem-based mock API.
🛠 Tech Stack
•	Node.js
•	Express.js
•	File System (fs module)
📬 Contact
For questions or contributions, feel free to open an issue or reach out.
