QUnit.module("money", {
//	setup:function(assert){alert("setup money individual QUnit.test");},
//	teardown:function(assert){alert("teardown money individual QUnit.test");}
});

QUnit.test("test construct money",function(assert)
	{
		var m=new money(1,"EUR");
		assert.ok(m.v==1,"valeur = 1");
		assert.equal(m.curr,"EUR","currency = EUR");
	}
);

QUnit.test("test accesseurs", function(assert)
	{
		assert.expect(2);
		var m=new money(1,"EUR");
		assert.ok(m.getValue()==1,"valeur = 1");
		assert.equal(m.getCurrency(),"EUR","currency = EUR");
	}
);


QUnit.test("test equals", function(assert)
	{
		assert.expect(4);
		var m1EUR=new money(1,"EUR");
		var m1eur=new money(1,"eur");
		var m1CHF=new money(1,"CHF");
		var m10eur=new money(10,"eur");

		assert.ok(m1EUR.equals(m1EUR),"1 EUR égal à 1 EUR");
		assert.ok(m1EUR.equals(m1eur),"1 EUR égal à 1 eur");
		assert.ok(!m1EUR.equals(m1CHF),"1 EUR diff de 1 CHF");
		assert.ok(!m1EUR.equals(m10eur),"1 EUR diff de 10 eur");
	}
);

QUnit.test("valeur < 0 ", function(assert)
	{
		assert.expect(1);
		assert.throws(function(assert) {var m=new money(-5,"EUR");}, MoneyNullValueOrNullCurrency, "Money inférieur de Zéro où égal à zéro");

	}
);

QUnit.test("currency > 3 caractére Exception ", function(assert)
	{
		assert.expect(1);
		assert.throws(function(assert) {var m=new money(1,"EURe");}, CurrencySupTrois, "Currency et supérieur à Trois");

	}
);

QUnit.test("currency > 3 caractére ", function(assert)
	{
		assert.expect(1);
		var m=new money(1,"EUR");
		var nbrCaractere = m.getCurrency().length;

		assert.ok(m.getCurrency().length == 3,"currency.length = 3");

	}
);
QUnit.test("money Value or Currency is Null ", function(assert)
	{
		assert.expect(2);
		assert.throws(function(assert) {var m=new money(null,"EUR");}, MoneyNullValueOrNullCurrency, "Money Null Value");
		assert.throws(function(assert) {var m=new money(5,null);}, MoneyNullValueOrNullCurrency, "Money Null Currency");
	}
);
QUnit.test("money Verify ", function(assert)
	{
		assert.expect(4);
		mf=MoneyFactory.getDefaultInstance();
		a=mf.createMoney(12, "EUR");
		b=mf.createMoney(14, "EUR");

		assert.ok(a.getValue() == 12,"a.value == 12");
		assert.ok(a.getCurrency() == "EUR","a.currency == 'EUR'");
		assert.ok(b.getValue() == 14,"b.value == 14");
		assert.ok(b.getCurrency() == "EUR","b.currency == 'EUR'");

	}
);
/**/


QUnit.test("test equals", function(assert)
	{
		assert.expect(4);

		var m1eur=new money(1,"eur");
		sinon.stub(m1eur,"getValue").returns(1);
		sinon.stub(m1eur,"getCurrency").returns("EUR");

		var m1EUR=sinon.stub(new money(1,"EUR"));
		m1EUR.getValue.returns(1);
		m1EUR.getCurrency.returns("EUR");

		var m1CHF=sinon.stub(new money());
		m1CHF.getValue.returns(1);
		m1CHF.getCurrency.returns("CHF");

		var m10eur=sinon.createStubInstance(money);
		m10eur.getValue.returns(10);
		m10eur.getCurrency.returns("EUR");

		assert.ok(m1eur.equals(m1eur),"1 EUR égal à 1 EUR");
		assert.ok(m1eur.equals(m1EUR),"1 EUR égal à 1 eur");
		assert.ok(!m1eur.equals(m1CHF),"1 EUR diff de 1 CHF");
		assert.ok(!m1eur.equals(m10eur),"1 EUR diff de 10 eur");
	}
);


QUnit.test("test equals avec sans stub", function(assert)
{
	assert.expect(2);

	var m1eur=new money(1,"eur");
	sinon.stub(m1eur,"getValue").returns(1);
	sinon.stub(m1eur,"getCurrency").returns("EUR");

	var m1EUR=sinon.stub(new money(1,"EUR"));
	m1EUR.getValue.returns(1);
	m1EUR.getCurrency.returns("EUR");

	assert.ok(m1eur.equals(m1EUR),"1 EUR égal à 1 EUR");
	assert.deepEqual(m1eur,m1EUR);

});

QUnit.test("spy getValue / getCurrency", function(assert)
{
	assert.expect(4);

	var m1eur=new money(1,"eur");
	var m1EUR=new money(1,"EUR");

	m1eur_gv=sinon.spy(m1eur,"getValue");
	m1eur_gc=sinon.spy(m1eur,"getCurrency");
	m1EUR_gv=sinon.spy(m1EUR,"getValue");
	m1EUR_gc=sinon.spy(m1EUR,"getCurrency");

	m1eur.equals(m1EUR);

	assert.ok(m1eur_gv.calledOnce);
	//sinon.assert.calledOnce(m1eur_gv);

	assert.ok(m1eur_gc.calledOnce);
	//sinon.assert.calledOnce(m1eur_gc);

	assert.ok(m1EUR_gv.calledOnce);
	//sinon.assert.calledOnce(m1EUR_gv);

	assert.ok(m1EUR_gc.calledOnce);
	//sinon.assert.calledOnce(m1EUR_gc);

});