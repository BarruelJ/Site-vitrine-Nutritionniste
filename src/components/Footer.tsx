const contactFeatures = [
    {
        title: "Email",
        desc: "email@email.com",
    },
    {
        title: "Téléphone",
        desc: "+33 6 33 66 66 33.",
    },
    {
        title: "Cabinet",
        desc: "16 rue des lilas, 05000 GAP.",
    },
];

export default function Footer() {
    return (
        <footer className="pt-12 px-6 bg-primary/50 text-text">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="font-title text-4xl">l'Équilibre Nutrition</span>
                        </div>
                        <p className="text-text-light font-body leading-relaxed max-w-md">
                            Votre accompagnement nutritionnel pour une vie plus saine et équilibrée,
                            en harmonie avec la nature.
                        </p>
                    </div>

                    <div className="flex flex-col w-auto">
                        <h4 className="relative font-semibold text-lg mb-4 inline-block">
                            Navigation
                            <span className="absolute -bottom-1 left-0 w-15 h-0.5 bg-secondary" />
                        </h4>

                        <a className="text-s text-text-light hover:text-text/80" href="#Accueil">Accueil</a>
                        <a className="text-s text-text-light hover:text-text/80" href="#About">À Propos</a>
                        <a className="text-s text-text-light hover:text-text/80" href="#Service">Accompagnement</a>
                        <a className="text-s text-text-light hover:text-text/80" href="#Contact">Contact</a>
                    </div>

                    <div>
                        <h4 className="relative font-semibold text-lg mb-4 inline-block">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-15 h-0.5 bg-secondary" />
                        </h4>
                        <div className="flex flex-col gap-3">
                            {contactFeatures.map((item, index) => {

                                return (
                                    <div key={index} className="flex gap-6 group">
                                        <div>
                                            <p className="text-text/70 text-s leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>

                <div className="py-4 border-t border-text/20 text-center text-text/50 text-sm">
                    <p>© 2026 L'Équilibre Nutrition. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
