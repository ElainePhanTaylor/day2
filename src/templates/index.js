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
  },
  {
    id: 'astrology',
    name: 'Cosmic Vibes',
    font: 'Playfair Display',
    fontWeight: 400,
    fontSize: 48,
    textAlign: 'center',
    isAstrology: true, // Special flag for astrology template
    palettes: [
      { name: 'Midnight', background: '#0f0f23', accent: '#c9b037', text: '#ffffff' },
      { name: 'Mystic', background: '#1a0a2e', accent: '#9d4edd', text: '#ffffff' },
      { name: 'Celestial', background: '#0a1628', accent: '#64b5f6', text: '#ffffff' },
    ],
    render: (ctx, text, palette, lotteryNumbers, astroData) => {
      const size = 1080;
      const data = astroData || getAstrologyData();
      const planet = data.closestPlanet;
      
      // Deep space gradient background
      const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size * 0.8);
      gradient.addColorStop(0, shadeColor(palette.background, 20));
      gradient.addColorStop(1, palette.background);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      
      // Stars background
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 100; i++) {
        ctx.globalAlpha = Math.random() * 0.8 + 0.2;
        const x = Math.random() * size;
        const y = Math.random() * size;
        const starSize = Math.random() * 2 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, starSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      
      // === CLOSEST PLANET SECTION (TOP) ===
      // Draw the closest planet
      const planetY = 200;
      const planetRadius = planet.key === 'saturn' ? 65 : 80;
      drawPlanet(ctx, size / 2, planetY, planetRadius, planet, palette);
      
      // Planet name and symbol
      ctx.fillStyle = palette.accent;
      ctx.font = `700 36px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${planet.symbol} ${planet.name.toUpperCase()} ${planet.symbol}`, size / 2, planetY + planetRadius + 50);
      
      // "Closest to Earth" label
      ctx.fillStyle = palette.text;
      ctx.font = `500 24px "Inter", sans-serif`;
      ctx.fillText('Closest Planet to Earth Right Now', size / 2, planetY + planetRadius + 90);
      
      // Distance info
      ctx.globalAlpha = 0.7;
      ctx.font = `400 20px "Inter", sans-serif`;
      ctx.fillText(`~${planet.currentDistance} million km away`, size / 2, planetY + planetRadius + 120);
      ctx.globalAlpha = 1;
      
      // Title text (user's custom text)
      ctx.fillStyle = palette.text;
      ctx.font = `400 italic 42px "Playfair Display", serif`;
      ctx.fillText(text || '✨ Daily Cosmic Energy ✨', size / 2, planetY + planetRadius + 175);
      
      // === MOON PHASE SECTION (MIDDLE) ===
      const moonY = size * 0.56;
      const moonRadius = 90;
      
      // Moon glow
      const glowGradient = ctx.createRadialGradient(size/2, moonY, moonRadius * 0.8, size/2, moonY, moonRadius * 1.8);
      glowGradient.addColorStop(0, `${palette.accent}30`);
      glowGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(size/2, moonY, moonRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw the moon based on phase
      drawMoon(ctx, size/2, moonY, moonRadius, data.phaseValue, palette);
      
      // Moon phase name
      ctx.fillStyle = palette.accent;
      ctx.font = `700 32px "Space Grotesk", sans-serif`;
      ctx.fillText(data.moonPhase, size / 2, moonY + moonRadius + 45);
      
      // Moon sign
      ctx.fillStyle = palette.text;
      ctx.font = `400 24px "Inter", sans-serif`;
      ctx.fillText(`Moon in ${data.moonSign}`, size / 2, moonY + moonRadius + 80);
      
      // === PLANETARY INFLUENCE BOX (BOTTOM) ===
      const boxY = size - 250;
      const boxHeight = 180;
      const boxPadding = 50;
      
      // Semi-transparent box
      ctx.fillStyle = `${palette.background}dd`;
      ctx.fillRect(boxPadding, boxY, size - boxPadding * 2, boxHeight);
      ctx.strokeStyle = planet.color1;
      ctx.lineWidth = 2;
      ctx.strokeRect(boxPadding, boxY, size - boxPadding * 2, boxHeight);
      
      // Planet influence header
      ctx.fillStyle = planet.color1;
      ctx.font = `600 22px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText(`${planet.symbol} ${planet.name.toUpperCase()} INFLUENCE`, boxPadding + 25, boxY + 35);
      
      // Influence description (wrapped)
      ctx.fillStyle = palette.text;
      ctx.font = `400 22px "Inter", sans-serif`;
      const descLines = wrapText(ctx, planet.influence, size - boxPadding * 2 - 50);
      descLines.forEach((line, i) => {
        ctx.fillText(line, boxPadding + 25, boxY + 75 + i * 30);
      });
      
      // Date and alignments row
      ctx.fillStyle = palette.text;
      ctx.globalAlpha = 0.7;
      ctx.font = `400 18px "Inter", sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText(`☉ ${data.sunSign}  •  ☿ ${data.mercuryStatus}  •  ${data.element}`, boxPadding + 25, boxY + boxHeight - 25);
      ctx.textAlign = 'right';
      ctx.fillText(data.date, size - boxPadding - 25, boxY + boxHeight - 25);
      ctx.globalAlpha = 1;
      
      ctx.textAlign = 'center';
    }
  },
  {
    id: 'trending',
    name: 'Trending Now',
    font: 'Space Grotesk',
    fontWeight: 700,
    fontSize: 36,
    textAlign: 'center',
    isTrending: true, // Special flag - no text input
    palettes: [
      { name: 'Viral', background: '#0f0f0f', accent: '#00d26a', text: '#ffffff' },
      { name: 'Tech', background: '#0a192f', accent: '#64ffda', text: '#ffffff' },
      { name: 'Bold', background: '#1a1a2e', accent: '#eab308', text: '#ffffff' },
    ],
    render: (ctx, text, palette, lotteryNumbers, astroData, trendingData) => {
      const size = 1080;
      const data = trendingData || { searches: ['Loading...'], powerWords: ['Trending'], timestamp: '', source: '' };
      
      // Dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, palette.background);
      gradient.addColorStop(1, shadeColor(palette.background, -10));
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      
      // Animated-style lines in background
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * 60);
        ctx.lineTo(size, i * 60 + 200);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      
      // Header section
      ctx.fillStyle = palette.accent;
      ctx.font = `700 28px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('📈 TRENDING NOW', size / 2, 70);
      
      // Timestamp
      ctx.fillStyle = palette.text;
      ctx.globalAlpha = 0.6;
      ctx.font = `400 20px "Inter", sans-serif`;
      ctx.fillText(data.source ? `${data.source} • Updated ${data.timestamp}` : '', size / 2, 110);
      ctx.globalAlpha = 1;
      
      // Decorative line
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(size * 0.15, 145);
      ctx.lineTo(size * 0.85, 145);
      ctx.stroke();
      
      // === TOP SEARCHES SECTION ===
      ctx.fillStyle = palette.text;
      ctx.font = `600 24px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText('🔥 TOP SEARCHES', 80, 200);
      
      // Search items
      const searches = data.searches || [];
      searches.forEach((search, i) => {
        const y = 260 + i * 85;
        
        // Number badge
        ctx.fillStyle = palette.accent;
        ctx.beginPath();
        ctx.roundRect(80, y - 25, 50, 50, 8);
        ctx.fill();
        
        ctx.fillStyle = palette.background;
        ctx.font = `700 28px "Space Grotesk", sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(`${i + 1}`, 105, y + 5);
        
        // Search text
        ctx.fillStyle = palette.text;
        ctx.font = `600 32px "Inter", sans-serif`;
        ctx.textAlign = 'left';
        const displayText = search.length > 28 ? search.substring(0, 28) + '...' : search;
        ctx.fillText(displayText, 150, y + 5);
        
        // Trend indicator
        ctx.fillStyle = palette.accent;
        ctx.font = `400 20px "Inter", sans-serif`;
        ctx.textAlign = 'right';
        ctx.fillText('trending ↗', size - 80, y + 5);
        ctx.textAlign = 'left';
      });
      
      // === POWER WORDS SECTION ===
      const wordsY = 720;
      ctx.fillStyle = palette.text;
      ctx.font = `600 24px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText('⚡ POWER WORDS', 80, wordsY);
      
      // Power word tags
      const powerWords = data.powerWords || [];
      let tagX = 80;
      const tagY = wordsY + 60;
      
      powerWords.forEach((word, i) => {
        ctx.font = `600 28px "Inter", sans-serif`;
        const metrics = ctx.measureText(word);
        const tagWidth = metrics.width + 40;
        
        // Wrap to next line if needed
        if (tagX + tagWidth > size - 80) {
          tagX = 80;
        }
        
        // Tag background
        ctx.fillStyle = `${palette.accent}30`;
        ctx.beginPath();
        ctx.roundRect(tagX, tagY + Math.floor(i / 4) * 60 - 18, tagWidth, 45, 22);
        ctx.fill();
        
        // Tag border
        ctx.strokeStyle = palette.accent;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Tag text
        ctx.fillStyle = palette.accent;
        ctx.textAlign = 'center';
        ctx.fillText(word, tagX + tagWidth / 2, tagY + Math.floor(i / 4) * 60 + 8);
        
        tagX += tagWidth + 15;
      });
      
      // Footer
      ctx.fillStyle = palette.text;
      ctx.globalAlpha = 0.5;
      ctx.font = `400 22px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('Stay ahead of the conversation', size / 2, size - 60);
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

// Calculate moon phase and astrological data
export function getAstrologyData(date = new Date()) {
  // Moon phase calculation (simplified lunation)
  const lunarCycle = 29.53059; // days
  const knownNewMoon = new Date('2024-01-11'); // Known new moon date
  const daysSinceNew = (date - knownNewMoon) / (1000 * 60 * 60 * 24);
  const lunarAge = ((daysSinceNew % lunarCycle) + lunarCycle) % lunarCycle;
  const phaseValue = lunarAge / lunarCycle; // 0 to 1
  
  // Determine moon phase name
  let moonPhase;
  if (phaseValue < 0.025 || phaseValue >= 0.975) {
    moonPhase = '🌑 New Moon';
  } else if (phaseValue < 0.225) {
    moonPhase = '🌒 Waxing Crescent';
  } else if (phaseValue < 0.275) {
    moonPhase = '🌓 First Quarter';
  } else if (phaseValue < 0.475) {
    moonPhase = '🌔 Waxing Gibbous';
  } else if (phaseValue < 0.525) {
    moonPhase = '🌕 Full Moon';
  } else if (phaseValue < 0.725) {
    moonPhase = '🌖 Waning Gibbous';
  } else if (phaseValue < 0.775) {
    moonPhase = '🌗 Last Quarter';
  } else {
    moonPhase = '🌘 Waning Crescent';
  }
  
  // Zodiac signs (simplified calculation based on moon's ~27.3 day cycle through zodiac)
  const zodiacSigns = [
    'Aries ♈', 'Taurus ♉', 'Gemini ♊', 'Cancer ♋', 
    'Leo ♌', 'Virgo ♍', 'Libra ♎', 'Scorpio ♏',
    'Sagittarius ♐', 'Capricorn ♑', 'Aquarius ♒', 'Pisces ♓'
  ];
  
  const elements = ['Fire 🔥', 'Earth 🌍', 'Air 💨', 'Water 💧'];
  const qualities = ['Cardinal', 'Fixed', 'Mutable'];
  
  // Moon sign (changes every ~2.5 days)
  const moonCycleDays = 27.3;
  const moonSignIndex = Math.floor(((daysSinceNew % moonCycleDays) / moonCycleDays) * 12) % 12;
  const moonSign = zodiacSigns[moonSignIndex];
  
  // Sun sign (based on date)
  const sunSignIndex = getSunSign(date);
  const sunSign = zodiacSigns[sunSignIndex];
  
  // Element and quality based on moon sign
  const element = elements[moonSignIndex % 4];
  const quality = qualities[moonSignIndex % 3];
  
  // Venus sign (simplified - moves through zodiac roughly monthly)
  const venusIndex = (sunSignIndex + Math.floor(date.getDate() / 10)) % 12;
  const venusSign = zodiacSigns[venusIndex];
  
  // Mercury retrograde check (simplified - happens ~3-4 times per year)
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const mercuryRetrograde = (dayOfYear % 88) < 21; // Rough approximation
  const mercuryStatus = mercuryRetrograde ? 'Retrograde ℞' : `in ${zodiacSigns[(sunSignIndex + 1) % 12]}`;
  
  // Format date
  const dateStr = date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  // Calculate closest planet to Earth
  const closestPlanet = getClosestPlanet(date);
  
  return {
    moonPhase,
    phaseValue,
    moonSign,
    sunSign,
    venusSign,
    mercuryStatus,
    element,
    quality,
    date: dateStr,
    closestPlanet
  };
}

// Calculate which planet is closest to Earth
function getClosestPlanet(date) {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const year = date.getFullYear();
  
  // Planetary orbital periods (in Earth days) and average distances
  // Using simplified calculations based on synodic periods
  const planets = {
    mercury: {
      name: 'Mercury',
      symbol: '☿',
      synodicPeriod: 116, // Days between closest approaches
      minDistance: 77, // Million km at closest
      maxDistance: 222,
      color1: '#8c8c8c',
      color2: '#5a5a5a',
      description: 'The swift messenger planet races between Earth and Sun, bringing heightened communication and mental clarity.',
      influence: 'Communication, intellect, and quick thinking are amplified.'
    },
    venus: {
      name: 'Venus',
      symbol: '♀',
      synodicPeriod: 584,
      minDistance: 38, // Closest planet to Earth at its nearest
      maxDistance: 261,
      color1: '#e6c35c',
      color2: '#c4a24a',
      description: 'The planet of love and beauty draws near, amplifying matters of the heart and artistic inspiration.',
      influence: 'Love, beauty, harmony, and creativity are heightened.'
    },
    mars: {
      name: 'Mars',
      symbol: '♂',
      synodicPeriod: 780,
      minDistance: 55,
      maxDistance: 401,
      color1: '#e07850',
      color2: '#a85a3c',
      description: 'The red warrior planet approaches, igniting passion, courage, and the drive to take action.',
      influence: 'Energy, ambition, courage, and determination surge.'
    },
    jupiter: {
      name: 'Jupiter',
      symbol: '♃',
      synodicPeriod: 399,
      minDistance: 588,
      maxDistance: 968,
      color1: '#d4a574',
      color2: '#c49464',
      description: 'The great benefic giant looms closer, expanding opportunities and bringing wisdom from afar.',
      influence: 'Luck, expansion, wisdom, and abundance flow freely.'
    },
    saturn: {
      name: 'Saturn',
      symbol: '♄',
      synodicPeriod: 378,
      minDistance: 1195,
      maxDistance: 1658,
      color1: '#c9b896',
      color2: '#a89878',
      hasRings: true,
      description: 'The ringed taskmaster draws near, demanding discipline and rewarding perseverance.',
      influence: 'Structure, responsibility, and karmic lessons are emphasized.'
    }
  };
  
  // Calculate approximate current distance for each planet
  // Using simplified sinusoidal model based on synodic period
  let closest = null;
  let minDist = Infinity;
  
  // Reference dates for planetary oppositions/conjunctions (approximate)
  const references = {
    mercury: new Date('2024-01-15'),
    venus: new Date('2024-06-04'),
    mars: new Date('2025-01-16'),
    jupiter: new Date('2024-12-07'),
    saturn: new Date('2024-09-08')
  };
  
  for (const [key, planet] of Object.entries(planets)) {
    const refDate = references[key];
    const daysSinceRef = (date - refDate) / (1000 * 60 * 60 * 24);
    const phase = (daysSinceRef % planet.synodicPeriod) / planet.synodicPeriod;
    
    // Distance varies sinusoidally between min and max
    const distRange = planet.maxDistance - planet.minDistance;
    const currentDist = planet.minDistance + (distRange / 2) * (1 - Math.cos(phase * 2 * Math.PI));
    
    if (currentDist < minDist) {
      minDist = currentDist;
      closest = {
        ...planet,
        key,
        currentDistance: Math.round(currentDist),
        phase
      };
    }
  }
  
  return closest;
}

// Get sun sign based on date
function getSunSign(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const signDates = [
    { sign: 9, start: [1, 20] },   // Capricorn until Jan 19
    { sign: 10, start: [1, 20] },  // Aquarius Jan 20
    { sign: 11, start: [2, 19] },  // Pisces Feb 19
    { sign: 0, start: [3, 21] },   // Aries Mar 21
    { sign: 1, start: [4, 20] },   // Taurus Apr 20
    { sign: 2, start: [5, 21] },   // Gemini May 21
    { sign: 3, start: [6, 21] },   // Cancer Jun 21
    { sign: 4, start: [7, 23] },   // Leo Jul 23
    { sign: 5, start: [8, 23] },   // Virgo Aug 23
    { sign: 6, start: [9, 23] },   // Libra Sep 23
    { sign: 7, start: [10, 23] },  // Scorpio Oct 23
    { sign: 8, start: [11, 22] },  // Sagittarius Nov 22
    { sign: 9, start: [12, 22] },  // Capricorn Dec 22
  ];
  
  for (let i = signDates.length - 1; i >= 0; i--) {
    const [startMonth, startDay] = signDates[i].start;
    if (month > startMonth || (month === startMonth && day >= startDay)) {
      return signDates[i].sign;
    }
  }
  return 9; // Capricorn (default for early January)
}

// Draw moon with phase
function drawMoon(ctx, x, y, radius, phaseValue, palette) {
  // Draw full moon base
  ctx.fillStyle = '#f4f4f4';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Add some crater texture
  ctx.fillStyle = '#e0e0e0';
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(x - radius * 0.3, y - radius * 0.2, radius * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + radius * 0.4, y + radius * 0.3, radius * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x - radius * 0.1, y + radius * 0.5, radius * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  
  // Draw shadow based on phase
  ctx.fillStyle = palette.background;
  
  if (phaseValue < 0.5) {
    // Waxing: shadow on left, shrinking
    const shadowWidth = radius * 2 * (0.5 - phaseValue) * 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI * 0.5, Math.PI * 1.5);
    ctx.ellipse(x, y, shadowWidth / 2, radius, 0, Math.PI * 1.5, Math.PI * 0.5);
    ctx.fill();
  } else {
    // Waning: shadow on right, growing
    const shadowWidth = radius * 2 * (phaseValue - 0.5) * 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI * 1.5, Math.PI * 0.5);
    ctx.ellipse(x, y, shadowWidth / 2, radius, 0, Math.PI * 0.5, Math.PI * 1.5);
    ctx.fill();
  }
  
  // Moon outline glow
  ctx.strokeStyle = palette.accent;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.arc(x, y, radius + 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

// Draw a planet
function drawPlanet(ctx, x, y, radius, planet, palette) {
  // Planet glow
  const glowGradient = ctx.createRadialGradient(x, y, radius * 0.8, x, y, radius * 1.8);
  glowGradient.addColorStop(0, `${planet.color1}60`);
  glowGradient.addColorStop(1, 'transparent');
  ctx.fillStyle = glowGradient;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.8, 0, Math.PI * 2);
  ctx.fill();
  
  // Planet body gradient
  const bodyGradient = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
  bodyGradient.addColorStop(0, shadeColor(planet.color1, 30));
  bodyGradient.addColorStop(0.5, planet.color1);
  bodyGradient.addColorStop(1, planet.color2);
  
  ctx.fillStyle = bodyGradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Planet-specific features
  if (planet.key === 'jupiter') {
    // Jupiter's bands
    ctx.strokeStyle = shadeColor(planet.color2, -20);
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.4;
    for (let i = -2; i <= 2; i++) {
      if (i === 0) continue;
      ctx.beginPath();
      ctx.ellipse(x, y + i * radius * 0.25, radius * 0.95, radius * 0.1, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    // Great Red Spot
    ctx.fillStyle = '#c45030';
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.ellipse(x + radius * 0.3, y + radius * 0.2, radius * 0.2, radius * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  } else if (planet.key === 'saturn') {
    // Saturn's rings
    ctx.strokeStyle = '#d4c4a8';
    ctx.lineWidth = 12;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 1.8, radius * 0.4, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#c4b498';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 1.5, radius * 0.33, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    // Redraw front of planet over rings
    ctx.fillStyle = bodyGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI);
    ctx.fill();
  } else if (planet.key === 'mars') {
    // Mars surface features
    ctx.fillStyle = shadeColor(planet.color2, -15);
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(x - radius * 0.2, y - radius * 0.1, radius * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + radius * 0.3, y + radius * 0.3, radius * 0.2, 0, Math.PI * 2);
    ctx.fill();
    // Polar cap
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.ellipse(x, y - radius * 0.85, radius * 0.3, radius * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  } else if (planet.key === 'venus') {
    // Venus cloud swirls
    ctx.strokeStyle = shadeColor(planet.color1, 20);
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(x - radius * 0.2, y, radius * 0.5, 0, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + radius * 0.3, y - radius * 0.2, radius * 0.4, Math.PI, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  } else if (planet.key === 'mercury') {
    // Mercury craters
    ctx.fillStyle = shadeColor(planet.color2, -20);
    ctx.globalAlpha = 0.4;
    const craters = [
      { x: -0.3, y: -0.2, r: 0.15 },
      { x: 0.2, y: 0.3, r: 0.2 },
      { x: -0.1, y: 0.4, r: 0.1 },
      { x: 0.35, y: -0.1, r: 0.12 },
    ];
    craters.forEach(c => {
      ctx.beginPath();
      ctx.arc(x + c.x * radius, y + c.y * radius, c.r * radius, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }
  
  // Subtle highlight
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.beginPath();
  ctx.ellipse(x - radius * 0.3, y - radius * 0.3, radius * 0.4, radius * 0.3, -Math.PI / 4, 0, Math.PI * 2);
  ctx.fill();
}

// Fetch trending data from Google Trends RSS
export async function fetchTrendingData() {
  try {
    // Google Trends Daily RSS via rss2json proxy (no API key needed)
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://trends.google.com/trending/rss?geo=US'
    );
    const data = await response.json();
    
    if (data.status === 'ok' && data.items) {
      const searches = data.items.slice(0, 5).map(item => item.title);
      return {
        searches,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        source: 'Google Trends'
      };
    }
  } catch (error) {
    console.log('Using fallback trending data');
  }
  
  // Fallback trending data if fetch fails
  return getFallbackTrending();
}

// Fallback trending data (curated)
function getFallbackTrending() {
  const trendingSets = [
    ['AI Technology', 'Climate Action', 'Wellness Tips', 'Side Hustles', 'Mindfulness'],
    ['Self Care', 'Crypto News', 'Fitness Goals', 'Remote Work', 'Mental Health'],
    ['Manifestation', 'Sustainability', 'Productivity', 'Entrepreneurship', 'Healing'],
  ];
  const randomSet = trendingSets[Math.floor(Math.random() * trendingSets.length)];
  
  return {
    searches: randomSet,
    timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    source: 'Trending Topics'
  };
}

// Power words that trend on social media
export function getPowerWords() {
  const wordCategories = {
    motivation: ['Manifest', 'Abundance', 'Growth', 'Transform', 'Elevate', 'Thrive'],
    energy: ['Radiant', 'Powerful', 'Unstoppable', 'Magnetic', 'Fierce', 'Bold'],
    wellness: ['Healing', 'Balance', 'Harmony', 'Mindful', 'Grounded', 'Centered'],
    success: ['Winning', 'Crushing', 'Dominating', 'Achieving', 'Building', 'Creating'],
  };
  
  // Pick random words from each category
  const selected = [];
  Object.values(wordCategories).forEach(words => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    selected.push(randomWord);
  });
  
  return selected;
}

export default templates;

