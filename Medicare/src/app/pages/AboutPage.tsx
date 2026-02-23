import { motion } from 'motion/react';
import { Award, Users, Heart, Clock, Shield, Target, CheckCircle, Building } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  const stats = [
    { value: '25+', label: 'Years of Excellence', icon: Award },
    { value: '500+', label: 'Expert Doctors', icon: Users },
    { value: '50,000+', label: 'Happy Patients', icon: Heart },
    { value: '24/7', label: 'Emergency Care', icon: Clock },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and kindness. Your comfort and well-being are our top priority.'
    },
    {
      icon: Shield,
      title: 'Patient Safety',
      description: 'We maintain the highest standards of safety and hygiene. Every protocol is designed to protect our patients.'
    },
    {
      icon: Target,
      title: 'Clinical Excellence',
      description: 'Our doctors and staff are among the best in the country, delivering world-class medical care with precision.'
    },
    {
      icon: Building,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities with the latest medical technology for accurate diagnosis and effective treatment.'
    },
  ];

  const milestones = [
    { year: '1999', event: 'MediCare Plus founded with 50 beds' },
    { year: '2005', event: 'Expanded to 200 beds, NABH Accredited' },
    { year: '2010', event: 'Launch of Cardiology & Neurology super-specialties' },
    { year: '2015', event: 'ISO Certified, 500+ beds operational' },
    { year: '2020', event: 'Digital Health Records & Telemedicine launched' },
    { year: '2024', event: 'Recognized as India\'s Best Hospital (5 Star Rating)' },
  ];

  return (
    <section className="pt-28 pb-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 mb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About MediCare Plus</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Leading multi-specialty hospital in India, committed to providing world-class healthcare since 1999.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-28 mb-16 relative z-20"
        >
          {stats.map((stat, i) => (
            <Card key={i} className="p-6 text-center border-0 shadow-xl bg-white">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Story</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
              25+ Years of Healthcare Excellence
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 1999, MediCare Plus has grown from a small 50-bed hospital to one of India's most trusted multi-specialty healthcare institutions. Our journey has been driven by a single mission: to make quality healthcare accessible to everyone.
            </p>
            <p className="text-muted-foreground mb-6">
              Today, we operate with over 500 beds, 500+ specialist doctors, and the most advanced medical technology. We are NABH accredited, ISO certified, and have been recognized with numerous awards for excellence in patient care.
            </p>
            <div className="space-y-3">
              {['NABH Accredited Hospital', 'ISO 9001:2015 Certified', '500+ Specialist Doctors', 'State-of-the-art ICU & OT', 'Cashless Insurance for 200+ companies'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1720463903218-73720e80286d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwbW9kZXJufGVufDF8fHx8MTc3MDk2NjExMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="MediCare Plus Hospital"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm">Years of Trust</div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Values</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">What Drives Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 border-0 shadow-md hover:shadow-xl transition-all h-full text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Journey</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Milestones</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 mb-6"
            >
              <div className="w-20 flex-shrink-0 text-right">
                <span className="font-bold text-primary text-lg">{milestone.year}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-blue-100" />
                {i < milestones.length - 1 && <div className="w-0.5 h-12 bg-blue-200" />}
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border">
                <p className="text-foreground font-medium">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Experience World-Class Healthcare?</h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Book an appointment with our specialist doctors and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8"
              onClick={() => navigate('/appointment')}
            >
              Book Appointment
            </Button>
            <a href="tel:+911800123456">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-8">
                Call: +91 1800-123-456
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
