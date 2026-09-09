import { useEffect, useRef } from 'react'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Vector2,
  WebGLRenderer,
} from 'three'

const PARTICLE_COUNT = 900

function createParticleField() {
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const colors = new Float32Array(PARTICLE_COUNT * 3)
  const color = new Color()

  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    const radius = 2.5 + Math.random() * 7
    const angle = Math.random() * Math.PI * 2
    const height = (Math.random() - 0.5) * 5
    const offset = index * 3

    positions[offset] = Math.cos(angle) * radius
    positions[offset + 1] = height
    positions[offset + 2] = Math.sin(angle) * radius

    color.set(index % 5 === 0 ? '#c9f36c' : '#8ee3d4')
    colors[offset] = color.r
    colors[offset + 1] = color.g
    colors[offset + 2] = color.b
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  geometry.setAttribute('color', new BufferAttribute(colors, 3))

  const material = new PointsMaterial({
    size: 0.025,
    vertexColors: true,
    transparent: true,
    opacity: 0.72,
    blending: AdditiveBlending,
    depthWrite: false,
  })

  return new Points(geometry, material)
}

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!mount || reducedMotion) return undefined

    const scene = new Scene()
    const camera = new PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0, 9)

    const probe = document.createElement('canvas')
    const webglAvailable = Boolean(probe.getContext('webgl2') || probe.getContext('webgl'))

    if (!webglAvailable) return undefined

    let renderer
    try {
      renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    } catch {
      return undefined
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const group = new Group()
    const core = new Mesh(
      new IcosahedronGeometry(1.65, 1),
      new MeshBasicMaterial({ color: 0xc9f36c, wireframe: true, transparent: true, opacity: 0.22 }),
    )
    const halo = new Mesh(
      new IcosahedronGeometry(1.98, 2),
      new MeshBasicMaterial({ color: 0x8ee3d4, wireframe: true, transparent: true, opacity: 0.055 }),
    )
    const particles = createParticleField()

    group.add(core, halo, particles)
    group.rotation.x = 0.35
    scene.add(group)

    const pointer = new Vector2()
    const targetRotation = new Vector2()
    const clock = new Clock()

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      targetRotation.x += (pointer.y * 0.18 - targetRotation.x) * 0.035
      targetRotation.y += (pointer.x * 0.24 - targetRotation.y) * 0.035
      group.rotation.x = 0.35 + targetRotation.x
      group.rotation.y = elapsed * 0.055 + targetRotation.y
      core.rotation.z = elapsed * 0.08
      halo.rotation.z = -elapsed * 0.04
      particles.rotation.y = -elapsed * 0.018
      particles.rotation.x = Math.sin(elapsed * 0.12) * 0.08
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    let frameId
    resize()
    animate()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      core.geometry.dispose()
      core.material.dispose()
      halo.geometry.dispose()
      halo.material.dispose()
      particles.geometry.dispose()
      particles.material.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="three-scene" aria-hidden="true" />
}
