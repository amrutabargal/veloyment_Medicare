import { motion } from 'motion/react';
import { Heart, Baby, Brain, Stethoscope, Activity, Microscope, Eye, Bone, Phone, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

export function DepartmentsPage() {
  const navigate = useNavigate();

  const departments = [
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Advanced cardiac care with state-of-the-art technology including angiography, angioplasty, bypass surgery, pacemaker implantation, and cardiac rehabilitation.',
      image: 'https://images.unsplash.com/photo-1690306816872-91063f6de36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2d5JTIwaGVhcnQlMjBtZWRpY2FsJTIwY2FyZXxlbnwxfHx8fDE3NzA5NjYxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-500 to-pink-500',
      doctors: 8,
      treatments: ['Angioplasty', 'Bypass Surgery', 'ECG', 'Echocardiography', 'Pacemaker']
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Comprehensive neurological diagnosis and treatment for brain, spinal cord, and nerve disorders with advanced neuro-diagnostics.',
      image: 'https://images.unsplash.com/photo-1707303902577-c60595114de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-indigo-500',
      doctors: 6,
      treatments: ['EEG', 'MRI', 'Stroke Treatment', 'Epilepsy Care', 'Nerve Conduction']
    },
    {
      icon: Baby,
      name: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents with a child-friendly environment and dedicated pediatric ICU.',
      image: 'https://images.unsplash.com/photo-1758691462119-792279713969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBjaGlsZHJlbiUyMGhvc3BpdGFsJTIwY2FyZXxlbnwxfHx8fDE3NzA5NjYxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-cyan-500',
      doctors: 10,
      treatments: ['Vaccination', 'Neonatal Care', 'Child Development', 'Pediatric Surgery']
    },
    {
      icon: Stethoscope,
      name: 'General Medicine',
      description: 'Comprehensive primary healthcare services with experienced physicians for diagnosis and treatment of common and complex conditions.',
      image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NjYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-500 to-emerald-500',
      doctors: 15,
      treatments: ['Health Checkup', 'Diabetes Management', 'BP Control', 'Fever Treatment']
    },
    {
      icon: Activity,
      name: 'Emergency Care',
      description: '24/7 emergency medical services with advanced trauma care, life support, and immediate response team.',
      image: 'https://images.unsplash.com/photo-1702428903130-dda216ebd63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGljdSUyMGludGVuc2l2ZSUyMGNhcmV8ZW58MXx8fHwxNzcwOTA1NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-500 to-red-500',
      doctors: 12,
      treatments: ['Trauma Care', 'Life Support', 'Critical Care', 'Ambulance Service']
    },
    {
      icon: Microscope,
      name: 'Laboratory',
      description: 'Advanced diagnostic and pathology services with quick and accurate results using the latest testing equipment.',
      image: 'https://images.unsplash.com/photo-1656337426953-554b8e5b50f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxhYm9yYXRvcnklMjBtZWRpY2FsJTIwdGVzdHxlbnwxfHx8fDE3NzA5NjYxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-teal-500 to-green-500',
      doctors: 5,
      treatments: ['Blood Tests', 'X-Ray', 'CT Scan', 'MRI', 'Ultrasound']
    },
    {
      icon: Eye,
      name: 'Ophthalmology',
      description: 'Complete eye care including cataract surgery, LASIK, glaucoma treatment, and retina services.',
      image: 'https://images.unsplash.com/photo-1703978917909-02d6b5c02d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHN1cmdlcnklMjBvcGVyYXRpb24lMjB0aGVhdGVyfGVufDF8fHx8MTc3MDk2NjExNHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-indigo-500 to-purple-500',
      doctors: 4,
      treatments: ['Cataract Surgery', 'LASIK', 'Glaucoma', 'Retina Treatment']
    },
    {
      icon: Bone,
      name: 'Orthopedics',
      description: 'Expert bone, joint, and muscle care including joint replacement, sports medicine, and spine surgery.',
      image: 'https://images.unsplash.com/photo-1707303902577-c60595114de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-gray-600 to-gray-800',
      doctors: 7,
      treatments: ['Joint Replacement', 'Spine Surgery', 'Fracture Treatment', 'Sports Medicine']
    }
  ];

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold inline-block mb-4">
            Our Specialties
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Medical Departments
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive healthcare across multiple specialties with world-class facilities and expert medical professionals.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="space-y-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all ${
                index % 2 === 0 ? '' : ''
              }`}>
                <div className={`grid md:grid-cols-2 ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-70`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <dept.icon className="w-20 h-20 text-white opacity-50" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center`}>
                        <dept.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{dept.name}</h3>
                        <p className="text-sm text-muted-foreground">{dept.doctors} Specialist Doctors</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{dept.description}</p>

                    <div className="mb-5">
                      <p className="text-sm font-semibold text-foreground mb-2">Key Treatments:</p>
                      <div className="flex flex-wrap gap-2">
                        {dept.treatments.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => navigate('/appointment')}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                      <a href="tel:+911800123456">
                        <Button variant="outline" className="w-full sm:w-auto">
                          <Phone className="w-4 h-4 mr-2" />
                          Call for Info
                        </Button>
                      </a>
                    </div>
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
