/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Camera, 
  MapPin, 
  History, 
  Info, 
  Maximize2, 
  ChevronRight, 
  ArrowLeft,
  Loader2,
  RefreshCw,
  Share2,
  Check
} from 'lucide-react';
import { BUILDINGS, Building } from './constants';
import { fetchOssExif, OssExifData } from './lib/oss';

export default function App() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle URL hash for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash) {
        const building = BUILDINGS.find(b => b.id === hash);
        if (building) {
          setSelectedBuilding(building);
        } else {
          setSelectedBuilding(null);
        }
      } else {
        setSelectedBuilding(null);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when building is selected
  useEffect(() => {
    if (selectedBuilding) {
      window.location.hash = `/${selectedBuilding.id}`;
    } else {
      // Only clear if there was a hash
      if (window.location.hash) {
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    }
  }, [selectedBuilding]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedBuilding]);

  if (!isLoaded) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-liao-ink">
        <Loader2 className="w-8 h-8 text-liao-gold animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-liao-ink text-gray-300 overflow-x-hidden selection:bg-liao-gold selection:text-liao-ink">
      <AnimatePresence mode="wait">
        {!selectedBuilding ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection />
            <BuildingGrid onSelect={setSelectedBuilding} />
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DetailPage building={selectedBuilding} onBack={() => setSelectedBuilding(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/hero.jpeg" 
          alt="Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl mb-6 leading-tight font-display">
            大遼遺珍
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-liao-gold/80 mb-12">
            八座木構的影像朝聖
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="flex justify-end items-end mb-2">
            <span className="text-2xl font-display text-liao-gold">7 / 8</span>
          </div>
          <div className="h-[1px] w-full bg-gray-800 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-liao-gold"
              initial={{ width: 0 }}
              animate={{ width: "87.5%" }}
              transition={{ delay: 1.5, duration: 2, ease: "circOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-liao-gold to-transparent" />
      </motion.div>
    </section>
  );
}

function BuildingGrid({ onSelect }: { onSelect: (b: Building) => void }) {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BUILDINGS.map((building, index) => (
          <BuildingCard 
            key={building.id} 
            building={building} 
            index={index} 
            onClick={() => onSelect(building)}
          />
        ))}
      </div>
    </section>
  );
}

const BuildingCard: React.FC<{ building: Building, index: number, onClick: () => void }> = ({ building, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-liao-black mb-4">
        {/* Blurred background on hover to fill the aspect ratio gap */}
        <img 
          src={building.imageUrl} 
          className="absolute inset-0 w-full h-full object-cover blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Default cropped view */}
        <img 
          src={building.imageUrl} 
          alt={building.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0 group-hover:scale-110 ${!building.isCaptured ? 'grayscale blur-sm opacity-50' : ''}`}
          referrerPolicy="no-referrer"
        />
        
        {/* Original proportion view on hover */}
        <img 
          src={building.imageUrl} 
          alt={building.name}
          className={`absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100 ${!building.isCaptured ? 'grayscale blur-sm opacity-50' : ''}`}
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {!building.isCaptured && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/80 bg-white/5 px-6 py-3 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl">
              On the Way
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xl group-hover:text-white transition-colors font-display">
          {building.name}
        </h3>
        <p className="text-xs text-gray-500 tracking-widest uppercase">
          {building.location} · {building.year}
        </p>
      </div>
    </motion.div>
  );
}

function DetailPage({ building, onBack }: { building: Building, onBack: () => void }) {
  const [exifData, setExifData] = useState<OssExifData | null>(null);
  const [loadingExif, setLoadingExif] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `大遼遺珍 - ${building.name}`,
      text: `探索辽代建筑之美：${building.name} (${building.year})`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  useEffect(() => {
    if (building.imageUrl && building.isCaptured) {
      setLoadingExif(true);
      fetchOssExif(building.imageUrl).then(data => {
        if (data) {
          setExifData(data);
        }
        setLoadingExif(false);
      });
    } else {
      setExifData(null);
    }
  }, [building]);

  const displayExif = exifData || building.exif;

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div 
      className="relative min-h-screen pb-32 bg-liao-ink" 
      ref={scrollRef}
    >
      {/* Top Bar (Back & Share) */}
      <div className="fixed top-8 left-8 right-8 z-50 flex justify-between items-center pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center justify-center text-liao-gold/40 hover:text-liao-gold transition-colors group bg-black/10 backdrop-blur-sm w-10 h-10 rounded-full border border-white/5"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={handleShare}
          className="pointer-events-auto flex items-center justify-center text-liao-gold/40 hover:text-liao-gold transition-colors group bg-black/10 backdrop-blur-sm w-10 h-10 rounded-full border border-white/5"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {/* Hero Image Section */}
      <section className="h-screen w-full relative overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="w-full h-full"
        >
          <img 
            src={building.imageUrl} 
            alt={building.name}
            className={`w-full h-full object-cover ${!building.isCaptured ? 'grayscale blur-md' : ''}`}
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-liao-ink" />
        
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-20 left-8 md:left-20 max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h2 className="text-5xl md:text-8xl mb-6 leading-tight font-display">
              {building.name}
            </h2>
            <div className="flex flex-wrap items-center gap-6 text-liao-gold/80">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const query = `${building.location} ${building.name}`;
                  window.open(`https://www.amap.com/search?query=${encodeURIComponent(query)}`, '_blank');
                }}
                className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4" /> {building.location}
              </button>
              <span className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase">
                <History className="w-4 h-4" /> {building.year}
              </span>
              <span className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase">
                <Info className="w-4 h-4" /> {building.status}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-8 mt-32 space-y-48" onClick={(e) => e.stopPropagation()}>
        {/* Archive & Description */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="md:col-span-2 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xs uppercase tracking-[0.5em] text-liao-gold flex items-center gap-3">
                <span className="w-8 h-[1px] bg-liao-gold/30" /> 建筑档案
              </h4>
              <div className="prose prose-invert prose-liao max-w-none">
                <ReactMarkdown 
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: ({ children }) => <p className="text-xl md:text-2xl leading-relaxed text-gray-100 font-light italic font-display mb-6">{children}</p>,
                    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-display text-liao-gold mb-8 mt-12">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-display text-liao-gold mb-6 mt-10">{children}</h2>,
                    li: ({ children }) => <li className="text-lg md:text-xl text-gray-300 font-light mb-2 list-disc ml-6">{children}</li>,
                    ul: ({ children }) => <ul className="mb-8">{children}</ul>,
                    small: ({ children }) => (
                      <div className="text-base md:text-lg text-gray-500 font-light mt-12 border-t border-white/5 pt-8 [&_li]:text-sm [&_li]:md:text-base [&_p]:text-base [&_p]:md:text-lg">
                        {children}
                      </div>
                    ),
                  }}
                >
                  {building.description || ''}
                </ReactMarkdown>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xs uppercase tracking-[0.5em] text-liao-gold flex items-center gap-3">
                <span className="w-8 h-[1px] bg-liao-gold/30" /> 摄影师手记
              </h4>
              <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
                {building.photographerNote}
              </p>
            </motion.div>
          </div>

          {/* EXIF Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-liao-black/40 border border-white/5 p-10 space-y-8 self-start backdrop-blur-md sticky top-32"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-liao-gold/60">EXIF 拍摄参数</h4>
              {loadingExif && <RefreshCw className="w-3 h-3 text-liao-gold/40 animate-spin" />}
            </div>
            <div className="space-y-6">
              <ExifItem label="相机" value={displayExif?.camera} />
              <ExifItem label="镜头" value={displayExif?.lens} />
              <ExifItem label="光圈" value={displayExif?.aperture} />
              <ExifItem label="快门" value={displayExif?.shutter} />
              <ExifItem label="ISO" value={displayExif?.iso} />
            </div>
          </motion.div>
        </section>

        {/* Cinematic Handscroll Gallery Section */}
        {building.isCaptured && (
          <section className="space-y-12">
            <h4 className="text-xs uppercase tracking-[0.5em] text-liao-gold flex items-center gap-3">
              <span className="w-8 h-[1px] bg-liao-gold/30" /> 影像细节
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main image always shown first */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(building.imageUrl)}
                className="group relative aspect-[4/3] overflow-hidden bg-liao-black cursor-zoom-in"
              >
                {/* Blurred background on hover */}
                <img 
                  src={building.imageUrl} 
                  className="absolute inset-0 w-full h-full object-cover blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Default cropped view */}
                <img 
                  src={building.imageUrl} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0 group-hover:scale-110" 
                  alt="Detail Main" 
                  referrerPolicy="no-referrer"
                />

                {/* Original proportion view on hover */}
                <img 
                  src={building.imageUrl} 
                  className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" 
                  alt="Detail Main Full" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Gallery images or placeholders */}
              {(building.gallery && building.gallery.length > 0) ? (
                building.gallery.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx + 1) * 0.1 }}
                    onClick={() => setSelectedImage(img)}
                    className="group relative aspect-[4/3] overflow-hidden bg-liao-black cursor-zoom-in"
                  >
                    {/* Blurred background on hover */}
                    <img 
                      src={img} 
                      className="absolute inset-0 w-full h-full object-cover blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Default cropped view */}
                    <img 
                      src={img} 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0 group-hover:scale-110" 
                      alt={`Detail ${idx + 1}`} 
                      referrerPolicy="no-referrer"
                    />

                    {/* Original proportion view on hover */}
                    <img 
                      src={img} 
                      className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" 
                      alt={`Detail ${idx + 1} Full`} 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setSelectedImage(`https://picsum.photos/seed/${building.id}-2/1200/900`)}
                  className="group relative aspect-[4/3] overflow-hidden bg-liao-black cursor-zoom-in"
                >
                  {/* Blurred background on hover */}
                  <img 
                    src={`https://picsum.photos/seed/${building.id}-2/1200/900`} 
                    className="absolute inset-0 w-full h-full object-cover blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Default cropped view */}
                  <img 
                    src={`https://picsum.photos/seed/${building.id}-2/1200/900`} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0 group-hover:scale-110 grayscale opacity-50" 
                    alt="Detail Placeholder" 
                    referrerPolicy="no-referrer"
                  />

                  {/* Original proportion view on hover */}
                  <img 
                    src={`https://picsum.photos/seed/${building.id}-2/1200/900`} 
                    className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100 grayscale opacity-50" 
                    alt="Detail Placeholder Full" 
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* Missing Chapter Special Copy */}
        {!building.isCaptured && (
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-32 border-t border-white/5 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl mb-12 font-display">
              缺席的篇章
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-400 italic font-light">
              “八缺其一，不仅是网站的遗憾，更是我心中的缺憾。佛宫寺释迦塔，那是世界现存最高、最古老的纯木构塔楼。它在风沙中屹立千年，那种脆弱而宏大的美，让我不敢轻易按下快门。我在等待一个完美的时机，或许是一场大雪，或许是一抹特定的斜阳。这个角落将一直留白，直到我与它相遇的那一天。”
            </p>
          </motion.section>
        )}

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl cursor-zoom-out p-4 md:p-12"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full Screen Preview"
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExifItem({ label, value }: { label: string, value?: string }) {
  return (
    <div className="flex justify-between items-end border-b border-white/5 pb-2">
      <span className="text-[10px] uppercase tracking-widest text-gray-600">{label}</span>
      <span className="text-sm font-light text-gray-300">{value || '-'}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 text-center">
      <p className="text-xs tracking-[0.5em] text-gray-600 uppercase mb-4">大遼遺珍 · 影像朝聖</p>
      <p className="text-[10px] text-gray-700">© 2026 专注中国古代建筑摄影</p>
    </footer>
  );
}
