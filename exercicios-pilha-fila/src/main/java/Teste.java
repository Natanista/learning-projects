public class Teste {
    public static void main(String[] args) {
        int[] vetor = {1, 2, -3, 4, 5, -6, 76, 8, -1, 3, -12, -9};
        separarPositivoNegativoEmOrdem(vetor);
        separarPositivoNegativoOrdemDiferente(vetor);
    }

    public static void separarPositivoNegativoEmOrdem(int[] vetor) {
        FilaObj<Integer> pares = new FilaObj<>(vetor.length);
        FilaObj<Integer> impares = new FilaObj<>(vetor.length);

        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] % 2 == 0) {
                pares.insert(vetor[i]);
            } else {
                impares.insert(vetor[i]);
            }
        }
        System.out.println("Exibindo pares:");
        pares.exibe();

        System.out.println("Exibindo impares:");
        impares.exibe();

        for (int i = 0; i < vetor.length; i++) {
            pares.poll();
            impares.poll();
        }
    }

    public static void separarPositivoNegativoOrdemDiferente(int[] vetor) {
        FilaObj<Integer> positivos = new FilaObj<Integer>(vetor.length);
        PilhaObj<Integer> negativos = new PilhaObj<Integer>(vetor.length);


        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] >= 0) {
                positivos.insert(vetor[i]);
            } else {
                negativos.push(vetor[i]);
            }
        }

        System.out.println("Exibindo positivos:");
        positivos.exibe();

        System.out.println("Exibindo negativos:");
        negativos.exibe();

        for (int i = 0; i < vetor.length; i++) {
            positivos.poll();
        }
        while (!negativos.isEmpty()){
            negativos.pop();
        }

    }
}
