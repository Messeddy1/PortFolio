import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiReact, SiExpo, SiTypescript, SiFirebase } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { FaCheckCircle, FaMobileAlt } from "react-icons/fa";

const SCREENS = [
  {
    id: "dashboard",
    label: "Tableau de Bord",
    icon: "🏠",
    color: "#ff2d78",
    render: () => (
      <div style={{ padding: "28px 12px 12px", display: "flex", flexDirection: "column", gap: 8, height: "100%", fontFamily: "Inter, sans-serif" }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2 }}>Espace Chauffeur</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: "#f0f0ff", marginBottom: 10 }}>Bonjour, AHMED</div>
        {/* Stats card */}
        <div style={{ background: "rgba(255,45,120,0.08)", border: "1px solid rgba(255,45,120,0.2)", borderRadius: 12, padding: "10px" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginBottom: 8, display: "flex", alignItems: "center", gap: 4 }}>🚗 Réservations</div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {[["Total","24","#f0f0ff"],["En Cours","3","#f59e0b"],["Terminées","18","#10b981"]].map(([l,v,c]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: c }}>{v}</div>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Financial */}
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "4px 0 2px" }}>Résumé Financier</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {[["Recettes","12 450 DH","#10b981","↑"],["Dépenses","3 200 DH","#ef4444","↓"],["Roulement","8 900 DH","#3b82f6","🚗"],["Solde Net","1 250 DH","#ffd700","💰"]].map(([l,v,c,i]) => (
            <div key={l} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${c}20`, borderRadius: 10, padding: "7px 6px", textAlign: "center" }}>
              <div style={{ fontSize: 9, color: c }}>{i}</div>
              <div style={{ fontSize: 9, fontWeight: 800, color: c, marginTop: 2 }}>{v}</div>
              <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{l}</div>
            </div>
          ))}
        </div>
        {/* Quick actions */}
        {[["📅","Mes Réservations"],["💳","Mes Dépenses"]].map(([ic, lb]) => (
          <div key={lb} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "8px 10px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 14 }}>{ic}</span>
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{lb}</span>
            <span style={{ marginLeft: "auto", color: "#ff2d78", fontSize: 9 }}>›</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "reservations",
    label: "Réservations",
    icon: "🚗",
    color: "#3b82f6",
    render: () => (
      <div style={{ padding: "28px 12px 12px", display: "flex", flexDirection: "column", gap: 6, height: "100%", fontFamily: "Inter, sans-serif" }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: "#f0f0ff" }}>Mes Réservations</div>
        <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>3 réservations assignées</div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 3, background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 2, marginBottom: 4 }}>
          {["Planifiée","En cours","Terminée"].map((t, i) => (
            <div key={t} style={{ flex: 1, textAlign: "center", padding: "4px 2px", borderRadius: 6, fontSize: 7, fontWeight: 700, background: i===0 ? "rgba(59,130,246,0.2)" : "transparent", color: i===0 ? "#3b82f6" : "rgba(255,255,255,0.3)" }}>{t}</div>
          ))}
        </div>
        {/* Reservation cards */}
        {[
          { ref:"RES-2024-0042", route:"Aéroport → Riad Mogador", time:"14:30", pax:3, status:"Planifiée", sc:"#3b82f6" },
          { ref:"RES-2024-0038", route:"Gare ONCF → Palmeraie", time:"10:00", pax:2, status:"En cours", sc:"#f59e0b" },
        ].map(r => (
          <div key={r.ref} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${r.sc}25`, borderRadius: 12, padding: "8px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{r.ref}</span>
              <span style={{ fontSize: 7, color: r.sc, background: `${r.sc}15`, padding: "2px 6px", borderRadius: 99, fontWeight: 700 }}>{r.status}</span>
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#f0f0ff", marginBottom: 3 }}>📍 {r.route}</div>
            <div style={{ display: "flex", gap: 8, fontSize: 8, color: "rgba(255,255,255,0.4)" }}>
              <span>⏰ {r.time}</span><span>👥 {r.pax} pax</span>
            </div>
            <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
              <div style={{ flex: 1, background: "#3b82f6", borderRadius: 6, padding: "4px 0", textAlign: "center", fontSize: 8, color: "#fff", fontWeight: 700 }}>✓ Confirmer</div>
              <div style={{ flex: 1, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 6, padding: "4px 0", textAlign: "center", fontSize: 8, color: "#10b981", fontWeight: 700 }}>▶ Démarrer</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "depense",
    label: "Dépenses",
    icon: "💳",
    color: "#10b981",
    render: () => (
      <div style={{ padding: "28px 12px 12px", display: "flex", flexDirection: "column", gap: 6, height: "100%", fontFamily: "Inter, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#f0f0ff" }}>Dépenses</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>Mes déclarations de frais</div>
          </div>
          <div style={{ background: "#10b981", borderRadius: 10, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>+</div>
        </div>
        {/* Date filter */}
        <div style={{ display: "flex", gap: 4 }}>
          {["Du: 01/07/2026","Au: 28/07/2026"].map(f => (
            <div key={f} style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "5px 7px", fontSize: 7, color: "rgba(255,255,255,0.4)", display: "flex", justifyContent: "space-between" }}>
              <span>{f}</span><span>📅</span>
            </div>
          ))}
        </div>
        {/* Expense cards */}
        {[
          { cat:"Carburant", amount:"350,00 MAD", date:"15/07/2026", status:"Validé", sc:"#10b981" },
          { cat:"Maintenance", amount:"1 200,00 MAD", date:"10/07/2026", status:"Brouillon", sc:"#fbbf24" },
          { cat:"Péage", amount:"45,00 MAD", date:"08/07/2026", status:"Validé", sc:"#10b981" },
        ].map(e => (
          <div key={e.cat} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "8px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 8, color: e.sc, background: `${e.sc}15`, padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>{e.cat}</span>
              <span style={{ fontSize: 7, color: e.sc, background: `${e.sc}10`, padding: "2px 6px", borderRadius: 99 }}>{e.status}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{e.date}</span>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#10b981" }}>{e.amount}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "kilometrage",
    label: "Kilométrage",
    icon: "🏎",
    color: "#bf5fff",
    render: () => (
      <div style={{ padding: "28px 12px 12px", display: "flex", flexDirection: "column", gap: 6, height: "100%", fontFamily: "Inter, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#f0f0ff" }}>Kilométrage</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>Suivi des relevés de trajet</div>
          </div>
          <div style={{ background: "#bf5fff", borderRadius: 10, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>+</div>
        </div>
        {[
          { car:"Toyota Camry • AB-1234-7", date:"28/07/2026", start:87420, end:87635, diff:215 },
          { car:"Mercedes Vito • AB-5678-7", date:"25/07/2026", start:124300, end:124580, diff:280 },
          { car:"Toyota Camry • AB-1234-7", date:"22/07/2026", start:87120, end:null, diff:null },
        ].map((k, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(191,95,255,0.15)", borderRadius: 12, padding: "8px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: "#f0f0ff" }}>{k.car}</span>
              <span style={{ fontSize: 7, color: "rgba(255,255,255,0.35)" }}>{k.date}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Départ</div>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#f0f0ff" }}>{k.start.toLocaleString()} KM</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>→</div>
                {k.diff && <div style={{ fontSize: 8, fontWeight: 900, color: "#bf5fff" }}>+{k.diff} km</div>}
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Arrivée</div>
                {k.end
                  ? <div style={{ fontSize: 10, fontWeight: 800, color: "#f0f0ff" }}>{k.end.toLocaleString()} KM</div>
                  : <div style={{ fontSize: 7, color: "#f59e0b", background: "rgba(245,158,11,0.1)", padding: "2px 6px", borderRadius: 99 }}>En cours</div>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const TECH = [
  { icon: <SiReact size={14} color="#61DAFB" />, label: "React Native" },
  { icon: <SiExpo size={14} color="#fff" />, label: "Expo v55" },
  { icon: <SiTypescript size={14} color="#3178C6" />, label: "TypeScript" },
  { icon: <TbBrandLaravel size={14} color="#F53003" />, label: "Laravel API" },
  { icon: <SiFirebase size={14} color="#FFCA28" />, label: "Firebase FCM" },
];

const FEATURES = [
  { icon: "📅", title: "Gestion des Réservations", desc: "Consulter, confirmer, démarrer et terminer les transferts avec GPS intégré. Statuts en temps réel: Planifiée, En cours, Terminée, Expirée." },
  { icon: "💰", title: "Résumé Financier", desc: "Dashboard live : Total recettes, dépenses, frais de roulement, retour sur avance et solde net calculés automatiquement." },
  { icon: "🧾", title: "Déclaration de Dépenses", desc: "Formulaire complet avec catégories, véhicule, montant TTC, photos justificatifs (caméra / galerie) et suivi kilométrique." },
  { icon: "🏎", title: "Suivi Kilométrage", desc: "Enregistrement des relevés kilométriques par véhicule avec photos, KM départ/arrivée et calcul automatique du différentiel." },
  { icon: "🔔", title: "Push Notifications", desc: "Alertes Firebase FCM pour nouvelles réservations et mises à jour en temps réel sur iOS et Android." },
  { icon: "📍", title: "Géolocalisation GPS", desc: "Coordonnées de début/fin de trajet capturées automatiquement et envoyées à l'API Laravel pour le suivi." },
];

export default function MobileApp() {
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
          style={{ color: "#ff2d78", letterSpacing: "0.35em" }}>
          ◈ 06 · モバイルアプリ
        </p>
        <h2 className="font-anime font-bold" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#f0f0ff" }}>
          TMS Logistics{" "}
          <span style={{ background: "linear-gradient(135deg,#ff2d78,#ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Mobile App
          </span>
        </h2>
        <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
          Application React Native cross-platform iOS & Android — v1.7.0 — Espace Chauffeur IntegralTech
        </p>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: info */}
        <div className="flex-1 order-2 lg:order-1 space-y-5">
          {/* Company badge */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-anime font-600 text-sm"
              style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.25)", color: "#ffd700" }}>
              🏢 Built at{" "}
              <a href="https://integraltech.ma/" target="_blank" rel="noopener noreferrer"
                style={{ color: "#ffd700", textDecoration: "underline" }}>IntegralTech</a>
              {" "}· Marrakech · v1.7.0
            </span>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-4"
                style={{ borderLeft: "2px solid rgba(255,45,120,0.3)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ fontSize: 18 }}>{f.icon}</span>
                  <h4 className="font-anime font-700 text-sm" style={{ color: "#f0f0ff" }}>{f.title}</h4>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-orbitron text-xs tracking-widest uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em" }}>
              Stack Technique
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH.map(({ icon, label }) => (
                <span key={label} className="tech-badge flex items-center gap-2">{icon} {label}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap pt-2">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-anime font-600 text-sm"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}>
              <FaCheckCircle color="#00ff9f" size={14} />
              Application Entreprise Privée
            </span>
          </div>
        </div>

        {/* Right: Phone */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="flex-shrink-0 flex flex-col items-center gap-5 order-1 lg:order-2"
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
                  boxShadow: activeScreen === i ? `0 0 12px ${s.color}50` : "none",
                }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Phone mockup */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
            style={{ width: 230, height: 470 }}
          >
            {/* Glow */}
            <div style={{
              position: "absolute", inset: -30,
              background: `radial-gradient(ellipse, ${SCREENS[activeScreen].color}20 0%, transparent 70%)`,
              filter: "blur(20px)", pointerEvents: "none", transition: "background 0.4s",
            }} />

            {/* Phone body */}
            <div style={{
              width: "100%", height: "100%", borderRadius: 40,
              background: "#080818",
              border: `2px solid ${SCREENS[activeScreen].color}50`,
              boxShadow: `0 0 30px ${SCREENS[activeScreen].color}25, 0 0 60px rgba(0,0,0,0.6), inset 0 0 15px rgba(0,0,0,0.5)`,
              overflow: "hidden", position: "relative", transition: "border-color 0.4s, box-shadow 0.4s",
            }}>
              {/* Notch */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 70, height: 20, background: "#080818", borderRadius: "0 0 12px 12px", zIndex: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }} />
              {/* Status bar */}
              <div style={{ position: "absolute", top: 6, left: 14, right: 14, display: "flex", justifyContent: "space-between", fontSize: 7, color: "rgba(255,255,255,0.3)", zIndex: 11 }}>
                <span>9:41</span><span>●●●</span>
              </div>
              {/* Screen content */}
              <div style={{ position: "absolute", inset: 0, overflowY: "auto" }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeScreen}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    style={{ height: "100%" }}>
                    {SCREENS[activeScreen].render()}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Bottom nav */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 50,
                background: "rgba(8,8,24,0.95)", borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex", justifyContent: "space-around", alignItems: "center", paddingBottom: 8,
              }}>
                {SCREENS.map((s, i) => (
                  <button key={s.id} onClick={() => setActiveScreen(i)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer" }}>
                    <span style={{ fontSize: 16, filter: activeScreen === i ? `drop-shadow(0 0 4px ${s.color})` : "none", opacity: activeScreen === i ? 1 : 0.35 }}>{s.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* App info */}
          <div className="text-center">
            <div className="font-anime font-700 text-sm" style={{ color: "#f0f0ff" }}>TMS Logistics</div>
            <div className="text-xs font-orbitron mt-1" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
              iOS & ANDROID · v1.7.0
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
