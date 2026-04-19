import { Link } from "react-router-dom";
const Navbar = () => {
return (
<nav style={{ padding: "10px", background: "#f5f5f5" }}>
<span style={{ marginRight: "20px", fontWeight: "bold" }}>
Roll No: 24WH1A05BK
</span>
<Link to="/" style={{ margin: "10px" }}>
Home
</Link>
<Link to="/register" style={{ margin: "10px" }}>
Register
</Link>
<Link to="/login" style={{ margin: "10px" }}>
Login
</Link>
<Link to="/about" style={{ margin: "10px" }}>
About
</Link>
<Link to="/contact" style={{ margin: "10px" }}>
Contact
</Link>
</nav>
);
};
export default Navbar
