public class ReverseString {
    public static void main(String[] args) {
        String word = "natan e ana";
        System.out.println(reverse(word));
    }

    public static String reverse(String word){
        char[] letters = new char[word.length()];

        int letterIndex = 0;
        for(int i = word.length() - 1; i >= 0; i--){
            letters[letterIndex] = word.charAt(i);
            letterIndex++;
        }

        String reverse = "";
        for(int i = 0; i < word.length();i++){
            reverse += letters[i];
        }
        return reverse;
    }

}
