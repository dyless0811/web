function themetoggle(self) {
  if(self.value === 'day') {
    changecolor('white', 'black', 'blue');
    self.value = 'night';
  }else {
    changecolor('black', 'white', 'powderblue');
    self.value = 'day';
  }
}
function changecolor(bgcolor, tcolor, acolor){
  // var alist = document.querySelectorAll('a')
  // var i = 0;
  // while(i < alist.length) {
  //   alist[i].style.color = acolor;
  //   i += 1;
  // }
  $('a').css('color', acolor);
  // document.querySelector('body').style.backgroundColor = bgcolor;
  $('body').css('backgroundColor', bgcolor);
  // document.querySelector('body').style.color = tcolor;
  $('body').css('color', tcolor);
}
