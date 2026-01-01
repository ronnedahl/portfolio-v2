
import React, { useState } from 'react';
import { ProfileData, Tone } from './types';
import SkillsCloud from './components/SkillsCloud';
import chatBotThumb from './assets/chat-bot-thumb.png'
import chatAirest from './assets/ai-restaurant-thumb.png'
import japaneseTraining from './assets/mobile-japanes-training.png'
import meProfile from './assets/me-profile-photo.png'
import robotenImg from './assets/roboten.png'

const DEFAULT_PROFILE: ProfileData = {
  name: "Junior Fullstack Utvecklare",
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
      tech: ["Astro", "Tailwind CSS"],
      liveUrl: "https://simpleseniorfitness.com",
      githubUrl: "https://github.com/ronnedahl/japanese-training-seo",
      imageUrl: japaneseTraining
    },
    {
      title: "AI CV Chat-applikation (RAG)",
      description: "Avancerad conversational AI byggd med Python och LangGraph. Implementerar samma arkitektur som moderna AI-modeller med multi-agent orchestration och retrieval-augmented generation för kontextuellt korrekta svar baserat på dokumentkontext.",
      tech: ["Python", "Docker"],
      liveUrl: "https://cv.peterbot.dev/chat",
      githubUrl: "https://github.com/ronnedahl/my-dev-portfolio-chatbot",
      imageUrl: chatBotThumb
    },
    {
      title: "AI Restaurant Chat",
      description: "AI-lösning som demonstrerar kodåteranvändning och flexibel arkitektur. Backend från CV-chatboten kombineras med en ny React-frontend för att skapa en branschspecifik lösning för restaurangbranschen.",
      tech: ["TypeScript", "LangChain", "AWS Lambda", "S3"],
      liveUrl: "https://ai-restaurant.peterbot.dev",
      githubUrl: "https://github.com/ronnedahl/ai-restaurant",
      imageUrl: chatAirest
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
          <div className="flex items-center gap-6">
            {/* Profilfoto */}
            <div className="relative w-28 h-28 flex-shrink-0">
              <img
                src={meProfile}
                alt="Profilfoto"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white ring-4 ring-blue-50"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm" title="Tillgänglig för uppdrag"></div>
            </div>

            {/* AI Chatbot länk */}
            <a
              href="https://cv.peterbot.dev/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src={robotenImg}
                alt="AI Chatbot"
                className="w-16 h-16 rounded-full shadow-lg object-cover group-hover:scale-110 transition-transform"
              />
              <span className="mt-2 text-xs text-slate-500 text-center group-hover:text-blue-600 transition-colors">Chatta med<br/>min AI-CVbot</span>
            </a>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 mt-4">Peter Andersson</h1>
          <p className="text-slate-500 text-sm mt-1 italic">Junior AI- & Fullstack-utvecklare | React Native/Android</p>
        </div>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Grundläggande Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <i className="fa-solid fa-user text-blue-500 w-4"></i>
              <span className="text-slate-700">Junior Utvecklare</span>
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
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="bg-slate-50 p-2 md:p-3 rounded-xl border border-slate-100 text-center">
              <span className="block text-base md:text-xl font-bold text-slate-800">1+</span>
              <span className="text-[10px] uppercase text-slate-500">År Arbetslivserf.</span>
            </div>
            <div className="bg-slate-50 p-2 md:p-3 rounded-xl border border-slate-100 text-center">
              <span className="block text-base md:text-xl font-bold text-slate-800">100%</span>
              <span className="text-[10px] uppercase text-slate-500">Kodnyfiken</span>
            </div>
          </div>
        </section>

        <footer className="mt-auto pt-8 border-t border-slate-100 text-[10px] text-slate-400 text-center uppercase tracking-widest">
          © 2026 Peter Andersson. All rights reserved.
        </footer>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Om Mig</h2>
            <p className="text-slate-500 mt-2 text-lg"></p>
          </div>

          <div className="flex p-0.5 md:p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
            {Object.values(Tone).map((tone) => (
              <button
                key={tone}
                onClick={() => setActiveTone(tone as Tone)}
                className={`px-1.5 py-0.5 md:px-4 md:py-2 text-[10px] md:text-sm font-medium rounded-lg transition-all ${
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
            <div className="p-4 md:p-8 lg:p-12">
              <div className="prose prose-slate max-w-none">
                <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-slate-800 font-medium italic">
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
                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Se projektet <i className="fa-solid fa-arrow-right text-xs"></i>
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          <i className="fa-brands fa-github"></i> Kod
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;
