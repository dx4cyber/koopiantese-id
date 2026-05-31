import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import appCss from "../style.css?url";
import logo from "../assets/logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-[var(--navy)]">404</h1>
        <p className="mt-3 text-muted-foreground">Halaman tidak ditemukan.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-[var(--navy)] px-6 py-2.5 text-sm text-[var(--cream)] hover:opacity-90"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-serif text-2xl">Terjadi kesalahan</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-4 rounded-full bg-[var(--navy)] px-6 py-2 text-sm text-[var(--cream)]"
        >
          Coba lagi
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Koopiantese.id — Secangkir Hangat, Sejuta Cerita" },
      {
        name: "description",
        content:
          "Cafe minimalis premium. Nikmati kopi hangat berkualitas, suasana tenang, dan layanan via GoFood, GrabFood, dan ShopeeFood.",
      },
      { property: "og:site_name", content: "Koopiantese.id" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
        <link rel="icon" href="/favicon.ico.png?v=2" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NavLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative text-sm tracking-wide text-[var(--ink)]/70 transition hover:text-[var(--navy)]"
      activeProps={{ className: "text-[var(--navy)] font-medium" }}
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
}

function Shell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--cream)]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[var(--cream)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Koopiantese.id" className="h-8 w-auto md:h-9" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/">Beranda</NavLink>
            <NavLink to="/layanan">Layanan</NavLink>
            <NavLink to="/kontak">Kontak</NavLink>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-[var(--navy)] transition hover:bg-[var(--navy)]/5 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "x" : "m"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-black/5 bg-[var(--cream)] md:hidden"
            >
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                }}
                className="flex flex-col px-6 py-4"
              >
                {[
                  { to: "/", label: "Beranda" },
                  { to: "/layanan", label: "Layanan" },
                  { to: "/kontak", label: "Kontak" },
                ].map((item) => (
                  <motion.div
                    key={item.to}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -12 },
                    }}
                    transition={{ duration: 0.25 }}
                    className="border-b border-black/5 py-3 last:border-b-0"
                  >
                    <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                      <span className="font-serif text-xl">{item.label}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-black/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Koopiantese.id — Secangkir hangat, sejuta cerita.</p>
          <p className="font-serif italic">Brewed with care.</p>
        </div>
      </footer>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Shell />
    </QueryClientProvider>
  );
}
