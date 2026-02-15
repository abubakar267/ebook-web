import React from 'react';

const FooterIllustration = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <svg
                viewBox="0 0 800 500"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* --- Definitions for gradients/patterns --- */}
                <defs>
                    <linearGradient id="lampGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFFF00" />
                        <stop offset="100%" stopColor="#FDE047" />
                    </linearGradient>
                    <pattern id="dotPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="black" opacity="0.1" />
                    </pattern>
                </defs>

                {/* --- LIGHT BEAM (Behind everything) --- */}
                <path d="M600,200 L500,500 L800,500 L700,200 Z" fill="#FFFF00" opacity="0.8" />

                {/* --- BOOKS (Right side, under lamp) --- */}
                {/* Bottom Book (Blue) */}
                <g transform="translate(560, 420)">
                    <rect x="0" y="0" width="160" height="40" rx="4" fill="#3B82F6" stroke="black" strokeWidth="3" />
                    <rect x="5" y="5" width="20" height="30" fill="white" opacity="0.3" rx="2" />
                    <path d="M160,20 L155,20" stroke="black" strokeWidth="3" />
                </g>
                {/* Middle Book (White) */}
                <g transform="translate(580, 380)">
                    <rect x="0" y="0" width="130" height="40" rx="3" fill="white" stroke="black" strokeWidth="3" />
                    <line x1="10" y1="10" x2="120" y2="10" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="10" y1="20" x2="120" y2="20" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                </g>

                {/* --- GLASSES (Resting on books) --- */}
                <g transform="translate(570, 360) rotate(-5)">
                    <circle cx="30" cy="20" r="20" fill="white" stroke="black" strokeWidth="3" opacity="0.6" />
                    <circle cx="90" cy="20" r="20" fill="white" stroke="black" strokeWidth="3" opacity="0.6" />
                    <path d="M50,20 Q60,10 70,20" fill="none" stroke="black" strokeWidth="3" /> {/* Bridge */}
                    <path d="M10,20 L-20,30" fill="none" stroke="black" strokeWidth="3" /> {/* Left arm */}
                </g>

                {/* --- LAMP (Right Side) --- */}
                <g transform="translate(620, 100)">
                    {/* Stand */}
                    <path d="M65,150 Q20,200 40,320" fill="none" stroke="black" strokeWidth="12" strokeLinecap="round" />
                    <path d="M65,150 Q20,200 40,320" fill="none" stroke="#FDE047" strokeWidth="6" strokeLinecap="round" />

                    {/* Base */}
                    <path d="M10,320 Q40,300 70,320 L80,380 L0,380 Z" fill="#FDE047" stroke="black" strokeWidth="3" />
                    <path d="M10,320 Q40,300 70,320 L80,380 L0,380 Z" fill="url(#dotPattern)" opacity="0.5" />

                    {/* Shade */}
                    <path d="M15,0 L115,0 L130,150 L0,150 Z" fill="white" stroke="black" strokeWidth="3" />
                    <rect x="5" y="10" width="120" height="130" fill="url(#dotPattern)" opacity="0.2" />

                    {/* Bulb/Knob on top */}
                    <circle cx="65" cy="-10" r="12" fill="#FDE047" stroke="black" strokeWidth="3" />
                </g>


                {/* --- LAPTOP (Center) --- */}
                <g transform="translate(180, 200)">
                    {/* Screen Base (Behind) */}
                    <path d="M50,0 L350,0 L320,200 L80,200 Z" fill="#1e293b" stroke="black" strokeWidth="4" />
                    {/* Screen Content (Blue) */}
                    <path d="M60,10 L340,10 L315,190 L85,190 Z" fill="#3B82F6" />

                    {/* Glare/Highlight on screen */}
                    <path d="M60,10 L200,10 L150,190 L85,190 Z" fill="white" opacity="0.1" />

                    {/* Cursor */}
                    <g transform="translate(180, 80) rotate(-15) scale(2)">
                        <path d="M0,0 L0,18 L4,14 L7,20 L9,19 L6,13 L12,13 Z" fill="white" stroke="black" strokeWidth="1.5" />
                        <path d="M12,24 Q16,28 8,30 M15,22 Q20,24 18,28 M10,26 Q6,28 10,32" stroke="black" strokeWidth="1" fill="none" opacity="0.5" /> {/* Click effect dots */}
                    </g>

                    {/* Keyboard Base */}
                    <path d="M-20,200 L420,200 L400,230 L0,230 Z" fill="#e2e8f0" stroke="black" strokeWidth="3" />
                    <path d="M0,230 L400,230 L400,240 Q400,250 380,250 L20,250 Q0,250 0,240 Z" fill="#cbd5e1" stroke="black" strokeWidth="3" />

                    {/* Trackpad */}
                    <rect x="150" y="210" width="100" height="15" rx="2" fill="#94a3b8" opacity="0.5" />
                </g>


                {/* --- COFFEE MUG (Left Side) --- */}
                <g transform="translate(80, 380)">
                    {/* Coaster/Book under mug */}
                    <rect x="-20" y="65" width="140" height="25" fill="#FDE047" stroke="black" strokeWidth="3" rx="2" />
                    <rect x="-10" y="45" width="120" height="20" fill="white" stroke="black" strokeWidth="3" rx="2" />

                    {/* Mug Handle */}
                    <path d="M-5,10 Q-30,10 -30,40 Q-30,70 -5,70" fill="none" stroke="white" strokeWidth="12" />
                    <path d="M-5,10 Q-30,10 -30,40 Q-30,70 -5,70" fill="none" stroke="black" strokeWidth="12" strokeLinecap="round" />
                    <path d="M-5,10 Q-30,10 -30,40 Q-30,70 -5,70" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />

                    {/* Mug Body */}
                    <rect x="0" y="0" width="100" height="90" rx="10" fill="white" stroke="black" strokeWidth="3" />

                    {/* Logo on Mug - Simplified Book */}
                    <path d="M35,30 L35,60 M35,60 L50,70 L65,60 M65,60 L65,30 M35,30 L50,40 L65,30"
                        fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M50,40 L50,70" stroke="#3B82F6" strokeWidth="3" />

                    {/* Steam */}
                    <path d="M30,-20 Q20,-40 30,-60" fill="none" stroke="white" strokeWidth="3" opacity="0.6" strokeDasharray="5 5">
                        <animate attributeName="d" values="M30,-20 Q20,-40 30,-60; M30,-30 Q40,-50 30,-70; M30,-20 Q20,-40 30,-60" dur="3s" repeatCount="indefinite" />
                    </path>
                    <path d="M50,-15 Q60,-35 50,-55" fill="none" stroke="white" strokeWidth="3" opacity="0.6" strokeDasharray="5 5" >
                        <animate attributeName="d" values="M50,-15 Q60,-35 50,-55; M50,-25 Q40,-45 50,-65; M50,-15 Q60,-35 50,-55" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M70,-20 Q60,-40 70,-60" fill="none" stroke="white" strokeWidth="3" opacity="0.6" strokeDasharray="5 5" >
                        <animate attributeName="d" values="M70,-20 Q60,-40 70,-60; M70,-30 Q80,-50 70,-70; M70,-20 Q60,-40 70,-60" dur="3.5s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* --- DECOR --- */}
                {/* Stars */}
                <g fill="white">
                    <path d="M400,100 L405,115 L420,120 L405,125 L400,140 L395,125 L380,120 L395,115 Z" />
                    <path d="M700,50 L703,58 L711,61 L703,64 L700,72 L697,64 L689,61 L697,58 Z" />
                    <path d="M600,150 L602,156 L608,158 L602,160 L600,166 L598,160 L592,158 L598,156 Z" opacity="0.7" />
                    <circle cx="100" cy="150" r="3" opacity="0.5" />
                    <circle cx="750" cy="300" r="4" opacity="0.5" />
                </g>

            </svg>
        </div>
    );
};

export default FooterIllustration;
