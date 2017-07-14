/*var productos = [];
var records = document.getElementById('records');

function frutass() {
  var fruta = document.getElementById("frutas").value;
    
    resultado.innerHTML += frutas+  "<br />";
        }
}

*/
var frutitas = [];
var records = document.getElementById('lista');

function Producto(compra) {
  this.compra = compra;
  this.producttID = (frutitas.length + 1);
 
};

Producto.prototype.toHTML = function () {
  var html = '';
  html += this.producttID + ". " + this.compra + '<br>';
  html += '<br>';
  return html;
}

function mergeHTML (){
  var html = '';
  for (i=0; i<frutitas.length; i++){   
    html += frutitas[i].toHTML();  
  }
  return html;
}

function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;  
}

var addCompra = document.getElementById('nuevacompra');


addCompra.onclick = function() {
  var compra = document.getElementById('frutas').value;

  var product  = new Producto (compra);
  frutitas.push(product);
  printHTML(product.toHTML());
  printHTML(mergeHTML());
};