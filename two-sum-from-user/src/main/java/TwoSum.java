import java.util.Scanner;

public class TwoSum {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("---TWO SUM---");
        System.out.print("What is the first number?:");
        int firstNumber = scan.nextInt();
        System.out.print("What is the second number?:");
        int secondNumber = scan.nextInt();

        System.out.printf(
                "The result of the sum of (%d + %d) is %d",
                firstNumber,
                secondNumber,
                (firstNumber + secondNumber)
        );
    }
}
