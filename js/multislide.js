/*Multi image slideshow script- by javascriptkit.com
Visit JavaScript Kit (http://javascriptkit.com) for script
Credit must stay intact for use*/


function preloader(){
	var i = 0;
	imageobj = new Image();
	
	for(var a=0;a<slideshows.length - 1;a++){
		for(var b=0;b<slideshows[a].length - 1;b++){
			imageobj.src=slideshows[a][b];
		}
	}
}

function clickredir(which){
window.location=slidelinks[which][subinc]
}

function slideit(which){
//alert(which)
//alert(showindex[which])
//var ii = 0
subinc= (subinc<slideshows[which].length-1)? subinc+1: 0
//	for (var i=0;i<number_of_slideshows;i++){
		for (var ii=0;ii<document.images.length-1;ii++){
			//alert(document.images[ii].name)
			if (document.images[ii].name == showindex[which]){
				document.images[ii].src=slideshows[which][subinc]
			}
		}
//	}
}

function setslide(which){
clearInterval(runit)
maininc=which
subinc=0
runit=setInterval("slideit()",interval)
}

function getshow(showid,imagewidth,imageheight){
	//alert("a")
if (linked){
	if (imagewidth > 0 && imageheight > 0){
		document.write('<a href="javascript:clickredir('+showid+')"><img width="'+imagewidth+'" height="'+imageheight+'" src="'+slideshows[showid][0]+'" name="'+showindex[showid]+'" border=0></a>')
	}
	else{
		document.write('<a href="javascript:clickredir('+showid+')"><img src="'+slideshows[showid][0]+'" name="'+showindex[showid]+'" border=0></a>')
	}
}
else
{
	if (imagewidth > 0 && imageheight > 0){
		document.write('<img src="'+slideshows[showid][0]+'" name="'+showindex[showid]+'">')
	}
	else{
		document.write('<img src="'+slideshows[showid][0]+'" name="'+showindex[showid]+'">')
	}
}
}

/*
runit=setInterval("slideit()",interval)

- <a href="javascript:setslide(0)">JavaScript books</a><br>
- <a href="javascript:setslide(1)">DHTML books</a><br>
- <a href="javascript:setslide(2)">Flash books</a>
*/