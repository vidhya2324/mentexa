import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";

const ContactBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      content: "mentexa22@gmail.com",
      href: "mailto:mentexa22@gmail.com",
      delay: "0ms",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Location",
      content: "Tamil Nadu, India",
      href: null,
      delay: "200ms",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone",
      content: "+91 7010525407",
      href: "tel:+917010525407",
      delay: "400ms",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/mentexa-techonology/",
      delay: "0ms",
    },
    { icon: Github, href: "https://github.com", delay: "100ms" },
    { icon: Twitter, href: "https://twitter.com", delay: "200ms" },
    { icon: Instagram, href: "https://twitter.com", delay: "300ms" },
  ];

  return (
    <section
      className="relative bg-black text-center overflow-hidden"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-green-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300/5 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* White background section for main content */}
      <div className="bg-gray-50 py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          {/* Animated Heading */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 relative">
              Let's Connect
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
            </h2>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-lg md:text-xl text-gray-700 mb-16">
              Got an idea or just want to say hi? We're excited to hear from you
              <span className="inline-block animate-bounce ml-2">🚀</span>
            </p>
          </div>

          {/* Animated Contact Info Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.id}
                  className={`transform transition-all duration-700 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-20 opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: info.delay }}
                  onMouseEnter={() => setHoveredCard(info.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`flex items-center gap-4 bg-white shadow-lg rounded-xl p-6 cursor-pointer
                    transform transition-all duration-300 ease-out
                    ${
                      hoveredCard === info.id
                        ? "scale-110 shadow-2xl -translate-y-2"
                        : "hover:scale-105"
                    }
                    ${
                      hoveredCard === info.id
                        ? "bg-gradient-to-r from-green-50 to-white"
                        : ""
                    }
                  `}
                  >
                    <div
                      className={`p-4 rounded-full text-white transition-all duration-300
                      ${
                        hoveredCard === info.id
                          ? "bg-gradient-to-r from-green-500 to-green-700 animate-pulse"
                          : "bg-green-600"
                      }
                    `}
                    >
                      <IconComponent
                        className={`h-6 w-6 transition-transform duration-300 ${
                          hoveredCard === info.id ? "rotate-12 scale-110" : ""
                        }`}
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-green-600 hover:underline transition-colors duration-300 hover:text-green-700"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-green-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Section with black background and floating animation */}
      <footer className="w-full bg-gray-900 text-gray-400 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div
            className={`flex flex-col md:flex-row justify-between items-center transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {/* Company Info with typewriter effect */}
            <div className="text-sm mb-4 md:mb-0">
              <span className="text-green-500 font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent animate-pulse">
                Mentexa Technology
              </span>
              <span className="ml-1">© 2025. All rights reserved.</span>
            </div>

            {/* Navigation Links + Social */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex gap-6">
                {["About", "Work", "Contact"].map((link, index) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`hover:text-green-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: `${1000 + index * 100}ms` }}
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Animated Social Icons */}
              <div className="flex gap-4 mt-2 md:mt-0">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:-translate-y-2 ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${1300 + index * 100}ms` }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse"></div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactBanner;
