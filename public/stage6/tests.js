'use strict';

describe('ステージ6（意図通りにモジュールを書ける）', function() {
  it('あなたの満足のいく Web アプリケーションがここにある', function() {
    // ボタンはサービスです。
    // 自由に使ってください。
	
	  //var element = document.getElementsByClassName('.button button-caution button-3d button-pill button-giant js-training-button');
	  //var element = document.querySelector('button');
	  //element
	  //elementToAdd.textContent = '\uD83D\uDC2C';
	  
	  //var $element = $('.button button-caution button-3d button-pill button-giant js-training-button');
	  //$element.css({'opacity' : '0.5'});
	  //element.addEventListener('click',function(){
	  //	element.textContent = Number(element.textContent) + 1;
	  //	});

	  //var $element = $('button');
	  var selector = '.js-training-playground:nth-child(1) button';
	  selector.append
	  
	  
	  
	  var elementToAdd = document.createElement('span');
      elementToAdd.textContent = '\uD83D\uDC1F';

      // 上の elementToAdd を、5 番の青色の要素の最初に追加するコードを
      // ここに記述してください。
      var element = document.querySelector('button');
      element.insertBefore(elementToAdd,element.firstChild);
	  
    var qualityOfYourAppliation = undefined;

    expect(qualityOfYourAppliation).to.be.ok;
  });
});
