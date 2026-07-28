import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, CheckCircle2, ChevronDown } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

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

  const inputClasses = "w-full text-base sm:text-sm px-3.5 py-2.5 bg-surface border border-line rounded-xl text-ink placeholder:text-faint focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all";

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed bottom-24 right-5 sm:right-8 w-[calc(100vw-40px)] sm:w-[380px] glass rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-line flex justify-between items-center">
              <h3 className="font-display text-lg text-ink flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent" />
                Ask a question
              </h3>
              <button
                aria-label="Close Chat"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-faint hover:text-ink hover:bg-ink/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  <p className="text-ink font-medium text-sm">Message sent successfully.</p>
                  <p className="text-xs text-muted">I will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-muted">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className={inputClasses}
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-muted">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className={inputClasses}
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-muted">Your question</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Try asking a detailed question"
                      value={formData.query}
                      onChange={e => setFormData({...formData, query: e.target.value})}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col items-start text-left">
                    <label className="text-[13px] font-medium text-muted">Phone number</label>
                    <div className="flex w-full rounded-xl border border-line overflow-hidden bg-surface focus-within:border-accent/60 focus-within:ring-2 focus-within:ring-accent/20 transition-all">
                      <div className="flex items-center gap-1 px-2.5 bg-ink/[0.04] dark:bg-white/[0.05] border-r border-line text-sm cursor-pointer select-none">
                        <span className="text-base leading-none">🇮🇳</span>
                        <ChevronDown className="w-3 h-3 text-faint" />
                      </div>
                      <div className="flex items-center flex-1 px-3 bg-transparent">
                        <span className="text-base sm:text-sm text-muted mr-1">+91</span>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})}
                          className="w-full text-base sm:text-sm py-2.5 focus:outline-none text-ink bg-transparent placeholder:text-faint"
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
                    className="w-full mt-2 flex items-center justify-center py-3 rounded-full bg-ink text-canvas font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {status === 'loading' ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-5 sm:right-8 z-40 p-4 bg-ink text-canvas rounded-full shadow-xl hover:scale-105 transition-all cursor-pointer glow-accent"
        aria-label="Toggle Chat"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </>
  );
}
