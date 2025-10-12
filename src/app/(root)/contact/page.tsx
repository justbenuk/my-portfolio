"use client";

import PageContainer from "@/components/shared/page-container";
import ContactForm from "@/forms/contact/contact-form";
import { Send } from "lucide-react";

export default function ContactPage() {

  return (
    <PageContainer>
      <div className="space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-block animate-fade-in-up">
            <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium backdrop-blur-sm">
              Get In Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black animate-fade-in-up animation-delay-200">
            <span className="text-white">Feel Free To </span>
            <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-x">
              Get In Touch
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Have a project in mind? Let&apos;s chat about how I can help bring your ideas to life.
          </p>
        </div>


        {/* Form Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />

            <div className="relative p-8 md:p-12 rounded-3xl glass-effect border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Send a Message
                  </h2>
                  <p className="text-slate-400 text-sm">
                    I&apos;ll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="text-center space-y-6 py-12">
          <h3 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              Let&apos;s Build Something Amazing Together
            </span>
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you need a new website, want to redesign an existing one, or have questions about a project, I&apos;m here to help.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

