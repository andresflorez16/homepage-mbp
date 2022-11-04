import { useRef, useState, useEffect, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Loading, ModelLoader } from './voxel-loader'
import glbModel from '../lib/model'

const easeOutCircle = x => Math.sqrt(1 - Math.pow(x - 1, 4))

export const Scene = () => {
  const containerRef = useRef(null)

  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 5, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      18,
      20 * Math.cos(0,2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleResize = useCallback(() => {
    const { current: container } = containerRef
    if (container && renderer) {
      const screenW = container.clientWidth
      const screenH = container.clientHeight

      renderer.setSize(screenW, screenH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = containerRef
    if (container && !renderer) {
      const screenW = container.clientWidth
      const screenH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(screenW, screenH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const scale = screenH * 0.01 + 5
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.enableDamping = true
      controls.target = target
      setControls(controls)

      const AL = new THREE.AmbientLight(0xFFFFFF, 2)
      scene.add(AL)

      glbModel(
        scene,
        '/model/andrew.glb',
        {
          receiveShadow: true,
          castShadow: true
        }
      )
        .then(() => {
          animate()
          setLoading(false)
        })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame
        if (frame <= 100) {
          const pos = initialCameraPosition
          const rotSpeed = easeOutCircle(frame / 120) * Math.PI * 20
          camera.position.y = 8
          camera.position.x = pos.x * Math.cos(rotSpeed) + pos.x * Math.sin(rotSpeed)
          camera.position.z = pos.z * Math.cos(rotSpeed) - pos.z * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else controls.update()
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [renderer, handleResize])

  return (
    <ModelLoader ref={containerRef}>
      {loading && <Loading />}
    </ModelLoader>
  )
}
