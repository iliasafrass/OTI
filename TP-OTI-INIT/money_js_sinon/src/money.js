var money= (function(){
	function money(v,curr) {
		if(v < 0){
			throw new moneyInfZero();
		}else if( v === null || curr=== null){
			throw new MoneyNullValueOrNullCurrency();
		}else if( curr != undefined && curr.length > 3){
			throw new CurrencySupTrois();
		}else{
			this.v=v;
			this.curr=curr;
		}

		this._equals = function(otherM){
			return (otherM.getValue()===this.getValue() && otherM.getCurrency().toUpperCase()===this.getCurrency().toUpperCase()) ;
		}
	}

	money.prototype.getCurrency=function () {
		return this.curr.toUpperCase();
	}
	money.prototype.getValue=function () {
		return this.v;
	}
	money.prototype.equals=function (otherM) {
		return (otherM.getValue()==this.getValue() && otherM.getCurrency()==this.getCurrency()) ;
	}
	money.prototype.toString=function toString() {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	}


return money;
})();
