import { StrictMode, startTransition, useEffect, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createFileRoute,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/style.css?url
var style_default = "/assets/style-yaTSZDpr.css";
//#endregion
//#region src/assets/logo.png
var logo_default = "/assets/logo-BmzJJDu1.png";
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", {
    className: "flex min-h-[60vh] items-center justify-center px-4",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsx("h1", {
          className: "text-7xl font-semibold text-[var(--navy)]",
          children: "404",
        }),
        /* @__PURE__ */ jsx("p", {
          className: "mt-3 text-muted-foreground",
          children: "Halaman tidak ditemukan.",
        }),
        /* @__PURE__ */ jsx(Link, {
          to: "/",
          className:
            "mt-6 inline-block rounded-full bg-[var(--navy)] px-6 py-2.5 text-sm text-[var(--cream)] hover:opacity-90",
          children: "Kembali ke Beranda",
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", {
    className: "flex min-h-[60vh] items-center justify-center px-4 text-center",
    children: /* @__PURE__ */ jsxs("div", {
      children: [
        /* @__PURE__ */ jsx("h1", {
          className: "font-serif text-2xl",
          children: "Terjadi kesalahan",
        }),
        /* @__PURE__ */ jsx("button", {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "mt-4 rounded-full bg-[var(--navy)] px-6 py-2 text-sm text-[var(--cream)]",
          children: "Coba lagi",
        }),
      ],
    }),
  });
}
var Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Koopiantese.id — Secangkir Hangat, Sejuta Cerita" },
      {
        name: "description",
        content:
          "Cafe minimalis premium. Nikmati kopi hangat berkualitas, suasana tenang, dan layanan via GoFood, GrabFood, dan ShopeeFood.",
      },
      {
        property: "og:site_name",
        content: "Koopiantese.id",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: style_default,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "id",
    children: [
      /* @__PURE__ */ jsxs("head", {
        children: [
          /* @__PURE__ */ jsx(HeadContent, {}),
          /* @__PURE__ */ jsx("link", {
            rel: "icon",
            href: "/favicon.ico.png?v=2",
          }),
        ],
      }),
      /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] }),
    ],
  });
}
function NavLink({ to, children, onClick }) {
  return /* @__PURE__ */ jsx(Link, {
    to,
    onClick,
    className:
      "relative text-sm tracking-wide text-[var(--ink)]/70 transition hover:text-[var(--navy)]",
    activeProps: { className: "text-[var(--navy)] font-medium" },
    activeOptions: { exact: true },
    children,
  });
}
function Shell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxs("div", {
    className: "flex min-h-screen flex-col bg-[var(--cream)]",
    children: [
      /* @__PURE__ */ jsxs("header", {
        className: "sticky top-0 z-40 border-b border-black/5 bg-[var(--cream)]/80 backdrop-blur",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6",
            children: [
              /* @__PURE__ */ jsx(Link, {
                to: "/",
                className: "flex items-center gap-2.5",
                children: /* @__PURE__ */ jsx("img", {
                  src: logo_default,
                  alt: "Koopiantese.id",
                  className: "h-8 w-auto md:h-9",
                }),
              }),
              /* @__PURE__ */ jsxs("nav", {
                className: "hidden items-center gap-8 md:flex",
                children: [
                  /* @__PURE__ */ jsx(NavLink, {
                    to: "/",
                    children: "Beranda",
                  }),
                  /* @__PURE__ */ jsx(NavLink, {
                    to: "/layanan",
                    children: "Layanan",
                  }),
                  /* @__PURE__ */ jsx(NavLink, {
                    to: "/kontak",
                    children: "Kontak",
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("button", {
                onClick: () => setMenuOpen((v) => !v),
                "aria-label": menuOpen ? "Tutup menu" : "Buka menu",
                "aria-expanded": menuOpen,
                className:
                  "relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-[var(--navy)] transition hover:bg-[var(--navy)]/5 md:hidden",
                children: /* @__PURE__ */ jsx(AnimatePresence, {
                  mode: "wait",
                  initial: false,
                  children: /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      initial: {
                        rotate: -90,
                        opacity: 0,
                      },
                      animate: {
                        rotate: 0,
                        opacity: 1,
                      },
                      exit: {
                        rotate: 90,
                        opacity: 0,
                      },
                      transition: { duration: 0.2 },
                      className: "inline-flex",
                      children: menuOpen
                        ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
                        : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }),
                    },
                    menuOpen ? "x" : "m",
                  ),
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsx(AnimatePresence, {
            children:
              menuOpen &&
              /* @__PURE__ */ jsx(motion.div, {
                initial: {
                  opacity: 0,
                  height: 0,
                },
                animate: {
                  opacity: 1,
                  height: "auto",
                },
                exit: {
                  opacity: 0,
                  height: 0,
                },
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                },
                className: "overflow-hidden border-t border-black/5 bg-[var(--cream)] md:hidden",
                children: /* @__PURE__ */ jsx(motion.nav, {
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: {
                    open: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.05,
                      },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.03,
                        staggerDirection: -1,
                      },
                    },
                  },
                  className: "flex flex-col px-6 py-4",
                  children: [
                    {
                      to: "/",
                      label: "Beranda",
                    },
                    {
                      to: "/layanan",
                      label: "Layanan",
                    },
                    {
                      to: "/kontak",
                      label: "Kontak",
                    },
                  ].map((item) =>
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        variants: {
                          open: {
                            opacity: 1,
                            x: 0,
                          },
                          closed: {
                            opacity: 0,
                            x: -12,
                          },
                        },
                        transition: { duration: 0.25 },
                        className: "border-b border-black/5 py-3 last:border-b-0",
                        children: /* @__PURE__ */ jsx(NavLink, {
                          to: item.to,
                          onClick: () => setMenuOpen(false),
                          children: /* @__PURE__ */ jsx("span", {
                            className: "font-serif text-xl",
                            children: item.label,
                          }),
                        }),
                      },
                      item.to,
                    ),
                  ),
                }),
              }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx("main", {
        className: "flex-1",
        children: /* @__PURE__ */ jsx(AnimatePresence, {
          mode: "wait",
          children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: {
                opacity: 0,
                y: 16,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
              exit: {
                opacity: 0,
                y: -8,
              },
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
              children: /* @__PURE__ */ jsx(Outlet, {}),
            },
            pathname,
          ),
        }),
      }),
      /* @__PURE__ */ jsx("footer", {
        className: "border-t border-black/5 py-8",
        children: /* @__PURE__ */ jsxs("div", {
          className:
            "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row",
          children: [
            /* @__PURE__ */ jsxs("p", {
              children: [
                "© ",
                /* @__PURE__ */ new Date().getFullYear(),
                " Koopiantese.id — Secangkir hangat, sejuta cerita.",
              ],
            }),
            /* @__PURE__ */ jsx("p", {
              className: "font-serif italic",
              children: "Brewed with care.",
            }),
          ],
        }),
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ jsx(Shell, {}),
  });
}
//#endregion
//#region src/assets/gofood.png
var gofood_default = "/assets/gofood-Dakct_lk.png";
//#endregion
//#region src/assets/grabfood.png
var grabfood_default = "/assets/grabfood-BWITb5h8.png";
//#endregion
//#region src/assets/shopeefood.png
var shopeefood_default = "/assets/shopeefood-CCIueMQF.png";
//#endregion
//#region src/routes/layanan.tsx
var Route$2 = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: "Layanan & Akses — Koopiantese.id" },
      {
        name: "description",
        content:
          "Pesan Koopiantese.id melalui GoFood, GrabFood, dan ShopeeFood. Kopi hangat siap diantar.",
      },
      {
        property: "og:title",
        content: "Layanan & Akses — Koopiantese.id",
      },
      {
        property: "og:description",
        content: "Pesan via GoFood, GrabFood, dan ShopeeFood.",
      },
      {
        property: "og:url",
        content: "/layanan",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/layanan",
      },
    ],
  }),
  component: LayananPage,
});
var services = [
  {
    name: "GoFood",
    tag: "by Gojek",
    logo: gofood_default,
    url: "https://gofood.co.id/",
    desc: "Pesan cepat lewat aplikasi Gojek.",
  },
  {
    name: "GrabFood",
    tag: "by Grab",
    logo: grabfood_default,
    url: "https://r.grab.com/o/ENNRRRBz",
    desc: "Antar nyaman bersama Grab.",
  },
  {
    name: "ShopeeFood",
    tag: "by Shopee",
    logo: shopeefood_default,
    url: "https://spf.shopee.co.id/3VhSWSbojx",
    desc: "Diskon spesial via ShopeeFood.",
  },
];
var testimonials = [
  {
    q: "Tempat ternyaman untuk menyendiri sambil ditemani secangkir kopi yang jujur.",
    a: "— Pelanggan setia",
  },
  {
    q: "Rasanya seperti pulang. Hangat, tenang, dan selalu ingin kembali.",
    a: "— Anonim",
  },
  {
    q: "Kopi yang diseduh dengan rasa, bukan sekadar resep.",
    a: "— Pengunjung",
  },
];
function LayananPage() {
  return /* @__PURE__ */ jsxs("div", {
    children: [
      /* @__PURE__ */ jsxs("section", {
        className: "mx-auto max-w-6xl px-6 py-20 md:py-28",
        children: [
          /* @__PURE__ */ jsxs(motion.div, {
            initial: {
              opacity: 0,
              y: 16,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
            transition: { duration: 0.7 },
            className: "max-w-2xl",
            children: [
              /* @__PURE__ */ jsx("p", {
                className: "mb-5 text-[11px] uppercase tracking-[0.32em] text-[var(--brown)]",
                children: "Layanan & Akses",
              }),
              /* @__PURE__ */ jsxs("h1", {
                className: "font-serif text-5xl leading-tight text-[var(--navy)] md:text-6xl",
                children: [
                  "Kapan pun, di mana pun — ",
                  /* @__PURE__ */ jsx("span", {
                    className: "italic text-[var(--brown)]",
                    children: "kami antar.",
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("p", {
                className: "mt-6 text-base leading-relaxed text-[var(--ink)]/70",
                children:
                  "Kini Koopiantese.id melayani pesanan melalui mitra ojek online favoritmu. Pilih salah satu di bawah, dan biarkan secangkir hangat kami sampai ke pintumu.",
              }),
            ],
          }),
          /* @__PURE__ */ jsx("div", {
            className: "mt-16 grid gap-5 md:grid-cols-3",
            children: services.map((s, i) =>
              /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: s.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  initial: {
                    opacity: 0,
                    y: 24,
                  },
                  whileInView: {
                    opacity: 1,
                    y: 0,
                  },
                  viewport: {
                    once: true,
                    amount: 0.3,
                  },
                  transition: {
                    duration: 0.6,
                    delay: i * 0.08,
                  },
                  whileHover: { y: -4 },
                  className:
                    "group relative flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-xl sm:p-7",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className:
                            "flex h-28 items-center justify-center rounded-xl bg-[var(--cream)]/60 p-4",
                          children: /* @__PURE__ */ jsx("img", {
                            src: s.logo,
                            alt: `Logo ${s.name}`,
                            className: "max-h-20 w-auto object-contain",
                            loading: "lazy",
                          }),
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "mt-5 font-serif text-2xl text-[var(--navy)]",
                          children: s.desc,
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
                          children: s.tag,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "mt-8 flex items-center gap-2 text-sm text-[var(--navy)]",
                      children: [
                        "Pesan sekarang",
                        /* @__PURE__ */ jsx("span", {
                          className: "transition-transform group-hover:translate-x-1",
                          children: "→",
                        }),
                      ],
                    }),
                  ],
                },
                s.name,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ jsx("section", {
        className: "border-t border-black/5 bg-white/40 py-20",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-6xl px-6",
          children: [
            /* @__PURE__ */ jsx(motion.h2, {
              initial: {
                opacity: 0,
                y: 16,
              },
              whileInView: {
                opacity: 1,
                y: 0,
              },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "mb-14 font-serif text-3xl text-[var(--navy)] md:text-4xl",
              children: "Kata mereka yang singgah.",
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid gap-10 md:grid-cols-3",
              children: testimonials.map((t, i) =>
                /* @__PURE__ */ jsxs(
                  motion.blockquote,
                  {
                    initial: {
                      opacity: 0,
                      y: 24,
                    },
                    whileInView: {
                      opacity: 1,
                      y: 0,
                    },
                    viewport: {
                      once: true,
                      amount: 0.4,
                    },
                    transition: {
                      duration: 0.6,
                      delay: i * 0.1,
                    },
                    className: "border-l-2 border-[var(--brown)]/60 pl-6",
                    children: [
                      /* @__PURE__ */ jsxs("p", {
                        className:
                          "font-serif text-xl italic leading-snug text-[var(--navy)] md:text-2xl",
                        children: ["“", t.q, "”"],
                      }),
                      /* @__PURE__ */ jsx("footer", {
                        className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground",
                        children: t.a,
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
//#region src/routes/kontak.tsx
var Route$1 = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak & Sosial Media — Koopiantese.id" },
      {
        name: "description",
        content:
          "Kunjungi Koopiantese.id, sapa kami di Instagram & TikTok @koopiantese.id, atau hubungi langsung via WhatsApp.",
      },
      {
        property: "og:title",
        content: "Kontak & Sosial Media — Koopiantese.id",
      },
      {
        property: "og:description",
        content: "Lokasi, sosial media, dan WhatsApp Koopiantese.id.",
      },
      {
        property: "og:url",
        content: "/kontak",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/kontak",
      },
    ],
  }),
  component: KontakPage,
});
function TikTokIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx("path", {
      d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z",
    }),
  });
}
function KontakPage() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("section", {
      className: "mx-auto max-w-6xl px-6 py-20 md:py-28",
      children: [
        /* @__PURE__ */ jsxs(motion.div, {
          initial: {
            opacity: 0,
            y: 16,
          },
          animate: {
            opacity: 1,
            y: 0,
          },
          transition: { duration: 0.7 },
          className: "max-w-2xl",
          children: [
            /* @__PURE__ */ jsx("p", {
              className: "mb-5 text-[11px] uppercase tracking-[0.32em] text-[var(--brown)]",
              children: "Kontak & Sosial",
            }),
            /* @__PURE__ */ jsxs("h1", {
              className: "font-serif text-5xl leading-tight text-[var(--navy)] md:text-6xl",
              children: [
                "Mari berbincang, ",
                /* @__PURE__ */ jsx("span", {
                  className: "italic text-[var(--brown)]",
                  children: "singgah sebentar.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("p", {
              className: "mt-6 text-base leading-relaxed text-[var(--ink)]/70",
              children:
                "Kami senang mendengar ceritamu. Temui kami langsung, sapa di sosial media, atau cukup ketuk WhatsApp di bawah.",
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "mt-16 grid gap-10 md:grid-cols-5",
          children: [
            /* @__PURE__ */ jsx(motion.div, {
              initial: {
                opacity: 0,
                y: 24,
              },
              whileInView: {
                opacity: 1,
                y: 0,
              },
              viewport: { once: true },
              transition: { duration: 0.7 },
              className:
                "overflow-hidden rounded-2xl border border-black/5 shadow-sm md:col-span-3",
              children: /* @__PURE__ */ jsx("iframe", {
                title: "Lokasi Koopiantese.id",
                src: "https://www.google.com/maps?q=koopiantese.id&output=embed",
                className: "h-[420px] w-full",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
              }),
            }),
            /* @__PURE__ */ jsxs(motion.div, {
              initial: {
                opacity: 0,
                y: 24,
              },
              whileInView: {
                opacity: 1,
                y: 0,
              },
              viewport: { once: true },
              transition: {
                duration: 0.7,
                delay: 0.1,
              },
              className: "flex flex-col gap-6 md:col-span-2",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: "rounded-2xl border border-black/5 bg-white p-7",
                  children: [
                    /* @__PURE__ */ jsx("p", {
                      className: "text-[11px] uppercase tracking-[0.3em] text-[var(--brown)]",
                      children: "Sosial Media",
                    }),
                    /* @__PURE__ */ jsx("h3", {
                      className: "mt-2 font-serif text-2xl text-[var(--navy)]",
                      children: "@koopiantese.id",
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "mt-5 flex gap-3",
                      children: [
                        /* @__PURE__ */ jsxs("a", {
                          href: "https://instagram.com/koopiantese.id",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:border-[var(--navy)]",
                          children: [
                            /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }),
                            " Instagram",
                          ],
                        }),
                        /* @__PURE__ */ jsxs("a", {
                          href: "https://tiktok.com/@koopiantese.id",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:border-[var(--navy)]",
                          children: [
                            /* @__PURE__ */ jsx(TikTokIcon, { className: "h-4 w-4" }),
                            " TikTok",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs(motion.a, {
                  href: "https://wa.me/6285285897778",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  whileHover: { y: -2 },
                  className:
                    "group flex items-center justify-between rounded-2xl bg-[var(--navy)] p-7 text-[var(--cream)] shadow-lg transition hover:bg-[var(--ink)]",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      children: [
                        /* @__PURE__ */ jsx("p", {
                          className:
                            "text-[11px] uppercase tracking-[0.3em] text-[var(--cream)]/60",
                          children: "WhatsApp",
                        }),
                        /* @__PURE__ */ jsx("h3", {
                          className: "mt-2 font-serif text-2xl",
                          children: "Hubungi Kami",
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "mt-1 text-sm text-[var(--cream)]/70",
                          children: "Respon cepat di jam ramai.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx("div", {
                      className:
                        "rounded-full bg-[var(--cream)]/10 p-4 transition group-hover:bg-[var(--cream)]/20",
                      children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
//#region src/assets/maskot-3d.png
var maskot_3d_default = "/assets/maskot-3d-Gd-35nps.png";
//#endregion
//#region src/components/MajoSection.tsx
function MajoSection() {
  return /* @__PURE__ */ jsx("section", {
    className: "py-16 px-4",
    children: /* @__PURE__ */ jsxs(motion.div, {
      initial: {
        opacity: 0,
        y: 20,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
      viewport: { once: true },
      className:
        "max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center",
      children: [
        /* @__PURE__ */ jsx("h2", {
          className: "text-2xl font-semibold text-white mb-4",
          children: "Kemudahan Pesan via Ojol & Info Cafe",
        }),
        /* @__PURE__ */ jsx("p", {
          className: "text-slate-400 mb-8 max-w-md mx-auto",
          children:
            "Mau pesen kopi tapi males keluar? Atau mau liat menu terbaru? Semua bisa diakses lewat portal resmi kami.",
        }),
        /* @__PURE__ */ jsx("a", {
          href: "https://koopiantese-id.majooshop.id",
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors",
          children: "Buka Portal Pesanan & Info",
        }),
      ],
    }),
  });
}
//#endregion
//#region src/routes/index.tsx
var Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koopiantese.id — Secangkir Hangat, Sejuta Cerita" },
      {
        name: "description",
        content:
          "Cafe minimalis dengan kopi hangat berkualitas, suasana tenang, dan keramahan khas. Pesan via ojol favoritmu.",
      },
      {
        property: "og:title",
        content: "Koopiantese.id — Secangkir Hangat, Sejuta Cerita",
      },
      {
        property: "og:description",
        content: "Cafe minimalis dengan kopi hangat berkualitas dan suasana tenang.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],
  }),
  component: HomePage,
});
var pillars = [
  {
    title: "Hangat",
    desc: "Setiap cangkir disajikan dengan keramahan yang tulus.",
  },
  {
    title: "Tenang",
    desc: "Ruang yang dirancang untuk pelarian sejenak dari hiruk.",
  },
  {
    title: "Berkualitas",
    desc: "Biji pilihan, diolah dengan presisi dan rasa.",
  },
];
function HomePage() {
  return /* @__PURE__ */ jsxs("div", {
    children: [
      /* @__PURE__ */ jsx("section", {
        className: "relative overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", {
          className:
            "mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: {
                opacity: 0,
                y: 24,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
              children: [
                /* @__PURE__ */ jsx("p", {
                  className: "mb-5 text-[11px] uppercase tracking-[0.32em] text-[var(--brown)]",
                  children: "Koopiantese · Est. Cafe",
                }),
                /* @__PURE__ */ jsxs("h1", {
                  className: "font-serif text-5xl leading-[1.05] text-[var(--navy)] md:text-7xl",
                  children: [
                    "Secangkir Hangat,",
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", {
                      className: "italic text-[var(--brown)]",
                      children: "Sejuta Cerita.",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mt-6 max-w-md text-base leading-relaxed text-[var(--ink)]/70",
                  children:
                    "Sebuah ruang sederhana untuk menyeruput perlahan, berbincang lirih, dan menemukan kembali ritme yang hilang — satu cangkir pada satu waktu.",
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "mt-9 flex flex-wrap gap-3",
                  children: [
                    /* @__PURE__ */ jsx(Link, {
                      to: "/layanan",
                      className:
                        "rounded-full bg-[var(--navy)] px-7 py-3 text-sm tracking-wide text-[var(--cream)] transition hover:bg-[var(--ink)]",
                      children: "Pesan via Ojol",
                    }),
                    /* @__PURE__ */ jsx(Link, {
                      to: "/kontak",
                      className:
                        "rounded-full border border-[var(--navy)]/20 px-7 py-3 text-sm tracking-wide text-[var(--navy)] transition hover:border-[var(--navy)]",
                      children: "Kunjungi Kami",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "relative flex items-center justify-center",
              children: [
                /* @__PURE__ */ jsx(motion.div, {
                  "aria-hidden": true,
                  className:
                    "absolute -inset-10 rounded-full bg-gradient-to-b from-[var(--brown)]/10 via-[var(--navy)]/5 to-transparent blur-3xl",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: {
                    duration: 1.2,
                    delay: 0.2,
                  },
                }),
                /* @__PURE__ */ jsx(motion.img, {
                  src: maskot_3d_default,
                  alt: "Maskot Koopiantese, musang barista 3D memegang secangkir kopi hangat",
                  width: 1024,
                  height: 1024,
                  className:
                    "relative z-10 w-[200px] drop-shadow-[0_30px_40px_rgba(15,27,61,0.25)] sm:w-[280px] md:w-[440px]",
                  initial: {
                    opacity: 0,
                    scale: 0.92,
                    y: 20,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],
                    rotate: [-1, 1, -1],
                  },
                  transition: {
                    opacity: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                    scale: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                    y: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: 0.6,
                    },
                    rotate: {
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: 0.6,
                    },
                  },
                }),
                /* @__PURE__ */ jsx(motion.div, {
                  "aria-hidden": true,
                  className:
                    "absolute bottom-2 left-1/2 z-0 h-4 w-48 -translate-x-1/2 rounded-full bg-[var(--navy)]/25 blur-xl md:w-64",
                  animate: {
                    scaleX: [1, 0.85, 1],
                    opacity: [0.35, 0.22, 0.35],
                  },
                  transition: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 0.6,
                  },
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "border-t border-black/5 bg-white/40 py-16 md:py-20",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-6xl px-6",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: {
                opacity: 0,
                y: 16,
              },
              whileInView: {
                opacity: 1,
                y: 0,
              },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ jsx("p", {
                  className: "mb-4 text-[11px] uppercase tracking-[0.32em] text-[var(--brown)]",
                  children: "Pesan & Kontak",
                }),
                /* @__PURE__ */ jsxs("h2", {
                  className: "font-serif text-3xl text-[var(--navy)] md:text-4xl",
                  children: [
                    "Kemudahan Pesan via Ojol ",
                    /* @__PURE__ */ jsx("span", {
                      className: "italic text-[var(--brown)]",
                      children: "& Info Cafe",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mt-4 max-w-xl text-base leading-relaxed text-[var(--ink)]/70",
                  children:
                    "Pilih cara termudah untuk menikmati Koopiantese.id — pesan via ojol favoritmu atau hubungi admin langsung.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                [
                  {
                    name: "GoFood",
                    desc: "Pesan cepat lewat aplikasi Gojek.",
                    logo: gofood_default,
                    url: "https://gofood.co.id/",
                  },
                  {
                    name: "GrabFood",
                    desc: "Antar nyaman bersama Grab.",
                    logo: grabfood_default,
                    url: "https://r.grab.com/o/ENNRRRBz",
                  },
                  {
                    name: "ShopeeFood",
                    desc: "Diskon spesial via ShopeeFood.",
                    logo: shopeefood_default,
                    url: "https://spf.shopee.co.id/3VhSWSbojx",
                  },
                ].map((c, i) =>
                  /* @__PURE__ */ jsxs(
                    motion.a,
                    {
                      href: c.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      initial: {
                        opacity: 0,
                        y: 20,
                      },
                      whileInView: {
                        opacity: 1,
                        y: 0,
                      },
                      viewport: {
                        once: true,
                        amount: 0.3,
                      },
                      transition: {
                        duration: 0.5,
                        delay: i * 0.08,
                      },
                      whileHover: { y: -3 },
                      className:
                        "group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-lg",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className:
                            "flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--navy)]/5",
                          children: /* @__PURE__ */ jsx("img", {
                            src: c.logo,
                            alt: c.name,
                            className: "h-9 w-auto object-contain",
                            loading: "lazy",
                          }),
                        }),
                        /* @__PURE__ */ jsx("h3", {
                          className: "mt-4 font-serif text-lg text-[var(--navy)]",
                          children: c.name,
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "mt-1 text-sm leading-relaxed text-[var(--ink)]/60",
                          children: c.desc,
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className:
                            "mt-auto inline-flex items-center gap-1 pt-4 text-sm text-[var(--navy)]",
                          children: [
                            "Pesan sekarang",
                            /* @__PURE__ */ jsx("span", {
                              className: "transition-transform group-hover:translate-x-0.5",
                              children: "→",
                            }),
                          ],
                        }),
                      ],
                    },
                    c.name,
                  ),
                ),
                /* @__PURE__ */ jsxs(Link, {
                  to: "/kontak",
                  className:
                    "group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-[3px] hover:shadow-lg",
                  children: [
                    /* @__PURE__ */ jsx("div", {
                      className:
                        "flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--navy)]/5",
                      children: /* @__PURE__ */ jsx(MessageCircle, {
                        className: "h-6 w-6 text-[var(--navy)]",
                      }),
                    }),
                    /* @__PURE__ */ jsx("h3", {
                      className: "mt-4 font-serif text-lg text-[var(--navy)]",
                      children: "Hubungi Admin",
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "mt-1 text-sm leading-relaxed text-[var(--ink)]/60",
                      children: "Chat langsung dengan tim kami.",
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className:
                        "mt-auto inline-flex items-center gap-1 pt-4 text-sm text-[var(--navy)]",
                      children: [
                        "Hubungi",
                        /* @__PURE__ */ jsx("span", {
                          className: "transition-transform group-hover:translate-x-0.5",
                          children: "→",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "border-t border-black/5 py-20",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-6xl px-6",
          children: [
            /* @__PURE__ */ jsx(motion.h2, {
              initial: {
                opacity: 0,
                y: 16,
              },
              whileInView: {
                opacity: 1,
                y: 0,
              },
              viewport: {
                once: true,
                amount: 0.5,
              },
              transition: { duration: 0.6 },
              className: "mb-14 max-w-xl font-serif text-3xl text-[var(--navy)] md:text-4xl",
              children: "Tiga hal sederhana yang kami pegang teguh.",
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid gap-10 md:grid-cols-3",
              children: pillars.map((p, i) =>
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: {
                      opacity: 0,
                      y: 24,
                    },
                    whileInView: {
                      opacity: 1,
                      y: 0,
                    },
                    viewport: {
                      once: true,
                      amount: 0.4,
                    },
                    transition: {
                      duration: 0.6,
                      delay: i * 0.1,
                    },
                    className: "border-t border-[var(--navy)]/15 pt-6",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "text-[11px] uppercase tracking-[0.3em] text-[var(--brown)]",
                        children: ["0", i + 1],
                      }),
                      /* @__PURE__ */ jsx("h3", {
                        className: "mt-3 font-serif text-2xl text-[var(--navy)]",
                        children: p.title,
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "mt-2 text-sm leading-relaxed text-[var(--ink)]/70",
                        children: p.desc,
                      }),
                    ],
                  },
                  p.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(MajoSection, {}),
    ],
  });
}
//#endregion
//#region src/routeTree.gen.ts
var LayananRoute = Route$2.update({
  id: "/layanan",
  path: "/layanan",
  getParentRoute: () => Route$3,
});
var KontakRoute = Route$1.update({
  id: "/kontak",
  path: "/kontak",
  getParentRoute: () => Route$3,
});
var rootRouteChildren = {
  IndexRoute: Route.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$3,
  }),
  KontakRoute,
  LayananRoute,
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
  return createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
function createRouter() {
  return getRouter();
}
//#endregion
//#region src/client.tsx
var router = createRouter();
startTransition(() => {
  hydrateRoot(
    document,
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StartClient, { router }) }),
  );
});
//#endregion
export {};
