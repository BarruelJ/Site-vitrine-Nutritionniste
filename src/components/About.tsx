import IconHeart from '../assets/icons/heart-regular.svg?react';
import IconSeedling from '../assets/icons/seedling-solid.svg?react';
import IconUser from '../assets/icons/user-group-solid.svg?react';

const aboutFeatures = [
    {
        title: "Écoute bienveillante",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nostrum.",
        icon: IconHeart,
    },
    {
        title: "Alimentation naturelle",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non doloribus.",
        icon: IconSeedling,
    },
    {
        title: "Suivi personnalisé",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione ut cum.",
        icon: IconUser,
    },
];


export default function About() {
    return (
        <section className="min-h-screen bg-bg py-40 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Titre */}
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-title text-bold text-text m-4">
                        Le Point de Départ
                    </h2>
                    <p className="font-body text-text/70 text-xl mb-4 mt-10  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores quisquam dolorem cum tenetur? Rem, minima blanditiis. Eum, expedita! Sint, minus. Esse quisquam inventore hic perspiciatis.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-18 items-center">
                    <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1lZGl0YXRpb24lMjBwZWFjZWZ1bCUyMG5hdHVyZXxlbnwxfHx8fDE3NzMxMjY5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Bien-être et méditation"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-10">
                        {aboutFeatures.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex gap-6 group">
                                    <div className="shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center transition-colors group-hover:bg-secondary/40">
                                        <Icon className="w-7 h-7 fill-current text-text/50" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-text font-bold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-text/70 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}