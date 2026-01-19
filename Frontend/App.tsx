import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Shield, Bell, MapPin, Send, Zap, EyeOff, Radio, Lock, } from 'lucide-react';

// --- Utility: Scroll Reveal Hook ---
const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// 1. Header Component
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-orange-900/40' : 'bg-transparent'}`}>
      {/* Top Banner */}
      <div className="flex justify-center border-b border-orange-900/20 py-2 bg-zinc-950/90 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-600/10 to-transparent animate-pulse" />
        <div className="flex items-center gap-3 px-6 py-1 border border-orange-600/30 bg-black/60 relative z-20">
          <Zap className="w-3 h-3 text-orange-500 animate-pulse fill-orange-500" />
          <span className="text-[8px] md:text-[10px] font-black tracking-[0.5em] text-white uppercase opacity-80">
            Shield Activation Ready
          </span>
        </div>
      </div>
      
      {/* Centered Logo Navbar */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-3 items-center py-4 md:py-6">
        {/* Left Side: Empty or Mobile Trigger Placeholder */}
        <div className="flex items-center">
         
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center gap-4 group cursor-pointer">
          <img src="/safe.png" alt="SafeDecoy Logo" className="h-10 md:h-10 w-auto object-contain " />
          
          
        </div>
        
        {/* Right Side: CTA */}
        <div className="flex justify-end items-center">
          <a href="#waitlist" className="px-6 md:px-10 py-3 bg-white text-black font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-md hover:scale-[1.03] active:scale-[0.97]
">
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

// 2. Hero Component
const Hero: React.FC = () => {
  return (
<section className="relative min-h-screen overflow-hidden bg-black pt-40 md:pt-52 pb-20 bg-grid">
  
  {/* TOP-RIGHT ORANGE GLOW */}
{/* TOP-RIGHT ORANGE GLOW */}
<div
  className="hero-glow absolute top-[-25%] right-[-25%] w-[1000px] h-[1000px] opacity-100 z-0 pointer-events-none"
  style={{
    background: 'radial-gradient(circle, #fc3602 0%, rgba(252,54,2,0.6) 35%, transparent 70%)',
  }}
/>

{/* BOTTOM ORANGE GLOW */}
<div
  className="hero-glow absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[1300px] h-[1300px] opacity-90 z-0 pointer-events-none"
  style={{
    background: 'radial-gradient(circle, #fc3602 0%, rgba(252,54,2,0.55) 40%, transparent 75%)',
  }}
/>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      
      {/* Background Neon Orbs */}
      <div className="bg-glow-orb top-[10%] left-[-5%] w-[500px] h-[500px] opacity-40 animate-pulse" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)' }} />
      <div className="bg-glow-orb bottom-[10%] right-[-5%] w-[600px] h-[600px] opacity-20 animate-pulse" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl reveal mx-auto text-center">
          {/* Badge thora aur neche for better visibility and spacing */}
          <div className="inline-flex items-center gap-3 mb-12 md:mb-20 px-6 py-3 border border-orange-500/30 bg-orange-500/5 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <Lock className="w-4 h-4 text-orange-400" />
            <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] text-orange-300 uppercase">Discreet Personal Safety Protection</span>
          </div>

          <h1 className="  text-4xl 
  sm:text-6xl 
  md:text-7xl 
  lg:text-8xl 
  xl:text-[110px] font-black leading-[1] md:leading-[0.85] tracking-tighter text-white mb-10 md:mb-16">
            A New Standard <br className="hidden md:block" />
            <span className=" bg-clip-text text-orange-600 text-neon-strong">of Protection.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-16 md:mb-24 max-w-4xl mx-auto px-6">
            Disguised as a familiar device. Powered by cutting-edge security. 
            
          </p>
          
          <div className="flex justify-center">
            <a href="#waitlist" className="group relative flex items-center justify-center gap-6 px-14 py-7 tracking-[0.25em] bg-white text-black font-black uppercase text-[10px] md:text-xs  hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:scale-[1.03] active:scale-[0.97]
">
              Join the Exclusive List
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. WhySafeDecoy Section
const WhySafeDecoy: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-black relative border-t border-orange-900/20 overflow-hidden">
      {/* Background glow for the section */}
   
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,#fc3602_0%,transparent_30%),radial-gradient(circle_at_90%_80%,#fc3602_0%,transparent_30%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-16 bg-orange-600/50 shadow-[0_0_10px_#a855f7]" />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase text-orange-400 text-neon">01 / Concept</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase text-white leading-tight mb-10">
              Where Security Meets <span className="text-neon-strong">Innovation.</span>
            </h2>
            <p className="text-zinc-500 text-xl md:text-2xl leading-relaxed font-light mb-12 border-l-4 border-orange-600/20 pl-10">
             Developed for high-net-worth individuals and executives, SafeDecoy offers unparalleled peace of mind with a deceptively simple design. Once triggered, your device silently alerts authorities and your trusted contacts, ensuring you get the help you need—fast.
            </p>
          </div>
          
          <div className="relative reveal delay-200 order-1 lg:order-2 flex justify-center">
  {/* Outer Frame */}
  <div className="relative aspect-[9/16] w-[320px] md:w-[380px]
bg-zinc-950 border border-orange-900/40 overflow-hidden
hover-lift group
transition-all duration-700
hover:border-orange-500/70
hover:shadow-[0_0_220px_rgba(255,115,0,0.35)] float">



    {/* Glow Lines */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-orange-600 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-orange-600 to-transparent" />
    </div>

    {/* Header */}
    <div className="absolute top-0 left-0 w-full px-4 py-3 flex justify-between items-center text-[9px] uppercase tracking-[0.35em] text-orange-500/70 z-20">
      <span>System</span>
      <div className="flex gap-1">
        <span className="w-1 h-1 bg-orange-600 rounded-full" />
        <span className="w-1 h-1 bg-orange-600 rounded-full" />
        <span className="w-1 h-1 bg-orange-600 rounded-full" />
      </div>
    </div>

    {/* Screen */}
    <div className="relative flex items-center justify-center h-full px-6">
      <div className="relative w-full h-[70%] border border-orange-900/30 bg-black/60 backdrop-blur-sm shadow-inner">
        
        {/* Image inside mobile */}
        <img
          src="./alert.png"
          alt="Alert Screen"
          className="absolute inset-0 w-full h-full object-contain opacity-90
transition-all duration-700
group-hover:scale-[1.04]
group-hover:opacity-100
drop-shadow-[0_0_40px_rgba(255,115,0,0.25)]"

        />

        {/* Overlay grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:22px_22px]" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute w-full h-[2px] bg-orange-500/30 blur-md animate-scan" />
</div>

    </div>

    {/* Footer */}
    <div className="absolute bottom-4 w-full text-center">
      <span className="text-[9px] tracking-[0.4em] text-orange-500/60 uppercase">
        Secure Alert Active
      </span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

// 4. Features Section
const Features: React.FC = () => {
  useReveal();
  const featureList = [
    {
      icon: <EyeOff className="w-12 h-12" />,
      title: "Discreet Design",
      desc: "Looks just like a familiar device—only it’s working to protect you."
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Real-Time Alerts",
      desc: "Instantly notifies authorities and your trusted contacts."
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Instant GPS Tracking",
      desc: "Tracks the device’s location for a fast and precise response."
    }
  ];

  return (
    <section id="features" className="py-32 md:py-48 border-t border-orange-900/10 bg-[#020202] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,#fc3602_0%,transparent_30%),radial-gradient(circle_at_90%_80%,#fc3602_0%,transparent_30%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 md:mb-32 reveal text-center">
          <span className="text-orange-500/80 text-[11px] font-black tracking-[0.5em] uppercase mb-4 block text-neon">02 / PROTECTION</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter">Why <span className="text-neon-strong">SafeDecoy?</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px md:bg-zinc-900/50 border-none md:border md:border-orange-900/10 overflow-hidden">
          {featureList.map((f, i) => (
            <div key={i} className="bg-black p-12 md:p-20 transition-all duration-700 group reveal border border-orange-900/10 md:border-none hover:bg-zinc-950" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="text-orange-600/40 mb-10 group-hover:text-orange-500 transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(168,85,247,0.2)]">{f.icon}</div>
              <h3 className="text-2xl md:text-4xl font-black uppercase mb-6 text-white tracking-tight">{f.title}</h3>
              <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-light group-hover:text-zinc-400 transition-colors">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Urgency Section
const ComingSoon: React.FC = () => {
  return (
    <section className="py-32 md:py-56 bg-black border-y border-orange-900/20 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
      
      {/* --- Glow Effects Start --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Left Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,#fc3602_0%,transparent_25%)] opacity-40" />
        
        {/* Bottom-Right Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_90%_90%,#fc3602_0%,transparent_25%)] opacity-40" />
      </div>
      {/* --- Glow Effects End --- */}

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
         <span className="text-[140px] sm:text-[220px] md:text-[500px] font-black uppercase tracking-tighter text-white">Stealth</span>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10 reveal">
        <h2 className="text-6xl md:text-[160px] font-black uppercase text-white leading-tight tracking-tighter mb-10 text-neon-strong">
          Coming Soon.
        </h2>
        <p className="text-zinc-500 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
         SafeDecoy is currently in development and will be available in a few months. Be the first to know when we launch.
        </p>
      </div>
    </section>
  );
};

// 6. Email Subscription Section
const Waitlist: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setEmail("");
    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-32 md:py-56 bg-black relative overflow-hidden flex items-center justify-center min-h-screen">
      
      {/* --- SUPER BRIGHT GLOW (Card ke piche) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ye hai wo main glow jo newsletter ke piche se chamkega */}
        <div className="w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-[#fc3602] opacity-40 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Card: bg-black/40 aur backdrop-blur se piche ka glow visible hoga */}
        <div className="max-w-5xl mx-auto border border-orange-900/40 p-10 md:p-24 bg-black/40 backdrop-blur-3xl shadow-2xl">
          
          <div className="text-center">
            <h3 className="text-4xl md:text-8xl font-black uppercase text-white mb-10 leading-tight">
              Get Early & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 italic">
                Exclusive Updates
              </span>
            </h3>

            <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-16">
              Be among the first to know when SafeDecoy launches. Sign up to receive updates and special offers.
            </p>

            {/* Newsletter Input Box */}
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4 border border-orange-500/20 p-2 bg-black/80">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-1 bg-transparent px-6 py-4 text-white outline-none font-bold tracking-widest text-xs"
              />
              <button className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-[#fc3602] hover:text-white transition-all">
                SUBSCRIBE
              </button>
            </div>

            <p className="mt-8 text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
              Strictly Confidential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// 7. Footer
const Footer: React.FC = () => {
  return (
    <footer className="py-20 md:py-28 bg-black border-t border-orange-900/20 relative">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-950/30 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-14">
          <div className="flex items-center gap-5">
          <img src="/safe.png" alt="SafeDecoy Logo" className="h-8 md:h-9 w-auto object-contain " />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <a href="mailto:inquiries@safedecoy.com" className="text-[11px] font-black tracking-[0.5em] text-zinc-600 hover:text-orange-400 transition-colors uppercase text-neon">
              inquiries@safedecoy.com
            </a>
            <div className="flex gap-12 text-[10px] font-black tracking-[0.4em] text-zinc-800 uppercase">
               <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
               <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
            </div>
            <span className="text-[10px] text-zinc-800 font-bold uppercase tracking-widest opacity-40">© 2025 SAFEDECOY LUXURY PROTECTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  useReveal();
  
  return (
   <div className="bg-black text-white selection:bg-orange-600 selection:text-white min-h-screen text-[15px] md:text-[16px] antialiased">

      <Header />
      <main>
        <Hero />
        <WhySafeDecoy />
        <Features />
        <ComingSoon />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}