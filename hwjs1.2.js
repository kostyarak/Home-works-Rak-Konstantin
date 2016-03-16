
var arr = [];
var name, flag = false;
for (var i=0; i<5; i++){
 arr[i] = prompt('Введите любое имя '+ (i+1)+ ': ');
 console.log(arr[i]);
 if (arr[i]==null) {
 	alert('Имя не введено, повторите ввод');
 	break;
 }
 }

name = prompt('Введите теперь ваше имя: ');
for (var i = 0; i < 5; i++) {
 if (arr[i] == name){
 flag = true;
 break;
 }
}
if (flag){
alert('Добро пожаловать, '+ name);
}
else {
 alert('Вашего имени нет в списке!');
}
