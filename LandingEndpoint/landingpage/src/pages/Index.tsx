
import { Download, Nfc, Vibrate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import TechSpecs from "@/components/TechSpecs";
import DownloadSection from "@/components/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
              ADVANCED IOT SECURITY FEATURES
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6 opacity-60"></div>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto font-light tracking-wide">
            Experience <span className="text-cyan-300 font-semibold">next-generation perimeter security</span> with our ESP32-powered smart fence system
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Vibrate className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />}
            title="Motion Detection"
            description="Ultra-sensitive PIR motion sensors detect movement up to 12 meters away with 120° coverage angle"
            features={["Real-time alerts", "Adjustable sensitivity", "Weather resistant"]}
          />
          
          <FeatureCard
            icon={<Vibrate className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />}
            title="Vibration Sensing"
            description="Advanced accelerometer technology detects fence tampering and climbing attempts instantly"
            features={["Anti-tamper protection", "Vibration analysis", "False alarm reduction"]}
          />
          
          <FeatureCard
            icon={<Nfc className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />}
            title="NFC Access Control"
            description="Secure NFC-based authentication system for authorized personnel entry and system management"
            features={["Encrypted communication", "User management", "Access logging"]}
          />
        </div>
      </section>

      <TechSpecs />
      <DownloadSection />
      
      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-black py-16 px-4 md:px-8 border-t border-cyan-400/20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M20 0v20M40 20H20M20 40V20M0 20h20'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              SMART FENCE SYSTEM
            </span>
          </h3>
          <p className="text-cyan-100 mb-8 text-lg font-light tracking-wide">
            Protecting your perimeter with <span className="text-cyan-300 font-semibold">cutting-edge IoT technology</span>
          </p>
          <div className="flex justify-center items-center space-x-8 text-slate-400 text-sm uppercase tracking-wider">
            <span className="hover:text-cyan-300 transition-colors duration-300 cursor-default">ESP32 Powered</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
            <span className="hover:text-cyan-300 transition-colors duration-300 cursor-default">IoT Security</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
            <span className="hover:text-cyan-300 transition-colors duration-300 cursor-default">Real-time Monitoring</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
