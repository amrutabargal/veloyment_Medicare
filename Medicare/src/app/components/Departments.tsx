import { motion } from 'motion/react';
import { Heart, Baby, Brain, Stethoscope, Activity, Microscope, Eye, Bone } from 'lucide-react';
import { Card } from './ui/card';

export function Departments() {
  const departments = [
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Advanced cardiac care with state-of-the-art technology',
      image: 'https://images.unsplash.com/photo-1690306816872-91063f6de36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2d5JTIwaGVhcnQlMjBtZWRpY2FsJTIwY2FyZXxlbnwxfHx8fDE3NzA5NjYxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Comprehensive neurological diagnosis and treatment',
      image: 'https://images.unsplash.com/photo-1707303902577-c60595114de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Baby,
      name: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents',
      image: 'https://images.unsplash.com/photo-1758691462119-792279713969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBjaGlsZHJlbiUyMGhvc3BpdGFsJTIwY2FyZXxlbnwxfHx8fDE3NzA5NjYxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Stethoscope,
      name: 'General Medicine',
      description: 'Comprehensive primary healthcare services',
      image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NjYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Activity,
      name: 'Emergency Care',
      description: '24/7 emergency medical services and trauma care',
      image: 'https://images.unsplash.com/photo-1702428903130-dda216ebd63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGljdSUyMGludGVuc2l2ZSUyMGNhcmV8ZW58MXx8fHwxNzcwOTA1NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Microscope,
      name: 'Laboratory Services',
      description: 'Advanced diagnostic and pathology services',
      image: 'https://images.unsplash.com/photo-1656337426953-554b8e5b50f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxhYm9yYXRvcnklMjBtZWRpY2FsJTIwdGVzdHxlbnwxfHx8fDE3NzA5NjYxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Eye,
      name: 'Ophthalmology',
      description: 'Complete eye care and vision correction',
      image: 'https://images.unsplash.com/photo-1703978917909-02d6b5c02d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHN1cmdlcnklMjBvcGVyYXRpb24lMjB0aGVhdGVyfGVufDF8fHx8MTc3MDk2NjExNHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Bone,
      name: 'Orthopedics',
      description: 'Expert bone, joint, and muscle care',
      image: 'https://images.unsplash.com/photo-1707303902577-c60595114de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Specialties</span>
          <h2 className="text-4xl font-semibold text-foreground mt-2 mb-4">
            Medical Departments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialties with world-class facilities and expert medical professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <dept.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                    <p className="text-white/90 text-sm">{dept.description}</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
