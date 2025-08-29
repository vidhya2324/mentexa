import React, { useState, useEffect } from "react";

const reasons = [
  {
    title: "✨ 1st & 2nd Year = Game Changer",
    desc: "The right skills at this stage set the foundation for everything ahead.",
  },
  {
    title: "🚧 Don't Wait Till It's Late",
    desc: "Many students in tier 3 colleges realize too late. You won't make that mistake.",
  },
  {
    title: "🛠️ Real Projects, Real Confidence",
    desc: "We don't give theory dumps — you'll actually build things step by step.",
  },
  {
    title: "🧭 Mentors Who Actually Guide",
    desc: "No more feeling lost. Our mentors walk with you through the chaos.",
  },
  {
    title: "🏆 Career Edge That Lasts",
    desc: "By the time others start, you'll already have real experience in hand.",
  },
];

const InternshipSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative max-w-5xl mx-auto p-6">
      {/* Animated Gradient Glow */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 opacity-20 blur-3xl rounded-3xl"
        style={{
          animation: "breathe 8s ease-in-out infinite",
        }}
      />

      {/* Floating Glow Orbs */}
      <div
        className="absolute top-10 left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
        style={{
          animation: "float1 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-32 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl"
        style={{
          animation: "float2 12s ease-in-out infinite",
        }}
      />

      {/* Heading */}
      <div
        className={`text-4xl md:text-5xl font-extrabold text-center mb-12 text-white relative z-10 transform transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-90"
        }`}
      >
        <h2>
          🙂 Want to Work With Us?
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            This is the right place for you!
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-8 relative z-10">
        {reasons.map((item, index) => (
          <div
            key={index}
            className={`bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-lg cursor-pointer transform-gpu transition-all duration-700 ease-out hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2 group ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{
              transitionDelay: `${index * 200}ms`,
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        className={`text-center mt-14 relative z-10 transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"
        }`}
        style={{ transitionDelay: `${reasons.length * 200}ms` }}
      >
        <button
          onClick={scrollToContact}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transform transition-all duration-300 ease-out hover:scale-115 hover:-translate-y-1 active:scale-95 group"
        >
          <span className="group-hover:animate-pulse">
            🤝 Don't Miss Out — Reach Us Now!
          </span>
        </button>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(40px) translateX(-20px);
          }
          66% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default InternshipSection;
