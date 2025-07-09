
import { Download, Smartphone, Shield, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DownloadSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-blue-400' : 'bg-purple-400'
            } opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            DOWNLOAD SMART FENCE APP
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6 opacity-60"></div>
        <p className="text-xl text-cyan-100 max-w-3xl mx-auto font-light tracking-wide">
          Take control of your smart fence system with our <span className="text-cyan-300 font-semibold">intuitive mobile application</span>
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <Card className="group relative bg-gradient-to-br from-slate-800/50 via-slate-900/60 to-slate-800/50 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20">
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardContent className="p-0 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - App Features */}
              <div className="p-8 lg:p-12 relative">
                <div className="mb-8">
                  <div className="relative group/icon mb-8">
                    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 border border-cyan-400/30">
                      <Smartphone className="w-10 h-10 text-white transform group-hover/icon:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                      SMART FENCE CONTROL
                    </span>
                  </h3>
                  <p className="text-cyan-100 text-lg leading-relaxed font-light tracking-wide">
                    Monitor and control your entire perimeter security system from 
                    <span className="text-cyan-300 font-semibold"> anywhere in the world</span>
                  </p>
                </div>
                
                <div className="space-y-5 mb-10">
                  {[
                    { icon: Shield, text: "Real-time security alerts", color: "text-cyan-400" },
                    { icon: Zap, text: "Remote system configuration", color: "text-blue-400" },
                    { icon: Shield, text: "Historical data analysis", color: "text-purple-400" },
                    { icon: Smartphone, text: "Multi-device management", color: "text-emerald-400" }
                  ].map((item, idx) => (
                    <div key={idx} className="group/feature flex items-center gap-4 p-3 rounded-lg hover:bg-cyan-500/5 transition-all duration-300">
                      <div className="relative">
                        <item.icon className={`w-6 h-6 ${item.color} drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] group-hover/feature:scale-110 transition-transform duration-300`} />
                        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-0 group-hover/feature:opacity-30 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-white font-medium tracking-wide group-hover/feature:text-cyan-100 transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                
              </div>
              
              {/* Right Side - Download */}
              <div className="bg-gradient-to-br from-slate-900/70 to-black/50 p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-8 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                    GET THE APP NOW
                  </h4>
                  
                  {/* Enhanced Phone Preview */}
                  <div className="relative w-56 h-[450px] mx-auto mb-10 group/phone">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[3rem] blur opacity-30 group-hover/phone:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-4 shadow-2xl border border-slate-600">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-[2.5rem] flex flex-col items-center justify-center text-white relative overflow-hidden">
                        {/* Screen glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500"></div>
                        
                        <Shield className="w-20 h-20 mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] relative z-10" />
                        <div className="text-2xl font-bold mb-2 relative z-10">SMART FENCE</div>
                        <div className="text-sm opacity-80 mb-12 relative z-10">Security System</div>
                        <div className="space-y-3 relative z-10">
                          <div className="w-40 h-3 bg-white/30 rounded-full"></div>
                          <div className="w-32 h-3 bg-white/30 rounded-full"></div>
                          <div className="w-36 h-3 bg-white/30 rounded-full"></div>
                        </div>
                        
                        {/* Floating elements */}
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animation: `float ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random()}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="relative group w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-500 hover:via-green-500 hover:to-teal-500 text-white px-10 py-8 text-2xl font-bold shadow-2xl shadow-emerald-500/30 border border-emerald-400/50 hover:shadow-emerald-400/50 transform hover:scale-105 transition-all duration-300 overflow-hidden mb-6" onClick={() => window.location = "/app/smartfence.apk"}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Download className="w-8 h-8 mr-4 relative z-10" />
                    <span className="relative z-10">DOWNLOAD APK</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </Button>
                  
                  <div className="text-sm text-slate-400 mb-8 font-mono">
                    VERSION 2.1.0 • 12.5 MB • ANDROID 6.0+
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="group/stat p-4 rounded-lg hover:bg-cyan-500/5 transition-colors duration-300">
                      <div className="text-3xl font-bold text-cyan-300 mb-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover/stat:scale-110 transition-transform duration-300">50K+</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Downloads</div>
                    </div>
                    <div className="group/stat p-4 rounded-lg hover:bg-emerald-500/5 transition-colors duration-300">
                      <div className="text-3xl font-bold text-emerald-300 mb-2 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover/stat:scale-110 transition-transform duration-300">1M+</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Devices Protected</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default DownloadSection;
