// enter a block of text and select words to black out  
let btn = document.getElementById("btn");
let inputValue = document.getElementById("input").value;
btn.addEventListener("click", () => {
  let inputValue = document.getElementById("input").value;
    // loop thru each word and create a span
    inputValue.split(" ").forEach(word => { 
    const element = document.createElement("span");
    element.innerHTML = word;  
    document.body.appendChild(element);
    document.getElementById('myDiv').appendChild(element);  
    element.onclick = () =>     
    element.style.background = '#000';
    });
});
// render div as png 
document.getElementById("download").addEventListener("click", function() {
    html2canvas(document.getElementById('myDiv')).then(function(canvas) {
    saveAs(canvas.toDataURL(), 'file-name.png');
    });
});

function saveAs(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    } else {
      window.open(uri);
    }
}