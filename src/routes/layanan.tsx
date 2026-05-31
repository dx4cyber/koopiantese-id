import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import gofood from "../assets/gofood.png";
import grabfood from "../assets/grabfood.png";
import shopeefood from "../assets/shopeefood.png";

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: "Layanan & Akses — Koopiantese.id" },
      {
        name: "description",
        content:
          "Pesan Koopiantese.id melalui GoFood, GrabFood, dan ShopeeFood. Kopi hangat siap diantar.",
      },
      { property: "og:title", content: "Layanan & Akses — Koopiantese.id" },
      { property: "og:description", content: "Pesan via GoFood, GrabFood, dan ShopeeFood." },
      { property: "og:url", content: "/layanan" },
    ],
    links: [{ rel: "canonical", href: "/layanan" }],
  }),
  component: LayananPage,
});

const services = [
  {
    name: "GoFood",
    tag: "by Gojek",
    logo: gofood,
    url: "https://gofood.co.id/",
    desc: "Pesan cepat lewat aplikasi Gojek.",
  },
  {
    name: "GrabFood",
    tag: "by Grab",
    logo: grabfood,
    url: "https://r.grab.com/o/ENNRRRBz",
    desc: "Antar nyaman bersama Grab.",
  },
  {
    name: "ShopeeFood",
    tag: "by Shopee",
    logo: shopeefood,
    url: "https://spf.shopee.co.id/3VhSWSbojx",
    desc: "Diskon spesial via ShopeeFood.",
  },
];

const testimonials = [
  {
    q: "Tempat ternyaman untuk menyendiri sambil ditemani secangkir kopi yang jujur.",
    a: "— Pelanggan setia",
  },
  { q: "Rasanya seperti pulang. Hangat, tenang, dan selalu ingin kembali.", a: "— Anonim" },
  { q: "Kopi yang diseduh dengan rasa, bukan sekadar resep.", a: "— Pengunjung" },
];

function LayananPage() {
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
            Layanan & Akses
          </p>
          <h1 className="font-serif text-5xl leading-tight text-[var(--navy)] md:text-6xl">
            Kapan pun, di mana pun — <span className="italic text-[var(--brown)]">kami antar.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--ink)]/70">
            Kini Koopiantese.id melayani pesanan melalui mitra ojek online favoritmu. Pilih salah
            satu di bawah, dan biarkan secangkir hangat kami sampai ke pintumu.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-xl sm:p-7"
            >
              <div>
                <div className="flex h-28 items-center justify-center rounded-xl bg-[var(--cream)]/60 p-4">
                  <img
                    src={s.logo}
                    alt={`Logo ${s.name}`}
                    className="max-h-20 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-5 font-serif text-2xl text-[var(--navy)]">{s.desc}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-[var(--navy)]">
                Pesan sekarang
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-black/5 bg-white/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 font-serif text-3xl text-[var(--navy)] md:text-4xl"
          >
            Kata mereka yang singgah.
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l-2 border-[var(--brown)]/60 pl-6"
              >
                <p className="font-serif text-xl italic leading-snug text-[var(--navy)] md:text-2xl">
                  “{t.q}”
                </p>
                <footer className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {t.a}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
