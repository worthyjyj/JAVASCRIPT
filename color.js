   // 야간모드 버튼 클릭했을 때 자바스크립트를 메소드화 (함수화)
   function nightDayHandler(self){
    var target = document.querySelector('body');
if(self.value === 'night'){
target.style.backgroundColor='black';
target.style.color='White';
self.value='day';
// var alist = document.querySelectorAll('a');
// var i = 0;
// while(i < alist.length){
//     alist[i].style.color = 'powderblue';
//     i=i+1
// }
$('a').css('color', "powderblue");
}

else{
target.style.backgroundColor='White';
target.style.color='black';
self.value='night';
// var alist = document.querySelectorAll('a');
// var i = 0;
// while(i < alist.length){
//     alist[i].style.color = 'blue';
//     i=i+1
// }
$('a').css('color', "red");
}
}