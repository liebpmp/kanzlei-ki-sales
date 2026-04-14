import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calculator, TrendingUp, GraduationCap, Wallet, Server } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

function LiveCounter({ value, suffix = '', prefix = '', className = '' }) {
  const [display, setDisplay] = useState(0)
  const prevValue = useRef(value)

  useEffect(() => {
    const from = prevValue.current !== value ? display : 0
    const start = performance.now()
    const duration = 800
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(from + eased * (value - from)))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prevValue.current = value
  }, [value])

  return (
    <span className={className}>
      {prefix}{display.toLocaleString('de-DE')}{suffix}
    </span>
  )
}

function getKIImplementierung(employees) {
  if (employees <= 5) return 25000 + (employees - 1) * 6250
  if (employees <= 15) return 50000 + (employees - 6) * 5000
  if (employees <= 30) return 100000 + (employees - 16) * 5357
  return 175000 + (employees - 31) * 3947
}

export default function RechnerSlide() {
  const [duration, setDuration] = useState(6)
  const [companySize, setCompanySize] = useState('<50')
  const [employees, setEmployees] = useState(5)
  const [salary, setSalary] = useState(4000)

  const results = useMemo(() => {
    const rates = {
      '<50': { training: 1.0, wage: 0.75 },
      '50-500': { training: 0.5, wage: 0.50 },
      '>500': { training: 0.25, wage: 0.25 },
    }
    const rate = rates[companySize]

    const totalWages = employees * salary * duration
    const wageSubsidy = Math.round(totalWages * rate.wage)
    const trainingValue = employees * 10000
    const kiImpl = Math.round(getKIImplementierung(employees))
    const totalFunding = wageSubsidy + trainingValue + kiImpl
    const cashAdvantage = wageSubsidy

    return { wageSubsidy, trainingValue, kiImpl, totalFunding, cashAdvantage }
  }, [duration, companySize, employees, salary])

  const maxBar = Math.max(results.wageSubsidy, results.trainingValue, results.kiImpl, 1)

  return (
    <div className="w-full h-full bg-dark flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-6 w-full">
        <motion.div
          className="mb-5 md:mb-8 text-center"
          initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Calculator className="size-4 text-emerald" />
            <span className="text-emerald text-[13px] font-semibold uppercase tracking-wider">Interaktiver Förderrechner</span>
          </div>
          <h2 className="font-heading text-[clamp(1.3rem,3vw,2.25rem)] font-extrabold text-white leading-tight">
            Berechnen Sie Ihre Fördersumme
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          {/* LEFT: Inputs */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Duration Toggle */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-white/70">Trainingsdauer</label>
              <div className="grid grid-cols-2 gap-2">
                {[6, 12].map((m) => (
                  <button
                    key={m}
                    onClick={() => setDuration(m)}
                    className={`py-2.5 rounded-[2px] text-[14px] font-semibold transition-all duration-300 border ${
                      duration === m
                        ? 'bg-emerald/15 border-emerald/40 text-emerald'
                        : 'bg-white/[0.03] border-white/10 text-white/50 hover:bg-white/[0.06] hover:text-white/70'
                    }`}
                  >
                    {m} Monate
                  </button>
                ))}
              </div>
            </div>

            {/* Company Size */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-white/70">Unternehmensgröße</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '<50 MA', value: '<50' },
                  { label: '50–500 MA', value: '50-500' },
                  { label: '>500 MA', value: '>500' },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setCompanySize(s.value)}
                    className={`py-2.5 rounded-[2px] text-[13px] font-semibold transition-all duration-300 border ${
                      companySize === s.value
                        ? 'bg-emerald/15 border-emerald/40 text-emerald'
                        : 'bg-white/[0.03] border-white/10 text-white/50 hover:bg-white/[0.06] hover:text-white/70'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Employees Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-[13px] font-medium text-white/70">Anzahl zu fördernde Mitarbeiter</label>
                <span className="text-emerald font-bold text-[15px] tabular-nums">{employees}</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-white/30">
                <span>1</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>

            {/* Salary Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-white/70">Durchschn. Bruttogehalt (€/Monat)</label>
              <div className="relative">
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
                  min={1000}
                  max={15000}
                  step={100}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-[2px] px-4 py-2.5 text-white text-[15px] font-medium placeholder:text-white/30 focus:outline-none focus:border-emerald/50 focus:bg-white/[0.08] transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-[13px]">€ / Monat</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="flex flex-col gap-4">
            {/* Total Funding */}
            <motion.div
              className="bg-emerald/[0.08] border border-emerald/25 rounded-[2px] p-5 md:p-6 text-center"
              layout
            >
              <span className="text-[12px] text-emerald/70 uppercase tracking-wider font-semibold">Gesamtförderung</span>
              <div className="mt-2">
                <LiveCounter
                  value={results.totalFunding}
                  suffix=" €"
                  className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold font-heading text-emerald"
                />
              </div>
            </motion.div>

            {/* Three Breakdown Cards */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Lohnkosten-erstattung', value: results.wageSubsidy, icon: Wallet, color: 'text-white' },
                { label: 'Schulungswert', value: results.trainingValue, icon: GraduationCap, color: 'text-emerald' },
                { label: 'KI-Implementierung', value: results.kiImpl, icon: Server, color: 'text-maroon' },
              ].map((item) => (
                <div key={item.label} className="bg-white/[0.04] border border-white/[0.06] rounded-[2px] p-3 md:p-4 text-center">
                  <item.icon className={`size-4 ${item.color} mx-auto mb-1 opacity-60`} />
                  <div className="text-[10px] text-white/40 uppercase tracking-wider leading-tight mb-2">{item.label}</div>
                  <LiveCounter
                    value={item.value}
                    suffix=" €"
                    className={`text-[14px] md:text-[18px] font-bold ${item.color}`}
                  />
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-[2px] p-4">
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Lohnkosten', value: results.wageSubsidy, color: 'bg-white/40' },
                  { label: 'Schulung', value: results.trainingValue, color: 'bg-emerald' },
                  { label: 'KI-Impl.', value: results.kiImpl, color: 'bg-maroon' },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-[11px] text-white/40 w-20 text-right shrink-0">{bar.label}</span>
                    <div className="flex-1 bg-white/[0.05] rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${bar.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.max((bar.value / maxBar) * 100, 2)}%` }}
                        transition={{ duration: 0.8, ease }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cash Advantage */}
            <motion.div
              className="bg-emerald/15 border-2 border-emerald/40 rounded-[2px] p-4 md:p-5 text-center"
              layout
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingUp className="size-4 text-emerald" />
                <span className="text-[12px] text-emerald/80 uppercase tracking-wider font-semibold">Ihr realer Cash-Vorteil</span>
              </div>
              <LiveCounter
                value={results.cashAdvantage}
                suffix=" €"
                className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold font-heading text-emerald"
              />
              <p className="text-[11px] text-emerald/50 mt-1">
                So viel Lohnkosten erstattet Ihnen der Staat zurück
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
