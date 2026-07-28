import { useEffect, useRef } from "react";

const SAKURA_COUNT = 30;

function createPetal() {
  return {
    x: Math.random() * window.innerWidth,
    y: -20,
    size: Math.random() * 10 + 6,
    speed: Math.random() * 1.2 + 0.4,
    drift: Math.random() * 1.5 - 0.75,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 2 - 1,
    opacity: Math.random() * 0.5 + 0.15,
    color: Math.random() > 0.5 ? "rgba(255,105,150," : "rgba(255,180,200,",
  };
}

export default function AnimeBackground() {
  const canvasRef = useRef(null);
  const petalsRef = useRef([]);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init petals
    petalsRef.current = Array.from({ length: SAKURA_COUNT }, createPetal);

    const drawPetal = (ctx, p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      // Petal shape
      ctx.beginPath();
      ctx.fillStyle = p.color + p.opacity + ")";
      const s = p.size;
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.6, -s, s * 0.6, s * 0.8, 0, s);
      ctx.bezierCurveTo(-s * 0.6, s * 0.8, -s * 0.6, -s, 0, -s);
      ctx.fill();

      // Inner highlight
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,220,230,0.3)";
      ctx.lineWidth = 0.5;
      ctx.moveTo(0, -s * 0.8);
      ctx.lineTo(0, s * 0.8);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((p) => {
        p.y        += p.speed;
        p.x        += p.drift + Math.sin(p.y * 0.01) * 0.5;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          Object.assign(p, createPetal());
          p.y = -20;
        }

        drawPetal(ctx, p);
      });

      // Subtle grid overlay
      ctx.strokeStyle = "rgba(0,245,255,0.025)";
      ctx.lineWidth   = 0.5;
      const gridSize  = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
