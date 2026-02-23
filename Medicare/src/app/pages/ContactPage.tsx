import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Ambulance,
  Calendar,
  CheckCircle,
  PhoneCall
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitted(true);
    toast.success('Message Sent Successfully!', {
      description: 'Our team will get back to you within 24 hours.',
    });
  };

  const contactCards = [
    {
      icon: PhoneCall,
      title: 'Call Us Now',
      subtitle: 'Available 24/7',
      details: [
        { label: 'Emergency', value: '+91 1800-123-456', href: 'tel:+911800123456' },
        { label: 'Appointment', value: '+91 1800-765-432', href: 'tel:+911800765432' },
        { label: 'General Inquiry', value: '+91 11-2345-6789', href: 'tel:+911123456789' },
      ],
      color: 'bg-green-500',
      bgLight: 'bg-green-50',
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'We reply within 24 hours',
      details: [
        { label: 'General', value: 'info@medicareplus.in', href: 'mailto:info@medicareplus.in' },
        { label: 'Appointments', value: 'book@medicareplus.in', href: 'mailto:book@medicareplus.in' },
        { label: 'Careers', value: 'hr@medicareplus.in', href: 'mailto:hr@medicareplus.in' },
      ],
      color: 'bg-blue-500',
      bgLight: 'bg-blue-50',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      subtitle: 'Walk-in welcome',
      details: [
        { label: 'Address', value: '123, MG Road, Connaught Place, New Delhi - 110001', href: 'https://maps.google.com?q=Connaught+Place+New+Delhi' },
      ],
      color: 'bg-red-500',
      bgLight: 'bg-red-50',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      subtitle: 'We are open',
      details: [
        { label: 'OPD', value: '9:00 AM - 8:00 PM', href: '' },
        { label: 'Emergency', value: '24/7 Open', href: '' },
        { label: 'Pharmacy', value: '24/7 Open', href: '' },
      ],
      color: 'bg-purple-500',
      bgLight: 'bg-purple-50',
    },
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
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're here to help. Reach out to us through any of the channels below or fill in the contact form.
          </p>
        </motion.div>

        {/* Quick Call Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 md:p-8 mb-10 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Ambulance className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency? Call Now!</h3>
                <p className="text-white/90">Our ambulance and emergency team is available 24/7</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+911800123456">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-6">
                  <Phone className="w-5 h-5 mr-2 animate-pulse" />
                  +91 1800-123-456
                </Button>
              </a>
              <a href="https://wa.me/911800123456" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all h-full">
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{card.subtitle}</p>
                <div className="space-y-2">
                  {card.details.map((detail, i) => (
                    <div key={i} className={`${card.bgLight} rounded-lg p-2.5`}>
                      <p className="text-xs text-muted-foreground">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 md:p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-6">Fill in the form and we'll get back to you shortly.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground mb-4">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <Button onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', email: '', subject: '', message: '' }); }}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPhone">Phone Number *</Label>
                      <Input
                        id="contactPhone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Email (Optional)</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Map & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Map */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7618154741754!2d77.21718131508157!3d28.63299998241849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
              />
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+911800123456" className="block">
                <Card className="p-5 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer bg-green-50 hover:bg-green-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Emergency Call</p>
                      <p className="font-bold text-green-700">+91 1800-123-456</p>
                    </div>
                  </div>
                </Card>
              </a>

              <a href="https://wa.me/911800123456" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="p-5 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer bg-emerald-50 hover:bg-emerald-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-bold text-emerald-700">Chat with us</p>
                    </div>
                  </div>
                </Card>
              </a>

              <a href="mailto:info@medicareplus.in" className="block">
                <Card className="p-5 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer bg-blue-50 hover:bg-blue-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-bold text-blue-700">info@medicareplus.in</p>
                    </div>
                  </div>
                </Card>
              </a>

              <Card
                className="p-5 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer bg-purple-50 hover:bg-purple-100 group"
                onClick={() => window.open('/appointment', '_self')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Book Online</p>
                    <p className="font-bold text-purple-700">Book Appointment</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
