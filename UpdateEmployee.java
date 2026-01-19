package proj;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class GetEmployee{
	public static void main(String[] args) {
		try {
			 //step1 : register the Driver
			//DriverManager.registerDriver(new com.mysql.jdbc.Driver());
			
			//Step2: Connect the server by supplying URL(ip,port,uname,pwd)
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/24wh1a0570","root","1234");
			
			//step3: create Statement object to send queries to DB
			Statement statement = connection.createStatement();
			
			//step4 : execute query
			//ResultSet rs=statement.executeUpdate("select * from emp");
			// executeUpdate for non select commands like update and delete.
			while(rs.next()) {
				System.out.println(rs.getString("EMPNO") +"\t"+rs.getString("ENAME")+"\t"+rs.getString("JOB"));
			}
			//step5: close the coonection
			connection.close(); 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

