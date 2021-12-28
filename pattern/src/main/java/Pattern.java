import java.util.Scanner;

public class Pattern {
    public static void main(String[] args) {
        System.out.print("How many stars would u like?: ");
        Scanner scan = new Scanner(System.in);
        int stars = scan.nextInt();

        for(int i = 1; i <= stars; i++){
            for (int j = 0; j < i; j++){
                System.out.print("*");
            }
            System.out.println();
        }

        for(int i = stars - 1; i > 0; i--){
            for (int j = 0; j < i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
