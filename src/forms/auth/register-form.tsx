"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function RegisterForm() {
  return (
    <form className="space-y-6">
      <FieldGroup>
        <Field>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            <Input
              id="name"
              type="text"
              placeholder="Full name"
              className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
              required
            />
          </div>
        </Field>

        <Field>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-slate-400" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
              required
            />
          </div>
        </Field>

        <Field>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-slate-400" />
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
              required
            />
          </div>
        </Field>

        <Field>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-slate-400" />
            </div>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
              required
            />
          </div>
        </Field>

        <div className="text-sm text-slate-400">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-white/10 bg-white/5 text-teal-500 focus:ring-teal-500 mt-0.5"
              required
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:scale-[1.02] group"
        >
          <span>Create Account</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </FieldGroup>
    </form>
  );
}
