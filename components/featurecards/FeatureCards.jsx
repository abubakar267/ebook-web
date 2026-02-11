import { ArrowRight, Code, Database, Globe, ShoppingBag } from 'lucide-react';

const CardGraphic1 = () => (
    <div className="h-48 w-full relative flex items-end justify-center gap-1 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className={`w-4 rounded-t-sm transition-all duration-500 hover:translate-y-2 ${['bg-blue-500', 'bg-yellow-400', 'bg-emerald-400', 'bg-orange-400', 'bg-white', 'bg-purple-400'][i % 6]
                    }`}
                style={{ height: `${Math.max(40, Math.random() * 100)}%` }}
            />
        ))}
    </div>
);

const CardGraphic2 = () => (
    <div className="h-48 w-full relative flex items-center justify-center p-4 bg-black/5 rounded-t-xl" aria-hidden="true">
        <div className="relative w-full h-full">
            {/* Background Dots */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 bg-white shadow-lg p-2 rounded-lg rotate-[-6deg] animate-pulse">
                <span className="font-bold text-slate-900 text-xs">WIX</span>
            </div>
            <div className="absolute bottom-12 right-8 bg-white shadow-lg p-2 rounded-lg rotate-[12deg] animate-bounce">
                <ShoppingBag className="w-5 h-5 text-pink-500" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-4 rounded-xl z-10 flex flex-col items-center">
                <Globe className="w-8 h-8 text-blue-600 mb-1" />
                <span className="font-bold text-slate-900 text-sm">Direct</span>
            </div>
            <div className="absolute top-8 right-12 bg-white shadow-lg p-2 rounded-lg rotate-[3deg]">
                <span className="font-bold text-slate-900 text-xs">API</span>
            </div>

            {/* Connecting Lines (svg) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                <path d="M50,30 Q150,50 150,80" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M250,50 Q180,80 150,80" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M220,130 Q180,100 150,80" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
        </div>
    </div>
);

const CardGraphic3 = () => (
    <div className="h-48 w-full relative flex items-center justify-center p-4 bg-slate-200 rounded-t-xl overflow-hidden text-slate-800" aria-hidden="true">
        <div className="bg-slate-900 w-full max-w-[240px] rounded-lg shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-800 p-2 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="p-3 font-mono text-[10px] text-green-400 leading-relaxed opacity-90">
                <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300">book</span> = <span className="text-yellow-300">new Book()</span>;
                </div>
                <div>book.<span className="text-blue-300">print()</span>;</div>
                <div className="text-slate-500">// API Request</div>
            </div>
        </div>
        <div className="absolute top-8 right-8 bg-white p-2 rounded-lg shadow-lg rotate-12">
            <Code className="w-6 h-6 text-blue-600" />
        </div>
    </div>
);


const FeatureCards = () => {
    return (
        <section className="py-24 relative z-10 -mt-[1px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Publishing Solutions</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Choose the path that fits you best.</p>
        </div> */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Card 1 */}
                    <div className="bg-slate-900 text-slate-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-800 group">
                        <div className="bg-slate-800/50 pt-8 px-4 pb-0 overflow-hidden relative group-hover:bg-slate-800/80 transition-colors">
                            <CardGraphic1 />
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold mb-4">Fast Book Publishing & Printing</h3>
                            <p className="text-slate-400 mb-8 flex-1 leading-relaxed">
                                In under a day, publish your book and have it available for sale on Lulu Bookstore. Use our free templates to generate a PDF to have your book printed.
                            </p>
                            <button className="w-full py-3 px-6 rounded-lg bg-[var(--color-brand-green)] hover:bg-[#a3d93d] text-slate-900 font-bold transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                                Book Creation Options <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2 (Brand Green) */}
                    <div className="bg-lulu text-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-300 group ring-4 ring-transparent hover:ring-brand-green/20">
                        {/* Using bg-lulu utility if defined or inline style */}
                        {/* Wait, bg-lulu in globals.css sets background color AND image pattern. 
                 If we want the pure brand color, we should use bg-[#C1F25D] text-slate-900.
                 But the requested "brand color SCHEME" usually implies the primary color.
                 Let's stick to the color code or var.
             */}
                        <div className="bg-black/5 pt-8 px-4 pb-0 overflow-hidden relative">
                            <CardGraphic2 />
                        </div>

                        <div className="p-8 flex-1 flex flex-col relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Sell Your Books Direct</h3>
                            <p className="text-slate-800/80 mb-8 flex-1 leading-relaxed font-medium">
                                Ditch the overhead, sell books direct-to-consumer, and unlock true on-demand scalability. Print single copies or bulk shipments exactly when you need them.
                            </p>
                            <button className="w-full py-3 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors flex items-center justify-center gap-2 group-hover:gap-3 shadow-lg">
                                Sell Your Books <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-200 group">
                        <div className="bg-slate-200 pt-8 px-4 pb-0 overflow-hidden relative">
                            <CardGraphic3 />
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold mb-4">Customize Your Book Printing With API</h3>
                            <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                                Level up by plugging in our Print API and enabling automated print and global fulfillment for books, magazines, workbooks, and more.
                            </p>
                            <button className="w-full py-3 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                                Explore the API <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
