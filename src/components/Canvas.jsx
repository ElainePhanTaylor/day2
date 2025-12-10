import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const Canvas = forwardRef(({ template, text, paletteIndex }, ref) => {
  const canvasRef = useRef(null);
  const offscreenRef = useRef(null);
  
  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    getDataURL: () => {
      if (offscreenRef.current) {
        return offscreenRef.current.toDataURL('image/png');
      }
      return null;
    },
    getCanvas: () => offscreenRef.current
  }));
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Create offscreen canvas at full 1080x1080 resolution
    if (!offscreenRef.current) {
      offscreenRef.current = document.createElement('canvas');
      offscreenRef.current.width = 1080;
      offscreenRef.current.height = 1080;
    }
    
    const offscreen = offscreenRef.current;
    const offCtx = offscreen.getContext('2d');
    
    // Get current palette
    const palette = template.palettes[paletteIndex] || template.palettes[0];
    
    // Clear and render to offscreen at full resolution
    offCtx.clearRect(0, 0, 1080, 1080);
    offCtx.save();
    template.render(offCtx, text, palette);
    offCtx.restore();
    
    // Draw scaled version to display canvas
    const displaySize = canvas.width;
    ctx.clearRect(0, 0, displaySize, displaySize);
    ctx.drawImage(offscreen, 0, 0, displaySize, displaySize);
    
  }, [template, text, paletteIndex]);
  
  // Handle canvas sizing for display
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Get container width
      const container = canvas.parentElement;
      const maxSize = Math.min(container.clientWidth - 32, 500);
      
      // Set display size
      canvas.style.width = `${maxSize}px`;
      canvas.style.height = `${maxSize}px`;
      
      // Set actual canvas size (for crisp rendering)
      const dpr = window.devicePixelRatio || 1;
      canvas.width = maxSize * dpr;
      canvas.height = maxSize * dpr;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);
  
  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="preview-canvas" />
    </div>
  );
});

Canvas.displayName = 'Canvas';

export default Canvas;

