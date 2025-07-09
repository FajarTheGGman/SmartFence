
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Wifi, Battery, Shield } from "lucide-react";

const TechSpecs = () => {
  const specs = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "ESP32 Microcontroller",
      details: [
        "Dual-core Tensilica LX6",
        "240 MHz processing power",
        "520 KB SRAM",
        "Flash memory support"
      ],
      color: "cyan"
    },
    {
      icon: <Wifi className="w-6 h-6 text-emerald-400" />,
      title: "Connectivity",
      details: [
        "Wi-Fi 802.11 b/g/n",
        "Bluetooth 4.2 BR/EDR & BLE",
        "Long-range communication",
        "Mesh networking support"
      ],
      color: "emerald"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Security Features",
      details: [
        "AES encryption",
        "Secure boot",
        "Flash encryption",
        "Digital signature"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-400/30 hover:border-cyan-400/60",
        shadow: "hover:shadow-cyan-400/20",
        bg: "from-cyan-500/5 to-blue-500/5",
        dot: "bg-cyan-400",
        dotShadow: "shadow-[0_0_10px_rgba(0,255,255,0.8)]"
      },
      emerald: {
        border: "border-emerald-400/30 hover:border-emerald-400/60",
        shadow: "hover:shadow-emerald-400/20",
        bg: "from-emerald-500/5 to-teal-500/5",
        dot: "bg-emerald-400",
        dotShadow: "shadow-[0_0_10px_rgba(16,185,129,0.8)]"
      },
      yellow: {
        border: "border-yellow-400/30 hover:border-yellow-400/60",
        shadow: "hover:shadow-yellow-400/20",
        bg: "from-yellow-500/5 to-orange-500/5",
        dot: "bg-yellow-400",
        dotShadow: "shadow-[0_0_10px_rgba(251,191,36,0.8)]"
      },
      purple: {
        border: "border-purple-400/30 hover:border-purple-400/60",
        shadow: "hover:shadow-purple-400/20",
        bg: "from-purple-500/5 to-pink-500/5",
        dot: "bg-purple-400",
        dotShadow: "shadow-[0_0_10px_rgba(147,51,234,0.8)]"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M50 0v50M100 50H50M50 100V50M0 50h50'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='25' r='1'/%3E%3Ccircle cx='25' cy='75' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            TECHNICAL SPECIFICATIONS
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6 opacity-60"></div>
        <p className="text-xl text-cyan-100 max-w-3xl mx-auto font-light tracking-wide">
          Built with <span className="text-cyan-300 font-semibold">enterprise-grade hardware</span> and cutting-edge IoT technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {specs.map((spec, index) => {
          const colorClasses = getColorClasses(spec.color);
          return (
            <Card 
              key={index} 
              className={`group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border ${colorClasses.border} hover:bg-white/5 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${colorClasses.shadow} overflow-hidden`}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative group/icon">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${colorClasses.border.split(' ')[0].replace('border-', 'from-')} to-transparent rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center border border-slate-600 group-hover:border-slate-500 transition-colors duration-300">
                      <div className="transform group-hover/icon:scale-110 transition-transform duration-300">
                        {spec.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 tracking-wide">
                    {spec.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {spec.details.map((detail, idx) => (
                    <div key={idx} className="group/item flex items-center gap-3 p-1 rounded hover:bg-white/5 transition-colors duration-300">
                      <div className="relative">
                        <div className={`w-2 h-2 ${colorClasses.dot} rounded-full flex-shrink-0 ${colorClasses.dotShadow} group-hover/item:scale-125 transition-transform duration-300`} />
                        <div className={`absolute inset-0 ${colorClasses.dot} rounded-full blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity duration-300`}></div>
                      </div>
                      <span className="text-sm text-slate-300 font-medium tracking-wide group-hover/item:text-slate-200 transition-colors duration-300">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default TechSpecs;
