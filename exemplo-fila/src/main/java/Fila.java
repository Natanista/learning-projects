public class Fila {

    int tamanho;
    String[] fila;

    public Fila(int qtd) {
        fila = new String[qtd];
        this.tamanho = 0;
    }

    public boolean isEmpty() {
        return this.tamanho == 0;
    }

    boolean isFull() {
        return this.tamanho == fila.length;
    }

    public void insert(String info) {
        if (!this.isFull()) {
            this.fila[tamanho++] = info;
        }
    }

    public String peek() {
        return fila[0];
    }

    public String poll() {
        String primeiro = fila[0];
        if (!isEmpty()) {
            for (int i = 0; i < tamanho - 1; i++) {
                fila[i] = fila[i + 1];
                fila[i + 1] = null;
                }
            tamanho--;

        }
        return primeiro;
    }

    public void exibe(){
        if(isEmpty()){
            System.out.println("Fila vazia");
        }

        for(int i = 0; i < tamanho; i++){
            System.out.println(fila[i]);
        }
    }


}
