import { motion } from 'motion/react';
import { Star, Award, Calendar, Phone, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const allDoctors = [
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    experience: '20+ Years',
    rating: 4.9,
    reviews: 850,
    image: 'https://images.unsplash.com/photo-1698465281093-9f09159733b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZW5pb3IlMjBkb2N0b3IlMjBtYWxlfGVufDF8fHx8MTc3MDk2NjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MD, DM (Cardiology)',
    timing: '10:00 AM - 1:00 PM',
    fee: '800'
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    department: 'Pediatrics',
    experience: '15+ Years',
    rating: 4.8,
    reviews: 720,
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MD (Pediatrics)',
    timing: '10:00 AM - 2:00 PM',
    fee: '600'
  },
  {
    name: 'Dr. Amit Patel',
    specialty: 'Neurologist',
    department: 'Neurology',
    experience: '18+ Years',
    rating: 4.9,
    reviews: 920,
    image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NjYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MD, DM (Neurology)',
    timing: '9:00 AM - 12:00 PM',
    fee: '1000'
  },
  {
    name: 'Dr. Sneha Reddy',
    specialty: 'General Physician',
    department: 'General Medicine',
    experience: '12+ Years',
    rating: 4.7,
    reviews: 650,
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MD (Internal Medicine)',
    timing: '9:00 AM - 1:00 PM',
    fee: '500'
  },
  {
    name: 'Dr. Vikram Mehta',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    experience: '22+ Years',
    rating: 4.8,
    reviews: 780,
    image: 'https://images.unsplash.com/photo-1698465281093-9f09159733b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZW5pb3IlMjBkb2N0b3IlMjBtYWxlfGVufDF8fHx8MTc3MDk2NjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MS, MCh (Cardiac Surgery)',
    timing: '2:00 PM - 5:00 PM',
    fee: '1200'
  },
  {
    name: 'Dr. Meera Kulkarni',
    specialty: 'Gynecologist',
    department: 'Gynecology',
    experience: '16+ Years',
    rating: 4.9,
    reviews: 900,
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MS (OBG), DNB',
    timing: '9:00 AM - 1:00 PM',
    fee: '700'
  },
  {
    name: 'Dr. Arun Joshi',
    specialty: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    experience: '19+ Years',
    rating: 4.8,
    reviews: 680,
    image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NjYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MS (Ortho), Fellowship Joint Replacement',
    timing: '10:00 AM - 2:00 PM',
    fee: '900'
  },
  {
    name: 'Dr. Ravi Gupta',
    specialty: 'Ophthalmologist',
    department: 'Ophthalmology',
    experience: '14+ Years',
    rating: 4.7,
    reviews: 540,
    image: 'https://images.unsplash.com/photo-1698465281093-9f09159733b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZW5pb3IlMjBkb2N0b3IlMjBtYWxlfGVufDF8fHx8MTc3MDk2NjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    qualifications: 'MBBS, MS (Ophthalmology)',
    timing: '10:00 AM - 3:00 PM',
    fee: '600'
  },
];

const departmentFilters = ['All', ...new Set(allDoctors.map(d => d.department))];

export function DoctorsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredDoctors = allDoctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === 'All' || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold inline-block mb-4">
            Our Expert Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Our Doctors
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Meet our team of highly qualified specialist doctors dedicated to your health and well-being.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors by name or specialty..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {departmentFilters.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDept === dept
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 border hover:border-primary hover:text-primary'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
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

                  {/* Quick Book Button */}
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
                        className="w-full bg-white/90 text-green-600 hover:bg-green-50 flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call to Book
                      </Button>
                    </a>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-full shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{doctor.specialty}</p>
                  <p className="text-xs text-muted-foreground mb-3">{doctor.qualifications}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(doctor.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold">{doctor.rating}</span>
                    <span className="text-xs text-muted-foreground">({doctor.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3 mt-3">
                    <span>{doctor.experience} Exp</span>
                    <span>{doctor.timing}</span>
                    <span className="font-semibold text-foreground">Rs. {doctor.fee}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No doctors found matching your search.</p>
            <Button variant="outline" className="mt-4" onClick={() => { setSearch(''); setSelectedDept('All'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
