

public class subException extends RuntimeException{
    subException(Money m1 , Money m2) {
        super(" erreur : "+m1.getValue()+" < "+m2.getValue());
    }
}