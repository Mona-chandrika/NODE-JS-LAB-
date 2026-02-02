package proj;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DeleteEmployee {

    public static void main(String[] args) {

        try {
            // Step 1: Connect to DB
            Connection connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/24wh1a0570?useSSL=false&allowPublicKeyRetrieval=true",
                "root",
                "1234"
            );

            // Step 2: Create Statement
            Statement statement = connection.createStatement();

            // Step 3: Execute DELETE query
            String sql = "DELETE FROM emp WHERE EMPNO = 2";

            int rows = statement.executeUpdate(sql);

            // Step 4: Check result
            if (rows > 0) {
                System.out.println("Employee deleted successfully 👍");
            } else {
                System.out.println("No employee found with given EMPNO");
            }

            // Step 5: Close connection
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
