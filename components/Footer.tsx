"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-4 grid max-w-6xl gap-8 border-t border-pink-line px-5 py-12 text-sm text-ink-soft sm:grid-cols-[1.4fr_1fr_1fr] sm:px-8"
    >
      <div>
        <p className="mb-2 font-display text-lg text-ink">Olavu Clinic</p>
        <p>
          No. 29, Ground Floor, Opp. to Girinagar Sub Post Office,
          <br />
          Behind Pai Showroom, Girinagar, Bengaluru – 560085
        </p>
      </div>
      <div className="space-y-2">
        <p>
          <a href="tel:+918310570414" className="hover:text-pink-deep">
            +91 83105 70414
          </a>
        </p>
        <p>
          <a href="https://wa.me/918310570414" target="_blank" rel="noopener" className="hover:text-pink-deep">
            WhatsApp
          </a>
        </p>
        <p>
          <a href="mailto:olavuclinic@gmail.com" className="hover:text-pink-deep">
            olavuclinic@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Olavu+Clinic+Girinagar+Bengaluru"
            target="_blank"
            rel="noopener"
            className="hover:text-pink-deep"
          >
            Get directions →
          </a>
        </p>
      </div>
      <div className="space-y-2">
        <p>Mon–Sat: 10:00 AM – 1:30 PM, 5:00 PM – 8:30 PM</p>
        <p>Sunday: By appointment only</p>
      </div>
      <p className="col-span-full mt-2 font-mono text-xs text-pink-line">
        Prototype for client review — not the live site.
      </p>
    </motion.footer>
  );
}
