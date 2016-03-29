var body = document.getElementsByTagName('body');
var newElement = document.createElement('div');
newElement.className = "wrapper";
document.body.appendChild(newElement);

	var wrapper=document.body.querySelector('.wrapper');
	newElement=document.createElement('h5');
	newElement.style.marginTop ='30px';
	newElement.style.marginLeft='5px';
	newElement.innerHTML='Тест по програмированию';
	wrapper.appendChild(newElement);

		// var wrapper = document.body.querySelector('.wrapper');
			newElement=document.createElement('form');
        
		newElement.setAttribute('name', 'test');
    		newElement.setAttribute('method', 'GET');
 	    	newElement.setAttribute('action', '');
		wrapper.appendChild(newElement);

		  var form = wrapper.querySelector('form');
		  for(var i=1; i<4; i++){
		  newElement = document.createElement('p');
		  newElement.innerHTML = i+'. Вопрос №'+i;
		  newElement.style.marginLeft='5px';
		  newElement.style.marginTop ='30px';

		  form.appendChild(newElement);

			  newElement = document.createElement('ul');
			  form.appendChild(newElement);

			  var ul=form.querySelectorAll('ul');
			  for(var n=1; n<4; n++){
			  newElement=document.createElement('li');
			  newElement.style.listStyle='none';
			  ul[i-1].appendChild(newElement);

				 var li = ul[i-1].querySelectorAll('li');
				 newElement = document.createElement('input');
				 newElement.setAttribute('type', 'checkbox');
 	             		 newElement.setAttribute('name', 'an_'+i+'-'+n);
 	                         newElement.setAttribute('id', 'an_'+i+'-'+n);
				 li[n-1].appendChild(newElement);

				  newElement = document.createElement('label');
				  newElement.setAttribute('for', 'an_'+i+'-'+n);
				  newElement.innerHTML = 'Вариант ответа №'+n;
				  newElement.style.marginLeft = '20px';
				  li[n-1].appendChild(newElement);


}
}

newElement = document.createElement('button');
newElement.innerHTML = 'Проверить мои результаты';
newElement.style.marginTop = '20px';
newElement.style.marginLeft='5px';
newElement.setAttribute('type', 'submit');
form.appendChild(newElement);
