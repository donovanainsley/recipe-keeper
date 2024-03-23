$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('select').formSelect();
  });

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});
    