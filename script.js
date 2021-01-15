const contenedor = document.querySelector(".flex_container");



function crearLlave(nombre,modelo,precio){
	img = "<img class=`llave_img` src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
	document.querySelector(".key_data").value = number;
}
let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 10; i++) {
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`, precioRandom);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.tabIndex = i;
	div.classList.add(`item_${i}`,`flex_item`);
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);