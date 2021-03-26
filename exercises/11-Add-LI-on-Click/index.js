let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var element = document.createElement("LI");
	element.innerHTML = "Forth element";
	document.querySelector("#myList").appendChild(element);
});
