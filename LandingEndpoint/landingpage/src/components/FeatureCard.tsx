
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const FeatureCard = ({ icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 overflow-hidden">
      {/* Animated border glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random()}s`,
            }}
          />
        ))}
      </div>
      
      <CardHeader className="relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="relative group/icon">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-cyan-400/30 shadow-lg shadow-cyan-400/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
              <div className="transform group-hover/icon:scale-110 transition-transform duration-300">
                {icon}
              </div>
            </div>
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 text-center mb-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
          {title}
        </CardTitle>
        <CardDescription className="text-cyan-100 text-center leading-relaxed font-light tracking-wide">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="group/item flex items-center gap-4 p-2 rounded-lg hover:bg-cyan-500/5 transition-colors duration-300">
              <div className="relative">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] group-hover/item:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-0 group-hover/item:opacity-30 transition-opacity duration-300"></div>
              </div>
              <span className="text-slate-200 font-medium tracking-wide group-hover/item:text-cyan-100 transition-colors duration-300">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Card>
  );
};

export default FeatureCard;
