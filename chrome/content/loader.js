function load_images(){

var anchors = content.document.getElementsByTagName('a');
for(var i = 0; i < anchors.length; i++) {
	var href=anchors[i].href;
	if (href.indexOf('.jpeg')>=0
		|| href.indexOf('.jpg')>=0
		|| href.indexOf('.gif')>=0
		|| href.indexOf('.png')>=0
		|| href.indexOf('.tif')>=0
		|| href.indexOf('.bmp')>=0) {

		anchors[i].style.display = 'none';

		var img = content.document.createElement('img');
		img.setAttribute('src', href);
		img.setAttribute('style', 'display:block;max-width:500px;');
		
		var parent = anchors[i].parentNode;
		parent.appendChild(img);
	}

}

}
