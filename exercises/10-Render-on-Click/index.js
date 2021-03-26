let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var element = document.createElement("DIV");
	element.innerHTML = "Hello World";
	element.style.backgroundColor = "yellow";
	document.querySelector("body").appendChild(element);
});
