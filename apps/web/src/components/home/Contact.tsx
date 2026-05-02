import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const googleMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.762594639074!2d80.0673201!3d13.050777899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b6bcb16beb1%3A0x79358cd8ead64fa5!2sANT%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1777688296593!5m2!1sen!2sin";
const googleMapOpenUrl =
  "https://maps.google.com/?q=No%2035%2C%20Gundumedu%20Puthuvattaram%2C%20Thirumazhisai%2C%20Chennai%20600123%2C%20Tamilnadu";

export default function Contact() {
  const hasMapEmbed = Boolean(googleMapEmbedUrl);

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <h2 className="section-title">Contact Us</h2>

        <p className="section-copy">
          Reach out to us for training programs, enrollments, and collaborations.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card overflow-hidden rounded-[28px] p-4">
            {hasMapEmbed ? (
              <div className="h-[340px] w-full sm:h-[380px] lg:h-[420px]">
                <iframe
                  title="ANT Developers Location"
                  src={googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full rounded-2xl border border-white/10"
                />
              </div>
            ) : (
              <div className="flex h-[340px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-center sm:h-[380px] lg:h-[420px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <MapPin className="h-6 w-6" />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-beige">
                  Location Map
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Map preview unavailable
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  Google Maps preview could not be loaded here. You can still
                  open the location directly in Google Maps.
                </p>

                <a
                  href={googleMapOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-6 inline-flex items-center gap-2"
                >
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          <div className="glass-card rounded-[28px] p-6 sm:p-7 lg:p-8">
            <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              ANT
              <br />
              Developers
            </h3>

            <div className="mt-8 space-y-6">
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                href="tel:+919789682485"
                label="+91 9789682485"
              />

              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                href="mailto:admin@antdevelopers.com"
                label="admin@antdevelopers.com"
              />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <MapPin className="h-5 w-5" />
                </div>

                <a
                  href={googleMapOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-block text-base leading-8 text-slate-200 transition-colors duration-300 hover:text-brand-orange sm:text-lg"
                >
                  <span className="bg-gradient-to-r from-brand-orange to-brand-orange bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:bg-[length:100%_1px]">
                    No 35, Gundumedu Puthuvattaram,
                    <br />
                    Thirumazhisai,
                    <br />
                    Chennai - 600123, Tamilnadu.
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