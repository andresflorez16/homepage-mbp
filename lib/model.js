import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const glbModel = (scene, modelPath, options = { receiveShadow: true, castShadow: true }) => {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      glb => {
        const obj = glb.scene
        obj.name = 'andrew'
        obj.position.x = 0
        obj.position.z = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(child => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      err => reject(err)
    )
  })
}

export default glbModel
