/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  UserPlus, 
  TrendingUp, 
  Zap, 
  AlertCircle, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const CPA_OFFER_LINK = 'https://singingfiles.com/show.php?l=0&u=2517696&id=74463';

export default function App() {
  const steps = [
    {
      title: "Step 1: Choose the Right Platform",
      description: "Success starts with the right foundation. Avoid complex, 'pro-only' tools. Use the beginner-optimized platform linked below for the best experience.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Step 2: Create Your Account",
      description: "Quickly register and verify your details. The platform we recommend has a streamlined 2-minute setup process specifically for USA-based users.",
      icon: <UserPlus className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Step 3: Start Small ($10–$50)",
      description: "Don't risk big capital early on. The best way to learn is with small amounts—enough to feel the market without significant pressure.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Step 4: Use Basic Strategy",
      description: "Keep it simple. Follow one core signal at a time. Overtrading is the #1 reason beginners fail—patience is your greatest asset.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-blue-100">
      {/* Header Section */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#2563EB] rounded-[10px] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#0F172A]">ForexGuide</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#DBEAFE] text-[#1E40AF] rounded-full text-[12px] font-bold uppercase tracking-wider">
            Step 1 of 4 Completed
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
             <div className="px-3 py-1 bg-[#DBEAFE] text-[#1E40AF] rounded-full text-[12px] font-bold uppercase tracking-widest inline-block">
               Action Required
             </div>
          </div>
          <h1 className="text-[42px] font-extrabold text-[#0F172A] mb-4 leading-[1.1] tracking-[-0.03em] max-w-2xl mx-auto">
            Your Quick Start Forex Guide
          </h1>
          <p className="text-[#64748B] text-[18px] leading-relaxed max-w-xl mx-auto">
            Follow these simple steps to get started the right way and secure your trading foundation.
          </p>
        </motion.div>

        {/* Step-by-step Section - Sleek Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-white p-6 rounded-[16px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-[#2563EB] transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-[36px] h-[36px] bg-[#2563EB] rounded-[10px] flex items-center justify-center text-white font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="step-content">
                  <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">{step.title}</h3>
                  <p className="text-[#475569] text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Box - Sleek Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#F0F7FF] border-l-4 border-[#2563EB] p-6 rounded-[8px] mb-16 flex items-center gap-4"
        >
          <AlertCircle className="w-6 h-6 text-[#2563EB] shrink-0" />
          <p className="text-[#1E40AF] text-[15px] font-medium leading-relaxed">
            <strong className="font-bold">Insider Insight:</strong> Most beginners fail because they choose high-leverage platforms they don't understand or try to overtrade with small balances.
          </p>
        </motion.div>

        {/* Primary CTA - Sleek Shadow */}
        <div className="flex flex-col items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-sm"
          >
            <a 
              href={CPA_OFFER_LINK}
              id="primary-cta"
              className="flex items-center justify-center w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-[18px] px-12 rounded-[12px] shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all text-[18px] group"
            >
              Start Now (Beginner Friendly Platform)
            </a>
          </motion.div>

          <footer className="text-center max-w-3xl mx-auto">
            <p className="text-[#94A3B8] text-[11px] leading-[1.6]">
              Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. This content is for educational purposes only and does not constitute financial advice. Never trade with capital you cannot afford to lose.
            </p>
            <p className="text-[#94A3B8] text-[10px] mt-6 uppercase tracking-[0.2em] font-medium">
              © {new Date().getFullYear()} ForexQuickStart Guide
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

