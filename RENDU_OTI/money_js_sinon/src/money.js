var money = (function () {
    function money(v, curr) {

        if (v != null && curr != null && v > 0 && curr.length <= 3) {
            this.v = v;
            this.curr = curr.toUpperCase();
        } else if (v === null || curr === null || v < 0) {

            throw new MoneyNullValueOrNullCurrency();
        } else if (curr !== undefined && curr.length > 3) {

            throw new CurrencySupTrois();
        } else {
            this.v = null;
            this.curr = null;
        }


        this._equals = function (otherM) {
            return (otherM.getValue() === this.getValue() && otherM.getCurrency().toUpperCase() === this.getCurrency().toUpperCase());
        }
    }

    money.prototype.getCurrency = function () {
        return this.curr.toUpperCase();
    }
    money.prototype.getValue = function () {
        return this.v;
    }
    money.prototype.equals = function (otherM) {
        return (otherM.getValue() === this.getValue() && otherM.getCurrency().toUpperCase() === this.getCurrency().toUpperCase());
    }
    money.prototype.toString = function () {
        return this.getValue() + " (" + this.getCurrency() + ")";
    }


    return money;
})();