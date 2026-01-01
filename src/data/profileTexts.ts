import { Tone } from '../types';

export const PROFILE_TEXTS: Record<string, string> = {
  [Tone.PROFESSIONAL]:
    "Jag är en junior AI- och fullstackutvecklare med bakgrund inom kreativ medieproduktion och en avslutad tvåårig heltidsutbildning i webbutveckling. Under cirka fem år har jag arbetat med videoredigering och visuellt innehåll, bland annat för TV-produktioner, vilket gett mig en stark känsla för kvalitet och användarupplevelse. Idag utvecklar jag skalbara webb- och mobilapplikationer i React och React Native med TypeScript, ofta i serverlösa miljöer. Jag ser AI som ett kraftfullt verktyg för att bygga bättre lösningar – inte som en genväg runt förståelse av koden.",

  [Tone.TECH_HEAVY]:
    "Junior AI- och fullstackutvecklare med erfarenhet av React, React Native, Node.js och TypeScript. Jag har byggt RAG-lösningar med LangChain och LangGraph, integrerat LLM:er via OpenAI och lokala modeller som Ollama, samt arbetat med vektordatabaser och Firebase. Min bakgrund inom medieproduktion har gett mig ett öga för detaljer och flöden, vilket jag kombinerar med serverless-arkitektur, API-design och molntjänster som AWS och Firebase.",

  [Tone.STORY_DRIVEN]:
    "Efter cirka fem år inom medieproduktion, där jag arbetade med videoredigering och visuellt berättande, växte intresset för tekniken bakom upplevelserna. Nyfikenheten på hur tjänster faktiskt byggs ledde mig vidare till en tvåårig heltidsutbildning i webbutveckling. Idag utvecklar jag fullstack-applikationer med React, TypeScript och AI-stöd, med fokus på tydlig logik, användarvärde och långsiktigt hållbara lösningar."
};
