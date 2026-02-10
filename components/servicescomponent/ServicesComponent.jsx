"use client";

const services = [
    {
        id: "01",
        title: "AI Transformation",
        description: "Unlock AI's potential with our AI transformation services.",
    },
    {
        id: "02",
        title: "Custom Software Development",
        description: "We create custom software solutions tailored specifically for your business needs.",
    },
    {
        id: "03",
        title: "MVP Development",
        description: "Build tailored MVPs to launch fast, gather feedback, validate ideas, and attract investors.",
    },
    {
        id: "04",
        title: "Application Modernization",
        description: "Transform legacy systems into fast, secure, and scalable applications.",
    },
    {
        id: "05",
        title: "Build with Our Experts",
        description: "Get a dedicated team that turns your product vision into a scalable, market-ready solution.",
    },
];

const ServicesComponent = () => {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                    Our Services
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                    Ready to elevate your business to the next level?
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`
                            bg-brand-green p-10 rounded-[2.5rem] flex flex-col justify-between 
                            transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group
                            ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
                            min-h-[320px] text-slate-900 border border-transparent hover:border-slate-900/10
                        `}
                    >
                        <span className="text-slate-900 font-mono text-xl font-bold mb-8 block opacity-80">
                            {service.id}
                        </span>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-800 text-lg leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesComponent;

