
import React, { useState } from 'react';
import { ProfileData, Tone } from './types';
import SkillsCloud from './components/SkillsCloud';
import chatBotThumb from './assets/chat-bot-thumb.png'
import chatAirest from './assets/ai-restaurant-thumb.png'
import japaneseTraining from './assets/mobile-japanes-training.png'

const DEFAULT_PROFILE: ProfileData = {
  name: "Junior Fullstack Utvecklare",
  age: 51,
  role: "Fullstack Developer",
  education: "2-årig webbutvecklingsutbildning (Fulltid)",
  previousExperience: "Media (videoredigering, kameraarbete)",
  skills: [
    "JavaScript", "TypeScript","Next.js", "React (Vite)", "React Native", "Node.js","Python","PHP"
    ,"Firebase", "AWS", "MongoDB", "Tailwind CSS", "Git/GitHub", "DevOps basics",
    "AI/LLM Integration", "RAG", "LangChain","Langgraph","Hugging Face","Ollama","Claude Code","Gemin 3.0"
  ],
  projects: [
    {
      title: "Japanese-Training Web App",
      description: "Japanese-Training Web App som är SEO-optimerad byggd med Astro för maximal crawlbarhet och prestanda. Dynamisk innehållshantering möjliggör snabba uppdateringar samtidigt som statisk genering säkerställer snabba laddningstider och hög sökranking.",
      tech: ["React Native", "Firebase", "Node.js", "Cloud Functions"],
      liveUrl: "https://github.com/example/video-dating",
      imageUrl: japaneseTraining
    },
    {
      title: "AI CV Chat-applikation (RAG)",
      description: "Avancerad conversational AI byggd med Python och LangGraph. Implementerar samma arkitektur som moderna AI-modeller med multi-agent orchestration och retrieval-augmented generation för kontextuellt korrekta svar baserat på dokumentkontext.",
      tech: ["OpenAI", "Ollama", "Pinecone", "Express"],
      liveUrl: "https://github.com/example/rag-chat",
      imageUrl:chatBotThumb
    },
    {
      title: "AI Restaurant Chat",
      description: "AI-lösning som demonstrerar kodåteranvändning och flexibel arkitektur. Backend från CV-chatboten kombineras med en ny React-frontend för att skapa en branschspecifik lösning för restaurangbranschen.",
      tech: ["TypeScript", "LangChain", "AWS Lambda", "S3"],
      liveUrl: "https://github.com/example/automation",
      imageUrl:chatAirest
    }
  ]
};

// Fördefinierade profiltexter - redigera dessa direkt för att uppdatera innehållet
const PROFILE_TEXTS: Record<string, string> = {
  [Tone.PROFESSIONAL]:
    "Jag är en junior AI- och fullstackutvecklare med bakgrund inom kreativ medieproduktion och en avslutad tvåårig heltidsutbildning i webbutveckling. Under cirka fem år har jag arbetat med videoredigering och visuellt innehåll, bland annat för TV-produktioner, vilket gett mig en stark känsla för kvalitet och användarupplevelse. Idag utvecklar jag skalbara webb- och mobilapplikationer i React och React Native med TypeScript, ofta i serverlösa miljöer. Jag ser AI som ett kraftfullt verktyg för att bygga bättre lösningar – inte som en genväg runt förståelse av koden.",

  [Tone.TECH_HEAVY]:
    "Junior AI- och fullstackutvecklare med erfarenhet av React, React Native, Node.js och TypeScript. Jag har byggt RAG-lösningar med LangChain och LangGraph, integrerat LLM:er via OpenAI och lokala modeller som Ollama, samt arbetat med vektordatabaser och Firebase. Min bakgrund inom medieproduktion har gett mig ett öga för detaljer och flöden, vilket jag kombinerar med serverless-arkitektur, API-design och molntjänster som AWS och Firebase.",

  [Tone.STORY_DRIVEN]:
    "Efter cirka fem år inom medieproduktion, där jag arbetade med videoredigering och visuellt berättande, växte intresset för tekniken bakom upplevelserna. Nyfikenheten på hur tjänster faktiskt byggs ledde mig vidare till en tvåårig heltidsutbildning i webbutveckling. Idag utvecklar jag fullstack-applikationer med React, TypeScript och AI-stöd, med fokus på tydlig logik, användarvärde och långsiktigt hållbara lösningar."
};

const App: React.FC = () => {
  const [activeTone, setActiveTone] = useState<Tone>(Tone.PROFESSIONAL);
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PROFILE_TEXTS[activeTone]);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Sidebar / Profile Summary */}
      <aside className="w-full lg:w-96 bg-white border-r border-slate-200 p-8 flex flex-col gap-8 shadow-sm">
        <div>
          <div className="relative w-28 h-28 mb-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop"
              alt="Profilfoto"
              className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white ring-4 ring-blue-50"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm" title="Tillgänglig för uppdrag"></div>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Peter Andersson</h1>
          <p className="text-slate-500 text-sm mt-1 italic">Junior utvecklare med senior erfarenhet</p>
        </div>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Grundläggande Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <i className="fa-solid fa-user text-blue-500 w-4"></i>
              <span className="text-slate-700">51 år, Junior Utvecklare</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <i className="fa-solid fa-graduation-cap text-blue-500 w-4"></i>
              <span className="text-slate-700">2-årig Webbutveckling</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <i className="fa-solid fa-film text-blue-500 w-4"></i>
              <span className="text-slate-700">Bakgrund inom Media</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Teknisk Stack</h2>
          <SkillsCloud skills={DEFAULT_PROFILE.skills} />
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Statistik</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="block text-xl font-bold text-slate-800">1+</span>
              <span className="text-[10px] uppercase text-slate-500">År Arbetslivserf.</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="block text-xl font-bold text-slate-800">100%</span>
              <span className="text-[10px] uppercase text-slate-500">Kodnyfiken</span>
            </div>
          </div>
        </section>

        <footer className="mt-auto pt-8 border-t border-slate-100 text-[10px] text-slate-400 text-center uppercase tracking-widest">
          Kodad för Karriärväxlare v1.0
        </footer>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Profilbeskrivning</h2>
            <p className="text-slate-500 mt-2 text-lg">Skräddarsydd för CV, LinkedIn eller din portfolio.</p>
          </div>

          <div className="flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
            {Object.values(Tone).map((tone) => (
              <button
                key={tone}
                onClick={() => setActiveTone(tone as Tone)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTone === tone
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </header>

        {/* Text Display Card */}
        <div className="grid grid-cols-1 gap-12">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="ml-4 text-xs font-mono text-slate-400">profile_summary.md</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="text-xs font-semibold flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition-colors"
              >
                {showCopied ? (
                  <><i className="fa-solid fa-check text-green-500"></i> Kopierad!</>
                ) : (
                  <><i className="fa-solid fa-copy"></i> Kopiera text</>
                )}
              </button>
            </div>
            <div className="p-8 lg:p-12">
              <div className="prose prose-slate max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-800 font-medium italic">
                   "{PROFILE_TEXTS[activeTone]}"
                </p>
              </div>
            </div>
          </div>

          {/* Live Projects Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Live Projekt & Showcase</h3>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEFAULT_PROFILE.projects.map((project, idx) => (
                <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex gap-1">
                      {project.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h4>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Se projektet <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LinkedIn Mockup Preview */}
          <div className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 pb-12">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">LinkedIn Förhandsgranskning</h3>
             <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                   <div className="w-12 h-12 bg-slate-200 rounded-full animate-pulse"></div>
                   <div className="flex-1">
                      <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                      <div className="h-3 w-48 bg-slate-100 rounded"></div>
                   </div>
                </div>
                <div className="space-y-2">
                   <div className="h-4 w-full bg-slate-50 rounded"></div>
                   <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
                   <div className="h-4 w-4/6 bg-slate-50 rounded"></div>
                </div>
                <div className="mt-4 p-4 border border-blue-50 bg-blue-50/30 rounded-md">
                   <p className="text-sm text-slate-700 italic">" ... {PROFILE_TEXTS[activeTone].substring(0, 150)} ... "</p>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* Persistent Call-to-Action for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-2xl flex gap-2 z-50">
         <button
           onClick={copyToClipboard}
           className="flex-1 py-3 bg-slate-900 text-white font-bold rounded-xl"
         >
           {showCopied ? "Kopierat!" : "Kopiera Beskrivning"}
         </button>
      </div>
    </div>
  );
};

export default App;
