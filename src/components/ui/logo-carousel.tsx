import React from 'react';
import { InfiniteSlider } from './infinite-slider';

// SVG components for logos (Colored)
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61DAFB" strokeWidth="1" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 180 180" fill="none" {...props}>
    <circle cx="90" cy="90" r="86" stroke="#FFFFFF" strokeWidth="8" />
    <path d="M140 140L75 55H60V125H72V75L130 148C133 146 137 143 140 140Z" fill="#FFFFFF" />
    <rect x="110" y="55" width="12" height="70" fill="#FFFFFF" />
  </svg>
);

const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <rect width="90" height="90" x="5" y="5" rx="12" fill="#3178C6" />
    <text x="25" y="65" fill="#FFFFFF" fontSize="38" fontWeight="bold" fontFamily="sans-serif">TS</text>
  </svg>
);

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11.996 0c-1.602.005-3.113.14-4.336.38-2.646.52-3.13 1.776-3.13 4.3v1.654h7.62v.756H2.176C.936 7.09.006 8.272.006 9.877c-.006 2.062 0 4.195 0 6.262 0 2.2 1.077 3.132 3.12 3.132h1.66v-2.31c0-2.484 2.032-4.516 4.515-4.516h4.316c2.484 0 4.516-2.032 4.516-4.515V3.882c0-2.66-.997-3.414-3.13-3.66C13.886.082 12.953.003 11.996 0zm-3.856 1.834a.895.895 0 0 1 .897.896.895.895 0 0 1-.897.896.895.895 0 0 1-.896-.896.895.895 0 0 1 .896-.896z" fill="#3776AB" />
    <path d="M12.004 24c1.602-.005 3.113-.14 4.336-.38 2.646-.52 3.13-1.776 3.13-4.3v-1.654H11.85v-.756h9.974c1.24 0 2.17-.182 2.17-1.787 0-2.062 0-4.195 0-6.262 0-2.2-1.077-3.132-3.12-3.132h-1.66v2.31c0 2.484-2.032 4.516-4.515 4.516H10.38c-2.484 0-4.516 2.032-4.516 4.515v4.316c0 2.66.997 3.414 3.13 3.66 2.254.178 3.187.257 4.144.26zm3.856-1.834a.895.895 0 0 1-.897-.896.895.895 0 0 1 .897-.896.895.895 0 0 1 .896.896.895.895 0 0 1-.896.896z" fill="#FFD343" />
  </svg>
);

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.598 15.026 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.202 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.174 2.537 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.402 8.976 12 6.001 12z" fill="#38BDF8" />
  </svg>
);

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 57" fill="none" {...props}>
    <path d="M19 0C13.753 0 9.5 4.253 9.5 9.5C9.5 14.747 13.753 19 19 19C24.247 19 28.5 14.747 28.5 9.5C28.5 4.253 24.247 0 19 0Z" fill="#F24E1E" />
    <path d="M9.5 28.5C9.5 23.253 13.753 19 19 19H28.5V38H19C13.753 38 9.5 33.747 9.5 28.5Z" fill="#A259FF" />
    <path d="M19 19C13.753 19 9.5 23.253 9.5 28.5C9.5 33.747 13.753 38 19 38C24.247 38 28.5 33.747 28.5 28.5C28.5 23.253 24.247 19 19 19Z" fill="#1ABCFE" />
    <path d="M28.5 0H19C13.753 0 9.5 4.253 9.5 9.5V19H28.5V0Z" fill="#0ACF83" />
    <path d="M9.5 47.5C9.5 42.253 13.753 38 19 38H28.5V47.5C28.5 52.747 24.247 57 19 57C13.753 57 9.5 52.747 9.5 47.5Z" fill="#FF7262" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#FFFFFF" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const PremiereIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <rect width="90" height="90" x="5" y="5" rx="12" fill="#161b33" stroke="#3fa9f5" strokeWidth="6" />
    <text x="22" y="65" fill="#3fa9f5" fontSize="38" fontWeight="bold" fontFamily="sans-serif">Pr</text>
  </svg>
);

const AfterEffectsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <rect width="90" height="90" x="5" y="5" rx="12" fill="#1c1630" stroke="#d19df7" strokeWidth="6" />
    <text x="22" y="65" fill="#d19df7" fontSize="38" fontWeight="bold" fontFamily="sans-serif">Ae</text>
  </svg>
);

const ResolveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <circle cx="50" cy="50" r="42" stroke="#FFFFFF" strokeWidth="6" />
    <circle cx="50" cy="35" r="15" fill="#FF5252" />
    <circle cx="37" cy="58" r="15" fill="#2ECC71" />
    <circle cx="63" cy="58" r="15" fill="#3498DB" />
    <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
  </svg>
);

const MongoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 .587c-.36.326-7 6.471-7 11.238 0 4.148 3.134 7.175 7 7.175s7-3.027 7-7.175c0-4.767-6.64-10.912-7-11.238zm.75 16.23v-12.25c.3.26 4.25 4.49 4.25 8.24 0 2.37-1.57 3.73-4.25 4.01zm-1.5 0c-2.68-.28-4.25-1.64-4.25-4.01 0-3.75 3.95-7.98 4.25-8.24v12.25zm.75 3.513c-.28 0-.5-.22-.5-.5v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5c0 .28-.22.5-.5.5z" fill="#47A248" />
  </svg>
);

const GeminiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <defs>
      <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9BC5FF" />
        <stop offset="50%" stopColor="#C1AEFC" />
        <stop offset="100%" stopColor="#F8C0EB" />
      </linearGradient>
    </defs>
    <path d="M12 0L9.15 9.15L0 12L9.15 14.85L12 24L14.85 14.85L24 12L14.85 9.15L12 0Z" fill="url(#geminiGrad)" />
  </svg>
);

const logos = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextJsIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Figma", Icon: FigmaIcon },
  { name: "GitHub", Icon: GitHubIcon },
  { name: "Adobe Premiere", Icon: PremiereIcon },
  { name: "Adobe After Effects", Icon: AfterEffectsIcon },
  { name: "DaVinci Resolve", Icon: ResolveIcon },
  { name: "MongoDB", Icon: MongoIcon },
  { name: "Google Gemini", Icon: GeminiIcon },
];

export default function LogoCarousel({ columnCount }: { columnCount?: number }) {
  if (columnCount) {
    // optional prop handling
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-6 overflow-hidden">
      <InfiniteSlider gap={40} speed={40}>
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 cursor-pointer hover:scale-110 transition-transform">
            <logo.Icon className="h-10 w-10 md:h-12 md:w-12" />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
