import { GLTFLoader } from "./three/GLTFLoader.js";

export function cargarModelo(archivo, objetoVacio) {
  var loader = new GLTFLoader();
  loader.load(archivo, function (gltf) {
    for (var i = objetoVacio.children.length - 1; i >= 0; i--) {
      let obj = objetoVacio.children[i];
      objetoVacio.remove(obj);
    }
    objetoVacio.add(gltf.scene);
    console.log("cargado");
  });
}
