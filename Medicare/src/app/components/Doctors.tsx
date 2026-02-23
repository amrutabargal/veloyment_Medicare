import { motion } from 'motion/react';
import { Star, Award, Calendar, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useNavigate } from 'react-router-dom';

export function Doctors() {
  const navigate = useNavigate();

  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      experience: '20+ Years',
      rating: 4.9,
      reviews: 850,
      image: 'https://images.unsplash.com/photo-1698465281093-9f09159733b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZW5pb3IlMjBkb2N0b3IlMjBtYWxlfGVufDF8fHx8MTc3MDk2NjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
      qualifications: 'MBBS, MD, DM (Cardiology)'
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      experience: '15+ Years',
      rating: 4.8,
      reviews: 720,
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      qualifications: 'MBBS, MD (Pediatrics)'
    },
    {
      name: 'Dr. Amit Patel',
      specialty: 'Neurologist',
      experience: '18+ Years',
      rating: 4.9,
      reviews: 920,
      image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NjYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      qualifications: 'MBBS, MD, DM (Neurology)'
    },
    {
      name: 'Dr. Sneha Reddy',
      specialty: 'General Physician',
      experience: '12+ Years',
      rating: 4.7,
      reviews: 650,
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      qualifications: 'MBBS, MD (Internal Medicine)'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Expert Team</span>
          <h2 className="text-4xl font-semibold text-foreground mt-2 mb-4">
            Our Specialist Doctors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals dedicated to providing exceptional care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                {/* Doctor Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                    <Button
                      className="w-full bg-white text-primary hover:bg-gray-100 flex items-center justify-center gap-2"
                      onClick={() => navigate('/appointment')}
                    >
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </Button>
                    <a href="tel:+911800123456" className="block">
                      <Button
                        variant="outline"
                        className="w-full bg-white/90 text-green-600 hover:bg-green-50 flex items-center justify-center gap-2 border-green-200"
                      >
                        <Phone className="w-4 h-4" />
                        Call to Book
                      </Button>
                    </a>
                  </div>

                  {/* Award Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-full shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-3">{doctor.qualifications}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(doctor.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                    <span className="text-sm text-muted-foreground">({doctor.reviews})</span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">Experience:</span>
                    <span className="ml-2">{doctor.experience}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2"
            onClick={() => navigate('/doctors')}
          >
            View All Doctors
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
