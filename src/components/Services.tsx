import Utensils from '../assets/icons/utensils-solid.svg?react';
import Activity from '../assets/icons/dumbbell-solid.svg?react';
import Run from '../assets/icons/walking-solid.svg?react';
import Salad from '../assets/icons/carrot-solid.svg?react'
import LeafBackground from './ui/LeafBackground';

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
        title: "Stratégie Nutritionnelle de Course",
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
        <section id="services" className=" relative py-40 px-6 bg-primary/30">

             <div className="absolute z-0 *: -top-10 -left-30 w-125 h-auto pointer-events-none -rotate-160">
                <LeafBackground className="text-secondary/10" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-title text-bold text-text m-4">
                        Mes Accompagnements
                    </h2>
                    <p className="font-body text-text/70 text-xl mb-4 mt-10  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores quisquam dolorem cum tenetur? Rem, minima blanditiis. Eum, expedita! Sint, minus. Esse quisquam inventore hic perspiciatis.</p>
                </div>

                <div className="grid z-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/50 transition-colors"
                            >
                                <div className="shrink-0 w-14 h-14 mx-auto mb-4 bg-bg/30  group-hover:bg-primary/50 rounded-2xl flex items-center justify-center transition-colors">
                                        <Icon className="w-8 h-8 fill-current text-text/80" />
                                    </div>
                                <h3 className="text-xl text-text text-center font-bold mb-2">
                                            {service.title}
                                        </h3>
                                <p className="text-text/70 leading-relaxed">
                                            {service.desc}
                                        </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}