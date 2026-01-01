import { ProfileData } from '../types';
import chatBotThumb from '../assets/chat-bot-thumb.png';
import chatAirest from '../assets/ai-restaurant-thumb.png';
import japaneseTraining from '../assets/mobile-japanes-training.png';

export const DEFAULT_PROFILE: ProfileData = {
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
