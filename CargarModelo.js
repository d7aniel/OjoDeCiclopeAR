import { GLTFLoader } from "./three/GLTFLoader.js";

export function cargarModelo(archivo, objetoVacio) {
  var loader = new GLTFLoader();
  loader.load(archivo, function (gltf) {
    objetoVacio.add(gltf.scene);
    console.log("cargado");
  });
}
