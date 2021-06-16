function gamauBeb(id) {
  var maapYaBeb = document.getElementById('btn_IYA_BEB_MAAP_YA');
  var i = Math.floor(Math.random() * 300) + 1;
  var j = Math.floor(Math.random() * 100) + maapYaBeb.offsetTop;

  id.style.position = 'absolute';
  id.style.left = i + 'px';
  id.style.top = j + 'px';
}
