import {
  SiReact, SiPython, SiJavascript, SiTypescript, SiTailwindcss,
  SiPostgresql, SiNodedotjs, SiMongodb, SiDocker, SiScikitlearn,
  SiGit, SiFlutter, SiHtml5, SiCss, SiSupabase,
  SiNextdotjs, SiExpress, SiPrisma, SiVercel, SiDjango
} from 'react-icons/si';
import { 
  FaAws, FaQrcode, FaShieldAlt, 
  FaFilePdf, FaNetworkWired, FaMobileAlt 
} from 'react-icons/fa';
import { TbBrandTwilio } from 'react-icons/tb';

type IconConfig = {
  icon?: React.ElementType;
  color?: string;
  isDarkBrand?: boolean;
};

const techMap: Record<string, IconConfig> = {
  // Good Contrast (True Brand Colors)
  "React": { icon: SiReact, color: "#61DAFB" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "TailwindCSS v4": { icon: SiTailwindcss, color: "#06B6D4" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Scikit-Learn": { icon: SiScikitlearn, color: "#F7931E" },
  "Git": { icon: SiGit, color: "#F05032" },
  "Flutter": { icon: SiFlutter, color: "#02569B" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss, color: "#1572B6" },
  "Supabase": { icon: SiSupabase, color: "#3ECF8E" },

  // Dark Brands (Overrides to currentColor/white)
  "Next.js": { icon: SiNextdotjs, color: "#000000", isDarkBrand: true },
  "Next.js 15": { icon: SiNextdotjs, color: "#000000", isDarkBrand: true },
  "Next.js 16": { icon: SiNextdotjs, color: "#000000", isDarkBrand: true },
  "Express.js": { icon: SiExpress, color: "#000000", isDarkBrand: true },
  "Prisma": { icon: SiPrisma, color: "#2D3748", isDarkBrand: true },
  "Vercel": { icon: SiVercel, color: "#000000", isDarkBrand: true },
  "Django": { icon: SiDjango, color: "#092E20", isDarkBrand: true },
  "Django REST": { icon: SiDjango, color: "#092E20", isDarkBrand: true },
  "AWS": { icon: FaAws, color: "#232F3E", isDarkBrand: true },

  // Non-Branded (Fallback to icons from react-icons/fa)
  "RESTful APIs": { icon: FaNetworkWired, color: "#6B7280" },
  "Responsive Design": { icon: FaMobileAlt, color: "#6B7280" },
  "QR Code": { icon: FaQrcode, color: "#6B7280" },
  "jspdf/jspdf-autotable": { icon: FaFilePdf, color: "#EF4444" },
  "NextAuth": { icon: FaShieldAlt, color: "#10B981" },
  "SendGrid": { icon: TbBrandTwilio, color: "#F22F46" },
};

export default function TechBadge({ tech, className = "" }: { tech: string; className?: string }) {
  const config = techMap[tech] || {};
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-md font-medium cursor-default select-none ${className}`}>
      {Icon && (
        <Icon 
          className="w-4 h-4" 
          style={{ color: config.isDarkBrand ? "currentColor" : config.color }} 
        />
      )}
      {!Icon && <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0 mr-0.5"></span>}
      {tech}
    </span>
  );
}
