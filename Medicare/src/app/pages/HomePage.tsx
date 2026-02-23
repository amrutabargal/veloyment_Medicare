import { Hero } from '../components/Hero';
import { Departments } from '../components/Departments';
import { Doctors } from '../components/Doctors';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { AppointmentBanner } from '../components/AppointmentBanner';

export function HomePage() {
  return (
    <>
      <Hero />
      <Departments />
      <Doctors />
      <Services />
      <AppointmentBanner />
      <Testimonials />
    </>
  );
}
