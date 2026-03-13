import Utensils from '../assets/icons/utensils-solid.svg?react';
import Activity from '../assets/icons/dumbbell-solid.svg?react';
import Run from '../assets/icons/walking-solid.svg?react';
import Salad from '../assets/icons/carrot-solid.svg?react'

const services = [
    {
        icon: Utensils,
        title: "Rééquilibrage alimentaire",
        desc: "Retrouvez un rapport sain avec la nourriture et atteignez vos objectifs de bien-être durablement.",
    },
    {
        icon: Activity,
        title: "Nutrition sportive",
        desc: "Optimisez vos performances et votre récupération grâce à une alimentation adaptée à votre pratique.",
    },
    {
        icon: Run,
        title: "Stratégie de Course",
        desc: "Un accompagnement spécifique pour répondre aux besoins nutritionnels de cette période unique.",
    },
    {
        icon: Salad,
        title: "Transition végétale",
        desc: "Adoptez une alimentation végétarienne ou végane de manière équilibrée et progressive.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 px-6 bg-primary/30">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Expertise & Performance</span>
                    <h2 className="text-4xl md:text-5xl font-title font-bold text-text mt-2">
                        Mes Accompagnements
                    </h2>
                    <div className="w-20 h-1.5 bg-secondary mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-organic">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 bg-bg transition-all border-2 border-primary rounded-organic duration-300 flex flex-col"
                            >
                                <div className="mb-8 inline-flex items-center py-3 justify-center  bg-primary/50 rounded-organic ">
                                    <Icon className="w-10 h-10 fill-current text-text" />
                                </div>

                                <h3 className="text-xl text-text font-bold mb-4 uppercase tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="font-body text-text/70 text-l mb-4">
                                    {service.desc}
                                </p>
                                <div className="mt-auto pt-8 opacity-100 transition-opacity">
                                    <span className="text-sm font-bold text-secondary cursor-pointer hover:text-primary">
                                        DÉCOUVRIR
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}