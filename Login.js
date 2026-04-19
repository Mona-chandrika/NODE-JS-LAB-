import { useState } from "react";
const Login = () => {
const [form, setForm] = useState({ username: "", password: "" });
const handleChange = (e: any) =>
setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = (e: any) => {
e.preventDefault();
alert("Logged in with " + JSON.stringify(form));
};
return (
<div>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<input
name="username"
placeholder="Username"
onChange={handleChange}
required
/>
<br />
<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
required
/>
<br />
<button type="submit">Login</button>
</form>
</div>
);
};
export default Login;
