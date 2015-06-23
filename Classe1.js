Classe1 = (function () {

    // private
    var var1 = 10;
    var var2 = 10;


    function Classe1() {
        //metodo construtor
        teste1();
    }

    //private
    function teste1 (){
        console.log("teste1");
    }

    //public
    Classe1.prototype.teste2 = function(){
        console.log("teste2");
    }
    return Classe1;
})();


var classe1 = new Classe1();

// classe1.teste1();
classe1.teste2();
