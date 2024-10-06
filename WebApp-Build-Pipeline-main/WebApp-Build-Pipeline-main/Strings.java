import java.util.*;

public class Strings {
   public static void main(String args[]) {
     Scanner sc = new Scanner(System.in);
     int size = sc.nextInt(); // Number of strings
     sc.nextLine(); // Consume the newline after the integer input
     String array[] = new String[size];
     int totLength = 0;
     String sentence = ""; // To store the entire sentence

     for(int i=0; i<size; i++) {
       array[i] = sc.next();
       totLength += array[i].length();
       sentence += array[i] + " "; // Append each string with a space
     }

     System.out.println("Total length: " + totLength);
     System.out.println("Sentence: " + sentence.trim()); // Trim to remove extra space at the end
   }
}


