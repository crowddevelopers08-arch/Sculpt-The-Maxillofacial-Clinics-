"use client";

import type { ReactNode } from "react";
import {
  ShieldCheck, Award, Heart, UserRound, Layers, Sparkles, Eye,
  BarChart2, Stethoscope, Check, ArrowRight, ArrowUpRight,
  Star, UserPlus, HeartHandshake, HeartPulse, ChevronDown,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  verified:          ShieldCheck,
  military_tech:     Award,
  favorite:          Heart,
  face_6:            UserRound,
  architecture:      Layers,
  self_care:         Sparkles,
  visibility:        Eye,
  analytics:         BarChart2,
  medical_services:  Stethoscope,
  check:             Check,
  arrow_forward:     ArrowRight,
  arrow_outward:     ArrowUpRight,
  hotel_class:       Star,
  group_add:         UserPlus,
  shield_with_heart: HeartHandshake,
  healing:           HeartPulse,
  expand_more:       ChevronDown,
  check_circle:      CheckCircle2,
};

export function SurgeryMaterialIcon({ name }: { name: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className="surgery-icon" strokeWidth={1.5} />;
}

export function SurgerySectionEyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

function openSurgeryModal() {
  window.dispatchEvent(new Event("openConsultationModal"));
}

export function SurgeryPrimaryButton({
  children,
  className = "",
  modal = true,
}: {
  children: ReactNode;
  className?: string;
  modal?: boolean;
}) {
  return (
    <button
      className={`btn-primary ${className}`.trim()}
      onClick={modal ? openSurgeryModal : undefined}
    >
      <span className="btn-label">{children}</span>
    </button>
  );
}

export function SurgeryOutlineButton({
  children,
  className = "",
  modal = false,
}: {
  children: ReactNode;
  className?: string;
  modal?: boolean;
}) {
  return (
    <button
      className={`btn-outline ${className}`.trim()}
      onClick={modal ? openSurgeryModal : undefined}
    >
      <span className="btn-label">{children}</span>
    </button>
  );
}
