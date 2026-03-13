import cardIcon1 from "../assets/icons/icon_card_1.webp";
import cardIcon2 from "../assets/icons/icon_card_2.webp";
import cardIcon3 from "../assets/icons/icon_card_3.webp";
import cardIcon4 from "../assets/icons/icon_card_4.webp";
import portraitHero from "../assets/portrait_hero.webp";
import CurvedArrow from "./ui/CurveArrow";

const cards = [
    {
        title: "Optimisation Métabolique",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit illo deleniti laboriosam voluptatem !",
        position: "top-left",
        imgSrc: cardIcon1,
        alt: "Performance énergétique"
    },
    {
        title: "Résilience & Récupération",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio quod cum fuga cumque optio natus delectus.",
        position: "top-right",
        imgSrc: cardIcon2,
        alt: "Récupération athlétique"
    },
    {
        title: "Focus & Mental",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aut enim rem! Magni debitis fugit magnam doloribus tenetur.",
        position: "bottom-left",
        imgSrc: cardIcon3,
        alt: "Focus mental"
    },
    {
        title: "Équilibre Micronutritionnel",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam amet quam atque necessitatibus ? ",
        position: "bottom-right",
        imgSrc: cardIcon4,
        alt: "Santé de l'athlète"
    },
];


export default function Hero() {
    return (
        <section className="relative min-h-screen bg-bg pt-32 pb-20 px-4 overflow-hidden">  

            {/* FLÈCHES DE LIAISON */}
            {/* Haut */}
            <div className="absolute z-2 top-[26%] left-1/2 -translate-x-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary rotate-20" />
            </div>

            {/* Droite */}
            <div className="absolute z-2 top-[52%] right-[24%] -translate-y-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary rotate-100" />
            </div>

            {/* Bas */}
            <div className="absolute z-2 bottom-[20%] left-1/2 -translate-x-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary rotate-190" />
            </div>

            {/* Gauche */}
            <div className="absolute z-2 top-[52%] left-[24%] -translate-y-1/2 w-18 h-18 pointer-events-none hidden xl:block">
                <CurvedArrow className="text-secondary rotate-[-100deg]" />
            </div>


            <div className="max-w-7xl mx-auto">
                {/* Titre Principal */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-title font-bold text-text mt-2">
                        Une Analyse de votre Santé
                    </h2>
                    <div className="w-20 h-1.5 bg-secondary mt-6"></div>
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
                        <div key={index} className="relative z-1 bg-primary/30 border-text/50 rounded-organic p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">

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
                                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 ease-in-out w-0 group-hover:w-[80%]`} />
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="flex justify-center mt-16">
                    <button className="bg-secondary hover:bg-text-light text-white font-body text-lg px-10 py-4 rounded-xl transition-all shadow-md">
                        Réserver une Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}