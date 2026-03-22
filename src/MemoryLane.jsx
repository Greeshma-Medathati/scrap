import React, { useState } from 'react';
import { Heart, Calendar, GraduationCap, Sparkles, Coffee, Camera, MessageCircle, Mail, MapPin, Flower2, Star, CheckCircle2, Zap, BarChart3, Quote, Music, Compass, Code } from 'lucide-react';

/* * PROJECT: B.Tech Digital Archive
 * THEME: Professional Scrapbook (Original Aesthetic)
 * NOTE: using namespace std; // Timeless edition, no countdowns!
 */

const YOUR_NAME = "Your Sakhi";
const CLASS_YEARS = "2022 — 2026";

const MEMORIES_DATA = [
  {
    id: 1,
    title: "The Early Chronicles",
    description: "We met through a mutual friend, just another random classroom introduction. What started as simple conversations somehow turned into something constant. No big moment, no dramatic start — just two people who kept talking and never really stopped.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    tag: "The Intro",
    location: "Classroom",
    tapeColor: "bg-rose-200/70",
    rotation: "-rotate-2",
    sticker: <Zap className="text-yellow-400" size={24} />
  },
  {
    id: 2,
    title: "The Sitar Saga",
    description: "Paper presentations, quizzes, and your unexpected dance performance — pure chaos, but somehow it all worked. From stage moments to random tired campus walks, it was messy, fun, and completely us.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    tag: "The Chaos",
    location: "Auditorium",
    tapeColor: "bg-purple-200/70",
    rotation: "rotate-2",
    sticker: <Music className="text-purple-400" size={22} />
  },
  {
    id: 3,
    title: "3AM Survival Nights",
    description: "Those nights before exams where sleep didn’t exist and panic did. We told ourselves we’d study, but somehow ended up talking more than reading. Stress, random laughs, and last-minute preparation — somehow, we always made it through.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    tag: "Grind Mode",
    location: "Hostel/Dorms",
    tapeColor: "bg-blue-200/70",
    rotation: "-rotate-1",
    sticker: <Coffee className="text-amber-700/60" size={20} />
  },
  {
    id: 4,
    title: "The Great Escape",
    description: "A planned trip that felt like a break from everything. Chennai, Kalasalingam College, and moments that went beyond it — from traveling together to exploring Kodaikanal. Our first and last trip, but the kind that stays with you longer than expected.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    tag: "Kodai Trip",
    location: "Chennai & Beyond",
    tapeColor: "bg-green-200/70",
    rotation: "rotate-3",
    sticker: <Compass className="text-rose-400" size={22} />
  },
  {
    id: 5,
    title: "The Hackathon Hustle",
    description: "A few hackathons, countless ideas, and a lot of figuring things out. We struggled, learned, and got so close to winning. Sometimes we knew we did better than we showed — just didn’t get the timing right. But every attempt made us sharper, and a little more confident.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    tag: "Tech Duo",
    location: "Innovation Lab",
    tapeColor: "bg-yellow-200/70",
    rotation: "-rotate-3",
    sticker: <Code className="text-blue-400" size={20} />
  },
  {
    id: 6,
    title: "The Final Frame",
    description: "Not the exact last day, but close enough to feel like it. A perfect photoshoot, smiles that hid a lot more than they showed. One frame, almost the end — but also a reminder of everything that got us here.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    tag: "The End",
    location: "University Campus",
    tapeColor: "bg-orange-200/70",
    rotation: "rotate-1",
    sticker: <CheckCircle2 className="text-orange-400" size={24} />
  }
];

export default function MemoryArchive() {
  const [showSecret, setShowSecret] = useState(false);
  const [vaultTab, setVaultTab] = useState("stats"); 

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A4A4A] py-12 px-4 md:px-8 lg:px-16 selection:bg-rose-100 font-sans">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&family=Caveat:wght@400;700&display=swap');
          
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-handwriting { font-family: 'Caveat', cursive; }

          /* Realistic Washi Tape Style - FIXED */
          .washi-tape-fix {
            position: absolute;
            width: 120px;
            height: 35px;
            top: -16px;
            left: 50%;
            transform: translateX(-50%) rotate(-2deg);
            z-index: 50;
            opacity: 0.95;
            filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.08));
            clip-path: polygon(4% 0%, 96% 0%, 100% 20%, 98% 50%, 100% 80%, 96% 100%, 4% 100%, 0% 80%, 2% 50%, 0% 20%);
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* HEADER */}
      <header className="max-w-4xl mx-auto text-center mb-32 relative">
        <Flower2 size={40} className="absolute -top-10 left-10 text-rose-100 animate-pulse" />
        
        <h1 className="text-6xl md:text-9xl font-serif font-bold text-[#2D2D2D] leading-none mb-4 tracking-tighter">
          The <span className="italic font-normal text-rose-400/80">Digital</span><br/> Archives.
        </h1>
        <p className="text-2xl md:text-3xl font-handwriting text-gray-400 mt-6 italic">For the shared journey and the memories</p>
      </header>

      {/* MASONRY GRID */}
      <main className="max-w-7xl mx-auto px-4 mb-40">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-24">
          {MEMORIES_DATA.map((item) => (
            <div key={item.id} className="break-inside-avoid relative group transition-all duration-500">
              
              {/* FIXED TAPE ELEMENT */}
              <div className={`washi-tape-fix ${item.tapeColor}`}></div>
              
              <div className={`bg-white p-5 shadow-sm ${item.rotation} group-hover:rotate-0 border-[16px] border-white relative transition-all duration-500`}>
                <div className="absolute -top-6 -right-6 z-40 p-3 bg-white rounded-full shadow-lg border border-rose-50 scale-0 group-hover:scale-100 transition-transform">
                  {item.sticker}
                </div>
                
                <div className="relative overflow-hidden aspect-[4/5] bg-[#FDFDFD]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000" 
                  />
                  <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 text-[8px] text-white uppercase tracking-widest font-black">
                    {item.tag}
                  </div>
                </div>

                <div className="pt-8 pb-2">
                  <h3 className="text-3xl font-handwriting font-bold text-[#3A3A3A] mb-3 leading-none">{item.title}</h3>
                  <div className="flex items-center gap-2 text-[9px] text-gray-400 font-sans uppercase tracking-[0.2em] mb-3 font-bold">
                     <MapPin size={10} className="text-blue-200" /> {item.location}
                  </div>
                  <p className="text-sm font-sans text-gray-500 italic leading-relaxed">"{item.description}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* THE VAULT */}
      <section className="max-w-5xl mx-auto my-60 px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-2">The Bestie Vault</h2>
            <p className="text-gray-400 font-handwriting text-xl italic text-rose-300">Things that kept us sane for 4 years</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-50">
            <div className="flex border-b border-gray-100">
                {[
                  { id: 'stats', label: 'Survival Stats', icon: <BarChart3 size={16} /> },
                  { id: 'banter', label: 'Daily Banter', icon: <MessageCircle size={16} /> }
                ].map((tab) => (
                    <button 
                      key={tab.id} 
                      onClick={() => setVaultTab(tab.id)} 
                      className={`flex-1 flex items-center justify-center gap-2 py-6 uppercase text-[10px] font-black tracking-widest transition-all ${vaultTab === tab.id ? 'bg-rose-50 text-rose-400 border-b-2 border-rose-400' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-8 md:p-12 min-h-[300px]">
                {vaultTab === 'stats' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn">
                    {[
                      { l: "Canteen Rounds", v: "482", c: "text-amber-600" },
                      { l: "Our Entry Time", v: "9:30 AM", c: "text-rose-400" },
                      { l: "Inside Jokes", v: "∞", c: "text-purple-400" },
                      { l: "Lab Errors", v: "9,999+", c: "text-blue-400" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#FAF9F6] p-6 rounded-3xl text-center border border-gray-100 shadow-sm">
                        <p className={`text-2xl font-serif font-bold mb-1 ${stat.c}`}>{stat.v}</p>
                        <p className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-tighter">{stat.l}</p>
                      </div>
                    ))}
                  </div>
                )}
                {vaultTab === 'banter' && (
                  <div className="space-y-6 animate-fadeIn">
                    {[
                      "Ammo, ee class eppudu aipoddo ento...",
                      "Inka enni exams raayali bro!",
                      "Repati nunchi gatti ga kurchuni chadiveyali",
                      "Chesindi challe... ala tirigeddham padha!"
                    ].map((q, i) => (
                      <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-rose-50 shadow-sm rotate-1">
                        <Quote size={20} className="text-rose-200 shrink-0" />
                        <p className="font-handwriting text-2xl text-gray-600 italic">"{q}"</p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
        </div>
      </section>

      {/* FOOTER & SECRET NOTE */}
      <footer className="max-w-4xl mx-auto mt-60 mb-40 text-center relative">
        <div className="mb-24 relative flex flex-col items-center">
            <button 
              onClick={() => setShowSecret(true)} 
              className={`p-12 rounded-full bg-white shadow-xl text-rose-300 border-2 border-rose-50 transition-all duration-700 ${showSecret ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-bounce'}`}
            >
                <Mail size={50} strokeWidth={1} />
            </button>
            {!showSecret && <p className="mt-4 font-handwriting text-gray-400 text-xl italic text-rose-300">Tap to open my secret note</p>}
            
            {showSecret && (
              <div className="fixed inset-0 bg-black/5 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowSecret(false)}>
                  <div className="bg-[#fffdfa] p-12 max-w-lg rounded-sm shadow-2xl text-left border border-rose-100 relative" onClick={e => e.stopPropagation()}>
                      <div className="absolute -top-1 left-10 w-8 h-12 bg-rose-200/40"></div>
                      <h4 className="text-3xl font-handwriting mb-8 text-rose-400">P.S...</h4>
                      <p className="font-handwriting text-3xl text-gray-600 leading-relaxed mb-10 italic">
                        "We actually made it. No more 9 AM labs, and no more stressing over exams together. 
                        As you step into the corporate world, let’s just carry the good parts with us—no baggage, just the best memories. 
                        Go kill it out there.<br /><br />
                        Rooting for you always,<br />
                        A friend from that chapter."
                      </p>
                      <button onClick={() => setShowSecret(false)} className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-gray-300 hover:text-rose-400 transition-colors">[ Close Note ]</button>
                  </div>
              </div>
            )}
        </div>

        <div className="bg-white p-12 md:p-20 text-left relative shadow-sm border border-rose-50">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:30px_30px]"></div>
            <h2 className="text-5xl font-serif italic mb-12 text-[#2D2D2D]">Hey Bro,</h2>
            <div className="font-handwriting text-3xl text-gray-500 leading-relaxed space-y-8 max-w-2xl">
              <p>
                I would absolutely give you the moon, but it’s not mine to give.<br />
                I would plant flowers on your pillow, but that’s not where flowers want to live.<br />
                I would break off a piece of star to make sure you always have light,<br />
                but my hands are only flesh and can’t extend to that height.<br />
                I would learn to speak to birds and ask them to sing your name,<br />
                but my mouth is much too big and they would fly away.<br />
                So, I give you my love,<br />
                because that is mine.
              </p>
              <div className="pt-20">
                  <p className="text-rose-300 text-xl font-sans font-bold uppercase tracking-widest">Always,</p>
                  <p className="text-7xl text-[#1A1A1A] mt-4 leading-none font-handwriting">{YOUR_NAME}</p>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
}