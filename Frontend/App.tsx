
import React, { useState, useEffect, useRef } from 'react';
import { Shield, MapPin, Bell, ChevronRight, Zap, Lock, EyeOff, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Header: React.FC = () => (
 <header className="sticky header-neon fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center relative overflow-hidden">

    <div className="flex items-center gap-2">
     
<img
  src="/safe.png"
  alt="SafeDecoy Logo"
  className="h-8 w-auto"
/>
</div>

    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      <a href="#features" className="hover:text-neonBlue transition-colors">Features</a>
      <a href="#about" className="hover:text-neonBlue transition-colors">Technology</a>
      <a href="#waitlist" className="hover:text-neonBlue transition-colors">Waitlist</a>
    </div>
    <button className=" neon-hover px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 hover:border-neonBlue transition-all">
      Limited Beta
    </button>
  </header>
);

const Hero: React.FC = () => (
  <section className="header-neon relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
    {/* Abstract Background Tech Lines */}
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-neonBlue/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-neonGreen/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center max-w-4xl"
    >
      <span className="inline-block px-4 py-1.5 rounded-full glass border border-neonBlue/20 text-neonBlue text-[10px] uppercase font-bold tracking-[0.2em] mb-6">
        The Future of Personal Security
      </span>
      <h1 className="font-heading text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
        A New Standard of <br />
        <span className="text-gradient">Protection.</span>
      </h1>
      <p className="text-lg md:text-2xl text-slate-400 mb-4 font-light max-w-2xl mx-auto">
        Disguised as a familiar device. Powered by cutting-edge security.
      </p>
      <p className="text-slate-500 mb-10 text-sm md:  text-base italic">
        Silent protection for moments that matter.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
       <a 
  href="#waitlist"
  className="neon-hover relative group px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex justify-center items-center text-center transition-all duration-300"
>
  <span className="relative z-10">Get Notified First – Join the List</span>
  <div className="absolute inset-0 bg-neonBlue opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>

   <a
  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="neon-hover px-8 py-4 glass border border-white/10 rounded-full text-white font-semibold flex items-center gap-2"
>
  View Teaser <ChevronRight className="w-4 h-4" />
</a>


      </div>
    </motion.div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
      <div className="w-0.5 h-12 bg-gradient-to-b from-transparent to-white rounded-full"></div>
    </div>
  </section>
);

const ProductTease: React.FC = () => (
  <section id="about" className="py-24 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          SafeDecoy: Where Security <br />
          <span className="text-neonBlue">Meets Innovation</span>
        </h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          Engineered for the elite, SafeDecoy reimagines the panic button. By mimicking the aesthetics of premium everyday accessories, it remains invisible to the eye while remaining instantly accessible to the touch. 
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-slate-300">
            <div className="w-6 h-6 rounded-full bg-neonBlue/10 flex items-center justify-center">
              <Zap className="w-3 h-3 text-neonBlue" />
            </div>
            Tactile Haptic Feedback Activation
          </li>
          <li className="flex items-center gap-3 text-slate-300">
            <div className="w-6 h-6 rounded-full bg-neonGreen/10 flex items-center justify-center">
              <Lock className="w-3 h-3 text-neonGreen" />
            </div>
            Military-Grade Encryption (E2EE)
          </li>
          <li className="flex items-center gap-3 text-slate-300">
            <div className="w-6 h-6 rounded-full bg-neonBlue/10 flex items-center justify-center">
              <EyeOff className="w-3 h-3 text-neonBlue" />
            </div>
            Discreet Deployment Architecture
          </li>
        </ul>
      </motion.div>

    <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="relative aspect-square flex items-center justify-center group"
>
  {/* BACKGROUND NEON ENERGY */}
  <div className="absolute inset-0 neon-halo rounded-full"></div>

  {/* PRODUCT CORE */}
  <motion.div
    className="relative w-72 h-72 glass rounded-[3rem] rotate-45 border-white/5 flex items-center justify-center shadow-2xl product-core"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.06, y: -12 }}
  >
    <div className="w-64 h-64 glass rounded-[2.5rem] flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-neonBlue/40 flex items-center justify-center shield-ring">
        <Shield className="w-16 h-16 text-neonBlue/60 shield-icon" />
      </div>
    </div>

    {/* CONTROLLED NEON ACCENTS */}
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-neonBlue/25 blur-xl rounded-full"></div>
    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neonGreen/20 blur-xl rounded-full"></div>
  </motion.div>
</motion.div>


    </div>
  </section>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Discreet Design",
      description: "Looks like an everyday object. Integrated seamlessly into your luxury lifestyle without drawing unwanted attention.",
      icon: <EyeOff className="w-6 h-6 text-neonBlue" />,
    },
    {
      title: "Real-Time Alerts",
      description: "Instantly notifies private security details, authorities, and trusted emergency contacts with a single, silent gesture.",
      icon: <Bell className="w-6 h-6 text-neonGreen" />,
    },
    {
      title: "Instant GPS Tracking",
      description: "High-precision triangulation provides accurate real-time location sharing even in low-signal environments.",
      icon: <MapPin className="w-6 h-6 text-neonBlue" />,
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-charcoal/50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Why SafeDecoy?</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Engineered to provide peace of mind without compromising on elegance or visibility.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.04 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        transition={{ duration: 0.35 }}
            className="neon-card group p-8 glass rounded-3xl border-white/5 hover:bg-white/[0.04]"

          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white font-heading">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a href="#waitlist" className="text-neonBlue font-bold tracking-widest text-xs uppercase hover:underline">
          Stay Informed – Get Early Access
        </a>
      </div>
    </section>
  );
};

const ComingSoon: React.FC = () => (
  <section className="py-24 px-6 text-center relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neonBlue to-transparent opacity-30 animate-pulse"></div>
    <div className="relative z-10">
      <h2 className="font-heading text-6xl md:text-9xl font-black text-white/5 mb-[-2rem] md:mb-[-4rem] select-none tracking-tighter">
        COMING SOON
      </h2>
      <h3 className="font-heading text-4xl md:text-6xl font-bold mb-6">Coming Soon</h3>
      <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto font-light">
        Currently in final testing and secure deployment protocols. <br />
        Launching to select regions in Q4.
      </p>
    </div>
  </section>
);

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  setLoading(true);

  try {
    const res = await fetch('http://localhost:5000/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (!res.ok) throw new Error('Failed to send email');

    setSubmitted(true);
  } catch (err) {
    console.error(err);
    alert('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="waitlist" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto glass p-10 md:p-16 rounded-[3rem] border-white/10 text-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-neonBlue/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neonGreen/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Get Early Access</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Join the priority list for exclusive product updates, launch availability, and limited-edition hardware drops.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="name@exclusive.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-neonBlue transition-all text-lg placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="neon-hover bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-neonBlue transition-all disabled:opacity-50 whitespace-nowrap"
                >
                  {loading ? 'Processing...' : 'Subscribe Now'}
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-neonBlue/10 border border-neonBlue/20 text-neonBlue font-bold"
              >
                Thank you. You've been added to the elite list.
              </motion.div>
            )}
          </AnimatePresence>
          
          <p className="mt-8 text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Strict Confidentiality Assured
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Gemini AI Component ---
const SecurityAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to the SafeDecoy Security Advisor. How can I assist your personal protection planning today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const askGemini = async (query: string) => {
    try {
      setIsTyping(true);
      // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: 'You are an elite personal security advisor for high-net-worth individuals interested in SafeDecoy. Be professional, concise, and futuristic. Focus on discreet protection and high-tech safety advice.',
          // Guideline: When using maxOutputTokens with Gemini 3/2.5 series, we must also specify a thinkingBudget.
          maxOutputTokens: 150,
          thinkingConfig: { thinkingBudget: 0 },
          temperature: 0.7,
        }
      });
      
      const botReply = response.text || "I'm currently optimizing my security protocols. Please try again in a moment.";
      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Secure connection interrupted. Please ensure your environment is stable." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    askGemini(userMsg);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[350px] h-[500px] glass rounded-3xl mb-4 flex flex-col overflow-hidden border-white/10 shadow-2xl"
          >
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neonGreen animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Security Advisor</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                <EyeOff size={16} />
              </button>
            </div>
            
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-neonBlue text-black font-medium' : 'bg-white/5 border border-white/10 text-slate-300'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-500 italic flex items-center gap-2">
                    Analyzing protocols <span className="flex gap-1"><span className="animate-bounce">.</span><span className="animate-bounce delay-75">.</span><span className="animate-bounce delay-150">.</span></span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire about safety..."
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-neonBlue transition-all"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-neonBlue hover:text-white transition-colors">
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-neonBlue to-neonGreen flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 neon-glow-blue"
      >
        {isOpen ? <EyeOff className="text-black" /> : <Lock className="text-black" />}
      </button>
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="py-12 px-6 border-t border-white/5 bg-charcoal">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-neonBlue to-neonGreen flex items-center justify-center p-1">
          <Shield size={12} className="text-black" />
        </div>
        <span className="font-heading font-bold tracking-tighter text-slate-300">SafeDecoy</span>
      </div>
      
      <div className="text-slate-500 text-xs tracking-widest uppercase font-medium">
        © {new Date().getFullYear()} SafeDecoy Technologies. All Rights Reserved.
      </div>
      
      <div className="flex gap-6">
        <a href="mailto:concierge@safedecoy.com" className="text-slate-400 hover:text-neonBlue transition-colors text-sm">
          concierge@safedecoy.com
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 h-[1px] bg-gradient-to-r from-transparent via-neonBlue/20 to-transparent"></div>
  </footer>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <ProductTease />
        <Features />
        <ComingSoon />
        <WaitlistForm />
      </main>
      <Footer />
      <SecurityAssistant />
    </div>
  );
};

export default App;
