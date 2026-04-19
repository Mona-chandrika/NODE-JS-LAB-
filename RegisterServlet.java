package ControllerServlet.wh1a0;
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;
public class RegisterServlet extends HttpServlet {
public void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
response.setContentType("text/html");
PrintWriter out = response.getWriter();
String v1 = request.getParameter("t1");
String v2 = request.getParameter("t2");
String v3 = request.getParameter("t3");
String v4 = request.getParameter("t4");
try {
Class.forName("com.mysql.cj.jdbc.Driver");
Connection con = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/24WH1A05Z1",
"root",
"1234"
);
PreparedStatement ps = con.prepareStatement(
"insert into register values(?,?,?,?)"
);
ps.setString(1, v1);
ps.setString(2, v2);
ps.setString(3, v3);
ps.setString(4, v4);
int i = ps.executeUpdate();
if (i > 0) {
out.println("<h2>Registration Successful</h2>");
} else {
out.println("Registration Failed");
}
ps.close();
con.close();
} catch (Exception e) {
out.println("Error : " + e);
}
}
