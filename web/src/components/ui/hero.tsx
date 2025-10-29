'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  features?: string[];
  className?: string;
}

export function Hero({
  title = "Complete New York LLC Formation - $595 All-Inclusive",
  subtitle = "Articles of Organization + Certificate of Publication + newspaper publication included. Same-day processing when possible.",
  primaryCTA = {
    text: "Start Formation",
    href: "#"
  },
  secondaryCTA = {
    text: "Learn More",
    href: "#how-it-works"
  },
  features = [
    "$0 service fee (save $200-500+ vs competitors)",
    "Flat $395 publishing (no newspaper price guessing)",
    "Same-day LLC formation when possible"
  ],
  className,
}: HeroProps) {
  return (
    <section className={cn("bg-white border-b border-slate-200", className)}>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-4">
              Professional LLC Formation Services
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Pricing Card */}
          <Card className="mb-8 bg-slate-50 border border-slate-200 max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">$595</div>
                <p className="text-slate-600">Complete LLC Formation</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Formation Service</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">State Filing Fee</span>
                  <span className="font-medium">$200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Publishing Service</span>
                  <span className="font-medium">$395</span>
                </div>
                <hr className="my-3 border-slate-200" />
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-slate-900">Total Investment</span>
                  <span className="text-slate-900">$595</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="cta"
              className="px-8"
              asChild
            >
              <a href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8"
              asChild
            >
              <a href={secondaryCTA.href}>
                {secondaryCTA.text}
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">Not a law firm</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">Same-day processing when possible</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <DollarSign className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">Transparent pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
