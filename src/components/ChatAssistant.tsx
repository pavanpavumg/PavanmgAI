"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Pavan's AI assistant. Ask me about his projects or technical skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, data]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm having a bit of trouble connecting to my brain. Please try again later!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 h-[450px] bg-[#161616] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-emerald-500/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-sm tracking-tight">Pavan's AI Guide</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4 text-zinc-500" /></button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === "user" ? "bg-emerald-600 text-white" : "bg-zinc-800 text-zinc-300"}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start italic text-zinc-500 animate-pulse">
                  AI is thinking...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about my MCA projects..."
                className="flex-1 bg-zinc-900 border border-white/5 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-emerald-500/50"
              />
              <button onClick={handleSend} disabled={isLoading} className="p-2 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-50">
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 p-4 rounded-full shadow-lg hover:bg-emerald-400 transition-colors"
      >
        {isOpen ? <X className="text-black" /> : <MessageSquare className="text-black" />}
      </motion.button>
    </div>
  );
}
