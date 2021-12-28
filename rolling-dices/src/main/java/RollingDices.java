import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class RollingDices {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Hello, how many dices do you want?: ");
        int numberOfDices = scan.nextInt();

        for (int i = 0; i < numberOfDices; i++){
            System.out.printf(
                    "Dice %d: %d\n",
                    (i + 1),
                    ThreadLocalRandom.current().nextInt(1,7)
            );
        }
    }
}
