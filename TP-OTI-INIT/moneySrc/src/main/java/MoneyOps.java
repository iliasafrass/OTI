/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * @author marius
 */
public class MoneyOps {

  private static MoneyFactory mf = MoneyFactory.getDefaultFactory();

  /**
   * Add moneys having the same currency
  */
    private MoneyOps() {}

    public static void setMoneyFactory(MoneyFactory injectedMF) {
        mf = injectedMF;
    }

    public static Money simpleAdd(Money m1, Money m2) throws IncompatibleCurrencyException, UnexistingCurrencyException {
        if (m1.getCurrency() != m2.getCurrency())
            throw new IncompatibleCurrencyException(m1.getCurrency(), m2.getCurrency());
        Money m = mf.createMoney(m1.getValue() + m2.getValue(), m1.getCurrency());
        return m;
    }

    public static Money simpleSub(Money m1,Money m2){

        if(m1.getValue() < m2.getValue())
            throw new subException(m1, m2);
        else
            return new Money(m1.getValue()-m2.getValue(),m1.getCurrency());


    }

}
