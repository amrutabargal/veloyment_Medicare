import { motion } from 'motion/react';
import { 
  Activity, 
  Ambulance, 
  ClipboardList, 
  HeartPulse, 
  Home, 
  Pill, 
  Scissors, 
  Stethoscope,
  TestTube,
  UserCheck,
  Shield,
  Clock,
  Phone
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Ambulance,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency medical services with advanced life support'
    },
    {
      icon: Activity,
      title: 'ICU Care',
      description: 'State-of-the-art intensive care units with continuous monitoring'
    },
    {
      icon: Scissors,
      title: 'Advanced Surgery',
      description: 'Modern operation theaters with minimally invasive procedures'
    },
    {
      icon: TestTube,
      title: 'Diagnostic Lab',
      description: 'Comprehensive pathology and diagnostic services with quick results'
    },
    {
      icon: HeartPulse,
      title: 'Health Checkups',
      description: 'Complete preventive health screening packages'
    },
    {
      icon: Home,
      title: 'Home Care',
      description: 'Professional healthcare services at your home'
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: '24/7 in-house pharmacy with all essential medicines'
    },
    {
      icon: UserCheck,
      title: 'Patient Care',
      description: 'Dedicated patient care coordinators for personalized attention'
    },
    {
      icon: ClipboardList,
      title: 'Medical Records',
      description: 'Digital health records for easy access and management'
    },
    {
      icon: Stethoscope,
      title: 'Consultation',
      description: 'Online and offline doctor consultations available'
    },
    {
      icon: Shield,
      title: 'Insurance Support',
      description: 'Cashless facility for all major insurance providers'
    },
    {
      icon: Clock,
      title: 'Appointment System',
      description: 'Easy online booking with minimal waiting time'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">What We Offer</span>
          <h2 className="text-4xl font-semibold text-foreground mt-2 mb-4">
            Services & Facilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services designed to provide you with the best medical care and convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Need Immediate Medical Attention?
              </h3>
              <p className="text-white/90 mb-6">
                Our emergency department is open 24/7 with experienced doctors and advanced life support systems. We're here for you, anytime you need us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+911800123456" className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/30 transition-colors">
                  <Ambulance className="w-6 h-6" />
                  <div>
                    <p className="text-sm opacity-90">Emergency</p>
                    <p className="font-semibold text-lg">+91 1800-123-456</p>
                  </div>
                </a>
                <a href="tel:+911800765432" className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/30 transition-colors">
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="text-sm opacity-90">Appointment</p>
                    <p className="font-semibold text-lg">+91 1800-765-432</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1702428903130-dda216ebd63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGljdSUyMGludGVuc2l2ZSUyMGNhcmV8ZW58MXx8fHwxNzcwOTA1NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Emergency Care"
                className="rounded-xl shadow-2xl w-full max-w-md object-cover h-64"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
