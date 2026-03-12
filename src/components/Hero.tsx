import cardIcon1 from "../assets/icons/icon_card_1.webp";
import cardIcon2 from "../assets/icons/icon_card_2.webp";
import cardIcon3 from "../assets/icons/icon_card_3.webp";
import cardIcon4 from "../assets/icons/icon_card_4.webp";
import portraitHero from "../assets/portrait_hero.webp";

import LeafBackground from "./ui/LeafBackground";
import CurvedArrow from "./ui/CurveArrow";

const cards = [
    {
        title: "Nutrition Consciente",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus minima natus, consequatur ut tempore eos consequuntur qui!",
        position: "top-left",
        imgSrc: cardIcon1,
        alt: "Illustration Artichaut"
    },
    {
        title: "Gestion du Stress",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non doloribus, quibusdam ex aspernatur vel ipsum nulla quae?",
        position: "top-right",
        imgSrc: cardIcon2,
        alt: "Illustration lavande"
    },
    {
        title: "Harmonie Intérieure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione ut cum, at animi placeat necessitatibus blanditiis distinctio similique.",
        position: "bottom-left",
        imgSrc: cardIcon3,
        alt: "Illustration infini"
    },
    {
        title: "Vitalité Naturelle",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quod libero perferendis dolorem accusantium aut.",
        position: "bottom-right",
        imgSrc: cardIcon4,
        alt: "Illustration soleil"
    },
];


export default function Hero() {
    return (
        <section className="relative min-h-screen bg-bg pt-32 pb-20 px-4 overflow-hidden">
            {/* Branche */}
            <div className="absolute z-51 *: -top-10 -right-20 w-125 h-auto pointer-events-none -rotate-160">
                <LeafBackground className="text-primary/10" />
            </div>

            {/* FLÈCHES DE LIAISON */}
            {/* Haut */}
            <div className="absolute top-[26%] left-1/2 -translate-x-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary/30 rotate-20" />
            </div>

            {/* Droite */}
            <div className="absolute top-[53%] right-[24%] -translate-y-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary/30 rotate-100" />
            </div>

            {/* Bas */}
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary/30 rotate-190" />
            </div>

            {/* Gauche */}
            <div className="absolute top-[52%] left-[24%] -translate-y-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary/30 rotate-[-100deg]" />
            </div>


            <div className="max-w-7xl mx-auto">
                {/* Titre Principal */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-title text-bold text-text m-4">
                        Une Approche Intégrale de votre Santé
                    </h2>
                </div>

                {/* Cartes + Cercle Central */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-8 max-w-5xl mx-auto">

                    {/* Cercle */}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 rounded-full border-12 border-bg overflow-hidden">
                        <img
                            src={portraitHero}
                            alt="Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {cards.map((card, index) => (
                        <div key={index} className="relative bg-primary/30 border-text/50 rounded-full p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">

                            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center">
                                <img
                                    src={card.imgSrc}
                                    alt={card.alt}
                                    className="w-full h-full object-contain filter"
                                />
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold font-title text-text mb-2">{card.title}</h3>
                                <p className="font-body text-text/70 text-l mb-4">{card.desc}</p>
                                <a href="#" className="relative group inline-block font-body text-xs font-bold uppercase pb-2 transition-colors">
                                    Plus d'infos
                                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ease-in-out w-0 group-hover:w-[80%]`} />
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="flex justify-center mt-16">
                    <button className="bg-primary hover:bg-text-light text-white font-body px-10 py-4 rounded-xl transition-all shadow-md">
                        Réserver une Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}