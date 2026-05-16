import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const googleMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.762594639074!2d80.0673201!3d13.050777899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b6bcb16beb1%3A0x79358cd8ead64fa5!2sANT%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1777688296593!5m2!1sen!2sin";

const googleMapOpenUrl =
  "https://maps.google.com/?q=No%2035%2C%20Gundumedu%20Puthuvattaram%2C%20Thirumazhisai%2C%20Chennai%20600123%2C%20Tamilnadu";

export default function Contact() {
  const hasMapEmbed = Boolean(googleMapEmbedUrl);

  return (
    <section
      id="contact"
      className="bg-light-section relative overflow-hidden py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,234,0,0.08),transparent_30%)]" />

      <div className="section-shell relative z-10">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#6B7280]">
            CONTACT US
          </p>

          <h2 className="section-title text-[#041C32]">
            Let’s Build Something
            <span className="block text-[#F5EA00] drop-shadow-[0_0_10px_rgba(245,234,0,0.28)]">
              Powerful Together
            </span>
          </h2>

          <p className="section-copy text-[#475569]">
            Reach out to us for training programs, collaborations,
            corporate activities, and premium learning experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* MAP CARD */}
          <div className="light-card overflow-hidden rounded-[32px] p-4">
            {hasMapEmbed ? (
              <div className="h-[340px] w-full overflow-hidden rounded-3xl border border-[#041C32]/10 sm:h-[380px] lg:h-[420px]">
                <iframe
                  title="ANT Developers Location"
                  src={googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="flex h-[340px] flex-col items-center justify-center rounded-3xl border border-[#041C32]/10 bg-white/70 px-6 text-center sm:h-[380px] lg:h-[420px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EA00]/20 text-[#041C32] shadow-[0_10px_30px_rgba(245,234,0,0.25)]">
                  <MapPin className="h-7 w-7" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
                  Location Map
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#041C32]">
                  Map preview unavailable
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#475569]">
                  Google Maps preview could not be loaded here.
                  You can still open the location directly in Google Maps.
                </p>

                <a
                  href={googleMapOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-7 inline-flex items-center gap-2"
                >
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          {/* CONTACT CARD */}
          <div className="light-card rounded-[32px] p-6 sm:p-8 lg:p-10">
            <div className="inline-flex rounded-full border border-[#041C32]/10 bg-[#F5EA00]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#041C32]">
              ANT DEVELOPERS
            </div>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-[#041C32]">
              Get in Touch
            </h3>

            <p className="mt-4 text-base leading-7 text-[#475569]">
              We’re available for corporate training,
              outdoor development programs,
              team-building events, and collaborations.
            </p>

            <div className="mt-10 space-y-7">
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                href="tel:+919789682485"
                label="+91 9789682485"
              />

              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                href="mailto:admin@ant-developers.com"
                label="admin@ant-developers.com"
              />

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5EA00]/18 text-[#041C32] shadow-[0_10px_25px_rgba(245,234,0,0.18)]">
                  <MapPin className="h-5 w-5" />
                </div>

                <a
                  href={googleMapOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-block text-base leading-8 text-[#334155] transition-colors duration-300 hover:text-[#041C32] sm:text-lg"
                >
                  <span className="bg-gradient-to-r from-[#F5EA00] to-[#F5EA00] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:bg-[length:100%_2px]">
                    No 35, Gundumedu Puthuvattaram,
                    <br />
                    Thirumazhisai,
                    <br />
                    Chennai - 600123, Tamilnadu.
                  </span>
                </a>
              </div>
            </div>

            {/* Decorative Bottom Glow */}
            <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[#F5EA00]/50 to-transparent" />

            <div className="mt-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#F5EA00] shadow-[0_0_14px_rgba(245,234,0,0.9)]" />

              <p className="text-sm font-medium text-[#475569]">
                Fast Response • Premium Support • Trusted Training Partner
              </p>
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
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5EA00]/18 text-[#041C32] shadow-[0_10px_25px_rgba(245,234,0,0.18)]">
        {icon}
      </div>

      <a
        href={href}
        className="group inline-block text-base font-medium text-[#334155] transition-colors duration-300 hover:text-[#041C32] sm:text-[1.15rem]"
      >
        <span className="bg-gradient-to-r from-[#F5EA00] to-[#F5EA00] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:bg-[length:100%_2px]">
          {label}
        </span>
      </a>
    </div>
  );
}