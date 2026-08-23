import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, CheckCircle2, Send } from 'lucide-react';

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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-40px)] overflow-hidden rounded-[6px] border border-line bg-page shadow-[0_24px_64px_-12px_rgba(0,0,0,0.35)] sm:right-8 sm:w-[400px] dark:shadow-[0_24px_64px_-8px_rgba(0,0,0,0.8)]"
          >
            {/* header */}
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h3 className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                <MessageCircle className="size-4 text-muted" />
                Ask a question
              </h3>
              <button
                aria-label="Close Chat"
                onClick={() => setIsOpen(false)}
                className="btn-icon !size-7"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="p-5">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center space-y-3 py-10 text-center">
                  <CheckCircle2 className="size-12 text-ink" strokeWidth={1.25} />
                  <p className="text-sm font-semibold text-ink">Message sent successfully.</p>
                  <p className="text-xs text-muted">I will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="field"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="field"
                  />

                  <textarea
                    required
                    rows={3}
                    placeholder="Your question…"
                    value={formData.query}
                    onChange={e => setFormData({...formData, query: e.target.value})}
                    className="field resize-none"
                  />

                  <div className="flex w-full items-stretch overflow-hidden rounded-[6px] border border-line bg-surface transition-all focus-within:border-ink focus-within:bg-accent-soft focus-within:shadow-[0_0_0_3px_var(--accent)] dark:focus-within:border-accent dark:focus-within:shadow-none">
                    <span className="flex items-center gap-1.5 border-r border-line px-3.5 text-sm font-medium text-muted">
                      🇮🇳 +91
                    </span>
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})}
                      className="w-full bg-transparent px-3.5 py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs font-medium text-ink">Failed to send. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-solid mt-1 w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === 'loading' ? 'sending…' : (
                      <>
                        send message
                        <Send className="size-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* launcher — solid ink square, like the CTA button */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-5 z-50 flex size-12 cursor-pointer items-center justify-center rounded-[6px] bg-ink text-page shadow-[0_8px_28px_-4px_rgba(0,0,0,0.4)] transition-colors hover:bg-ink-hover sm:right-8"
        aria-label="Toggle Chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
            className="flex"
          >
            {isOpen ? <X className="size-5" /> : <MessageCircle className="size-5" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
