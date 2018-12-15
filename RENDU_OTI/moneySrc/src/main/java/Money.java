

/**
 * @author afrass
 */
public class Money {
    private int value;
    private String currency;


    Money(int value, String currency) {
        if (value < 0)
            throw new InferieurZeroException();
        else
            this.value = value;
        this.currency = currency;
    }

    public int getValue()
    {
        return this.value;
    }

    public String getCurrency()
    {
        return this.currency;
    }

    @Override
    public String toString() {
        return this.getValue()+" ("+this.getCurrency()+")";
    }

    @Override
    public int hashCode() {
        /* ... */
        return 1;
    }

    public boolean _equals(Object o){

        if(((Money)o).getValue() == this.getValue() && ((Money)o).getCurrency().equals(this.getCurrency()))
            return true;
        return false;
    }
    @Override
    public boolean equals(Object o) {
        return _equals(o);
    }


}