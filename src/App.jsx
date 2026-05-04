import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Heart, 
  Cake, 
  Baby, 
  Users, 
  Briefcase,
  X
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const CATEGORIES = [
  { name: 'Wesela', icon: <Heart className="w-6 h-6" /> },
  { name: 'Urodziny', icon: <Cake className="w-6 h-6" /> },
  { name: 'Chrzciny', icon: <Baby className="w-6 h-6" /> },
  { name: 'Komunie', icon: <Users className="w-6 h-6" /> },
  { name: 'Spotkania biznesowe', icon: <Briefcase className="w-6 h-6" /> },
];

const IMAGES = [
  "https://iili.io/BQA8IR9.md.jpg",
  "https://iili.io/BQA8oSS.md.jpg",
  "https://iili.io/BQA8qP4.md.jpg",
  "https://iili.io/BQA8clV.md.jpg",
  "https://iili.io/BQA8ER1.md.jpg",
  "https://iili.io/BQA8MDg.md.jpg",
  "https://iili.io/BQA8hiv.md.jpg",
  "https://iili.io/BQA8sg2.md.jpg",
  "https://iili.io/BQASHqx.md.jpg"
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div 
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="columns-1 md:columns-2 lg:columns-3 gap-6 p-6 space-y-6"
    >
      {IMAGES.map((src, index) => (
        <motion.div
          key={index}
          variants={FADE_UP}
          whileHover={{ scale: 1.015, y: -5 }}
          whileTap={{ scale: 0.985 }}
          className="break-inside-avoid mb-6 cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-accent-gold/15 bg-white ring-1 ring-accent-gold/5 transition-shadow hover:shadow-2xl"
          onClick={() => setSelectedImage(src)}
          id={`gallery-item-${index}`}
        >
          <img 
            src={src} 
            alt={`Sala Szafir ${index + 1}`} 
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-full max-h-full"
            >
              <button 
                className="absolute -top-12 right-0 text-white p-2 hover:bg-white/10 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-warm-bg font-serif text-ink overflow-x-hidden" id="main-container">
      {/* Navigation / Header */}
      <nav className="max-w-7xl mx-auto px-4 py-8 border-b border-accent-gold/30 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-accent-blue">
            Sala Bankietowa <span className="italic font-semibold">Szafir</span>
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-gold mt-2 font-sans font-medium">
            Miejsce Twoich Wyjątkowych Wspomnień
          </p>
        </motion.div>
        <motion.div 
          className="hidden md:flex gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a 
            href="#kontakt" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2.5 bg-accent-blue text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all font-sans shadow-lg shadow-accent-blue/20"
          >
            Rezerwacja
          </motion.a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES[0]} 
            alt="Sala Szafir Hero" 
            className="w-full h-full object-cover brightness-[0.7] sepia-[0.1]"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-4 bg-white/5 backdrop-blur-xl p-16 rounded-[4rem] border border-white/20 shadow-2xl"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-4xl md:text-7xl font-light text-white mb-8 drop-shadow-2xl"
          >
            Elegancja w <span className="italic underline decoration-accent-gold/30 underline-offset-8">Każdym Calu</span>
          </motion.h2>
          <div className="flex gap-4 justify-center">
            <motion.a 
              href="#oferta" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 30px -10px rgb(0 0 0 / 0.3)" }}
              className="px-12 py-5 bg-white text-accent-blue rounded-full font-medium hover:bg-warm-bg transition-all shadow-2xl font-sans text-xl"
              id="cta-offer"
            >
              Nasza Oferta
            </motion.a>
          </div>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-24" id="oferta">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={FADE_UP}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="h-[1px] flex-1 bg-accent-gold/30"></div>
            <div className="text-center px-6">
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted-gold font-bold mb-3 font-sans">Oferta</h2>
              <h3 className="text-5xl font-light text-accent-blue italic">Organizujemy</h3>
            </div>
            <div className="h-[1px] flex-1 bg-accent-gold/30"></div>
          </motion.div>
          
          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-12"
          >
            {CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i}
                variants={FADE_UP}
                className="flex flex-col items-center text-center group"
                id={`service-${cat.name.toLowerCase()}`}
              >
                <div className="w-16 h-16 rounded-full border border-accent-gold/20 flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white group-hover:border-accent-blue transition-all duration-500 shadow-inner overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-accent-blue/10 transform scale-0 group-hover:scale-100 transition-transform duration-500"
                  />
                  <div className="relative z-10">{cat.icon}</div>
                </div>
                <h4 className="text-xl font-medium text-ink group-hover:text-accent-blue transition-colors">{cat.name}</h4>
                <div className="w-0 h-[1px] bg-accent-gold mt-2 group-hover:w-12 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 border-y border-accent-gold/20 bg-white/30" id="galeria">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-gold font-bold mb-2 font-sans">Inspiracje</h2>
            <h3 className="text-4xl font-light text-accent-blue">Sala Szafir</h3>
          </motion.div>
          <ImageGallery />
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-32" id="kontakt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
            <motion.div 
              variants={STAGGER_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="contact-info" 
              className="flex flex-col justify-between"
            >
              <div>
                <motion.h2 
                  variants={FADE_UP}
                  className="text-sm uppercase tracking-[0.3em] text-muted-gold font-bold mb-4 font-sans italic border-l-4 border-accent-blue pl-4"
                >
                  Kontakt
                </motion.h2>
                <motion.h3 
                  variants={FADE_UP}
                  className="text-5xl md:text-6xl font-light text-accent-blue mb-16 leading-tight"
                >
                  Zapraszamy do Świata Szafiru
                </motion.h3>
                
                <div className="space-y-12">
                  <motion.div 
                    variants={FADE_UP}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center border border-accent-gold/40 rounded-full text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-700 shadow-inner">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-gold uppercase tracking-widest mb-1 font-sans font-bold">Telefon</p>
                      <a href="tel:663174777" className="text-2xl md:text-3xl font-light hover:text-accent-gold transition-colors tracking-tight">663 174 777</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={FADE_UP}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center border border-accent-gold/40 rounded-full text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-700 shadow-inner">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-gold uppercase tracking-widest mb-1 font-sans font-bold">E-mail</p>
                      <a href="mailto:salabankietowaszafir@gmail.com" className="text-xl md:text-3xl font-light hover:text-accent-gold transition-colors tracking-tight break-all">salabankietowaszafir@gmail.com</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={FADE_UP}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center border border-accent-gold/40 rounded-full text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-700 shadow-inner">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-gold uppercase tracking-widest mb-1 font-sans font-bold">Lokalizacja</p>
                      <p className="text-2xl md:text-3xl font-light tracking-tight italic">Kłucko Kolonia 41, 26-212 Kłucko</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div variants={FADE_UP} className="mt-20 flex flex-wrap gap-6">
                <motion.a 
                  href="https://www.facebook.com/profile.php?id=61574501228218" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="px-10 py-4 bg-[#0f3460] text-white rounded-full flex items-center gap-4 hover:shadow-2xl transition-all shadow-lg font-sans text-sm tracking-wider font-semibold"
                  id="fb-link"
                >
                  <Facebook className="w-5 h-5" /> Facebook
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/salabankietowa_szafir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="px-10 py-4 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white rounded-full flex items-center gap-4 hover:shadow-2xl transition-all shadow-lg font-sans text-sm tracking-wider font-semibold"
                  id="ig-link"
                >
                  <Instagram className="w-5 h-5" /> Instagram
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative group" 
              id="map-container"
            >
              <div className="absolute -inset-4 border border-accent-gold/20 rounded-[2.5rem] pointer-events-none group-hover:border-accent-gold/40 transition-colors"></div>
              <div className="w-full h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.548961605996!2d20.353692912812804!3d51.02448097158954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719d3ba3539412b%3A0x7b53e61fc8ba6f94!2sK%C5%82ucko-Kolonia%2041%2C%2026-212%20K%C5%82ucko!5e0!3m2!1spl!2spl!4v1776889515772!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  id="google-map"
                  className="min-h-[450px]"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-accent-gold/20 text-center">
        <p className="text-muted-gold text-xs uppercase tracking-[0.3em] font-sans">
          Zapraszamy do rezerwacji terminów na rok 2026 i 2027
        </p>
        <p className="mt-4 text-ink/40 text-[10px] uppercase font-sans">
          © {new Date().getFullYear()} Sala Bankietowa Szafir
        </p>
      </footer>
    </div>
  );
}

