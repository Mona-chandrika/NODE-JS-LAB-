import { useState } from "react";
const Register = () => {
const [form, setForm] = useState({ username: "", password: "" });
const handleChange = (e: any) =>
setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = (e: any) => {
e.preventDefault();
alert("Registered with " + JSON.stringify(form));
};
return (
<div>
<h2>Register</h2>
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
<button type="submit">Register</button>
</form>
</div>
);
};
export default Register;
