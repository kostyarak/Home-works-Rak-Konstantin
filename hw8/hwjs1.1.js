function pow(x, n) {
      var result = x;
    
      for (var i = 1; i < n; i++) {
        result *= x;
      }
    
      return result;
    }
    
    var x = prompt("введите число?", '');
    var n = prompt("введите степень?", '');
	console.log('число', x)
	console.log('степень', n)
    
    if (n <= 1) {
      alert('Степень ' + n +
        'не поддерживается, введите целую степень, большую 1'
      );
    } else {
      alert(pow(x, n) );
      console.log ('calculate pow=', pow (x, n));
    }
