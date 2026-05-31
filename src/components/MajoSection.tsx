import { motion } from "framer-motion";

export function MajoSection() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">
          Kemudahan Pesan via Ojol & Info Cafe
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Mau pesen kopi tapi males keluar? Atau mau liat menu terbaru? Semua bisa diakses lewat
          portal resmi kami.
        </p>
        <a
          href="https://koopiantese-id.majooshop.id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors"
        >
          Buka Portal Pesanan & Info
        </a>
      </motion.div>
    </section>
  );
}
