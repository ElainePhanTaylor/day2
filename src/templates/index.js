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
  },
  {
    id: 'lottery',
    name: 'Lucky Numbers',
    font: 'Space Grotesk',
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    isLottery: true, // Special flag for lottery template
    palettes: [
      { name: 'Jackpot', background: '#1a1a2e', accent: '#ffd700', text: '#ffffff' },
      { name: 'Lucky', background: '#0d4d0d', accent: '#00ff00', text: '#ffffff' },
      { name: 'Fortune', background: '#4a0d0d', accent: '#ff4444', text: '#ffffff' },
    ],
    render: (ctx, text, palette, lotteryNumbers) => {
      const size = 1080;
      
      // Dark gradient background
      const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size * 0.7);
      gradient.addColorStop(0, palette.background);
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      
      // Sparkle effects
      ctx.fillStyle = palette.accent;
      for (let i = 0; i < 30; i++) {
        ctx.globalAlpha = Math.random() * 0.5 + 0.2;
        const x = Math.random() * size;
        const y = Math.random() * size;
        const starSize = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(x, y, starSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      
      // Title
      ctx.fillStyle = palette.accent;
      ctx.font = `700 56px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text || '🍀 LUCKY NUMBERS 🍀', size / 2, 180);
      
      // Decorative line under title
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(size * 0.25, 240);
      ctx.lineTo(size * 0.75, 240);
      ctx.stroke();
      
      // Draw lottery balls
      const numbers = lotteryNumbers || generateLotteryNumbers();
      const ballRadius = 75;
      const ballY = size / 2 + 40;
      const totalWidth = (numbers.length - 1) * (ballRadius * 2 + 20);
      const startX = (size - totalWidth) / 2;
      
      numbers.forEach((num, i) => {
        const x = startX + i * (ballRadius * 2 + 20);
        
        // Ball shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.arc(x + 5, ballY + 5, ballRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Ball gradient
        const ballGradient = ctx.createRadialGradient(x - 20, ballY - 20, 0, x, ballY, ballRadius);
        ballGradient.addColorStop(0, '#ffffff');
        ballGradient.addColorStop(0.3, palette.accent);
        ballGradient.addColorStop(1, shadeColor(palette.accent, -30));
        ctx.fillStyle = ballGradient;
        ctx.beginPath();
        ctx.arc(x, ballY, ballRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Ball outline
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Number
        ctx.fillStyle = '#000000';
        ctx.font = `700 64px "Space Grotesk", sans-serif`;
        ctx.fillText(num.toString().padStart(2, '0'), x, ballY + 5);
      });
      
      // Powerball / Bonus (last number, different style)
      const bonusY = ballY + 200;
      ctx.fillStyle = palette.text;
      ctx.font = `500 32px "Space Grotesk", sans-serif`;
      ctx.fillText('BONUS NUMBER', size / 2, bonusY - 60);
      
      const bonusNum = Math.floor(Math.random() * 26) + 1;
      
      // Bonus ball
      const bonusGradient = ctx.createRadialGradient(size/2 - 15, bonusY - 15, 0, size/2, bonusY, 55);
      bonusGradient.addColorStop(0, '#ffffff');
      bonusGradient.addColorStop(0.3, '#ff0000');
      bonusGradient.addColorStop(1, '#990000');
      ctx.fillStyle = bonusGradient;
      ctx.beginPath();
      ctx.arc(size / 2, bonusY, 55, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = `700 48px "Space Grotesk", sans-serif`;
      ctx.fillText(bonusNum.toString().padStart(2, '0'), size / 2, bonusY + 5);
      
      // Footer
      ctx.fillStyle = palette.text;
      ctx.globalAlpha = 0.6;
      ctx.font = `400 28px "Inter", sans-serif`;
      ctx.fillText('Good luck! 🎰', size / 2, size - 80);
      ctx.globalAlpha = 1;
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

// Generate random lottery numbers (5 unique numbers from 1-69)
export function generateLotteryNumbers() {
  const numbers = [];
  while (numbers.length < 5) {
    const num = Math.floor(Math.random() * 69) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}

// Helper to darken/lighten a color
function shadeColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}

export default templates;

