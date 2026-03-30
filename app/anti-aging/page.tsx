import { SurgeryResultsSection } from "@/components/anti-agings/beforeafter";
import BookAppointment from "@/components/anti-agings/contact";
import WelcomePatients from "@/components/anti-agings/cta";
import MedicalAboutSection from "@/components/anti-agings/doctor";
import FAQ from "@/components/anti-agings/faq";
import Footer from "@/components/anti-agings/footer";
import HeroBanner from "@/components/anti-agings/HeroBanner";
import Navbar from "@/components/anti-agings/navbar";
import TreatmentsWeOffer from "@/components/anti-agings/treatment-offer";
import OurValues from "@/components/anti-agings/treatments";
import Departments from "@/components/anti-agings/why-choose-us";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <OurValues />
      <SurgeryResultsSection />
      <TreatmentsWeOffer />
      <MedicalAboutSection />
      <Departments />
      <WelcomePatients />
      <FAQ />
      <BookAppointment />
      <Footer />
    </main>
  );
}
