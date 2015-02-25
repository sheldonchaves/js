# js

#### Modules

#####basic structure:


	//package
	var project = project || {};
	project.util = project.util || {};
	
	project.util.formater = (function(){
	  //force browser strict mode;
	  "use strict";
	  
	  // private
	  var var1 = 10;
	  var var2 = 10;
	  
	  function sum (n1,n2){
	    return n1+n2;
	  }
	  
	  function multiply (n1,n2){
	    return n1*n2;
	  }
	  
	  //public
	  return {
	    func1:function (number){
	      return sum(number,var1);
	    },
	    func2:function (number){
	      return multiply(number,var2);
	    }
	  }
	})();
	
	console.log(project.util.formater.func1(10));
	console.log(project.util.formater.func2(10));
