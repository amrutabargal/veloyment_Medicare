import { motion } from 'motion/react';
import { Calendar, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export function AppointmentBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-primary via-blue-600 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Don't wait for your health. Schedule an appointment with our expert doctors now and get the best medical care you deserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg group"
              onClick={() => navigate('/appointment')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="tel:+911800123456" className="inline-flex">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 1800-123-456
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>OPD: 9 AM - 8 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Emergency: 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Online Booking Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
