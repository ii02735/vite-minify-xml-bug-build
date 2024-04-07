import minifyXML from 'minify-xml';

document.getElementById("submit").addEventListener("click", () => {
	document.getElementById("result").innerText = minifyXML(document.getElementById("xml").value);
});
