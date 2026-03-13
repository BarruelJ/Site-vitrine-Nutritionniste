import IconHeart from '../assets/icons/heart-regular.svg?react';
import IconSeedling from '../assets/icons/seedling-solid.svg?react';
import IconUser from '../assets/icons/user-group-solid.svg?react';
import ImgAbout from '../assets/about_img.webp'

const aboutFeatures = [
    {
        title: "Suivi personnalisé",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione ut cum.",
        icon: IconUser,
    },
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
];


export default function About() {
    return (
        <section className="min-h-screen bg-bg py-40 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Titre */}
                <div className="mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Analyse & Fondations</span>
                    <h2 className="text-4xl md:text-5xl font-title font-bold text-text mt-2">
                        Le Point de Départ
                    </h2>
                    <div className="w-20 h-1.5 bg-secondary mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-18 items-center">
                    <div className=" relative aspect-4/3 rounded-organic overflow-hidden shadow-sm">
                        <img
                            src={ImgAbout}
                            alt="Course à pied"
                            className="w-full h-full object-cover"
                        />
                        <span className='absolute top-0 bg-black/15 w-full h-full'/>
                    </div>

                    <div className="flex flex-col gap-10">
                        {aboutFeatures.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex gap-6 group">
                                    <div className="shrink-0 w-14 h-14 bg-primary/50 rounded-organic flex items-center justify-center transition-colors group-hover:bg-secondary">
                                        <Icon className="w-7 h-7 fill-current text-text" />
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