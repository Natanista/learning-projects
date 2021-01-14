package com.company;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //calculadora de multiiplicação simples
    Scanner scanner = new Scanner(System.in);

        System.out.print("Primeiro número:");
        int n1 = scanner.nextInt();

        System.out.print("Segundo número:");
        int n2 = scanner.nextInt();

        System.out.println( n1 + " * " + n2 + " = " + (n1 * n2));

    }
}
