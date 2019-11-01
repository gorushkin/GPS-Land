var lang_locale = "ru";
var price = /{{.*price.*}}/g;
var currency = /{{\s*currency\s*}}/g;
var ifel = /{%.?if.*else.?%}/;
var ef = /{%.?endif.?%}/;

function price_rnd() {
  return Math.round(Math.random() * 90 + 10);
}
window.onload = function () {
  var a = document.getElementsByTagName('*');
  for (var i = 0; i < a.length; i++)
    if (a[i].tagName != "SCRIPT")
      for (var j = 0; j < a[i].childNodes.length; j++) {
        var b = a[i].childNodes[j];
        if (b.nodeType == 3) {
          if (ifel.test(b.textContent)) b.textContent = b.textContent.replace(ifel, '');
          if (ef.test(b.textContent)) b.textContent = b.textContent.replace(ef, '');
          if (currency.test(b.textContent)) b.textContent = b.textContent.replace(currency, "$");
          if (price.test(b.textContent)) b.textContent = b.textContent.replace(price, price_rnd());
        }
      }
}
