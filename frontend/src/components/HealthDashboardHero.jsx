import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  ChevronDown,
  Footprints,
  HeartPulse,
  Moon,
  Pill,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const RANGES = ["7D", "30D", "90D"];

const SCORE_TRACE = {
  "7D": [61, 64, 63, 67, 70, 72, 76],
  "30D": [48, 52, 50, 55, 58, 60, 63, 65, 68, 70, 73, 76],
  "90D": [30, 35, 38, 42, 45, 50, 55, 58, 62, 66, 71, 76],
};

const PAIN_TRACE = {
  "7D": [4.1, 3.8, 3.6, 3.2, 2.9, 2.5, 2.1],
  "30D": [5.6, 5.1, 4.7, 4.3, 3.9, 3.5, 3.1, 2.9, 2.6, 2.4, 2.2, 2.1],
  "90D": [7.2, 6.6, 6.1, 5.5, 5.0, 4.6, 4.1, 3.7, 3.3, 2.9, 2.5, 2.1],
};

const SCORE_DELTA = { "7D": 15, "30D": 28, "90D": 46 };
const MOBILITY_DELTA = { "7D": 6, "30D": 14, "90D": 23 };

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setRevealed(true);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed];
}

function useCountUp(target, revealed, decimals = 0, duration = 1200) {
  const [display, setDisplay] = useState((0).toFixed(decimals));
  const prevTarget = useRef(0);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const from = prevTarget.current;
    const to = target;

    if (reduceMotion.current) {
      setDisplay(to.toFixed(decimals));
      prevTarget.current = to;
      return;
    }

    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const value = from + (to - from) * easeOutCubic(t);
      setDisplay(value.toFixed(decimals));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prevTarget.current = to;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, revealed, decimals, duration]);

  return display;
}

function buildSmoothPath(values, width, height, padding = 6) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (values.length - 1);
  const points = values.map((v, i) => ({
    x: padding + i * stepX,
    y: height - padding - ((v - min) / range) * (height - padding * 2),
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  const last = points[points.length - 1];
  const first = points[0];
  const areaD = `${d} L ${last.x} ${height} L ${first.x} ${height} Z`;

  return { d, areaD };
}

function Sparkline({ values, revealed, stroke = "var(--hd-brand)", height = 64, width = 220 }) {
  const { d, areaD } = useMemo(
    () => buildSmoothPath(values, width, height),
    [values, width, height],
  );

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="hd-area-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={areaD}
        fill="url(#hd-area-fill)"
        className={`hd-area ${revealed ? "hd-area--visible" : ""}`}
      />
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
        className={`hd-trace ${revealed ? "hd-trace--drawn" : ""}`}
      />
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
        pathLength="100"
        className="hd-trace-flow"
      />
    </svg>
  );
}

function RadialGauge({ value, max, size = 128, stroke = 10, colorVar, revealed, delay = 0 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value / max));

  return (
    <svg width={size} height={size} className="-rotate-90 shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={stroke}
        fill="none"
        className="hd-gauge-track"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        stroke={colorVar}
        strokeDasharray={c}
        strokeDashoffset={revealed ? c - pct * c : c}
        className="hd-gauge-fill"
        style={{ transitionDelay: `${delay}ms` }}
      />
    </svg>
  );
}

function ActivityRings({ revealed }) {
  const rings = [
    { r: 46, value: 0.86, colorVar: "var(--hd-brand)", delay: 0 },
    { r: 34, value: 0.62, colorVar: "var(--hd-teal)", delay: 120 },
    { r: 22, value: 0.94, colorVar: "var(--hd-amber)", delay: 240 },
  ];
  const size = 108;

  return (
    <svg width={size} height={size} className="-rotate-90 shrink-0">
      {rings.map((ring) => {
        const c = 2 * Math.PI * ring.r;
        return (
          <g key={ring.r}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={ring.r}
              strokeWidth="8"
              fill="none"
              className="hd-gauge-track"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={ring.r}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              stroke={ring.colorVar}
              strokeDasharray={c}
              strokeDashoffset={revealed ? c - ring.value * c : c}
              className="hd-gauge-fill"
              style={{ transitionDelay: `${ring.delay}ms` }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function pointerGlare(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function Card({ id, className = "", expandedId, onExpand, children }) {
  const isExpanded = expandedId === id;
  return (
    <div
      onMouseMove={pointerGlare}
      className={`hd-card group relative rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-5 sm:p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/6 hover:-translate-y-1 ${isExpanded ? "ring-1 ring-brand-400/50 shadow-[0_0_40px_-8px_rgba(91,140,255,0.35)]" : ""} ${className}`}
    >
      <div className="hd-glare pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex flex-col flex-1 min-h-0">{children}</div>
      {onExpand && (
        <button
          type="button"
          onClick={() => onExpand(isExpanded ? null : id)}
          aria-expanded={isExpanded}
          className="relative mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-white/40 hover:text-white/80 transition-colors cursor-pointer"
        >
          {isExpanded ? "Less detail" : "More detail"}
          <ChevronDown
            size={14}
            className={`transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

function Detail({ expanded, children }) {
  return (
    <div
      className="grid transition-[grid-template-rows] duration-500"
      style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div className="pt-4 mt-1 border-t border-white/10">{children}</div>
      </div>
    </div>
  );
}

export default function HealthDashboardHero() {
  const [sectionRef, revealed] = useReveal();
  const [range, setRange] = useState("30D");
  const [expandedId, setExpandedId] = useState(null);
  const rangeIndex = RANGES.indexOf(range);

  const score = useCountUp(76, revealed, 0, 1400);
  const mobility = useCountUp(118, revealed, 0, 1300);
  const pain = useCountUp(2.1, revealed, 1, 1300);
  const steps = useCountUp(7420, revealed, 0, 1500);
  const sleep = useCountUp(88, revealed, 0, 1300);
  const adherence = useCountUp(94, revealed, 0, 1300);

  return (
    <section
      ref={sectionRef}
      className="hd-root relative overflow-hidden bg-neutral-950 py-20 sm:py-28"
    >
      <style>{`
        .hd-root {
          --hd-brand: var(--color-brand-400, #5b8cff);
          --hd-teal: #2dd4bf;
          --hd-amber: #fbbf24;
          --hd-rose: #fb7185;
          --hd-violet: #a78bfa;
        }
        .hd-glow {
          background: radial-gradient(closest-side, var(--tw-glow-color, rgba(91,140,255,0.25)), transparent);
          filter: blur(60px);
        }
        .hd-card { will-change: transform; }
        .hd-glare {
          background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.10), transparent 60%);
        }
        .hd-gauge-track { stroke: rgba(255,255,255,0.08); }
        .hd-gauge-fill {
          transition: stroke-dashoffset 1400ms var(--ease-smooth, cubic-bezier(0.16,1,0.3,1));
        }
        .hd-trace {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          transition: stroke-dashoffset 1600ms var(--ease-smooth, cubic-bezier(0.16,1,0.3,1));
        }
        .hd-trace--drawn { stroke-dashoffset: 0; }
        .hd-trace-flow {
          stroke-dasharray: 3 9;
          animation: hd-flow 2.6s linear infinite;
        }
        .hd-area {
          opacity: 0;
          transition: opacity 900ms var(--ease-smooth, cubic-bezier(0.16,1,0.3,1)) 400ms;
        }
        .hd-area--visible { opacity: 1; }
        @keyframes hd-flow {
          to { stroke-dashoffset: -120; }
        }
        .hd-pill {
          transition: transform 500ms var(--ease-smooth, cubic-bezier(0.16,1,0.3,1));
        }
        .hd-fade {
          opacity: 0;
          transform: translateY(16px);
          transition:
            opacity 700ms var(--ease-smooth, cubic-bezier(0.16,1,0.3,1)),
            transform 700ms var(--ease-smooth, cubic-bezier(0.16,1,0.3,1));
        }
        .hd-fade--in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .hd-card { transition: none !important; }
          .hd-trace, .hd-gauge-fill, .hd-pill, .hd-area, .hd-fade { transition: none !important; }
          .hd-trace { stroke-dashoffset: 0; }
          .hd-trace-flow { animation: none !important; }
          .hd-fade { opacity: 1; transform: none; }
        }
      `}</style>

      <div
        className="hd-glow pointer-events-none absolute -top-32 -left-20 w-lg h-128 rounded-full animate-soft-float"
        style={{ "--tw-glow-color": "rgba(91,140,255,0.22)" }}
      />
      <div
        className="hd-glow pointer-events-none absolute bottom-0 -right-24 w-md h-112 rounded-full animate-soft-float"
        style={{ "--tw-glow-color": "rgba(45,212,191,0.16)", animationDelay: "-5s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`hd-fade flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 ${revealed ? "hd-fade--in" : ""}`}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-brand-300">
              <Sparkles size={14} /> Recovery Intelligence &middot; Live Preview
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
              Every step of recovery,
              <br className="hidden sm:block" /> quantified.
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-lg">
              A real-time view of mobility, pain, and progress &mdash; built so
              patients and surgeons see the same clear picture, day to day.
            </p>
          </div>

          <div className="relative inline-grid grid-cols-3 rounded-full border border-white/10 bg-white/5 p-1 self-start lg:self-end">
            <div
              className="hd-pill absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-brand-500 shadow-lg shadow-brand-500/30"
              style={{ transform: `translateX(${rangeIndex * 100}%)` }}
            />
            {RANGES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={`relative z-10 px-4 sm:px-5 py-2 text-sm font-semibold rounded-full cursor-pointer transition-colors duration-300 ${range === r ? "text-white" : "text-white/50 hover:text-white/80"}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`hd-fade mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5 ${revealed ? "hd-fade--in" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <Card
            id="score"
            expandedId={expandedId}
            onExpand={setExpandedId}
            className="md:col-span-2 md:row-span-2 flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wide">
                  Recovery Score
                </p>
                <p className="mt-2 text-5xl sm:text-6xl font-extrabold text-white tabular-nums">
                  {score}
                  <span className="text-xl text-white/30 font-bold">/100</span>
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                  <TrendingUp size={15} /> +{SCORE_DELTA[range]} vs {range}
                </p>
              </div>
              <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-brand-500/15 text-brand-300 shrink-0">
                <HeartPulse size={20} />
              </span>
            </div>
            <div className="mt-6 h-24 sm:h-28">
              <Sparkline
                key={`score-${range}`}
                values={SCORE_TRACE[range]}
                revealed={revealed}
                stroke="var(--hd-brand)"
                height={112}
                width={420}
              />
            </div>
            <p className="mt-auto pt-8 text-xs text-white/25">
              Synced from daily PT check-ins &amp; wearable activity data.
            </p>
            <Detail expanded={expandedId === "score"}>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-white/35 text-xs">Baseline (pre-op)</p>
                  <p className="text-white font-semibold mt-1">31 / 100</p>
                </div>
                <div>
                  <p className="text-white/35 text-xs">Surgeon target, wk 12</p>
                  <p className="text-white font-semibold mt-1">85 / 100</p>
                </div>
                <div>
                  <p className="text-white/35 text-xs">On track</p>
                  <p className="text-emerald-400 font-semibold mt-1">Yes &middot; ahead of plan</p>
                </div>
              </div>
            </Detail>
          </Card>

          <Card id="mobility" expandedId={expandedId} onExpand={setExpandedId}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wide">
                  Mobility (ROM)
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white tabular-nums">
                  {mobility}&deg;
                </p>
                <p className="mt-1 text-xs font-semibold text-emerald-400">
                  +{MOBILITY_DELTA[range]}&deg; vs {range}
                </p>
              </div>
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-500/15 text-brand-300 shrink-0">
                <Activity size={16} />
              </span>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative">
                <RadialGauge value={118} max={130} size={104} stroke={9} colorVar="var(--hd-brand)" revealed={revealed} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[11px] text-white/35 font-semibold">of 130&deg; target</span>
                </div>
              </div>
            </div>
            <Detail expanded={expandedId === "mobility"}>
              <p className="text-white/40 text-xs leading-relaxed">
                Knee flexion, right side. Measured during daily PT check-in via
                goniometer entry.
              </p>
            </Detail>
          </Card>

          <Card id="pain" expandedId={expandedId} onExpand={setExpandedId}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wide">
                  Pain Level
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white tabular-nums">
                  {pain}
                  <span className="text-sm text-white/30 font-bold">/10</span>
                </p>
                <p className="mt-1 text-xs font-semibold text-emerald-400">Trending down</p>
              </div>
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-rose-500/15 text-rose-300 shrink-0">
                <Pill size={16} />
              </span>
            </div>
            <div className="mt-4 h-14">
              <Sparkline
                key={`pain-${range}`}
                values={PAIN_TRACE[range].map((v) => 10 - v)}
                revealed={revealed}
                stroke="var(--hd-rose)"
                height={56}
                width={220}
              />
            </div>
            <Detail expanded={expandedId === "pain"}>
              <p className="text-white/40 text-xs leading-relaxed">
                Self-reported, twice daily. Values above 6 automatically flag
                your care coordinator.
              </p>
            </Detail>
          </Card>

          <Card id="activity" expandedId={expandedId} onExpand={setExpandedId}>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wide">
              Daily Activity
            </p>
            <div className="mt-3 flex items-center gap-4">
              <ActivityRings revealed={revealed} />
              <div className="space-y-1.5 text-xs">
                <p className="flex items-center gap-1.5 text-white/60">
                  <span className="w-2 h-2 rounded-full" style={{ background: "var(--hd-brand)" }} />
                  {steps} steps
                </p>
                <p className="flex items-center gap-1.5 text-white/60">
                  <span className="w-2 h-2 rounded-full" style={{ background: "var(--hd-teal)" }} />
                  38 min standing
                </p>
                <p className="flex items-center gap-1.5 text-white/60">
                  <span className="w-2 h-2 rounded-full" style={{ background: "var(--hd-amber)" }} />
                  3/3 PT sets done
                </p>
              </div>
            </div>
          </Card>

          <Card id="sleep" expandedId={expandedId} onExpand={setExpandedId}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wide">
                  Sleep Quality
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white tabular-nums">
                  {sleep}
                  <span className="text-sm text-white/30 font-bold">/100</span>
                </p>
                <p className="mt-1 text-xs text-white/40">7h 42m avg</p>
              </div>
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-teal-500/15 text-teal-300 shrink-0">
                <Moon size={16} />
              </span>
            </div>
            <div className="mt-4 flex justify-center">
              <RadialGauge value={88} max={100} size={88} stroke={8} colorVar="var(--hd-teal)" revealed={revealed} delay={100} />
            </div>
          </Card>

          <Card
            id="insight"
            expandedId={expandedId}
            className="md:col-span-2 flex flex-col justify-center bg-linear-to-br from-violet-500/10 to-transparent"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-500/15 text-violet-300 mb-3">
              <Sparkles size={16} />
            </span>
            <p className="text-white font-semibold text-sm sm:text-base leading-snug">
              &ldquo;Your recovery score has climbed 15 points this week &mdash;
              faster than 82% of patients at the same post-op stage. Keep pain
              below 3 to stay ahead of your week-12 target.&rdquo;
            </p>
            <p className="mt-3 text-violet-300/70 text-xs font-semibold">
              AI Recovery Insight &middot; updated today
            </p>
          </Card>

          <Card id="adherence" expandedId={expandedId} onExpand={setExpandedId} className="md:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wide">
                Medication &amp; PT Adherence
              </p>
              <span className="text-2xl font-extrabold text-white tabular-nums">{adherence}%</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-brand-400 to-emerald-400 transition-[width] duration-1400"
                style={{ width: revealed ? "94%" : "0%", transitionTimingFunction: "var(--ease-smooth)" }}
              />
            </div>
            <Detail expanded={expandedId === "adherence"}>
              <p className="text-white/40 text-xs leading-relaxed">
                17 of 18 scheduled doses and PT sessions completed on time this
                {range === "7D" ? " week" : range === "30D" ? " month" : " quarter"}.
              </p>
            </Detail>
          </Card>
        </div>

        <div
          className={`hd-fade mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center ${revealed ? "hd-fade--in" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <button
            data-open-popup
            className="cursor-pointer flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Footprints size={18} /> See This On Your Recovery
          </button>
          <p className="text-white/35 text-xs sm:text-sm">
            Sample data shown &middot; your dashboard activates after consultation
          </p>
        </div>
      </div>
    </section>
  );
}
