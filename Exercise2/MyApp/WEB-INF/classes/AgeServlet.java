import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ageCheck")
public class AgeServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String ageStr = request.getParameter("age");

        try {
            int age = Integer.parseInt(ageStr);

            out.println("<html><body>");
            if (age >= 18) {
                out.println("<h2>You are eligible to vote.</h2>");
            } else {
                out.println("<h2>You are not eligible to vote.</h2>");
            }
            out.println("</body></html>");

        } catch (Exception e) {
            out.println("<h2>Invalid input!</h2>");
        }
    }
}