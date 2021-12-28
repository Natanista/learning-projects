public class Teste {
    public static void main(String[] args) {

        Fila fila = new Fila(5);

        String primeiro = "Primeiro";
        String segundo = "Segundo";
        String terceiro = "Terceiro";
        String quarto = "Quarto";
        String quinto = "Quinto";

        fila.insert(primeiro);
        fila.insert(segundo);
        fila.insert(terceiro);
        fila.insert(quarto);
        fila.insert(quinto);

        System.out.println("Fila: ");
        fila.exibe();
        System.out.println();

        System.out.println("Saindo da fila:" + fila.poll());
        System.out.println("Saindo da fila:" + fila.poll());
        System.out.println("Saindo da fila:" + fila.poll());
        System.out.println("Saindo da fila:" + fila.poll());
        System.out.println("Saindo da fila:" + fila.poll());

fila.exibe();




    }
}
