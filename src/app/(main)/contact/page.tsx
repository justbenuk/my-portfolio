import FrontContactForm from '@/forms/contact/front-contact-form';
import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
        Let&apos;s <span className="text-orange-400 italic">Connect.</span> <br />
        Start Your Next Project.
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-dark-card p-10 rounded-2xl border border-dark-border shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-white">Send Me a Message</h2>
          <FrontContactForm />
        </div>

        {/* Contact Information & Socials */}
        <div className="space-y-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Mail className="text-orange-400 w-10 h-10" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Email Me</h3>
              <p className="text-gray-400">
                <a href="mailto:justbenuk@pm.me" className="hover:text-orange-accent transition-colors">justbenuk@pm.me</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <MapPin className="text-orange-400 w-10 h-10" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Location</h3>
              <p className="text-gray-400">The Midlands, UK</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-2xl font-semibold text-orange-accent">Find Me On</h3>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaGithub size={32} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaLinkedin size={32} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaTwitter size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
