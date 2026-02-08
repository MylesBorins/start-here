export class Particle {
  constructor(config) {
    this.config = config;
    this.spawn();
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
  }

  spawn() {
    const { width, height, getCenterRadius } = this.config;
    const centerX = width() / 2;
    const centerY = height() / 2;
    const centerRadius = getCenterRadius();

    do {
      this.x = Math.random() * width();
      this.y = Math.random() * height();
    } while (
      Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2) < centerRadius
    );
  }

  update() {
    const { width, height, getCenterRadius, mouse, mouseRadius } = this.config;
    const w = width();
    const h = height();
    const centerX = w / 2;
    const centerY = h / 2;
    const centerRadius = getCenterRadius();

    const cdx = centerX - this.x;
    const cdy = centerY - this.y;
    const centerDist = Math.sqrt(cdx * cdx + cdy * cdy);

    if (centerDist < centerRadius * 1.5) {
      const force = (centerRadius * 1.5 - centerDist) / (centerRadius * 1.5);
      const angle = Math.atan2(cdy, cdx);
      this.vx -= Math.cos(angle) * force * 0.05;
      this.vy -= Math.sin(angle) * force * 0.05;
    }

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < mouseRadius) {
      const force = (mouseRadius - dist) / mouseRadius;
      const angle = Math.atan2(dy, dx);
      this.vx -= Math.cos(angle) * force * 0.02;
      this.vy -= Math.sin(angle) * force * 0.02;
    }

    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.99;
    this.vy *= 0.99;

    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;

    this.x = Math.max(0, Math.min(w, this.x));
    this.y = Math.max(0, Math.min(h, this.y));
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
  }
}

export function drawConnections(ctx, particles, connectionDistance) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < connectionDistance) {
        const opacity = 1 - dist / connectionDistance;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(102, 126, 234, ${opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}
