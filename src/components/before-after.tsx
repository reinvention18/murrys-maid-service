"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Reveal } from "./reveal";

export function BeforeAfter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hintVisible, setHintVisible] = useState(true);
  const paintedRef = useRef(0);

  const drawDirty = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#3d513f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${30 + Math.random() * 40},${50 + Math.random() * 40},${30 + Math.random() * 30},${0.3 + Math.random() * 0.4})`;
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 12 + Math.random() * 44, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < 20; i++) {
      ctx.strokeStyle = `rgba(50,40,30,${0.2 + Math.random() * 0.3})`;
      ctx.lineWidth = 8 + Math.random() * 16;
      ctx.lineCap = "round";
      ctx.beginPath();
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.moveTo(x, y);
      ctx.lineTo(x + (Math.random() - 0.5) * 120, y + (Math.random() - 0.5) * 120);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(255,249,236,.32)";
    ctx.font = "bold 20px Manrope, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(". . . needs a clean . . .", canvas.width / 2, canvas.height / 2);
  }, []);

  const fitCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext("2d");
    if (ctx) drawDirty(canvas, ctx);
  }, [drawDirty]);

  useEffect(() => {
    fitCanvas();
    window.addEventListener("resize", fitCanvas);
    return () => window.removeEventListener("resize", fitCanvas);
  }, [fitCanvas]);

  const scrubAt = (x: number, y: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 15, y - 10, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - 12, y + 8, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    paintedRef.current++;
    if (paintedRef.current === 3) setHintVisible(false);
  };

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;
    if (clientX === undefined || clientY === undefined) return null;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const pos = getPos(e);
    if (pos) scrubAt(pos.x, pos.y);
  };

  return (
    <section className="py-[140px] px-9 max-md:py-[90px] max-md:px-[22px] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-[60px] items-center">
        <Reveal className="relative">
          <span className="font-hand text-[38px] text-blush-deep leading-[.9] block mb-2 -rotate-2">
            go ahead — try it
          </span>
          <h2 className="font-display text-[clamp(56px,7vw,104px)] leading-[.96] tracking-tight text-ink">
            Drag to <em className="italic text-leaf">clean.</em>
          </h2>
          <p className="text-lg leading-relaxed text-ink-2 max-w-[440px] mt-[30px] mb-7">
            Yeah, it&apos;s just a webpage. But this is exactly how we feel about every shower, baseboard, and
            microwave we&apos;ve ever met. Reveal what&apos;s hiding underneath →
          </p>
          <small className="font-hand text-2xl text-leaf -rotate-1 inline-block">
            (don&apos;t worry, no one&apos;s watching)
          </small>
        </Reveal>

        <Reveal>
          <div
            ref={wrapRef}
            className="relative aspect-[1.05] bg-cream shadow-lg rounded-3xl overflow-hidden"
          >
            {/* Revealed content underneath */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-10 bg-gradient-to-br from-pale-leaf to-white">
              <span className="absolute text-gold text-2xl animate-twink top-[14%] left-[18%]">✦</span>
              <span className="absolute text-gold text-2xl animate-twink top-[24%] right-[18%] [animation-delay:.4s]">✧</span>
              <span className="absolute text-gold text-2xl animate-twink bottom-[18%] left-[22%] [animation-delay:.8s]">✦</span>
              <span className="absolute text-gold text-2xl animate-twink bottom-[14%] right-[14%] [animation-delay:1.2s]">✧</span>
              <div className="font-display text-[clamp(56px,8vw,112px)] text-forest leading-[.9] mb-3.5">Sparkling.</div>
              <div className="font-hand text-[32px] text-blush-deep">— exactly how we leave it.</div>
            </div>

            {/* Canvas overlay */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full touch-none"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
              onTouchStart={handleMove}
            />

            {/* Hint */}
            {hintVisible && (
              <div className="absolute left-1/2 bottom-6 -translate-x-1/2 font-hand text-2xl text-ink bg-sun px-[18px] py-1.5 rounded-full pointer-events-none flex items-center gap-2.5 z-[3] shadow-sm animate-bob">
                ✨ drag to clean
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
