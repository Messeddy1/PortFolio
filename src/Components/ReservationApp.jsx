import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiReact, SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

/* ── Inline screen renderers ── */
const CalendarScreen = () => (
  <div style={{ padding: "28px 10px 10px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter,sans-serif" }}>
    <div style={{ fontSize: 14, fontWeight: 800, color: "#0f172a" }}>Calendrier</div>
    {/* Mini calendar grid */}
    <div style={{ background: "#fff", borderRadius: 12, padding: "8px 6px", border: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>Juillet 2026</span>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontSize: 9, color: "#2563eb" }}>‹</span>
          <span style={{ fontSize: 9, color: "#2563eb" }}>›</span>
        </div>
      </div>
      {/* Day headers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1, marginBottom: 3 }}>
        {["L","M","M","J","V","S","D"].map((d, i) => (
          <div key={i} style={{ textAlign: "center", fontSize: 7, color: "#94a3b8", fontWeight: 600 }}>{d}</div>
        ))}
      </div>
      {/* Day cells */}
      {[
        [null,1,2,3,4,5,6],
        [7,8,9,10,11,12,13],
        [14,15,16,17,18,19,20],
        [21,22,23,24,25,26,27],
        [28,null,null,null,null,null,null],
      ].map((week, wi) => (
        <div key={wi} style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1 }}>
          {week.map((d, di) => (
            <div key={di} style={{
              textAlign: "center", fontSize: 8, padding: "2px 0", borderRadius: 4,
              background: d === 28 ? "#2563eb" : d === 15 ? "#dbeafe" : "transparent",
              color: d === 28 ? "#fff" : d === 15 ? "#2563eb" : d ? "#1e293b" : "transparent",
              fontWeight: d === 28 || d === 15 ? 700 : 400,
              position: "relative",
            }}>
              {d || ""}
              {(d === 15 || d === 22) && (
                <div style={{ position: "absolute", bottom: 1, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: d === 15 ? "#2563eb" : "#f97316" }} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
    {/* Reservations for selected day */}
    <div style={{ fontSize: 8, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
      Lundi 28 juillet 2026
    </div>
    {[
      { client: "Hotel Mamounia", route: "Aéroport → Médina", time: "10:30", status: "confirmed", color: "#2563eb" },
      { client: "Golf Amelkis", route: "Guéliz → Palmeraie", time: "14:00", status: "pending", color: "#f97316" },
    ].map(r => (
      <div key={r.client} style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: `3px solid ${r.color}`, borderRadius: 10, padding: "7px 8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#0f172a" }}>{r.client}</span>
          <span style={{ fontSize: 7, color: r.color, background: `${r.color}15`, padding: "1px 5px", borderRadius: 99, fontWeight: 700 }}>
            {r.status === "confirmed" ? "Confirmée" : "En attente"}
          </span>
        </div>
        <div style={{ fontSize: 8, color: "#64748b" }}>📍 {r.route}</div>
        <div style={{ fontSize: 8, color: "#94a3b8", marginTop: 2 }}>⏰ {r.time}</div>
      </div>
    ))}
  </div>
);

const DetailsScreen = () => (
  <div style={{ padding: "28px 10px 10px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter,sans-serif", background: "#f8fafc" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 10, color: "#2563eb" }}>‹</span>
      <span style={{ fontSize: 12, fontWeight: 800, color: "#0f172a" }}>Détails</span>
      <span style={{ marginLeft: "auto", fontSize: 9, color: "#2563eb" }}>✎</span>
    </div>
    {/* Status card */}
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 7, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Client / Société</div>
          <div style={{ fontSize: 13, fontWeight: 900, color: "#0f172a" }}>Hotel Mamounia</div>
          <div style={{ fontSize: 7, color: "#94a3b8", marginTop: 1 }}>Réf: RES-2026-042</div>
        </div>
        <span style={{ fontSize: 7, color: "#2563eb", background: "#dbeafe", padding: "2px 7px", borderRadius: 99, fontWeight: 700, border: "1px solid #bfdbfe" }}>Confirmée</span>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 8, paddingTop: 8, borderTop: "1px solid #f1f5f9" }}>
        <div>
          <div style={{ fontSize: 6, color: "#94a3b8", textTransform: "uppercase" }}>Date Début</div>
          <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>28/07/2026</div>
        </div>
        <div>
          <div style={{ fontSize: 6, color: "#94a3b8", textTransform: "uppercase" }}>Heure</div>
          <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>10:30</div>
        </div>
      </div>
    </div>
    {/* Route card */}
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "8px 10px" }}>
      <div style={{ fontSize: 7, color: "#94a3b8", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Détails du Trajet</div>
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 2 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", border: "2px solid #2563eb", background: "#fff" }} />
          <div style={{ width: 2, height: 20, background: "#e2e8f0", margin: "2px 0" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", border: "2px solid #94a3b8", background: "#fff" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 7, color: "#94a3b8" }}>Départ</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>Aéroport Marrakech</div>
          </div>
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 7, color: "#94a3b8" }}>Destination</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>Médina — Hotel Mamounia</div>
          </div>
        </div>
      </div>
    </div>
    {/* Assignment card */}
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "8px 10px" }}>
      <div style={{ fontSize: 7, color: "#94a3b8", textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>Affectation</div>
      {[["👤 Chauffeur","Ahmed El Mansouri"],["🚗 Véhicule","Toyota Camry · AB-1234"]].map(([l, v]) => (
        <div key={l} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
          <span style={{ fontSize: 9 }}>{l.split(" ")[0]}</span>
          <div>
            <div style={{ fontSize: 7, color: "#94a3b8" }}>{l.split(" ").slice(1).join(" ")}</div>
            <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>{v}</div>
          </div>
        </div>
      ))}
    </div>
    {/* Actions */}
    <div style={{ display: "flex", gap: 6 }}>
      <div style={{ flex: 1, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "6px 0", textAlign: "center", fontSize: 8, color: "#ef4444", fontWeight: 700 }}>🗑 Supprimer</div>
      <div style={{ flex: 1, background: "#2563eb", borderRadius: 10, padding: "6px 0", textAlign: "center", fontSize: 8, color: "#fff", fontWeight: 700 }}>✎ Modifier</div>
    </div>
  </div>
);

const ListScreen = () => (
  <div style={{ padding: "28px 10px 10px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter,sans-serif", background: "#f8fafc" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a" }}>Réservations</div>
        <div style={{ fontSize: 8, color: "#64748b" }}>Gestion des transferts</div>
      </div>
      <div style={{ background: "#2563eb", borderRadius: 8, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14 }}>+</div>
    </div>
    {/* Filter tabs */}
    <div style={{ display: "flex", gap: 4 }}>
      {[["Tous","#2563eb",true],["Confirmée","#2563eb",false],["Attente","#f97316",false]].map(([t, c, a]) => (
        <div key={t} style={{ padding: "3px 7px", borderRadius: 99, fontSize: 7, fontWeight: 700, background: a ? c : "#f1f5f9", color: a ? "#fff" : "#64748b" }}>{t}</div>
      ))}
    </div>
    {[
      { client:"Hotel Atlas Asni", route:"Gare → Atlas", time:"09:00", status:"confirmed", sc:"#2563eb" },
      { client:"Golf Amelkis", route:"Guéliz → Palmeraie", time:"14:00", status:"pending", sc:"#f97316" },
      { client:"Riad Kniza", route:"Aéroport → Médina", time:"16:30", status:"completed", sc:"#10b981" },
    ].map(r => (
      <div key={r.client} style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: `3px solid ${r.sc}`, borderRadius: 10, padding: "8px 9px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#0f172a" }}>{r.client}</span>
          <span style={{ fontSize: 7, color: r.sc, background: `${r.sc}15`, padding: "1px 5px", borderRadius: 99, fontWeight: 700 }}>
            {r.status === "confirmed" ? "Confirmée" : r.status === "pending" ? "Attente" : "Terminée"}
          </span>
        </div>
        <div style={{ fontSize: 8, color: "#64748b" }}>📍 {r.route}</div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
          <span style={{ fontSize: 7, color: "#94a3b8" }}>⏰ {r.time}</span>
          <span style={{ fontSize: 7, color: "#2563eb", fontWeight: 700 }}>Détails ›</span>
        </div>
      </div>
    ))}
  </div>
);

const SCREENS = [
  { id: "calendar", label: "Calendrier", icon: "📅", color: "#2563eb", render: () => <CalendarScreen /> },
  { id: "list",     label: "Liste",      icon: "📋", color: "#f97316", render: () => <ListScreen /> },
  { id: "details",  label: "Détails",    icon: "🔍", color: "#10b981", render: () => <DetailsScreen /> },
];

const TECH = [
  { icon: <SiReact size={13} color="#61DAFB" />, label: "React Native" },
  { icon: <SiTypescript size={13} color="#3178C6" />, label: "TypeScript" },
  { label: "Expo Router", icon: <span style={{ fontSize: 10 }}>🔗</span> },
  { label: "React Hook Form", icon: <span style={{ fontSize: 10 }}>📝</span> },
  { label: "Zod", icon: <span style={{ fontSize: 10 }}>✅</span> },
  { label: "RN Calendars", icon: <span style={{ fontSize: 10 }}>🗓</span> },
];

const FEATURES = [
  { icon: "📅", title: "Vue Calendrier Interactif", desc: "Calendrier mensuel react-native-calendars avec dots colorés par statut. Sélection de date → réservations du jour instantanément." },
  { icon: "📋", title: "CRUD Complet", desc: "Créer, consulter, modifier et supprimer des réservations avec formulaires validés par React Hook Form + Zod." },
  { icon: "🚗", title: "Affectation Chauffeur & Véhicule", desc: "Chaque réservation lie un client, un chauffeur assigné, un véhicule, un trajet départ/destination et une heure." },
  { icon: "🔴", title: "Statuts en Temps Réel", desc: "4 statuts: En attente, Confirmée, Terminée, Annulée — avec code couleur cohérent partout dans l'UI." },
  { icon: "💸", title: "Module Dépenses", desc: "Gestion des notes de frais liées aux réservations avec formulaire détaillé et suivi par catégorie." },
  { icon: "🌙", title: "Dark Mode Natif", desc: "Thème clair/sombre complet via ThemeContext avec auto-detection de la préférence système." },
];

export default function ReservationApp() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="relative py-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-orbitron text-xs tracking-widest uppercase mb-3"
          style={{ color: "#00f5ff", letterSpacing: "0.35em" }}>
          ◈ 07 · 予約アプリ
        </p>
        <h2 className="font-anime font-bold" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#f0f0ff" }}>
          Reservation{" "}
          <span style={{ background: "linear-gradient(135deg,#00f5ff,#bf5fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Manager App
          </span>
        </h2>
        <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
          Application mobile React Native de gestion des réservations de transferts touristiques — iOS & Android
        </p>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Phone mockup — LEFT this time */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="flex-shrink-0 flex flex-col items-center gap-5 order-1"
        >
          {/* Screen tabs */}
          <div className="flex gap-2 flex-wrap justify-center">
            {SCREENS.map((s, i) => (
              <button key={s.id} onClick={() => setActiveScreen(i)}
                className="px-3 py-1.5 rounded-full text-xs font-anime font-600 transition-all duration-200"
                style={{
                  background: activeScreen === i ? s.color : "rgba(255,255,255,0.05)",
                  color: activeScreen === i ? "#fff" : "rgba(255,255,255,0.4)",
                  border: `1px solid ${activeScreen === i ? s.color : "rgba(255,255,255,0.1)"}`,
                  boxShadow: activeScreen === i ? `0 0 12px ${s.color}60` : "none",
                }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Phone */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 230, height: 470, position: "relative" }}
          >
            <div style={{ position: "absolute", inset: -30, background: `radial-gradient(ellipse, ${SCREENS[activeScreen].color}20 0%, transparent 70%)`, filter: "blur(20px)", pointerEvents: "none", transition: "background 0.4s" }} />
            <div style={{
              width: "100%", height: "100%", borderRadius: 40,
              background: "#f8fafc",
              border: `2px solid ${SCREENS[activeScreen].color}60`,
              boxShadow: `0 0 30px ${SCREENS[activeScreen].color}30, 0 0 60px rgba(0,0,0,0.5)`,
              overflow: "hidden", position: "relative", transition: "border-color 0.4s, box-shadow 0.4s",
            }}>
              {/* Notch */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 70, height: 20, background: "#f8fafc", borderRadius: "0 0 12px 12px", zIndex: 10 }} />
              {/* Status bar */}
              <div style={{ position: "absolute", top: 6, left: 14, right: 14, display: "flex", justifyContent: "space-between", fontSize: 7, color: "#94a3b8", zIndex: 11 }}>
                <span>9:41</span><span style={{ fontWeight: 700 }}>●●●</span>
              </div>
              {/* Screen */}
              <div style={{ position: "absolute", inset: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeScreen}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    style={{ height: "100%", overflowY: "auto" }}>
                    {SCREENS[activeScreen].render()}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Bottom nav */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 50, background: "rgba(248,250,252,0.97)", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-around", alignItems: "center", paddingBottom: 8 }}>
                {[["📅","Calendrier"],["📋","Liste"],["💸","Dépenses"],["👤","Profil"]].map(([ic, lb], i) => (
                  <button key={lb} onClick={() => i < 3 && setActiveScreen(i)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, background: "none", border: "none", cursor: "pointer" }}>
                    <span style={{ fontSize: 14, opacity: activeScreen === i ? 1 : 0.35 }}>{ic}</span>
                    <span style={{ fontSize: 6, color: activeScreen === i ? SCREENS[Math.min(i, 2)]?.color ?? "#2563eb" : "#94a3b8", fontWeight: 700 }}>{lb}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <div className="font-anime font-700 text-sm" style={{ color: "#f0f0ff" }}>Reservation Manager</div>
            <div className="text-xs font-orbitron mt-1" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>IOS & ANDROID · v1.0.0</div>
          </div>
        </motion.div>

        {/* Right: info */}
        <div className="flex-1 order-2 space-y-5">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="leading-relaxed text-sm"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85, maxWidth: 480 }}>
            Application mobile <strong style={{ color: "#f0f0ff" }}>React Native / Expo</strong> de gestion des réservations de transferts touristiques. Conçue avec une architecture Feature-Based modulaire, elle offre une vue calendrier interactive, un CRUD complet des réservations, l&apos;affectation chauffeur/véhicule et un module de gestion des dépenses.
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-4"
                style={{ borderLeft: "2px solid rgba(0,245,255,0.3)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ fontSize: 18 }}>{f.icon}</span>
                  <h4 className="font-anime font-700 text-sm" style={{ color: "#f0f0ff" }}>{f.title}</h4>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech */}
          <div>
            <p className="font-orbitron text-xs tracking-widest uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em" }}>Stack Technique</p>
            <div className="flex flex-wrap gap-2">
              {TECH.map(({ icon, label }) => (
                <span key={label} className="tech-badge flex items-center gap-2">{icon} {label}</span>
              ))}
            </div>
          </div>

          {/* Architecture badge */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-anime font-600 text-sm"
              style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.25)", color: "#00f5ff" }}>
              🏗 Architecture Feature-Based Modulaire
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
