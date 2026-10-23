'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * EventThreeCanvas
 * High-performance, client-side Three.js interactive 3D visualizer.
 * Renders custom 3D animations for each wedding celebration event:
 * - 'mata-pujan': Sacred golden diya flame & rising ember particles
 * - 'sneh-bhoj': Floating golden & saffron floral petal vortex
 * - 'lagna-sagaai': Interlocking 3D metallic gold rings with diamond sparkles
 * - 'baraat': Dynamic celebratory firework burst & confetti particles
 * - 'ashirwad': Champagne starlight celestial vortex
 * - 'vidai': Floating lotus blossom geometry with reflective ripples
 */
export default function EventThreeCanvas({ activeEventId = 'lagna-sagaai' }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationFrameRef = useRef(null);
  const objectsGroupRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const parentW = container.parentElement ? container.parentElement.clientWidth : 0;
    const initialW = container.clientWidth || rect.width || parentW || (typeof window !== 'undefined' ? window.innerWidth - 64 : 320);
    const initialH = container.clientHeight || rect.height || 320;
    const width = Math.max(180, Math.min(initialW, typeof window !== 'undefined' ? window.innerWidth - 48 : 360));
    const height = Math.max(200, initialH);

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.maxWidth = '100%';
    renderer.domElement.style.maxHeight = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.objectFit = 'contain';
    rendererRef.current = renderer;
    container.replaceChildren(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd4af37, 3, 20);
    pointLight.position.set(3, 4, 4);
    scene.add(pointLight);

    const secondaryLight = new THREE.PointLight(0xe8b4b8, 2, 20);
    secondaryLight.position.set(-3, -3, 3);
    scene.add(secondaryLight);

    // 3. Dynamic Objects Group
    const group = new THREE.Group();
    scene.add(group);
    objectsGroupRef.current = group;

    // Mouse listener
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.4;
      mouseRef.current.targetY = y * 0.4;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let startTime = performance.now();
    let lastTime = startTime;
    const animate = (now = performance.now()) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const time = (now - startTime) / 1000;

      // Smooth mouse tracking
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (objectsGroupRef.current) {
        objectsGroupRef.current.rotation.y = time * 0.35 + mouseRef.current.x;
        objectsGroupRef.current.rotation.x = Math.sin(time * 0.25) * 0.15 + mouseRef.current.y;

        // Custom per-child animation hooks
        objectsGroupRef.current.children.forEach((child) => {
          if (child.userData.onUpdate) {
            child.userData.onUpdate(time, delta);
          }
        });
      }

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.replaceChildren();
    };
  }, []);

  // Update 3D elements whenever activeEventId changes
  useEffect(() => {
    const group = objectsGroupRef.current;
    if (!group) return;

    // Clean old objects
    while (group.children.length > 0) {
      const obj = group.children[0];
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
      group.remove(obj);
    }

    // Build Event Specific 3D Artwork
    switch (activeEventId) {
      case 'ghudchadi': {
        // ── 1. Royal Ghudchadi: Golden Processional Sun & Celebratory Aura ──
        const sunGroup = new THREE.Group();

        // Central Royal Sun Wheel
        const centerGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.15, 32);
        const goldMat = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.9,
          roughness: 0.2,
        });
        const sunCenter = new THREE.Mesh(centerGeo, goldMat);
        sunCenter.rotation.x = Math.PI / 2;
        sunGroup.add(sunCenter);

        // Radiant Royal Sun Rays (16 rays)
        const rayGeo = new THREE.ConeGeometry(0.12, 1.4, 8);
        const rayMat = new THREE.MeshStandardMaterial({
          color: 0xf28c28,
          metalness: 0.8,
          roughness: 0.25,
          emissive: 0x994400,
          emissiveIntensity: 0.4,
        });

        for (let i = 0; i < 16; i++) {
          const ray = new THREE.Mesh(rayGeo, i % 2 === 0 ? rayMat : goldMat);
          const angle = (i / 16) * Math.PI * 2;
          ray.position.set(Math.cos(angle) * 1.3, Math.sin(angle) * 1.3, 0);
          ray.rotation.z = angle - Math.PI / 2;
          sunGroup.add(ray);
        }

        // Royal Inner Ring
        const ringGeo = new THREE.TorusGeometry(1.4, 0.06, 16, 64);
        const innerRing = new THREE.Mesh(ringGeo, goldMat);
        sunGroup.add(innerRing);

        sunGroup.userData.onUpdate = (t) => {
          sunGroup.rotation.z = t * 0.3;
          sunGroup.scale.setScalar(1 + Math.sin(t * 3) * 0.05);
        };
        group.add(sunGroup);

        // Celebratory Stardust & Swirling Golden Sparks (140 particles)
        const sparkCount = 140;
        const sparkGeo = new THREE.BufferGeometry();
        const sparkPos = new Float32Array(sparkCount * 3);
        const sparkSpeeds = new Float32Array(sparkCount);
        const sparkRadius = new Float32Array(sparkCount);
        const sparkAngles = new Float32Array(sparkCount);

        for (let i = 0; i < sparkCount; i++) {
          sparkAngles[i] = Math.random() * Math.PI * 2;
          sparkRadius[i] = 1.0 + Math.random() * 2.2;
          sparkSpeeds[i] = 0.5 + Math.random() * 0.8;
          sparkPos[i * 3] = Math.cos(sparkAngles[i]) * sparkRadius[i];
          sparkPos[i * 3 + 1] = Math.sin(sparkAngles[i]) * sparkRadius[i];
          sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
        }

        sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
        const sparkMat = new THREE.PointsMaterial({
          color: 0xffd700,
          size: 0.075,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
        });
        const sparks = new THREE.Points(sparkGeo, sparkMat);
        sparks.userData.onUpdate = (t, delta) => {
          const pos = sparkGeo.attributes.position.array;
          for (let i = 0; i < sparkCount; i++) {
            sparkAngles[i] += sparkSpeeds[i] * delta;
            pos[i * 3] = Math.cos(sparkAngles[i]) * sparkRadius[i];
            pos[i * 3 + 1] = Math.sin(sparkAngles[i]) * sparkRadius[i];
            pos[i * 3 + 2] += Math.sin(t * 2 + i) * 0.003;
          }
          sparkGeo.attributes.position.needsUpdate = true;
        };
        group.add(sparks);
        break;
      }

      case 'lagan-sagai':
      case 'lagna-sagaai': {
        // ── 2. Interlocking 3D Golden Wedding Rings with Diamond Sparkle ──
        const ringGeo = new THREE.TorusGeometry(1.1, 0.12, 24, 64);
        const ringMatGold = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.95,
          roughness: 0.15,
        });
        const ringMatRose = new THREE.MeshStandardMaterial({
          color: 0xe8b4b8,
          metalness: 0.9,
          roughness: 0.18,
        });

        const ring1 = new THREE.Mesh(ringGeo, ringMatGold);
        ring1.position.set(-0.45, 0, 0);
        ring1.rotation.set(Math.PI / 4, Math.PI / 6, 0);

        const ring2 = new THREE.Mesh(ringGeo, ringMatRose);
        ring2.position.set(0.45, 0, 0);
        ring2.rotation.set(-Math.PI / 4, -Math.PI / 6, 0);

        group.add(ring1);
        group.add(ring2);

        // Diamond Solitaire on Ring 1
        const gemGeo = new THREE.OctahedronGeometry(0.3, 2);
        const gemMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.1,
          roughness: 0.05,
          emissive: 0xd4af37,
          emissiveIntensity: 0.9,
        });
        const gem = new THREE.Mesh(gemGeo, gemMat);
        gem.position.set(0, 1.2, 0);
        ring1.add(gem);

        // Diamond Sparkle Particles
        const sparkleCount = 80;
        const sparkleGeo = new THREE.BufferGeometry();
        const sparklePos = new Float32Array(sparkleCount * 3);
        for (let i = 0; i < sparkleCount; i++) {
          const theta = Math.random() * Math.PI * 2;
          const r = 0.5 + Math.random() * 1.6;
          sparklePos[i * 3] = Math.cos(theta) * r;
          sparklePos[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
          sparklePos[i * 3 + 2] = Math.sin(theta) * r;
        }
        sparkleGeo.setAttribute('position', new THREE.BufferAttribute(sparklePos, 3));
        const sparkleMat = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.065,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
        });
        const sparkles = new THREE.Points(sparkleGeo, sparkleMat);
        sparkles.userData.onUpdate = (t) => {
          sparkles.rotation.y = t * 0.15;
        };
        group.add(sparkles);
        break;
      }

      case 'dinner':
      case 'ashirwad-bhoj': {
        // ── 3. Festive Dinner: Sacred Golden Kalash & Swirling Floral Petals ──
        const dinnerGroup = new THREE.Group();

        // Golden Kalash Pot
        const potGeo = new THREE.SphereGeometry(0.85, 32, 24);
        const goldMat = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.9,
          roughness: 0.2,
        });
        const pot = new THREE.Mesh(potGeo, goldMat);
        pot.scale.set(1, 1.15, 1);
        pot.position.y = -0.4;
        dinnerGroup.add(pot);

        // Pot Neck & Rim
        const rimGeo = new THREE.TorusGeometry(0.48, 0.08, 16, 32);
        const rim = new THREE.Mesh(rimGeo, goldMat);
        rim.rotation.x = Math.PI / 2;
        rim.position.y = 0.55;
        dinnerGroup.add(rim);

        // Sacred Coconut (Shriphal) on Top
        const coconutGeo = new THREE.SphereGeometry(0.4, 24, 20);
        const coconutMat = new THREE.MeshStandardMaterial({
          color: 0x8a5322,
          roughness: 0.6,
        });
        const coconut = new THREE.Mesh(coconutGeo, coconutMat);
        coconut.scale.set(0.9, 1.25, 0.9);
        coconut.position.y = 0.9;
        dinnerGroup.add(coconut);

        dinnerGroup.userData.onUpdate = (t) => {
          dinnerGroup.rotation.y = t * 0.4;
        };
        group.add(dinnerGroup);

        // Swirling Festive Petals (80 petals: saffron and gold)
        const petalCount = 80;
        const petalGroup = new THREE.Group();
        const petalMat1 = new THREE.MeshStandardMaterial({
          color: 0xf28c28,
          roughness: 0.4,
          side: THREE.DoubleSide,
        });
        const petalMat2 = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.5,
          roughness: 0.3,
          side: THREE.DoubleSide,
        });
        const petalGeo = new THREE.CylinderGeometry(0.08, 0.22, 0.03, 8);

        for (let i = 0; i < petalCount; i++) {
          const mesh = new THREE.Mesh(petalGeo, i % 2 === 0 ? petalMat1 : petalMat2);
          const angle = (i / petalCount) * Math.PI * 2;
          const radius = 1.1 + (i % 5) * 0.35;
          const y = (Math.random() - 0.5) * 2.4;
          mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
          mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
          mesh.userData.baseAngle = angle;
          mesh.userData.radius = radius;
          mesh.userData.speed = 0.5 + Math.random() * 0.5;
          mesh.userData.rotSpeed = 1 + Math.random() * 2;
          petalGroup.add(mesh);
        }

        petalGroup.userData.onUpdate = (t) => {
          petalGroup.children.forEach((p) => {
            p.userData.baseAngle += p.userData.speed * 0.015;
            p.position.x = Math.cos(p.userData.baseAngle) * p.userData.radius;
            p.position.z = Math.sin(p.userData.baseAngle) * p.userData.radius;
            p.position.y += Math.sin(t + p.userData.radius) * 0.005;
            p.rotation.x += p.userData.rotSpeed * 0.01;
            p.rotation.y += p.userData.rotSpeed * 0.015;
          });
        };
        group.add(petalGroup);
        break;
      }

      case 'reception':
      case 'ashirwad': {
        // ── 4. Grand Reception: Celestial Starlight Chandelier & Fireworks ──
        const receptionGroup = new THREE.Group();

        // 3 Concentric Golden Gyroscopic Rings
        const ringMat = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.95,
          roughness: 0.15,
        });

        const r1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.05, 16, 64), ringMat);
        const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.05, 16, 64), ringMat);
        const r3 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.05, 16, 64), ringMat);

        receptionGroup.add(r1);
        receptionGroup.add(r2);
        receptionGroup.add(r3);

        // Core Radiant Diamond Orb
        const orbGeo = new THREE.IcosahedronGeometry(0.45, 2);
        const orbMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.2,
          roughness: 0.05,
          emissive: 0xd4af37,
          emissiveIntensity: 0.9,
        });
        const orb = new THREE.Mesh(orbGeo, orbMat);
        receptionGroup.add(orb);

        receptionGroup.userData.onUpdate = (t) => {
          r1.rotation.x = t * 0.5;
          r1.rotation.y = t * 0.3;
          r2.rotation.y = t * 0.6;
          r2.rotation.z = t * 0.4;
          r3.rotation.z = t * 0.7;
          r3.rotation.x = t * 0.5;
          orb.rotation.y = t * 0.8;
          orb.scale.setScalar(1 + Math.sin(t * 3) * 0.08);
        };
        group.add(receptionGroup);

        // Celebratory Fireworks & Starlight Dust (180 particles)
        const starCount = 180;
        const starGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const velocities = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);

        const colGold = new THREE.Color(0xd4af37);
        const colChampagne = new THREE.Color(0xf4ebd9);
        const colSaffron = new THREE.Color(0xf28c28);

        for (let i = 0; i < starCount; i++) {
          const u = Math.random();
          const v = Math.random();
          const theta = u * 2.0 * Math.PI;
          const phi = Math.acos(2.0 * v - 1.0);
          const speed = 0.8 + Math.random() * 1.5;

          velocities[i * 3] = Math.sin(phi) * Math.cos(theta) * speed;
          velocities[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
          velocities[i * 3 + 2] = Math.cos(phi) * speed;

          positions[i * 3] = 0;
          positions[i * 3 + 1] = 0;
          positions[i * 3 + 2] = 0;

          const chosenCol = i % 3 === 0 ? colGold : i % 3 === 1 ? colChampagne : colSaffron;
          colors[i * 3] = chosenCol.r;
          colors[i * 3 + 1] = chosenCol.g;
          colors[i * 3 + 2] = chosenCol.b;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const starMat = new THREE.PointsMaterial({
          size: 0.075,
          vertexColors: true,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
        });

        const starPoints = new THREE.Points(starGeo, starMat);
        starPoints.userData.onUpdate = (t) => {
          const pos = starGeo.attributes.position.array;
          const cycle = (t * 0.75) % 2.6;
          for (let i = 0; i < starCount; i++) {
            pos[i * 3] = velocities[i * 3] * cycle;
            pos[i * 3 + 1] = velocities[i * 3 + 1] * cycle - 0.25 * (cycle * cycle);
            pos[i * 3 + 2] = velocities[i * 3 + 2] * cycle;
          }
          starGeo.attributes.position.needsUpdate = true;
        };
        group.add(starPoints);
        break;
      }

      default:
        break;
    }
  }, [activeEventId]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[340px] md:min-h-[420px] relative flex items-center justify-center pointer-events-none select-none"
    />
  );
}
