QUnit.module("moneyOps", {
//	setup:function(assert){alert("setup moneyOps individual test");},
//	teardown:function(assert){alert("teardown moneyOps individual test");}
});

QUnit.test("test simple add", function (assert) {
        assert.expect(2);

        var m1 = new money(1, "EUR");
        var m2 = new money(2, "EUR");
        var m3 = new money(3, "EUR");

        assert.ok(m3.equals(MoneyOps.add(m1, m2)), "3e = 1e+2e");
        assert.deepEqual(m3, MoneyOps.add(m1, m2), "3e = 1e+2e deepEqual");
    }
);


QUnit.test("test multi devise add", function (assert) {
        var m1 = new money(1, "EUR");
        var m2 = new money(2, "CHF");
        assert.throws(function (assert) {
            var m3 = MoneyOps.add(m1, m2)
        }, DevisesIncompatibleExc, "Devises Incompatibles");
    }
);

QUnit.test("test value sustraction", function (assert) {
        var m1 = new money(1, "EUR");
        var m2 = new money(8, "EUR");
        assert.throws(function (assert) {
            var m3 = MoneyOps.sus(m1, m2)
        }, ErrorValue, "ErrorValue m1 < m2");
    }
);

QUnit.test("test value sustraction equal Zéro", function (assert) {

    var m1 = new money(0, "EUR");
    var m2 = new money(0, "CHF");

    assert.throws(function (assert) {
        var m3 = MoneyOps.sus(m1, m2)
    }, moneyInforEqualZero, "ValueEqualZero m1 ==0 OU m2 == 0 OU les Deux");


});

QUnit.test("test simple sus", function (assert) {
        assert.expect(2);

        var m1 = new money(5, "EUR");
        var m2 = new money(3, "EUR");
        var m3 = new money(2, "EUR");

        assert.ok(m3.equals(MoneyOps.sus(m1, m2)), "2e = 5e-3e");
        assert.deepEqual(m3, MoneyOps.sus(m1, m2), "2e = 5e-3e deepEqual");
    }
);

QUnit.test("test multi devise sus", function (assert) {
        var m1 = new money(4, "EUR");
        var m2 = new money(2, "CHR");
        assert.throws(function (assert) {
            var m3 = MoneyOps.sus(m1, m2)
        }, DevisesIncompatibleExc, "Devises Incompatibles");
    }
);
// si v1 < v2 and v1-v2
QUnit.test("test multi devise sus 2", function (assert) {
        var m1 = new money(1, "EUR");
        var m2 = new money(4, "EUR");
        assert.throws(function (assert) {
            var m3 = MoneyOps.sus(m1, m2)
        }, ErrorValue, "ErrorValue : m1 < m2");
    }
);
//0-0
QUnit.test("test sus Zéro - Zéro", function (assert) {
        var m1 = new money(0, "EUR");
        var m2 = new money(0, "EUR");
        assert.throws(function (assert) {
            var m3 = MoneyOps.sus(m1, m2)
        }, moneyInforEqualZero, "Devises equal à Zéro : ");
    }
);
//test une sus : 3-2=1 (avec deep and ok)
QUnit.test("test simple Sus", function (assert) {
        assert.expect(2);

        var m1 = new money(3, "EUR");
        var m2 = new money(2, "EUR");
        var m3 = new money(1, "EUR");

        assert.ok(m3.equals(MoneyOps.sus(m1, m2)), "1e = 3e-2e");
        assert.deepEqual(m3, MoneyOps.sus(m1, m2), "3e = 1e+2e deepEqual");
    }
);

/**/
QUnit.test("test simple add", function (assert) {
        assert.expect(2);

        var m1 = sinon.createStubInstance(money);
        var m2 = sinon.createStubInstance(money);
        m1.getValue.returns(1);
        m1.getCurrency.returns("EUR");
        m2.getValue.returns(2);
        m2.getCurrency.returns("EUR");

        var m3 = new money(3, "EUR");
        sinon.stub(m3, "getValue").returns(3);
        sinon.stub(m3, "getCurrency").returns("EUR");

        assert.ok(m3.equals(MoneyOps.add(m1, m2)), "3e = 1e+2e");
        assert.deepEqual(m3, MoneyOps.add(m1, m2), "3e = 1e+2e deepEqual");
    }
);


QUnit.test("test multi devise add", function (assert) {
        var m1EUR = new money(1, "EUR");
        sinon.stub(m1EUR, "getValue").returns(1);
        sinon.stub(m1EUR, "getCurrency").returns("EUR");

        var m2CHF = sinon.createStubInstance(money);
        m2CHF.getValue.returns(2);
        m2CHF.getCurrency.returns("CHF");

        assert.throws(function () {
                var m3 = MoneyOps.add(m1EUR, m2CHF)
            },
            DevisesIncompatibleExc,
            "Devises Incompatibles");
    }
);
/**/
QUnit.test("test equals", function (assert) {
        assert.expect(1);

        var m1eur = new money(2, "eur");
        sinon.stub(m1eur, "getValue").returns(2);
        sinon.stub(m1eur, "getCurrency").returns("EUR");

        var m1EUR = sinon.stub(new money(1, "EUR"));
        m1EUR.getValue.returns(1);
        m1EUR.getCurrency.returns("EUR");


        var m1EUR2 = sinon.stub(new money(1, "EUR"));
        m1EUR.getValue.returns(1);
        m1EUR.getCurrency.returns("EUR");

        var m1CHF = sinon.stub(new money());
        m1CHF.getValue.returns(1);
        m1CHF.getCurrency.returns("CHF");


        assert.deepEqual(m1EUR, m1EUR2);
    }
);

QUnit.test("test equals avec sans stub", function (assert) {
    assert.expect(1);

    var m1eur = new money(1, "eur");
    sinon.stub(m1eur, "getValue").returns(1);
    sinon.stub(m1eur, "getCurrency").returns("EUR");

    var m1EUR = sinon.stub(new money(1, "EUR"));
    m1EUR.getValue.returns(1);
    m1EUR.getCurrency.returns("EUR");

    //assert.ok(m1eur.equals(m1EUR),"1 EUR égal à 1 EUR");
    //assert.ok(m1EUR.equals(m1eur),"1 EUR égal à 1 eur");
    assert.deepEqual(m1eur, m1EUR);

});