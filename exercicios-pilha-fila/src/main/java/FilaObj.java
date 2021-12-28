public class FilaObj<T> {

    int tamanho;
    T[] fila;

    public FilaObj(int qtd) {
        fila = (T[]) new Object[qtd];
        this.tamanho = 0;
    }

    public boolean isEmpty() {
        return this.tamanho == 0;
    }

    boolean isFull() {
        return this.tamanho == fila.length;
    }

    public void insert(T info) {
        if (!this.isFull()) {
            this.fila[tamanho++] = info;
        }
    }

    public T peek() {
        return fila[0];
    }

    public T poll() {
        T primeiro = fila[0];
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
            System.out.println("FilaObj vazia");
        }

        for(int i = 0; i < tamanho; i++){
            System.out.println(fila[i]);
        }
    }


}
