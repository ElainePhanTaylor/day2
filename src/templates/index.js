// Template definitions for Instagram Post Generator
// Each template has: id, name, font, palettes, and a render function

export const templates = [
  {
    id: 'bold-quote',
    name: 'Bold Quote',
    font: 'Space Grotesk',
    fontWeight: 700,
    fontSize: 72,
    textAlign: 'center',
    palettes: [
      { name: 'Sunset', background: '#ff6b35', accent: '#f7c59f', text: '#ffffff' },
      { name: 'Ocean', background: '#1a535c', accent: '#4ecdc4', text: '#ffffff' },
      { name: 'Berry', background: '#7b2d8e', accent: '#f72585', text: '#ffffff' },
    ],
    render: (ctx, text, palette) => {
      const size = 1080;
      
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, palette.background);
      gradient.addColorStop(1, palette.accent);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      
      // Decorative circles
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(size * 0.15, size * 0.2, 200, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(size * 0.85, size * 0.8, 250, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Text
      ctx.fillStyle = palette.text;
      ctx.font = `700 72px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Wrap text
      const lines = wrapText(ctx, text || 'Your inspiring\nquote here', size - 160);
      const lineHeight = 90;
      const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, size / 2, startY + i * lineHeight);
      });
    }
  },
  {
    id: 'minimal',
    name: 'Minimal',
    font: 'Inter',
    fontWeight: 400,
    fontSize: 48,
    textAlign: 'center',
    palettes: [
      { name: 'Clean', background: '#fafafa', accent: '#e0e0e0', text: '#1a1a1a' },
      { name: 'Dark', background: '#1a1a1a', accent: '#333333', text: '#ffffff' },
      { name: 'Cream', background: '#f5f0e8', accent: '#d4c5b0', text: '#3d3d3d' },
    ],
    render: (ctx, text, palette) => {
      const size = 1080;
      
      // Solid background
      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, size, size);
      
      // Subtle line accent
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(size * 0.3, size * 0.35);
      ctx.lineTo(size * 0.7, size * 0.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(size * 0.3, size * 0.65);
      ctx.lineTo(size * 0.7, size * 0.65);
      ctx.stroke();
      
      // Text
      ctx.fillStyle = palette.text;
      ctx.font = `400 48px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const lines = wrapText(ctx, text || 'Simple.\nElegant.\nMinimal.', size - 200);
      const lineHeight = 70;
      const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, size / 2, startY + i * lineHeight);
      });
    }
  },
  {
    id: 'announce',
    name: 'Announcement',
    font: 'Space Grotesk',
    fontWeight: 700,
    fontSize: 64,
    textAlign: 'center',
    palettes: [
      { name: 'Electric', background: '#000000', accent: '#00ff88', text: '#ffffff' },
      { name: 'Hot', background: '#1a0a0a', accent: '#ff3366', text: '#ffffff' },
      { name: 'Royal', background: '#0a0a1a', accent: '#6366f1', text: '#ffffff' },
    ],
    render: (ctx, text, palette) => {
      const size = 1080;
      
      // Dark background
      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, size, size);
      
      // Accent bar at top
      ctx.fillStyle = palette.accent;
      ctx.fillRect(0, 0, size, 120);
      
      // Accent bar at bottom
      ctx.fillRect(0, size - 120, size, 120);
      
      // Geometric shapes
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = palette.accent;
      ctx.fillRect(size - 200, 200, 150, 150);
      ctx.fillRect(50, size - 350, 100, 100);
      ctx.globalAlpha = 1;
      
      // Main text
      ctx.fillStyle = palette.text;
      ctx.font = `700 64px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const lines = wrapText(ctx, text || 'BIG NEWS\nCOMING SOON', size - 160);
      const lineHeight = 85;
      const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, size / 2, startY + i * lineHeight);
      });
    }
  },
  {
    id: 'split',
    name: 'Split Layout',
    font: 'Inter',
    fontWeight: 600,
    fontSize: 52,
    textAlign: 'left',
    palettes: [
      { name: 'Contrast', background: '#f72585', accent: '#ffffff', text: '#1a1a1a' },
      { name: 'Earth', background: '#606c38', accent: '#fefae0', text: '#283618' },
      { name: 'Mono', background: '#333333', accent: '#f5f5f5', text: '#1a1a1a' },
    ],
    render: (ctx, text, palette) => {
      const size = 1080;
      
      // Left color block (40%)
      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, size * 0.4, size);
      
      // Right side
      ctx.fillStyle = palette.accent;
      ctx.fillRect(size * 0.4, 0, size * 0.6, size);
      
      // Text on right side
      ctx.fillStyle = palette.text;
      ctx.font = `600 52px "Inter", sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      
      const lines = wrapText(ctx, text || 'Your message\ngoes here\nwith style', size * 0.5 - 80);
      const lineHeight = 75;
      const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, size * 0.45 + 40, startY + i * lineHeight);
      });
    }
  },
  {
    id: 'frame',
    name: 'Framed',
    font: 'Playfair Display',
    fontWeight: 700,
    fontSize: 56,
    textAlign: 'center',
    palettes: [
      { name: 'Gold', background: '#1a1a1a', accent: '#d4af37', text: '#ffffff' },
      { name: 'Rose', background: '#2d1f1f', accent: '#e8b4b8', text: '#ffffff' },
      { name: 'Silver', background: '#1a1a2e', accent: '#c0c0c0', text: '#ffffff' },
    ],
    render: (ctx, text, palette) => {
      const size = 1080;
      
      // Background
      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, size, size);
      
      // Decorative frame
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 4;
      
      // Outer frame
      ctx.strokeRect(60, 60, size - 120, size - 120);
      
      // Inner frame
      ctx.strokeRect(100, 100, size - 200, size - 200);
      
      // Corner decorations
      const cornerSize = 30;
      const corners = [
        [80, 80], [size - 80, 80], [80, size - 80], [size - 80, size - 80]
      ];
      
      ctx.fillStyle = palette.accent;
      corners.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Text
      ctx.fillStyle = palette.text;
      ctx.font = `700 56px "Playfair Display", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const lines = wrapText(ctx, text || 'Elegance\nin every\ndetail', size - 280);
      const lineHeight = 80;
      const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, size / 2, startY + i * lineHeight);
      });
    }
  },
  {
    id: 'modern-serif',
    name: 'Modern Serif',
    font: 'Playfair Display',
    fontWeight: 400,
    fontSize: 60,
    textAlign: 'center',
    palettes: [
      { name: 'Sage', background: '#e8efe5', accent: '#7d8c75', text: '#2d3a2d' },
      { name: 'Blush', background: '#fdf2f0', accent: '#d4a5a5', text: '#4a3c3c' },
      { name: 'Stone', background: '#e8e4df', accent: '#9a8c7f', text: '#3d3632' },
    ],
    render: (ctx, text, palette) => {
      const size = 1080;
      
      // Soft background
      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, size, size);
      
      // Accent shape - abstract blob
      ctx.fillStyle = palette.accent;
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.ellipse(size * 0.7, size * 0.3, 250, 180, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(size * 0.25, size * 0.75, 200, 150, -Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Decorative line
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(size * 0.35, size * 0.42);
      ctx.lineTo(size * 0.65, size * 0.42);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(size * 0.35, size * 0.58);
      ctx.lineTo(size * 0.65, size * 0.58);
      ctx.stroke();
      
      // Text
      ctx.fillStyle = palette.text;
      ctx.font = `400 italic 60px "Playfair Display", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const lines = wrapText(ctx, text || 'Beautiful\nthings await', size - 200);
      const lineHeight = 85;
      const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, size / 2, startY + i * lineHeight);
      });
    }
  }
];

// Helper function to wrap text into lines
function wrapText(ctx, text, maxWidth) {
  // First split by explicit newlines
  const paragraphs = text.split('\n');
  const allLines = [];
  
  paragraphs.forEach(paragraph => {
    const words = paragraph.split(' ');
    let currentLine = '';
    
    words.forEach(word => {
      const testLine = currentLine ? currentLine + ' ' + word : word;
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && currentLine) {
        allLines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    
    if (currentLine) {
      allLines.push(currentLine);
    }
  });
  
  return allLines;
}

export default templates;

