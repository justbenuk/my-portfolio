import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
        Let's <span className="text-orange-400 italic">Connect.</span> <br />
        Start Your Next Project.
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-dark-card p-10 rounded-2xl border border-dark-border shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-white">Send Me a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-3 rounded-lg bg-dark-bg border border-dark-border focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white" 
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-3 rounded-lg bg-dark-bg border border-dark-border focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white" 
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"  
                className="w-full p-3 rounded-lg bg-dark-bg border border-dark-border focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white resize-y" 
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-orange-400 hover:bg-orange-600 text-dark-bg px-6 py-3 rounded-full font-bold transition-all text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information & Socials */}
        <div className="space-y-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Mail className="text-orange-400 w-10 h-10" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Email Me</h3>
              <p className="text-gray-400">
                <a href="mailto:your.email@example.com" className="hover:text-orange-accent transition-colors">justbenuk@gmail.com</a>
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