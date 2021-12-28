public class FindDuplicates {
    public static void main(String[] args) {
        String setence = "How many duplicates are there";

        String characters = "";
        String duplicates = "";
        for (int i = 0; i < setence.length(); i++) {
            String currentChar = Character.toString(setence.charAt(i));
            if (characters.contains(currentChar)) {
                if(!duplicates.contains(currentChar)){
                    duplicates += currentChar + ", ";
                }
            }
            characters += currentChar;
        }
        System.out.println(duplicates);

    }
}
