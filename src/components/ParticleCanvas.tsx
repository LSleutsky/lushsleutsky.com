import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: [number, number, number];
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

const COLORS: [number, number, number][] = [
  [99, 102, 241],
  [34, 211, 238],
  [52, 211, 153],
  [168, 85, 247]
];

const PARTICLE_COUNT = 90;
const CONNECTION_DISTANCE = 180;
const MOUSE_RADIUS = 200;
const BASE_SPEED = 0.4;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    let animationId: number;
    let mouse = { x: -9999, y: -9999 };
    let time = 0;
    const particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas!.width = canvas!.offsetWidth * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;

      ctx!.scale(dpr, dpr);
    };

    const createParticles = () => {
      particles.length = 0;

      const width = canvas!.offsetWidth;
      const height = canvas!.offsetHeight;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const baseRadius = Math.random() * 2.5 + 1;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * BASE_SPEED,
          vy: (Math.random() - 0.5) * BASE_SPEED,
          radius: baseRadius,
          baseRadius,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          opacity: Math.random() * 0.4 + 0.3,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2
        });
      }
    };

    const animate = () => {
      const width = canvas!.offsetWidth;
      const height = canvas!.offsetHeight;
      time++;

      ctx!.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) {
          particle.x = width;
        }

        if (particle.x > width) {
          particle.x = 0;
        }

        if (particle.y < 0) {
          particle.y = height;
        }

        if (particle.y > height) {
          particle.y = 0;
        }

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;

          particle.vx -= (dx / dist) * force * 0.06;
          particle.vy -= (dy / dist) * force * 0.06;
        }

        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);

        if (speed > BASE_SPEED * 3) {
          particle.vx *= 0.96;
          particle.vy *= 0.96;
        }

        const pulse = Math.sin(time * particle.pulseSpeed + particle.pulseOffset);

        particle.radius = particle.baseRadius + pulse * 0.8;

        const nearMouse = dist < MOUSE_RADIUS;

        const glowOpacity = nearMouse
          ? particle.opacity + ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.4
          : particle.opacity;

        const [r, g, b] = particle.color;
        const glowRadius = particle.radius * 4;

        const gradient = ctx!.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowRadius
        );

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${glowOpacity * 0.6})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${glowOpacity * 0.2})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${glowOpacity})`;
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.35;
            const [r1, g1, b1] = particles[i].color;
            const [r2, g2, b2] = particles[j].color;
            const mr = (r1 + r2) / 2;
            const mg = (g1 + g2) / 2;
            const mb = (b1 + b2) / 2;

            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(${mr}, ${mg}, ${mb}, ${opacity})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)"
      }}
    />
  );
}
