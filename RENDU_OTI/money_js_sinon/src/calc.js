function calc() {
    this.message="";
    this.erreur = false;
}

calc.prototype.displayResult=function (resultDiv) {
    if(this.erreur){
        resultDiv.setAttribute("style","color:red");
        resultDiv.innerHTML="Result : "+this.message;
    }else{
        resultDiv.setAttribute("style","color:#000");
        resultDiv.innerHTML="Result : "+this.message;
    }
};

calc.prototype.computeResult=function (form) {

    try{
        var  m1=new money(parseInt(form.elements['v1'].value),
            form.elements['c1'].value);
        var  m2=new money(parseInt(form.elements['v2'].value),
            form.elements['c2'].value);


        var  ops=form.elements['ops'].value;
        var res;


        switch (ops) {

            case "ADD":
                res=MoneyOps.add(m1,m2);
                this.message="Result : "+(res.toString())+"";
                break;
            case "SUB":
                res=MoneyOps.sus(m1,m2);
                this.message="Result : "+(res.toString())+"";
                break;
            default:
                window.alert("Unsupported operation "+ops+ "");
                break;
                }

              } catch (e) {
                this.message = e.toString();
                this.erreur = true;
                //window.alert(e.toString());
            }
};


calc.prototype.doComputation = function(form, resDiv) {
    this.computeResult(form);
    this.displayResult(resDiv);
};

function iSnumeric(variable)
{
    var number = new RegExp("^[0-9]+$","g");
    return number.test(variable);
}


function isCurrency(variable)
{
    var currency = new RegExp("[A-Z]{2}");
    return currency.test(variable);
}