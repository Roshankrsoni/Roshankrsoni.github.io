import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-chatbox', handleOpen);
    return () => window.removeEventListener('open-chatbox', handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://api.galactus.run/user-query/', {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain, */*',
          'content-type': 'application/json',
          'x-client-country': 'IN',
          'x-timezone': 'Asia/Kolkata',
          'x-user-agent': 'topmate'
        },
        body: JSON.stringify({
          service: 37291,
          email: formData.email,
          name: formData.name,
          phone: `+91${formData.phone}`,
          answers_json: [],
          subscribe_to_whatsapp: true,
          price: 0,
          user: 7118,
          query: formData.query,
          addons: [],
          reallocate_query: false,
          ai_search_booking: false
        })
      });

      if (!response.ok) throw new Error('API Error');
      
      setStatus('success');
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', query: '' });
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-5 sm:right-8 w-[calc(100vw-40px)] sm:w-[380px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                Ask a Question
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  <p className="text-slate-800 dark:text-slate-200 font-medium text-sm">Message sent successfully!</p>
                  <p className="text-xs text-slate-500">I will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full text-sm px-3 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-slate-200 placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full text-sm px-3 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-slate-200 placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Your Question</label>
                    <textarea 
                      required 
                      rows={2}
                      placeholder="Try asking a detailed question"
                      value={formData.query}
                      onChange={e => setFormData({...formData, query: e.target.value})}
                      className="w-full resize-none text-sm px-3 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-slate-200 placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Phone number</label>
                    <div className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-950 focus-within:ring-2 focus-within:ring-blue-500/50">
                      <div className="flex items-center gap-1 px-2.5 bg-slate-200/50 dark:bg-slate-800/50 border-r border-slate-300 dark:border-slate-700 text-sm cursor-pointer select-none">
                        <span className="text-base leading-none">🇮🇳</span>
                        <ChevronDown className="w-3 h-3 text-slate-500" />
                      </div>
                      <div className="flex items-center flex-1 px-3 bg-transparent">
                        <span className="text-sm text-slate-600 dark:text-slate-400 mr-1">+91</span>
                        <input 
                          required 
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})}
                          className="w-full text-sm py-2.5 focus:outline-none dark:text-slate-200 bg-transparent placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-500 font-medium text-left">Failed to send. Please try again.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full mt-2 flex items-center justify-center py-2.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 dark:bg-slate-100 dark:hover:bg-white dark:disabled:bg-slate-300 text-white dark:text-slate-900 rounded-lg font-medium text-sm transition-colors cursor-pointer"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-5 sm:right-8 z-40 p-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all cursor-pointer"
        aria-label="Toggle Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
