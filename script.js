console.log("hello")
$("#logo").click(function() {
	location.reload()
});
var array = ["Premier", "simplon", "texte image 3", "texte4", "texte5", "texte6", "texte7", "texte8", "texte9"]
$("img").click(function(){
	var imageSelect = $(this).data("tech")
	$("#texte-image").text(array[imageSelect - 1])
}); 
$("#lien1").click(function() {
	alert("Je suis le lien 1 tocard");
	alert("Je suis 404 \n....................\nError")
});

$("#lien2").click(function() {
	alert("Moi je suis plus gentil KISS");
});

$("#reverse").click(function(){
	if ($("#reverse").is(':checked') === true ){
		$(".images").css( "flex-flow", "wrap-reverse")
	}
	else{
		$(".images").css( "flex-flow", "wrap")
	}
});