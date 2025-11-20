import ContactForm from "@/components/Contact/ContactForm";
import ReadySection from "@/components/ReadySection";

export const metadata = {
  title: "Contact Us | Centre for Scientific Outreach",
  description:
    "Contact the Centre for Scientific Outreach to learn more about our science education initiatives, outreach programs, and ways to get involved. We're here to connect, collaborate, and empower communities.",
};

export default function ContactPage() {
  return (
    <div className="relative mt-20">
      <ContactForm />
      <ReadySection />

      {/* Add more sections below */}
    </div>
  );
}
