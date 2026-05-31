import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak & Sosial Media — Koopiantese.id" },
      {
        name: "description",
        content:
          "Kunjungi Koopiantese.id, sapa kami di Instagram & TikTok @koopiantese.id, atau hubungi langsung via WhatsApp.",
      },
      { property: "og:title", content: "Kontak & Sosial Media — Koopiantese.id" },
      { property: "og:description", content: "Lokasi, sosial media, dan WhatsApp Koopiantese.id." },
      { property: "og:url", content: "/kontak" },
    ],
    links: [{ rel: "canonical", href: "/kontak" }],
  }),
  component: KontakPage,
});

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
    </svg>
  );
}

function KontakPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[var(--brown)]">
            Kontak & Sosial
          </p>
          <h1 className="font-serif text-5xl leading-tight text-[var(--navy)] md:text-6xl">
            Mari berbincang, <span className="italic text-[var(--brown)]">singgah sebentar.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--ink)]/70">
            Kami senang mendengar ceritamu. Temui kami langsung, sapa di sosial media, atau cukup
            ketuk WhatsApp di bawah.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-black/5 shadow-sm md:col-span-3"
          >
            <iframe
              title="Lokasi Koopiantese.id"
              src="https://www.google.com/maps?q=koopiantese.id&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* SOCIAL + WA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6 md:col-span-2"
          >
            <div className="rounded-2xl border border-black/5 bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brown)]">
                Sosial Media
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[var(--navy)]">@koopiantese.id</h3>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://instagram.com/koopiantese.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:border-[var(--navy)]"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="https://tiktok.com/@koopiantese.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:border-[var(--navy)]"
                >
                  <TikTokIcon className="h-4 w-4" /> TikTok
                </a>
              </div>
            </div>

            <motion.a
              href="https://wa.me/6285285897778"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="group flex items-center justify-between rounded-2xl bg-[var(--navy)] p-7 text-[var(--cream)] shadow-lg transition hover:bg-[var(--ink)]"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--cream)]/60">
                  WhatsApp
                </p>
                <h3 className="mt-2 font-serif text-2xl">Hubungi Kami</h3>
                <p className="mt-1 text-sm text-[var(--cream)]/70">Respon cepat di jam ramai.</p>
              </div>
              <div className="rounded-full bg-[var(--cream)]/10 p-4 transition group-hover:bg-[var(--cream)]/20">
                <MessageCircle className="h-6 w-6" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
