import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Stethoscope,
  CheckCircle,
  ArrowLeft,
  FileText,
  MapPin
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const departments = [
  'Cardiology',
  'Neurology',
  'Pediatrics',
  'General Medicine',
  'Emergency Care',
  'Laboratory Services',
  'Ophthalmology',
  'Orthopedics',
  'Gynecology',
  'Dermatology',
  'ENT',
  'Urology'
];

const doctors: Record<string, { name: string; time: string }[]> = {
  'Cardiology': [
    { name: 'Dr. Rajesh Kumar', time: '10:00 AM - 1:00 PM' },
    { name: 'Dr. Vikram Mehta', time: '2:00 PM - 5:00 PM' },
  ],
  'Neurology': [
    { name: 'Dr. Amit Patel', time: '9:00 AM - 12:00 PM' },
    { name: 'Dr. Suresh Nair', time: '3:00 PM - 6:00 PM' },
  ],
  'Pediatrics': [
    { name: 'Dr. Priya Sharma', time: '10:00 AM - 2:00 PM' },
    { name: 'Dr. Anita Desai', time: '4:00 PM - 7:00 PM' },
  ],
  'General Medicine': [
    { name: 'Dr. Sneha Reddy', time: '9:00 AM - 1:00 PM' },
    { name: 'Dr. Manoj Tiwari', time: '2:00 PM - 6:00 PM' },
  ],
  'Emergency Care': [
    { name: 'Dr. Rahul Verma', time: '24/7 Available' },
    { name: 'Dr. Kavita Singh', time: '24/7 Available' },
  ],
  'Orthopedics': [
    { name: 'Dr. Arun Joshi', time: '10:00 AM - 2:00 PM' },
    { name: 'Dr. Deepak Sharma', time: '3:00 PM - 7:00 PM' },
  ],
  'Gynecology': [
    { name: 'Dr. Meera Kulkarni', time: '9:00 AM - 1:00 PM' },
    { name: 'Dr. Sunita Rao', time: '2:00 PM - 5:00 PM' },
  ],
  'Ophthalmology': [
    { name: 'Dr. Ravi Gupta', time: '10:00 AM - 3:00 PM' },
  ],
  'Dermatology': [
    { name: 'Dr. Pooja Malhotra', time: '11:00 AM - 4:00 PM' },
  ],
  'ENT': [
    { name: 'Dr. Sanjay Kapoor', time: '9:00 AM - 1:00 PM' },
  ],
  'Urology': [
    { name: 'Dr. Nitin Agarwal', time: '10:00 AM - 2:00 PM' },
  ],
  'Laboratory Services': [
    { name: 'Dr. Alok Mishra', time: '8:00 AM - 8:00 PM' },
  ],
};

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM'
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  symptoms: string;
}

export function AppointmentPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    symptoms: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Please select gender';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time slot';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    const id = 'MCP-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase();
    setBookingId(id);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.success('Appointment Booked Successfully!', {
      description: `Your booking ID is ${id}. We will confirm via call/SMS shortly.`,
      duration: 8000,
    });
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];
  // Max date: 30 days from now
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const availableDoctors = formData.department ? (doctors[formData.department] || []) : [];

  if (isSubmitted) {
    return (
      <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-12 text-center shadow-xl border-0">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-14 h-14 text-green-600" />
              </motion.div>

              <h1 className="text-3xl font-bold text-foreground mb-2">Appointment Booked!</h1>
              <p className="text-muted-foreground mb-8">
                Your appointment has been successfully scheduled. We will contact you shortly to confirm.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left space-y-3">
                <div className="flex justify-between items-center border-b border-blue-100 pb-3">
                  <span className="text-sm text-muted-foreground">Booking ID</span>
                  <span className="font-bold text-primary text-lg">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Patient</span>
                  <span className="font-medium">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Phone</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Department</span>
                  <span className="font-medium">{formData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Doctor</span>
                  <span className="font-medium">{formData.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <span className="font-medium">{new Date(formData.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Time</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-sm text-yellow-800">
                <strong>Note:</strong> Our team will call you at <strong>{formData.phone}</strong> within 30 minutes to confirm your appointment. Please keep your phone reachable.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
                <a href="tel:+911800123456">
                  <Button variant="outline" className="border-2 w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Hospital
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold inline-block mb-4">
            Online Appointment Booking
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Book Your Appointment
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill in the details below to schedule an appointment with our expert doctors. We'll confirm your booking via phone call.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          {[
            { num: 1, label: 'Patient Info' },
            { num: 2, label: 'Schedule' },
            { num: 3, label: 'Confirm' },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= s.num
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                </div>
                <span className={`text-xs mt-1 ${step >= s.num ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div className={`w-16 sm:w-24 h-1 mx-2 rounded ${step > s.num ? 'bg-primary' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Patient Info */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 md:p-8 shadow-lg border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Patient Information</h2>
                  <p className="text-sm text-muted-foreground">Enter your personal details</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-sm text-gray-600">
                      +91
                    </span>
                    <Input
                      id="phone"
                      placeholder="Enter 10-digit number"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className={`rounded-l-none ${errors.phone ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    min="0"
                    max="150"
                    value={formData.age}
                    onChange={(e) => updateField('age', e.target.value)}
                    className={errors.age ? 'border-red-500' : ''}
                  />
                  {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                </div>

                <div>
                  <Label>Gender *</Label>
                  <div className="flex gap-3 mt-2">
                    {['Male', 'Female', 'Other'].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => updateField('gender', g)}
                        className={`flex-1 py-2.5 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                          formData.gender === g
                            ? 'border-primary bg-blue-50 text-primary'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8"
                  onClick={handleNext}
                >
                  Next: Select Schedule
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Step 2: Schedule */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 md:p-8 shadow-lg border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Select Schedule</h2>
                  <p className="text-sm text-muted-foreground">Choose department, doctor, date & time</p>
                </div>
              </div>

              {/* Department Selection */}
              <div className="mb-6">
                <Label>Select Department *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      type="button"
                      onClick={() => {
                        updateField('department', dept);
                        updateField('doctor', '');
                      }}
                      className={`py-2.5 px-3 rounded-lg border-2 text-sm font-medium transition-all text-center ${
                        formData.department === dept
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
                {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
              </div>

              {/* Doctor Selection */}
              {formData.department && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-6"
                >
                  <Label>Select Doctor *</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {availableDoctors.map((doc) => (
                      <button
                        key={doc.name}
                        type="button"
                        onClick={() => updateField('doctor', doc.name)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.doctor === doc.name
                            ? 'border-primary bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Stethoscope className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className={`font-semibold text-sm ${formData.doctor === doc.name ? 'text-primary' : 'text-foreground'}`}>
                              {doc.name}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {doc.time}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.doctor && <p className="text-red-500 text-xs mt-1">{errors.doctor}</p>}
                </motion.div>
              )}

              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <Label htmlFor="date">Select Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    min={today}
                    max={maxDate}
                    value={formData.date}
                    onChange={(e) => updateField('date', e.target.value)}
                    className={errors.date ? 'border-red-500' : ''}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <Label>Select Time Slot *</Label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 mt-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => updateField('time', time)}
                      className={`py-2 px-2 rounded-lg border text-xs font-medium transition-all ${
                        formData.time === time
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
              </div>

              {/* Symptoms */}
              <div className="mb-6">
                <Label htmlFor="symptoms">Symptoms / Reason for Visit (Optional)</Label>
                <Textarea
                  id="symptoms"
                  placeholder="Describe your symptoms or reason for the appointment..."
                  rows={3}
                  value={formData.symptoms}
                  onChange={(e) => updateField('symptoms', e.target.value)}
                />
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8"
                  onClick={handleNext}
                >
                  Review & Confirm
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Step 3: Confirmation Review */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 md:p-8 shadow-lg border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Review & Confirm</h2>
                  <p className="text-sm text-muted-foreground">Please review your appointment details</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Patient Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between bg-white p-3 rounded-lg">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-medium">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded-lg">
                    <span className="text-muted-foreground">Phone</span>
                    <span className="font-medium">+91 {formData.phone}</span>
                  </div>
                  {formData.email && (
                    <div className="flex justify-between bg-white p-3 rounded-lg">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                  )}
                  <div className="flex justify-between bg-white p-3 rounded-lg">
                    <span className="text-muted-foreground">Age / Gender</span>
                    <span className="font-medium">{formData.age} yrs / {formData.gender}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 space-y-4 mt-4">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Appointment Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between bg-white p-3 rounded-lg">
                    <span className="text-muted-foreground">Department</span>
                    <span className="font-medium">{formData.department}</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded-lg">
                    <span className="text-muted-foreground">Doctor</span>
                    <span className="font-medium">{formData.doctor}</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded-lg">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">
                      {new Date(formData.date).toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded-lg">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{formData.time}</span>
                  </div>
                </div>
                {formData.symptoms && (
                  <div className="bg-white p-3 rounded-lg text-sm">
                    <span className="text-muted-foreground">Symptoms:</span>
                    <p className="font-medium mt-1">{formData.symptoms}</p>
                  </div>
                )}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 text-sm text-green-800">
                <strong>Confirmation:</strong> After booking, our team will call you at <strong>+91 {formData.phone}</strong> within 30 minutes to confirm your appointment.
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Edit Details
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 px-8"
                  onClick={handleSubmit}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Confirm Appointment
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Hospital Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <Card className="p-4 border-0 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Call for Appointment</p>
              <a href="tel:+911800123456" className="font-semibold text-foreground hover:text-primary transition-colors">
                +91 1800-123-456
              </a>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">OPD Hours</p>
              <p className="font-semibold text-foreground">9:00 AM - 8:00 PM</p>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="font-semibold text-foreground text-sm">MG Road, New Delhi</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
