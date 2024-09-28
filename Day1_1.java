import java.util.*
public class Day1_1{

public class Main {
    Scanner sc=new Scanner(System.in);
    int a=sc.NextInt();
    int b=sc.NextInt();
    int operator=sc.NextInt();
    switch(operator){
        case 1:System.out.println(a+b);
        break;
        case 2:System.out.println(a-b);
        break;
        case 3:System.out.println(a*b);
        break;
        case 4:System.out.println(a/b);
        break;
        case 5 : if(b == 0) {
                       System.out.println("Invalid Division");
                   } else {
                       System.out.println(a/b);
                   }
	    break; 
        case 6 : if(b == 0) {
            System.out.println("modulo");
        } else {
            System.out.println(a%b);
        }
        break; 
        default : System.out.println("Invalid Operator");

    }
    
}    
}
