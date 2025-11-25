import { Testimonials, ContactSection } from "@/app/__features";

export function RightColumn() {
  return (
    <section className="space-y-10">
      <Testimonials />
      <ContactSection />
    </section>
  );
}