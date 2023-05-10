/* Para un proyecto de ThreeJS se necesitan 3 cosas siempre:
   Escena, Camara y Renderer, donde la camara es donde podemos ver la escena y todo esto
   se engloba dentro del renderer */
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight ) // Establecemos el tamaño donde se va a mostrar la escena
renderer.setClearColor("#223221") // Establecer color del fondo del renderer

document.body.appendChild( renderer.domElement )
camera.position.z = 5
renderer.render( scene, camera )

/*Creamos la primera figura geometrica que utiliza dos parametros:
  Geometria para definir el tipo de figura geometrica y material que se van a usar con mesh para renderizar la figura  */
let geometry = new THREE.BoxGeometry( 1, 1, 1)
let material = new THREE.MeshStandardMaterial( { color: 0xfff34f })
let cube = new THREE.Mesh ( geometry, material )
//Definir las variables de luz
let ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
let pointLight = new THREE.PointLight (0xffffff, 1);

//Agregar a la escena el cubo, la luz ambiental y la luz direccional
scene.add( cube )
scene.add( ambientLight )
scene.add( pointLight );
pointLight.position.set(5,5,5);

//Creamos la segunda figura geometrica la cual es transparente
let geometry2 = new THREE.BoxGeometry( 3, 3, 3)
let material2 = new THREE.MeshBasicMaterial( { color: "#dadaba", wireframe: true, transparent: true})
let wireframeCube = new THREE.Mesh ( geometry2, material2 )
scene.add( wireframeCube )   


//Creamos la funcion animar que utiliza el cubo y mediante el metodo rotation le da movimiento al a figura
function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    wireframeCube.rotation.x -= 0.03;
    wireframeCube.rotation.y -= 0.03;
    renderer.render( scene, camera )
}

animate()
