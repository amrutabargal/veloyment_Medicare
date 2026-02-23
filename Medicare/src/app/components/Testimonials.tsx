import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ramesh Gupta',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1590905775253-a4f0f3c426ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwaGFwcHklMjBzbWlsaW5nJTIwaW5kaWFufGVufDF8fHx8MTc3MDk2NjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'MediCare Plus provided exceptional care during my cardiac treatment. The doctors were highly professional and the facilities are world-class. I am grateful for their dedication.',
      treatment: 'Cardiac Surgery'
    },
    {
      name: 'Priya Iyer',
      location: 'Bangalore, Karnataka',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The pediatric department is amazing. Dr. Sharma took great care of my daughter during her treatment. The staff is very caring and the hospital environment is child-friendly.',
      treatment: 'Pediatric Care'
    },
    {
      name: 'Amit Singh',
      location: 'Delhi NCR',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1698465281093-9f09159733b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZW5pb3IlMjBkb2N0b3IlMjBtYWxlfGVufDF8fHx8MTc3MDk2NjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'I underwent knee replacement surgery here and the results have been excellent. From consultation to post-operative care, everything was handled professionally.',
      treatment: 'Orthopedic Surgery'
    },
    {
      name: 'Sneha Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1590905775253-a4f0f3c426ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwaGFwcHklMjBzbWlsaW5nJTIwaW5kaWFufGVufDF8fHx8MTc3MDk2NjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The diagnostic services are top-notch with quick and accurate results. The staff is very helpful and the entire process was smooth and hassle-free.',
      treatment: 'Health Checkup'
    },
    {
      name: 'Rajiv Kumar',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NjYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Emergency services are excellent. They attended to me immediately and the doctors made sure I was comfortable throughout the treatment. Highly recommended!',
      treatment: 'Emergency Care'
    },
    {
      name: 'Meera Desai',
      location: 'Pune, Maharashtra',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwOTY2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The maternity ward and gynecology department provided excellent care during my pregnancy. The doctors and nurses were very supportive throughout.',
      treatment: 'Maternity Care'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Patient Stories</span>
          <h2 className="text-4xl font-semibold text-foreground mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our satisfied patients who have experienced our commitment to excellence in healthcare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white relative overflow-hidden group">
                {/* Quote Icon */}
                <div className="absolute -top-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-32 h-32 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 relative z-10 italic">
                  "{testimonial.text}"
                </p>

                {/* Treatment Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full">
                    {testimonial.treatment}
                  </span>
                </div>

                {/* Patient Info */}
                <div className="flex items-center gap-4 border-t pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50,000+', label: 'Happy Patients' },
            { value: '98%', label: 'Success Rate' },
            { value: '4.9/5', label: 'Patient Rating' },
            { value: '25+', label: 'Years of Service' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
