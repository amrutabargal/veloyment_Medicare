import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, MessageCircle, Calendar, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const actions = [
    {
      icon: PhoneCall,
      label: 'Call Now',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.location.href = 'tel:+911800123456',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'bg-emerald-500 hover:bg-emerald-600',
      action: () => window.open('https://wa.me/911800123456?text=Hello, I would like to book an appointment at MediCare Plus Hospital.', '_blank'),
    },
    {
      icon: Calendar,
      label: 'Book Online',
      color: 'bg-primary hover:bg-primary/90',
      action: () => { navigate('/appointment'); setIsOpen(false); },
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-16 right-0 space-y-3 mb-2"
            >
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={action.action}
                  className={`flex items-center gap-3 ${action.color} text-white rounded-full pl-4 pr-5 py-3 shadow-lg transition-all whitespace-nowrap`}
                >
                  <action.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{action.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all ${
            isOpen ? 'bg-gray-800' : 'bg-green-500 animate-pulse'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Phone className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
