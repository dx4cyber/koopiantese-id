import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import maskot from "../assets/maskot-3d.png";
import gofood from "../assets/gofood.png";
import grabfood from "../assets/grabfood.png";
import shopeefood from "../assets/shopeefood.png";
import { MessageCircle } from "lucide-react";
import { MajoSection } from "../components/MajoSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koopiantese.id — Secangkir Hangat, Sejuta Cerita" },
      {
        name: "description",
        content:
          "Cafe minimalis dengan kopi hangat berkualitas, suasana tenang, dan keramahan khas. Pesan via ojol favoritmu.",
      },
      { property: "og:title", content: "Koopiantese.id — Secangkir Hangat, Sejuta Cerita" },
      {
        property: "og:description",
        content: "Cafe minimalis dengan kopi hangat berkualitas dan suasana tenang.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillars = [
  { title: "Hangat", desc: "Setiap cangkir disajikan dengan keramahan yang tulus." },
  { title: "Tenang", desc: "Ruang yang dirancang untuk pelarian sejenak dari hiruk." },
  { title: "Berkualitas", desc: "Biji pilihan, diolah dengan presisi dan rasa." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[var(--brown)]">
              Koopiantese · Est. Cafe
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-[var(--navy)] md:text-7xl">
              Secangkir Hangat,
              <br />
              <span className="italic text-[var(--brown)]">Sejuta Cerita.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--ink)]/70">
              Sebuah ruang sederhana untuk menyeruput perlahan, berbincang lirih, dan menemukan
              kembali ritme yang hilang — satu cangkir pada satu waktu.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/layanan"
                className="rounded-full bg-[var(--navy)] px-7 py-3 text-sm tracking-wide text-[var(--cream)] transition hover:bg-[var(--ink)]"
              >
                Pesan via Ojol
              </Link>
              <Link
                to="/kontak"
                className="rounded-full border border-[var(--navy)]/20 px-7 py-3 text-sm tracking-wide text-[var(--navy)] transition hover:border-[var(--navy)]"
              >
                Kunjungi Kami
              </Link>
            </div>
          </motion.div>

          {/* MASCOT 3D */}
          <div className="relative flex items-center justify-center">
            <motion.div
              aria-hidden
              className="absolute -inset-10 rounded-full bg-gradient-to-b from-[var(--brown)]/10 via-[var(--navy)]/5 to-transparent blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <motion.img
              src={maskot}
              alt="Maskot Koopiantese, musang barista 3D memegang secangkir kopi hangat"
              width={1024}
              height={1024}
              className="relative z-10 w-[200px] drop-shadow-[0_30px_40px_rgba(15,27,61,0.25)] sm:w-[280px] md:w-[440px]"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                y: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.6 },
                rotate: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.6 },
              }}
            />
            {/* soft ground shadow that breathes */}
            <motion.div
              aria-hidden
              className="absolute bottom-2 left-1/2 z-0 h-4 w-48 -translate-x-1/2 rounded-full bg-[var(--navy)]/25 blur-xl md:w-64"
              animate={{ scaleX: [1, 0.85, 1], opacity: [0.35, 0.22, 0.35] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* ORDER CHANNELS */}
      <section className="border-t border-black/5 bg-white/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-[var(--brown)]">
              Pesan & Kontak
            </p>
            <h2 className="font-serif text-3xl text-[var(--navy)] md:text-4xl">
              Kemudahan Pesan via Ojol{" "}
              <span className="italic text-[var(--brown)]">& Info Cafe</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink)]/70">
              Pilih cara termudah untuk menikmati Koopiantese.id — pesan via ojol favoritmu atau
              hubungi admin langsung.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "GoFood",
                desc: "Pesan cepat lewat aplikasi Gojek.",
                logo: gofood,
                url: "https://gofood.co.id/",
              },
              {
                name: "GrabFood",
                desc: "Antar nyaman bersama Grab.",
                logo: grabfood,
                url: "https://r.grab.com/o/ENNRRRBz",
              },
              {
                name: "ShopeeFood",
                desc: "Diskon spesial via ShopeeFood.",
                logo: shopeefood,
                url: "https://spf.shopee.co.id/3VhSWSbojx",
              },
            ].map((c, i) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--navy)]/5">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-9 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-serif text-lg text-[var(--navy)]">{c.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink)]/60">{c.desc}</p>
                <div className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-[var(--navy)]">
                  Pesan sekarang
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </motion.a>
            ))}

            <Link
              to="/kontak"
              className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-[3px] hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--navy)]/5">
                <MessageCircle className="h-6 w-6 text-[var(--navy)]" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-[var(--navy)]">Hubungi Admin</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink)]/60">
                Chat langsung dengan tim kami.
              </p>
              <div className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-[var(--navy)]">
                Hubungi
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-black/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-xl font-serif text-3xl text-[var(--navy)] md:text-4xl"
          >
            Tiga hal sederhana yang kami pegang teguh.
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-[var(--navy)]/15 pt-6"
              >
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--brown)]">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/70">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <MajoSection />
    </div>
  );
}
