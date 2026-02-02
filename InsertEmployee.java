package proj;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InsertEmployee {

    public static void main(String[] args) {

        Connection connection = null;
        PreparedStatement ps = null;

        try {
            // Step 1: Connect to DB
            connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/24wh1a0570?useSSL=false&allowPublicKeyRetrieval=true",
                "root",
                "1234"
            );

            // Step 2: SQL query (mention column names for safety)
            String sql = "INSERT INTO emp (EMPNO, ENAME, JOB) VALUES (?, ?, ?)";

            // Step 3: Create PreparedStatement
            ps = connection.prepareStatement(sql);

            // Step 4: Set values
            ps.setInt(1, 10);              // EMPNO (use a NEW number)
            ps.setString(2, "RAJU");       // ENAME
            ps.setString(3, "DEVELOPER");  // JOB

            // Step 5: Execute
            int rows = ps.executeUpdate();

            if (rows > 0) {
                System.out.println("Employee inserted successfully ✅");
            }

        } catch (SQLException e) {
            // Show clear SQL error
            System.out.println("Error: " + e.getMessage());
        } finally {
            // Step 6: Close resources safely
            try {
                if (ps != null) ps.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
