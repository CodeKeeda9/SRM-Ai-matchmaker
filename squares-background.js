class SquaresBackground {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.options = {
      direction: options.direction || 'diagonal',
      speed: options.speed || 0.5,
      borderColor: options.borderColor || 'rgba(255,255,255,0.1)',
      squareSize: options.squareSize || 40,
      hoverFillColor: options.hoverFillColor || 'rgba(255,255,255,0.05)',
      ...options
    };
    
    this.requestRef = null;
    this.numSquaresX = 0;
    this.numSquaresY = 0;
    this.gridOffset = { x: 0, y: 0 };
    this.hoveredSquare = null;
    
    this.init();
  }
  
  init() {
    this.resizeCanvas();
    this.setupEventListeners();
    this.startAnimation();
  }
  
  resizeCanvas() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.numSquaresX = Math.ceil(this.canvas.width / this.options.squareSize) + 1;
    this.numSquaresY = Math.ceil(this.canvas.height / this.options.squareSize) + 1;
  }
  
  drawGrid() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    const startX = Math.floor(this.gridOffset.x / this.options.squareSize) * this.options.squareSize;
    const startY = Math.floor(this.gridOffset.y / this.options.squareSize) * this.options.squareSize;
    
    this.ctx.lineWidth = 0.5;
    
    for (let x = startX; x < this.canvas.width + this.options.squareSize; x += this.options.squareSize) {
      for (let y = startY; y < this.canvas.height + this.options.squareSize; y += this.options.squareSize) {
        const squareX = x - (this.gridOffset.x % this.options.squareSize);
        const squareY = y - (this.gridOffset.y % this.options.squareSize);
        
        if (
          this.hoveredSquare &&
          Math.floor((x - startX) / this.options.squareSize) === this.hoveredSquare.x &&
          Math.floor((y - startY) / this.options.squareSize) === this.hoveredSquare.y
        ) {
          this.ctx.fillStyle = this.options.hoverFillColor;
          this.ctx.fillRect(squareX, squareY, this.options.squareSize, this.options.squareSize);
        }
        
        this.ctx.strokeStyle = this.options.borderColor;
        this.ctx.strokeRect(squareX, squareY, this.options.squareSize, this.options.squareSize);
      }
    }
    
    // Add radial gradient overlay for fade effect
    const gradient = this.ctx.createRadialGradient(
      this.canvas.width / 2,
      this.canvas.height / 2,
      0,
      this.canvas.width / 2,
      this.canvas.height / 2,
      Math.sqrt(Math.pow(this.canvas.width, 2) + Math.pow(this.canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  updateAnimation() {
    const effectiveSpeed = Math.max(this.options.speed, 0.1);
    
    switch (this.options.direction) {
      case 'right':
        this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'left':
        this.gridOffset.x = (this.gridOffset.x + effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'up':
        this.gridOffset.y = (this.gridOffset.y + effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'down':
        this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
      case 'diagonal':
        this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + this.options.squareSize) % this.options.squareSize;
        break;
    }
    
    this.drawGrid();
    this.requestRef = requestAnimationFrame(() => this.updateAnimation());
  }
  
  handleMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const startX = Math.floor(this.gridOffset.x / this.options.squareSize) * this.options.squareSize;
    const startY = Math.floor(this.gridOffset.y / this.options.squareSize) * this.options.squareSize;
    
    const hoveredSquareX = Math.floor((mouseX + this.gridOffset.x - startX) / this.options.squareSize);
    const hoveredSquareY = Math.floor((mouseY + this.gridOffset.y - startY) / this.options.squareSize);
    
    this.hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
  }
  
  handleMouseLeave() {
    this.hoveredSquare = null;
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => this.resizeCanvas());
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
  }
  
  startAnimation() {
    this.updateAnimation();
  }
  
  destroy() {
    if (this.requestRef) {
      cancelAnimationFrame(this.requestRef);
    }
    window.removeEventListener('resize', () => this.resizeCanvas());
    this.canvas.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.removeEventListener('mouseleave', () => this.handleMouseLeave());
  }
}
