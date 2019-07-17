console.log("Chrome extension");
let paragraphs = document.getElementsByClassName('product_name');
var i = 1;
var re = />(.*)</g;
for (elt of paragraphs) {
	console.log('product #' + i);
	var res = re.exec(elt.innerHTML)[1];
	console.log(res);
	i++;
	break;
}