const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )
camera.position.z = 5
renderer.render( scene, camera )

let geometry = new THREE.BoxGeometry( 1, 1, 1)
let material = new THREE.MeshStandardMaterial( { color: 0xfff34f })
let cube = new THREE.Mesh ( geometry, material )
let ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
let pointLight = new THREE.PointLight (0xffffff, 1);


scene.add( cube )
scene.add( ambientLight )
scene.add( pointLight );
pointLight.position.set(20,50,35);

let geometry2 = new THREE.BoxGeometry( 3, 3, 3)
let material2 = new THREE.MeshBasicMaterial( { color: "#dadaba", wireframe: true, transparent: true})
let wireframeCube = new THREE.Mesh ( geometry2, material2 )
scene.add( wireframeCube )   

function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    wireframeCube.rotation.x -= 0.03;
    wireframeCube.rotation.y -= 0.03;
    renderer.render( scene, camera )
}

animate()
