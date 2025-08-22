// Ballpit Component inspired by Kevin Levron
// https://x.com/soju22/status/1858925191671271801

// Simple Ballpit Animation
class Ballpit {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.options = {
      count: options.count || 200,
      gravity: options.gravity || 0.7,
      friction: options.friction || 0.8,
      wallBounce: options.wallBounce || 0.95,
      followCursor: options.followCursor !== false,
      colors: options.colors || [0x4f46e5, 0x7c3aed, 0xec4899, 0xf59e0b, 0x10b981, 0x06b6d4, 0x8b5cf6, 0xef4444],
      ...options
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.spheres = [];
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.isMouseDown = false;
    this.selectedSphere = null;

    this.init();
  }

  init() {
    // Setup scene
    this.scene = new THREE.Scene();
    
    // Setup camera
    const aspect = this.canvas.width / this.canvas.height;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.set(0, 0, 15);
    this.camera.lookAt(0, 0, 0);

    // Setup renderer
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas, 
      antialias: true, 
      alpha: true 
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    // Setup lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 150);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    // Create spheres
    this.createSpheres();

    // Setup event listeners
    this.setupEventListeners();

    // Start animation
    this.animate();

    // Handle resize
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }

  createSpheres() {
    const sphereGeometry = new THREE.SphereGeometry(1, 16, 16);
    
    for (let i = 0; i < this.options.count; i++) {
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color().setHex(this.options.colors[i % this.options.colors.length]),
        metalness: 0.3,
        roughness: 0.7,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
      });

      const sphere = new THREE.Mesh(sphereGeometry, material);
      
      // Random initial position
      sphere.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 6
      );
      
      // Random size
      const size = Math.random() * 0.5 + 0.3;
      sphere.scale.setScalar(size);
      
      // Add velocity for physics
      sphere.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      );
      
      this.spheres.push(sphere);
      this.scene.add(sphere);
    }
  }

  setupEventListeners() {
    if (!this.options.followCursor) return;

    this.canvas.addEventListener('mousemove', (event) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    });

    this.canvas.addEventListener('mousedown', (event) => {
      this.isMouseDown = true;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.spheres);
      if (intersects.length > 0) {
        this.selectedSphere = intersects[0].object;
      }
    });

    this.canvas.addEventListener('mouseup', () => {
      this.isMouseDown = false;
      this.selectedSphere = null;
    });

    // Touch events
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      const mouseEvent = new MouseEvent('mouseup');
      this.canvas.dispatchEvent(mouseEvent);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Update sphere physics
    this.spheres.forEach(sphere => {
      // Apply gravity
      sphere.velocity.y -= this.options.gravity * 0.01;
      
      // Apply friction
      sphere.velocity.multiplyScalar(this.options.friction);
      
      // Update position
      sphere.position.add(sphere.velocity);
      
      // Boundary collision
      if (Math.abs(sphere.position.x) > 8) {
        sphere.position.x = Math.sign(sphere.position.x) * 8;
        sphere.velocity.x *= -this.options.wallBounce;
      }
      if (Math.abs(sphere.position.y) > 8) {
        sphere.position.y = Math.sign(sphere.position.y) * 8;
        sphere.velocity.y *= -this.options.wallBounce;
      }
      if (Math.abs(sphere.position.z) > 3) {
        sphere.position.z = Math.sign(sphere.position.z) * 3;
        sphere.velocity.z *= -this.options.wallBounce;
      }
      
      // Mouse interaction
      if (this.selectedSphere === sphere && this.isMouseDown) {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const intersection = new THREE.Vector3();
        this.raycaster.ray.intersectPlane(plane, intersection);
        sphere.position.copy(intersection);
        sphere.velocity.set(0, 0, 0);
      }
    });

    // Render
    this.renderer.render(this.scene, this.camera);
  }

  handleResize() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(this.canvas.width, this.canvas.height);
  }

  cleanup() {
    window.removeEventListener('resize', () => this.handleResize());
    this.renderer.dispose();
  }
}

// Initialize Ballpit when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('ballpitCanvas');
  if (canvas) {
    // Create Ballpit instance with the specified options
    const ballpit = new Ballpit(canvas, {
      count: 200,
      gravity: 0.7,
      friction: 0.8,
      wallBounce: 0.95,
      followCursor: true
    });

    // Store reference for cleanup if needed
    window.ballpitInstance = ballpit;
  }
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
  if (window.ballpitInstance) {
    window.ballpitInstance.cleanup();
  }
});
