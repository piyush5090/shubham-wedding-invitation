'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/content/content';
import { generateICS, EVENT_ISO } from '@/lib/ics';
import { VENUE_MANGAL_DHAM } from '@/content/config';
import styles from './WeddingCelebrations.module.css';

const EventThreeCanvas = dynamic(
  () => import('@/components/three/EventThreeCanvas'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-8 h-8 rounded-full border-2 border-[#c5a059]/30 border-t-[#c5a059] animate-spin" />
      </div>
    ),
  }
);

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#c5a059]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#c5a059] shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#c5a059] shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ExternalMapIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 opacity-80"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/**
 * Fallback Chandelier Illustration for reduced motion
 */
function ChandelierIllustration() {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_8px_24px_rgba(212,175,55,0.45)]"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="44" stroke="#d4af37" strokeWidth="2" strokeDasharray="5 3" />
      <circle cx="60" cy="60" r="32" stroke="#e8b4b8" strokeWidth="1.8" />
      <circle cx="60" cy="60" r="20" stroke="#f28c28" strokeWidth="2" />
      <circle cx="60" cy="60" r="10" fill="#ffffff" />
      <circle cx="60" cy="60" r="5" fill="#d4af37" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <circle
          key={i}
          cx={60 + Math.cos((deg * Math.PI) / 180) * 44}
          cy={60 + Math.sin((deg * Math.PI) / 180) * 44}
          r="4"
          fill="#ffd700"
        />
      ))}
    </svg>
  );
}

export default function ReceptionSection() {
  const { lang } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const isHindi = lang === 'hi';
  const t = content[lang] || content.en;
  const c = t.reception;

  if (!c) return null;

  const headingFont = isHindi
    ? 'var(--font-noto-serif-devanagari), var(--font-rozha), serif'
    : 'var(--font-cormorant), Georgia, serif';

  const bodyFont = isHindi
    ? 'var(--font-noto-sans-devanagari), var(--font-hind), sans-serif'
    : 'var(--font-lora), Georgia, serif';

  const handleAddToCalendar = () => {
    generateICS({
      name: `Wedding Reception — Shubham & Parul (${VENUE_MANGAL_DHAM.name})`,
      dateISO: EVENT_ISO.reception || '2026-11-21T16:00:00+05:30',
      durationMinutes: 240,
      venue: VENUE_MANGAL_DHAM.name,
      address: VENUE_MANGAL_DHAM.address,
      description: `Grand Wedding Reception of Shubham Sharma & Parul Sharma at ${VENUE_MANGAL_DHAM.name}, Aligarh.`,
    });
  };

  return (
    <section
      id="reception"
      className={`${styles.weddingCelebrations || ''} wc-section relative border-t border-white/5 py-24 sm:py-32`}
      aria-label={isHindi ? 'विवाह प्रीतिभोज एवं आशीर्वाद समारोह' : 'The Wedding Reception'}
    >
      <div className={`${styles.wcContainer || ''} wc-container max-w-6xl mx-auto px-4 sm:px-6`}>
        
        {/* ─── 1. Header Block ─── */}
        <div className={`${styles.wcHeader || ''} wc-header text-center mb-14`}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.wcEyebrowRow || ''} wc-eyebrow-row flex items-center justify-center gap-3 mb-3`}
          >
            <span className={`${styles.wcEyebrowLine || ''} wc-eyebrow-line w-10 h-[1px] bg-[#c5a059]/60`} />
            <span className={`${styles.wcEyebrowText || ''} wc-eyebrow-text text-xs uppercase tracking-[0.28em] text-[#c5a059]`}>
              {c.eyebrow}
            </span>
            <span className={`${styles.wcEyebrowLineRight || ''} wc-eyebrow-line-right w-10 h-[1px] bg-[#c5a059]/60`} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide mb-3"
            style={{ fontFamily: headingFont }}
          >
            {c.title}
          </motion.h2>

          {/* Date banner */}
          <div className="inline-block px-5 py-1.5 rounded-full bg-white/[0.04] border border-[#c5a059]/40 mb-4">
            <span
              className="text-sm sm:text-base text-[#dfc07a] font-serif tracking-wider"
              style={{ fontFamily: headingFont }}
            >
              {c.date} · {c.time}
            </span>
          </div>

          <p
            className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: bodyFont }}
          >
            {c.description}
          </p>
        </div>

        {/* ─── 2. Main Two-Column Layout ─── */}
        <div className={`${styles.wcGrid || ''} wc-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12`}>
          
          {/* Left Column: 3D Stage Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className={`${styles.wcStageCard || ''} wc-stage-card h-full flex flex-col justify-between`}>
              <div className={`${styles.wcStageHeader || ''} wc-stage-header`}>
                <span className={`${styles.wcStageHeaderLine || ''} wc-stage-header-line`} />
                <span className={`${styles.wcStageHeaderLabel || ''} wc-stage-header-label`}>
                  {c.threeTitle}
                </span>
                <span className={`${styles.wcStageHeaderLine || ''} wc-stage-header-line`} />
              </div>

              {/* 3D Canvas / Fallback Area */}
              <div
                className={`${styles.wcStageCanvasArea || ''} wc-stage-canvas-area relative w-full h-[320px] sm:h-[360px] flex items-center justify-center overflow-hidden`}
                role="img"
                aria-label={c.threeAlt}
              >
                {!prefersReducedMotion ? (
                  <EventThreeCanvas activeEventId="reception" />
                ) : (
                  <ChandelierIllustration />
                )}
              </div>

              <div className={`${styles.wcStageFooter || ''} wc-stage-footer text-center`}>
                <span className={`${styles.wcStageCaption || ''} wc-stage-caption text-xs text-white/50`}>
                  {c.threeHint}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Reception Details Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${styles.wcEventCard || ''} wc-event-card p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-[#8a6f2e]/60 flex flex-col justify-between h-full`}
            >
              <div>
                <div className={`${styles.wcBadge || ''} wc-badge mb-3`}>
                  <span className={`${styles.wcBadgeDot || ''} wc-badge-dot`} />
                  <span>{c.badge}</span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-serif text-white mb-4"
                  style={{ fontFamily: headingFont }}
                >
                  {VENUE_MANGAL_DHAM.name}
                </h3>

                <div className={`${styles.wcCardDivider || ''} wc-card-divider mb-5`} />

                {/* Timing Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/[0.04] text-[#c5a059]">
                    <ClockIcon />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#c5a059] block font-mono">
                      {isHindi ? 'समय' : 'TIMING'}
                    </span>
                    <span className="text-base text-white font-medium" style={{ fontFamily: bodyFont }}>
                      {c.time}
                    </span>
                  </div>
                </div>

                {/* Address Row */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/[0.04] text-[#c5a059] shrink-0 mt-0.5">
                    <PinIcon />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#c5a059] block font-mono">
                      {isHindi ? 'स्थान' : 'VENUE ADDRESS'}
                    </span>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light" style={{ fontFamily: bodyFont }}>
                      {isHindi ? VENUE_MANGAL_DHAM.addressHi : VENUE_MANGAL_DHAM.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleAddToCalendar}
                  className="flex-1 py-3 px-5 rounded-full bg-[#c5a059] hover:bg-[#dfc07a] text-[#0e0e10] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-[0.98]"
                >
                  <CalendarIcon />
                  <span>{c.calendarBtn}</span>
                </button>

                <a
                  href={VENUE_MANGAL_DHAM.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-full border border-[#8a6f2e]/60 hover:border-[#c5a059] text-white/90 hover:text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{c.mapsBtn}</span>
                  <ExternalMapIcon />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── 3. Footer Line ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`${styles.wcFooterLineRow || ''} wc-footer-line-row flex items-center justify-center gap-4 text-[#c5a059]/70`}
        >
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]/50" />
          <span className="text-xs uppercase tracking-[0.25em] font-serif" style={{ fontFamily: headingFont }}>
            {c.footerLine}
          </span>
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]/50" />
        </motion.div>
      </div>
    </section>
  );
}
