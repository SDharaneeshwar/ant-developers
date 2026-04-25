import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-copy">
          Reach out to us for training programs, enrollments, and collaborations.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left - Map */}
          <div className="glass-card overflow-hidden rounded-[28px]">
            <div className="h-[340px] w-full sm:h-[380px] lg:h-[420px]">
              <iframe
                title="Team Concept Learners Location"
                src="https://www.google.com/maps?q=12A,%20Sengunthar%20Nagar%206th%20Street%20Peryasemur%20Post%20Erode%20638004&z=15&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          {/* Right - Contact Details */}
          <div className="glass-card rounded-[28px] p-6 sm:p-7 lg:p-8">
            <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Team Concept
              <br />
              Learners
            </h3>

            <div className="mt-8 space-y-6">
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                href="tel:+919600266639"
                label="+91 9600266639"
              />

              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                href="mailto:Info.tcl360@gmail.com"
                label="Info.tcl360@gmail.com"
              />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <MapPin className="h-5 w-5" />
                </div>

                <a
                  href="https://maps.google.com/?q=12A,%20Sengunthar%20Nagar%206th%20Street%20Peryasemur%20Post%20Erode%20638004"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-block text-base leading-8 text-slate-200 transition-colors duration-300 hover:text-brand-orange sm:text-lg"
                >
                  <span className="bg-gradient-to-r from-brand-orange to-brand-orange bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:bg-[length:100%_1px]">
                    12A, Sengunthar Nagar 6th Street,
                    <br />
                    Peryasemur Post,
                    <br />
                    Erode - 638004
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
        {icon}
      </div>

      <a
        href={href}
        className="group inline-block text-base text-slate-200 transition-colors duration-300 hover:text-brand-orange sm:text-[1.25rem]"
      >
        <span className="bg-gradient-to-r from-brand-orange to-brand-orange bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:bg-[length:100%_1px]">
          {label}
        </span>
      </a>
    </div>
  );
}