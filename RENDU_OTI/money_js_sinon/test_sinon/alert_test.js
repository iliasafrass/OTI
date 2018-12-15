QUnit.module("money", {
//	setup:function(){alert("setup money");},
//	teardown:function(){alert("teardown money");}
});

QUnit.test("test_computeresults", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='5'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            assert.ok(!r.calledOnce);
            r.restore();
    }
);

QUnit.test("test add different currency", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='9'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='CHF'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test sub different currency", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='19'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='CHF'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test currency.length > 3", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='19'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EURR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test null value", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value=''/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test null currency", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='19'/>");
            fixture += ("<input type='text' id='c1' name='c1' value=''/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='CHF'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test null money", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value=''/>");
            fixture += ("<input type='text' id='c1' name='c1' value=''/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='CHF'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test ADD value  < 0", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='-19'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test SUB value  < 0", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='-19'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test Sustraction m1 < m2", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);
QUnit.test("test money1 = 0  and money2 = 0", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='0'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='0'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(r.calledOnce);
            r.restore();

    }
);

QUnit.test("test Add Money currency.length > 3  and value > 0", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(!r.calledOnce);
            r.restore();

    }
);
QUnit.test("test SUB Money currency.length > 3  and value > 0", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='6'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");

            var r = sinon.stub(window, "alert", function (msg) {
                    return false;
            });
            //sinon.spy(window,"alert");
            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));


            assert.ok(!r.calledOnce);
            r.restore();

    }
);