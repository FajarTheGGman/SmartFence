
import { Download, Shield, Wifi, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Cpath d='M30 0v30M60 30H30M30 60V30M0 30h30' stroke='%2300ffff' stroke-width='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'pulse 4s ease-in-out infinite'
        }} />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative w-28 h-28 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 border border-cyan-400/30">
              <Shield className="w-14 h-14 text-white" />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-green-400/30">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-yellow-400/30">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            SMART FENCE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)] animate-pulse">
            SECURITY SYSTEM
          </span>
        </h1>
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-sm"></div>
          <p className="relative text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            <span className="text-cyan-300 font-semibold">REVOLUTIONARY IOT PERIMETER SECURITY</span> powered by ESP32 microcontroller with advanced motion detection, 
            vibration sensing, and NFC access control technology
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="relative group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white px-10 py-6 text-xl font-bold shadow-2xl shadow-cyan-500/30 border border-cyan-400/50 hover:shadow-cyan-400/50 transform hover:scale-105 transition-all duration-300 overflow-hidden" onClick={() => window.location = "/app/smartfence.apk"}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Download className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">DOWNLOAD APK</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          </Button>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold text-cyan-300 mb-3 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">24/7</div>
              <div className="text-cyan-100 font-medium">REAL-TIME MONITORING</div>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold text-emerald-300 mb-3 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">99.9%</div>
              <div className="text-cyan-100 font-medium">DETECTION ACCURACY</div>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold text-purple-300 mb-3 drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">12m</div>
              <div className="text-cyan-100 font-medium">DETECTION RANGE</div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-10px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(-10px) rotate(270deg); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
