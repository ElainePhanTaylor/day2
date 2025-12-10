import { useState, useRef, useEffect } from 'react';
import Canvas from './Canvas';
import { generateLotteryNumbers } from '../templates';

function Editor({ template, onBack }) {
  const [text, setText] = useState('');
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [lotteryNumbers, setLotteryNumbers] = useState(() => generateLotteryNumbers());
  const canvasRef = useRef(null);
  
  const isLottery = template.isLottery;
  
  // Load fonts on mount
  useEffect(() => {
    loadFonts();
  }, []);
  
  const handleGenerateNumbers = () => {
    setLotteryNumbers(generateLotteryNumbers());
  };
  
  const handleDownload = async () => {
    if (!canvasRef.current) return;
    
    setIsDownloading(true);
    
    try {
      // Small delay to ensure canvas is fully rendered
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const dataURL = canvasRef.current.getDataURL();
      
      if (dataURL) {
        // Generate filename with timestamp
        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `insta-post-${timestamp}.png`;
        
        // Create download link
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataURL;
        
        // Handle mobile browsers
        if (isMobile()) {
          // For mobile, try to open in new tab for long-press save
          // or trigger download directly
          link.target = '_blank';
        }
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 2000);
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };
  
  const displayText = text || getPlaceholderText(template);
  
  return (
    <div className="editor">
      <header className="editor-header">
        <button className="back-button" onClick={onBack} aria-label="Back to templates">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h2 className="editor-title">{template.name}</h2>
      </header>
      
      <main className="editor-main">
        <Canvas 
          ref={canvasRef}
          template={template}
          text={displayText}
          paletteIndex={paletteIndex}
          lotteryNumbers={isLottery ? lotteryNumbers : null}
        />
        
        <div className="controls">
          {isLottery && (
            <div className="control-group">
              <span className="control-label">Lucky Numbers</span>
              <div className="lottery-display">
                {lotteryNumbers.map((num, i) => (
                  <span key={i} className="lottery-ball">{num}</span>
                ))}
              </div>
              <button className="generate-button" onClick={handleGenerateNumbers}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 4v6h-6M1 20v-6h6"/>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
                Generate New Numbers
              </button>
            </div>
          )}
          
          <div className="control-group">
            <label htmlFor="text-input" className="control-label">
              {isLottery ? 'Title Text' : 'Your Text'}
            </label>
            <textarea
              id="text-input"
              className="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={getPlaceholderText(template)}
              rows={isLottery ? 1 : 3}
            />
          </div>
          
          <div className="control-group">
            <span className="control-label">Color Palette</span>
            <div className="palette-options">
              {template.palettes.map((palette, index) => (
                <button
                  key={palette.name}
                  className={`palette-button ${index === paletteIndex ? 'active' : ''}`}
                  onClick={() => setPaletteIndex(index)}
                  aria-label={`Select ${palette.name} palette`}
                  style={{
                    '--palette-bg': palette.background,
                    '--palette-accent': palette.accent,
                  }}
                >
                  <span className="palette-swatch">
                    <span className="swatch-bg" />
                    <span className="swatch-accent" />
                  </span>
                  <span className="palette-name">{palette.name}</span>
                  {index === paletteIndex && (
                    <span className="palette-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="editor-footer">
        <button 
          className={`download-button ${isDownloading ? 'loading' : ''} ${downloadSuccess ? 'success' : ''}`}
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <span className="spinner" />
              Creating...
            </>
          ) : downloadSuccess ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Downloaded!
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Post
            </>
          )}
        </button>
      </footer>
    </div>
  );
}

// Placeholder text based on template
function getPlaceholderText(template) {
  const placeholders = {
    'bold-quote': 'Your inspiring\nquote here',
    'minimal': 'Simple.\nElegant.\nMinimal.',
    'announce': 'BIG NEWS\nCOMING SOON',
    'split': 'Your message\ngoes here\nwith style',
    'frame': 'Elegance\nin every\ndetail',
    'modern-serif': 'Beautiful\nthings await',
    'lottery': '🍀 LUCKY NUMBERS 🍀',
  };
  return placeholders[template.id] || 'Your text here';
}

// Font loader
async function loadFonts() {
  const fonts = [
    { family: 'Space Grotesk', weights: ['700'] },
    { family: 'Inter', weights: ['400', '600'] },
    { family: 'Playfair Display', weights: ['400', '700'] }
  ];
  
  const fontPromises = fonts.flatMap(font => 
    font.weights.map(weight => 
      document.fonts.load(`${weight} 48px "${font.family}"`)
    )
  );
  
  await Promise.all(fontPromises);
}

// Mobile detection
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default Editor;
