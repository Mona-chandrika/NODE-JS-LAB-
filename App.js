const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;
const SECRET_KEY = "mysecretkey";
app.use(express.json());
let students = [];
let idCounter = 1;
app.post('/login', (req, res) => {
const { username, password } = req.body;
if (username === "admin" && password === "1234") {
const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
res.json({ token });
} else {
res.status(401).json({ message: "Invalid credentials" });
}
});
function authenticateToken(req, res, next) {
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];
if (!token) return res.status(401).json({ message: "Token required" });
jwt.verify(token, SECRET_KEY, (err, user) => {
if (err) return res.status(403).json({ message: "Invalid token" });
req.user = user;
next();
});
}
app.get('/students', authenticateToken, (req, res) => {
res.json(students);
});
app.post('/students', authenticateToken, (req, res) => {
const { name, age, grade } = req.body;
const newStudent = {
id: idCounter++,
name,
age,
grade
};

students.push(newStudent);
res.json(newStudent);
});
app.put('/students/:id', authenticateToken, (req, res) => {
const { id } = req.params;
const { name, age, grade } = req.body;
students = students.map(s =>
s.id == id ? { ...s, name, age, grade } : s
);
res.json({ message: "Updated" });
});
app.delete('/students/:id', authenticateToken, (req, res) => {
const { id } = req.params;
students = students.filter(s => s.id != id);
res.json({ message: "Deleted" });
});
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
