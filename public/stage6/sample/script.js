// ボタンはサービスです。
// 自由に使ってください。
	  //var element = document.getElementsByClassName('.button button-caution button-3d button-pill button-giant js-training-button');
	  //var element = document.querySelector('button');
	  
	  //var $element = $('.button button-caution button-3d button-pill button-giant js-training-button');
	  //$element.css({'opacity' : '0.5'});
	  //element.addEventListener('click',function(){
	  //	element.textContent = Number(element.textContent) + 1;
	  //	});

	  //var $element = $('button');
	  //var selector = '.js-training-playground:nth-child(1) button';
	  //selector.append
	  
	  
	  //おさかな追加
	  var elementToAdd = document.createElement('span');
      elementToAdd.textContent = '\uD83D\uDC1F';
      
      var element = document.querySelector('button');
      element.insertBefore(elementToAdd,element.firstChild);
	  
	  
	  //element.style.backgroundColor('green');
	  //var a = 100;
	  //色の変更
	  //element.style.backgroundColor = 'rgb('+ a +', 179, 113)'//'green';  
	  
	  
	  //clickすると、増殖、色が変化、10度回転
      //var element = document.qureySelector('button');
      var num = 0;
      var r_color = 255;
      var g_color = 0;
      var b_color = 0;
      //var elementToAddcolor = document.createElement('span');
      
      
      element.addEventListener('click', function() {
         element.textContent = element.textContent + '\uD83D\uDC1F';
         num += 10;
         r_color -= 10;
         g_color += 10;
         b_color += 10;
         element.style.backgroundColor = 'rgb('+ r_color +', '+ g_color +', '+ b_color +')';
         //elementToAddcolor.textContent = r_color;
         //element.style.backgroundColor('rgb(60, 179, 113)');
         
      	 element.style.transform = 'rotate(' + num + 'deg)';
      	 element.insertBefore(elementToAddcolor,element.firstChild);
      	 //element.remove
      	 
         //'rgb(r_color, g_color, b_color)'
         //element.
         //element.css({
         	//transform : 'rotate('+ num + 'deg)'
         //	});
       });
       
       
       
       
       //以下関係ないもの
      //name = prompt('お名前を入力してください');
      //alert('こんにちは、' + name + 'さん');
      //<input type="text">
      
      
      
      /*
      <script src="script.js">
	  //document.getElementById( "sample" ).innerHTML = "<p>サンプル</p>";
	  //</script>
	 */
	
	//クラスの追加
	/*
	  element.classList.add("abc");
	  var testa = document.getElementsByClassName('.abc');
	  //testa.insertBefore(elementToAdd,element.firstChild);
	 */
	 

   
          
      //自分で入力する
      //var elementToAdd = document.createElement('new');
      //elementToAdd.textContent = 'button';
      //element.appendChild(elementToAdd);
      
      //var element = document.getElementsByClassName('turquoise')[0];
      //var input = element.getElementsByTagName('input')[0];
       // change イベントを使います。
      //input.addEventListener('change', function() {
      //  var angleDegree = input.value;
      //  element.style.transform = 'rotate( ' + angleDegree + 'deg)';
      //});
      
      
      
      //document.writeln('Hello World');
      //document.writeln('Hello World');
      //document.writeln('Hello World');
      
      //jqueryの場合
      //var $elementToAdd = $('<span>\uD83D\uDC1F</span>');
	  //$('button').append($elementToAdd);



      //$(element).css('background-color','green');
      
      
      
      //回転
      //jQueryではなぜか動かない
	  //$('.bottun').on('click', function(event) {
	  //	var $target = $(event.target);
	  //	num += 10;
	  //	//$target.text(Number(num) - 1);
	  //	//$target.text(Number($target.text()) - 2);
	  //	$target.css({ transform : 'rotate('+ num +'deg)'});
	  //	});
	  

 	  //var $element = $('button');
	  //$element.css({'opacity' : '0.5'});
      