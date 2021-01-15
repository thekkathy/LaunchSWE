const template = document.getElementById("test-template").content;
const copy = template.content.cloneNode(true);
document.body.appendChild(copy);