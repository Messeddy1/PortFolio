import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiReact, SiExpo, SiTypescript, SiFirebase, SiTailwindcss } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import {
  FaCheckCircle,
  FaFilePdf,
  FaBell
} from "react-icons/fa";

export default function MobileApp() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const SCREENS = [
    {
      id: "dashboard",
      label: "Tableau de Bord",
      icon: "🏠",
      color: "#ff2d78",
      render: () => (
        <div style={{ padding: "26px 12px 60px", display: "flex", flexDirection: "column", gap: 9, height: "100%", fontFamily: "Inter, sans-serif" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Espace Chauffeur • TMS</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#f0f0ff" }}>Bonjour, Ahmed 👋</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 99, padding: "3px 8px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }} />
              <span style={{ fontSize: 7, fontWeight: 700, color: "#10b981" }}>En service</span>
            </div>
          </div>

          {/* Active Mission Alert Banner */}
          <div
            onClick={() => setActiveScreen(1)}
            style={{
              background: "linear-gradient(135deg, rgba(255,45,120,0.15), rgba(59,130,246,0.15))",
              border: "1px solid rgba(255,45,120,0.35)",
              borderRadius: 12,
              padding: "9px 10px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
              <span style={{ fontSize: 7, background: "#ff2d78", color: "#fff", padding: "1px 6px", borderRadius: 99, fontWeight: 800 }}>MISSION EN COURS</span>
              <span style={{ fontSize: 8, color: "#00f5ff", fontWeight: 700 }}>14:30 Aujourd&apos;hui</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#fff" }}>Aéroport Menara (RAK) → Riad Mogador</div>
            <div style={{ fontSize: 7, color: "rgba(255,255,255,0.5)", marginTop: 2, display: "flex", justifyContent: "space-between" }}>
              <span>👥 3 passagers • Vol AT-402</span>
              <span style={{ color: "#ffd700", fontWeight: 700 }}>Voir détails ›</span>
            </div>
          </div>

          {/* Stats card */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "9px 8px" }}>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginBottom: 6, display: "flex", alignItems: "center", gap: 4 }}>
              🚗 Synthèse du mois (Octobre)
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {[
                ["Total", "24", "#f0f0ff"],
                ["En Cours", "1", "#f59e0b"],
                ["Terminées", "18", "#10b981"],
                ["Avis", "4.9 ★", "#ffd700"],
              ].map(([l, v, c]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: c }}>{v}</div>
                  <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginTop: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial summary */}
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>
            Compte Chauffeur
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
            {[
              ["Recettes", "12 450 DH", "#10b981", "↑"],
              ["Dépenses", "3 200 DH", "#ef4444", "↓"],
              ["Gasoil", "3 850 DH", "#f59e0b", "⛽"],
              ["Solde Net", "1 250 DH", "#ffd700", "💰"],
            ].map(([l, v, c, i]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${c}25`, borderRadius: 10, padding: "6px 8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>{l}</span>
                  <span style={{ fontSize: 8, color: c }}>{i}</span>
                </div>
                <div style={{ fontSize: 9.5, fontWeight: 800, color: c, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Quick nav grid */}
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>
            Accès Rapide Modules
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
            {[
              { icon: "🚗", label: "Réservations", target: 1, tag: "3 actives" },
              { icon: "⛽", label: "Plein Gasoil", target: 2, tag: "Suivi" },
              { icon: "🏖️", label: "Mes Congés", target: 3, tag: "18j restants" },
              { icon: "💳", label: "Dépenses", target: 4, tag: "Déclarer" },
            ].map((item) => (
              <div
                key={item.label}
                onClick={() => setActiveScreen(item.target)}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: "7px 8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: 13 }}>{item.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: "#f0f0ff" }}>{item.label}</div>
                  <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.35)" }}>{item.tag}</div>
                </div>
                <span style={{ color: "#ff2d78", fontSize: 9 }}>›</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "reservations",
      label: "Réservations & PDF",
      icon: "🚗",
      color: "#3b82f6",
      render: () => (
        <div style={{ padding: "26px 12px 60px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter, sans-serif" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#f0f0ff" }}>Mes Courses</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>3 réservations assignées</div>
            </div>
            <div style={{ fontSize: 7, background: "rgba(59,130,246,0.2)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 6, padding: "3px 6px", fontWeight: 700 }}>
              🔔 Rappels Actifs
            </div>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 3, background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 2 }}>
            {["En cours (1)", "Planifiée (1)", "Terminée (1)"].map((t, i) => (
              <div
                key={t}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "4px 2px",
                  borderRadius: 6,
                  fontSize: 7,
                  fontWeight: 700,
                  background: i === 0 ? "rgba(59,130,246,0.25)" : "transparent",
                  color: i === 0 ? "#60a5fa" : "rgba(255,255,255,0.35)",
                }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Mission Card 1 (In Progress with PDF & Direct Payment) */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(245,158,11,0.35)", borderRadius: 12, padding: "8px 9px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
              <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>REF: RES-2026-0042</span>
              <span style={{ fontSize: 6.5, color: "#f59e0b", background: "rgba(245,158,11,0.15)", padding: "1px 6px", borderRadius: 99, fontWeight: 800 }}>
                ● EN COURS
              </span>
            </div>
            <div style={{ fontSize: 9.5, fontWeight: 800, color: "#fff", marginBottom: 2 }}>
              📍 Aéroport Menara (RAK) → Riad Mogador
            </div>
            <div style={{ display: "flex", gap: 6, fontSize: 7.5, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
              <span>⏰ 14:30</span>
              <span>👥 3 passagers</span>
              <span>🚘 Mercedes Vito</span>
            </div>

            {/* Payment Condition Notice */}
            <div style={{ background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: 7, padding: "4px 6px", marginBottom: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 7, color: "#ffd700", fontWeight: 700 }}>💵 350,00 MAD • Paiement Direct</span>
                <span style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)" }}>🔒 Fin de mission requise</span>
              </div>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>
                Paiement débloqué uniquement après clôture du trajet par le chauffeur.
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 3 }}>
              <button
                onClick={() => showToast("📄 Programme PDF téléchargé & partagé avec succès")}
                style={{
                  flex: 1,
                  background: "rgba(0,245,255,0.12)",
                  border: "1px solid rgba(0,245,255,0.3)",
                  borderRadius: 6,
                  padding: "4px 0",
                  fontSize: 7,
                  color: "#00f5ff",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  cursor: "pointer",
                }}
              >
                <FaFilePdf size={8} /> Programme PDF
              </button>
              <button
                onClick={() => showToast("🔔 Rappel programmé: 30 min avant départ")}
                style={{
                  flex: 1,
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: 6,
                  padding: "4px 0",
                  fontSize: 7,
                  color: "#60a5fa",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  cursor: "pointer",
                }}
              >
                <FaBell size={8} /> Rappel Actif
              </button>
              <button
                onClick={() => showToast("🏁 Course terminée. Encaissement direct validé!")}
                style={{
                  flex: 1,
                  background: "#10b981",
                  border: "none",
                  borderRadius: 6,
                  padding: "4px 0",
                  fontSize: 7,
                  color: "#fff",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                ✓ Terminer
              </button>
            </div>
          </div>

          {/* Mission Card 2 (Planned) */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 12, padding: "8px 9px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
              <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>REF: RES-2026-0045</span>
              <span style={{ fontSize: 6.5, color: "#3b82f6", background: "rgba(59,130,246,0.15)", padding: "1px 6px", borderRadius: 99, fontWeight: 800 }}>
                PLANIFIÉE
              </span>
            </div>
            <div style={{ fontSize: 9.5, fontWeight: 800, color: "#fff", marginBottom: 2 }}>
              📍 Palmeraie Golf Palace → Gare Marrakech ONCF
            </div>
            <div style={{ display: "flex", gap: 6, fontSize: 7.5, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
              <span>⏰ 17:00</span>
              <span>👥 2 passagers</span>
              <span style={{ color: "#10b981" }}>💳 Payé Agence</span>
            </div>
            <div style={{ display: "flex", gap: 3 }}>
              <button
                onClick={() => showToast("📄 Téléchargement du Voucher PDF...")}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 6,
                  padding: "4px 0",
                  fontSize: 7,
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                }}
              >
                📄 Fiche PDF
              </button>
              <button
                onClick={() => showToast("✕ Course annulée et transmise à la centrale")}
                style={{
                  flex: 1,
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: 6,
                  padding: "4px 0",
                  fontSize: 7,
                  color: "#ef4444",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                ✕ Annuler
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "gasoil",
      label: "Suivi Gasoil",
      icon: "⛽",
      color: "#f59e0b",
      render: () => (
        <div style={{ padding: "26px 12px 60px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter, sans-serif" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#f0f0ff" }}>Plein Gasoil</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>Gestion du carburant & reçus</div>
            </div>
            <button
              onClick={() => showToast("Formulaire de plein de carburant ouvert")}
              style={{
                background: "#f59e0b",
                border: "none",
                borderRadius: 8,
                padding: "4px 8px",
                fontSize: 7.5,
                color: "#080818",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              + Nouveau Plein
            </button>
          </div>

          {/* Month summary */}
          <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 10, padding: "7px 9px", display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Total Ce Mois</div>
              <div style={{ fontSize: 12, fontWeight: 900, color: "#f59e0b" }}>3 850,00 MAD</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Consommation</div>
              <div style={{ fontSize: 10, fontWeight: 800, color: "#f0f0ff" }}>320 L • 8.4 L/100</div>
            </div>
          </div>

          {/* Fuel logs */}
          {[
            {
              car: "Mercedes Vito • AB-5678-7",
              station: "Afriquia Agdal Marrakech",
              liters: "62.5 L",
              price: "750,00 MAD",
              km: "124 580 KM",
              date: "Aujourd'hui 11:20",
              status: "Validé ✓",
              sc: "#10b981",
              hasPhoto: true,
            },
            {
              car: "Toyota Camry • AB-1234-7",
              station: "TotalEnergies Guéliz",
              liters: "50.0 L",
              price: "600,00 MAD",
              km: "87 635 KM",
              date: "19 Oct 2026",
              status: "Validé ✓",
              sc: "#10b981",
              hasPhoto: true,
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 11, padding: "8px 9px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: "#f0f0ff" }}>{item.car}</span>
                <span style={{ fontSize: 6.5, color: item.sc, background: `${item.sc}18`, padding: "1px 6px", borderRadius: 99, fontWeight: 700 }}>
                  {item.status}
                </span>
              </div>
              <div style={{ fontSize: 7, color: "rgba(255,255,255,0.4)" }}>📍 {item.station} • {item.date}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 5, paddingTop: 4, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.5)" }}>
                  📟 {item.km} • ⛽ {item.liters}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  {item.hasPhoto && <span style={{ fontSize: 7, color: "#00f5ff" }}>📸 Reçu</span>}
                  <span style={{ fontSize: 10, fontWeight: 900, color: "#f59e0b" }}>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "conges",
      label: "Congés & Repos",
      icon: "🏖️",
      color: "#00f5ff",
      render: () => (
        <div style={{ padding: "26px 12px 60px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter, sans-serif" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#f0f0ff" }}>Congés & Repos</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>Solde & historique des demandes</div>
            </div>
            <button
              onClick={() => showToast("Nouvelle demande de congé créée")}
              style={{
                background: "#00f5ff",
                border: "none",
                borderRadius: 8,
                padding: "4px 8px",
                fontSize: 7.5,
                color: "#080818",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              + Demande
            </button>
          </div>

          {/* Balance Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
            <div style={{ background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.25)", borderRadius: 10, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Solde Congé Payé</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#00f5ff", marginTop: 2 }}>18 Jours</div>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>Exercice 2026</div>
            </div>
            <div style={{ background: "rgba(191,95,255,0.06)", border: "1px solid rgba(191,95,255,0.25)", borderRadius: 10, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Solde Repos Hebdo</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#bf5fff", marginTop: 2 }}>4 Jours</div>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>Récupérations</div>
            </div>
          </div>

          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Historique des Demandes
          </div>

          {/* Requests list */}
          {[
            {
              type: "Congé Annuel",
              duration: "7 jours",
              dates: "05/11/2026 → 12/11/2026",
              status: "En attente RH",
              sc: "#f59e0b",
              desc: "Congé familial planifié",
            },
            {
              type: "Repos Récupération",
              duration: "1 jour",
              dates: "15/10/2026",
              status: "Approuvé",
              sc: "#10b981",
              desc: "Permanence week-end",
            },
            {
              type: "Congé Exceptionnel",
              duration: "3 jours",
              dates: "20/08/2026 → 23/08/2026",
              status: "Approuvé",
              sc: "#10b981",
              desc: "Événement familial",
            },
          ].map((req, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "7px 8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: "#f0f0ff" }}>{req.type}</span>
                <span style={{ fontSize: 6.5, color: req.sc, background: `${req.sc}18`, padding: "1px 6px", borderRadius: 99, fontWeight: 700 }}>
                  {req.status}
                </span>
              </div>
              <div style={{ fontSize: 7, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                📅 {req.dates} ({req.duration})
              </div>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>
                Note: {req.desc}
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
        <div style={{ padding: "26px 12px 60px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter, sans-serif" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#f0f0ff" }}>Dépenses de Route</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>Déclarations de frais & reçus</div>
            </div>
            <div style={{ background: "#10b981", borderRadius: 8, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#fff", fontWeight: 800 }}>
              +
            </div>
          </div>

          {/* Date filter */}
          <div style={{ display: "flex", gap: 3 }}>
            {["Du: 01/10/2026", "Au: 23/10/2026"].map((f) => (
              <div key={f} style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 7, padding: "4px 6px", fontSize: 6.5, color: "rgba(255,255,255,0.4)", display: "flex", justifyContent: "space-between" }}>
                <span>{f}</span>
                <span>📅</span>
              </div>
            ))}
          </div>

          {/* Expense cards */}
          {[
            { cat: "Entretien & Vidange", amount: "1 200,00 MAD", car: "Mercedes Vito", date: "10/10/2026", status: "Validé", sc: "#10b981" },
            { cat: "Péage Autoroute", amount: "95,00 MAD", car: "Mercedes Vito", date: "18/10/2026", status: "Validé", sc: "#10b981" },
            { cat: "Lavage VIP & Désinfection", amount: "80,00 MAD", car: "Mercedes Vito", date: "22/10/2026", status: "Brouillon", sc: "#fbbf24" },
          ].map((e) => (
            <div key={e.cat} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "7px 8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 7.5, color: e.sc, background: `${e.sc}15`, padding: "1px 6px", borderRadius: 99, fontWeight: 700 }}>{e.cat}</span>
                <span style={{ fontSize: 6.5, color: e.sc, background: `${e.sc}10`, padding: "1px 5px", borderRadius: 99 }}>{e.status}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 7, color: "rgba(255,255,255,0.35)" }}>{e.date} • {e.car}</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 900, color: "#10b981" }}>{e.amount}</span>
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
        <div style={{ padding: "26px 12px 60px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter, sans-serif" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#f0f0ff" }}>Kilométrage</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>Relevés départ / arrivée</div>
            </div>
            <div style={{ background: "#bf5fff", borderRadius: 8, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#fff", fontWeight: 800 }}>
              +
            </div>
          </div>

          {[
            { car: "Mercedes Vito • AB-5678-7", date: "23/10/2026", start: 124300, end: 124580, diff: 280 },
            { car: "Toyota Camry • AB-1234-7", date: "21/10/2026", start: 87420, end: 87635, diff: 215 },
          ].map((k, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(191,95,255,0.2)", borderRadius: 11, padding: "8px 9px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: "#f0f0ff" }}>{k.car}</span>
                <span style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)" }}>{k.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Départ</div>
                  <div style={{ fontSize: 9.5, fontWeight: 800, color: "#f0f0ff" }}>{k.start.toLocaleString()} KM</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.2)" }}>→</div>
                  <div style={{ fontSize: 7.5, fontWeight: 900, color: "#bf5fff" }}>+{k.diff} km</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Arrivée</div>
                  <div style={{ fontSize: 9.5, fontWeight: 800, color: "#f0f0ff" }}>{k.end.toLocaleString()} KM</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "profile",
      label: "Profil & Paramètres",
      icon: "👤",
      color: "#00f5ff",
      render: () => (
        <div style={{ padding: "26px 12px 60px", display: "flex", flexDirection: "column", gap: 7, height: "100%", fontFamily: "Inter, sans-serif" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#f0f0ff" }}>Profil Chauffeur</div>

          {/* User card */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,245,255,0.25)", borderRadius: 12, padding: "9px 10px", display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#ff2d78,#00f5ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: "#fff" }}>
              AB
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: "#fff" }}>Ahmed Benali</div>
              <div style={{ fontSize: 7, color: "#00f5ff" }}>Chauffeur Titulaire • Mat. #CH-042</div>
              <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)" }}>Mercedes Vito (AB-5678-7)</div>
            </div>
          </div>

          {/* Settings list */}
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Préférences & Système
          </div>
          {[
            ["🌙 Mode Sombre", "Activé", "#00ff9f"],
            ["🔔 Rappel de mission", "30 min avant", "#3b82f6"],
            ["📍 Localisation GPS", "Précision haute", "#10b981"],
            ["🔄 Version TMS", "v1.9.2 (À jour)", "#ffd700"],
          ].map(([t, v, c]) => (
            <div key={t} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "6px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 7.5, color: "#f0f0ff" }}>{t}</span>
              <span style={{ fontSize: 7, color: c, fontWeight: 700 }}>{v}</span>
            </div>
          ))}

          {/* Logout button */}
          <button
            onClick={() => showToast("Session sécurisée active (Laravel Sanctum)")}
            style={{
              marginTop: 4,
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: 8,
              padding: "6px 0",
              fontSize: 7.5,
              color: "#ef4444",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Déconnexion Sécurisée
          </button>
        </div>
      ),
    },
  ];

  const TECH = [
    { icon: <SiReact size={14} color="#61DAFB" />, label: "React Native" },
    { icon: <SiExpo size={14} color="#fff" />, label: "Expo SDK (EAS)" },
    { icon: <SiTypescript size={14} color="#3178C6" />, label: "TypeScript" },
    { icon: <TbBrandLaravel size={14} color="#F53003" />, label: "Laravel API" },
    { icon: <SiFirebase size={14} color="#FFCA28" />, label: "Firebase FCM" },
    { icon: <SiTailwindcss size={14} color="#38BDF8" />, label: "NativeWind" },
  ];

  const FEATURES = [
    {
      icon: "🚗",
      title: "Gestion des Courses & Trajets",
      desc: "Suivi en direct des réservations assignées (Planifiée, En cours, Terminée, Annulée) avec géolocalisation GPS et détails passagers.",
    },
    {
      icon: "📄",
      title: "Programmes PDF & Partage Expo",
      desc: "Génération, téléchargement et partage instantané des fiches de programme et vouchers PDF directement depuis l'application via Expo Sharing.",
    },
    {
      icon: "🔔",
      title: "Service de Rappels Automatiques",
      desc: "Système de notifications locales d'arrière-plan avec synchronisation automatique et rappels programmés (ex: 30 min avant le départ).",
    },
    {
      icon: "💳",
      title: "Encaissement & Paiement Sécurisé",
      desc: "Contrôle strict des paiements directs chauffeur : verrouillage intelligent avant fin effective de course et suivi des montants TTC.",
    },
    {
      icon: "⛽",
      title: "Module Dédié Plein Gasoil",
      desc: "Saisie détaillée des pleins de carburant par véhicule, calcul de la consommation, relevé odomètre et capture photo des reçus.",
    },
    {
      icon: "🏖️",
      title: "Module Congés & Jours de Repos",
      desc: "Affichage des soldes disponibles en temps réel (congés payés, repos), soumission de demandes et suivi du statut d'approbation RH.",
    },
    {
      icon: "🧾",
      title: "Frais de Mission & Justificatifs",
      desc: "Déclaration des dépenses par produit/catégorie (péage, entretien, lavage) avec validation et photos des pièces comptables.",
    },
    {
      icon: "📲",
      title: "Mises à Jour OTA & Mode Maintenance",
      desc: "Mises à jour transparentes via Expo EAS Update (v1.9.2), détection automatique de maintenance serveur et écrans d'alerte dédiés.",
    },
  ];

  return (
    <div className="relative py-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p
          className="font-orbitron text-xs tracking-widest uppercase mb-3"
          style={{ color: "#ff2d78", letterSpacing: "0.35em" }}
        >
          ◈ 06 · モバイルアプリ
        </p>
        <h2 className="font-anime font-bold" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#f0f0ff" }}>
          TMS Logistics{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#ff2d78,#ffd700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Driver Mobile App
          </span>
        </h2>
        <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
          Application mobile React Native / Expo — Production v1.9.2 — Espace Chauffeur & Gestion de Flotte IntegralTech
        </p>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: info */}
        <div className="flex-1 order-2 lg:order-1 space-y-6">
          {/* Company & Version badge */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-anime font-600 text-xs sm:text-sm"
              style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.25)", color: "#ffd700" }}
            >
              🏢 Built at{" "}
              <a href="https://integraltech.ma/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", textDecoration: "underline" }}>
                IntegralTech
              </a>{" "}
              · Marrakech
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-orbitron text-xs font-bold"
              style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.3)", color: "#00f5ff" }}
            >
              🚀 Version 1.9.2 (Latest)
            </span>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-3.5"
                style={{ borderLeft: "2px solid rgba(255,45,120,0.35)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span style={{ fontSize: 16 }}>{f.icon}</span>
                  <h4 className="font-anime font-700 text-xs sm:text-sm" style={{ color: "#f0f0ff" }}>
                    {f.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-orbitron text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em" }}>
              Stack Technique & Librairies
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH.map(({ icon, label }) => (
                <span key={label} className="tech-badge flex items-center gap-2 text-xs">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap pt-1">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-anime font-600 text-xs"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
            >
              <FaCheckCircle color="#00ff9f" size={12} />
              Application Entreprise Déployée en Production
            </span>
          </div>
        </div>

        {/* Right: Interactive Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="flex-shrink-0 flex flex-col items-center gap-4 order-1 lg:order-2 w-full max-w-sm"
        >
          {/* Screen tabs pills */}
          <div className="flex gap-1.5 flex-wrap justify-center max-w-xs">
            {SCREENS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveScreen(i)}
                className="px-2.5 py-1 rounded-full text-xs font-anime font-600 transition-all duration-200"
                style={{
                  background: activeScreen === i ? s.color : "rgba(255,255,255,0.05)",
                  color: activeScreen === i ? "#fff" : "rgba(255,255,255,0.45)",
                  border: `1px solid ${activeScreen === i ? s.color : "rgba(255,255,255,0.1)"}`,
                  boxShadow: activeScreen === i ? `0 0 12px ${s.color}60` : "none",
                }}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Phone body mockup */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
            style={{ width: 270, height: 530 }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: -25,
                background: `radial-gradient(ellipse, ${SCREENS[activeScreen].color}25 0%, transparent 70%)`,
                filter: "blur(25px)",
                pointerEvents: "none",
                transition: "background 0.4s",
              }}
            />

            {/* Phone casing */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 42,
                background: "#080818",
                border: `2px solid ${SCREENS[activeScreen].color}55`,
                boxShadow: `0 0 35px ${SCREENS[activeScreen].color}30, 0 0 70px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.6)`,
                overflow: "hidden",
                position: "relative",
                transition: "border-color 0.4s, box-shadow 0.4s",
              }}
            >
              {/* Dynamic Island / Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 84,
                  height: 18,
                  background: "#080818",
                  borderRadius: "0 0 14px 14px",
                  zIndex: 20,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#111", border: "1px solid #333" }} />
              </div>

              {/* Status bar */}
              <div
                style={{
                  position: "absolute",
                  top: 5,
                  left: 16,
                  right: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 7.5,
                  color: "rgba(255,255,255,0.45)",
                  zIndex: 21,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                <span>09:41</span>
                <span>5G ● 100%</span>
              </div>

              {/* Screen Toast notification */}
              <AnimatePresence>
                {toastMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                      position: "absolute",
                      top: 26,
                      left: 10,
                      right: 10,
                      background: "rgba(13,13,42,0.95)",
                      border: "1px solid #00f5ff",
                      borderRadius: 10,
                      padding: "6px 8px",
                      zIndex: 30,
                      boxShadow: "0 4px 20px rgba(0,245,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontSize: 10 }}>🔔</span>
                    <span style={{ fontSize: 7, color: "#f0f0ff", fontWeight: 700 }}>{toastMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Screen content area */}
              <div style={{ position: "absolute", inset: 0, overflowY: "auto" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.22 }}
                    style={{ height: "100%" }}
                  >
                    {SCREENS[activeScreen].render()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Navigation Bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 52,
                  background: "rgba(8,8,24,0.96)",
                  backdropFilter: "blur(12px)",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingBottom: 6,
                  zIndex: 25,
                }}
              >
                {[
                  { icon: "🏠", label: "Accueil", idx: 0 },
                  { icon: "🚗", label: "Courses", idx: 1 },
                  { icon: "⛽", label: "Gasoil", idx: 2 },
                  { icon: "🏖️", label: "Congés", idx: 3 },
                  { icon: "👤", label: "Profil", idx: 6 },
                ].map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveScreen(tab.idx)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px 6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        filter: activeScreen === tab.idx ? "drop-shadow(0 0 6px rgba(255,45,120,0.8))" : "none",
                        opacity: activeScreen === tab.idx ? 1 : 0.35,
                        transform: activeScreen === tab.idx ? "scale(1.15)" : "scale(1)",
                        transition: "all 0.2s",
                      }}
                    >
                      {tab.icon}
                    </span>
                    <span
                      style={{
                        fontSize: 6.5,
                        color: activeScreen === tab.idx ? "#ff2d78" : "rgba(255,255,255,0.3)",
                        fontWeight: activeScreen === tab.idx ? 800 : 500,
                      }}
                    >
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* App footer info */}
          <div className="text-center">
            <div className="font-anime font-700 text-sm" style={{ color: "#f0f0ff" }}>
              TMS Logistics Mobile App
            </div>
            <div className="text-xs font-orbitron mt-0.5" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
              iOS & ANDROID · PRODUCTION v1.9.2
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
