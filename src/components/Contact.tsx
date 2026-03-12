import IconMail from '../assets/icons/mail-solid.svg?react';
import IconTel from '../assets/icons/tel-solid.svg?react';
import IconLoc from '../assets/icons/loc-solid.svg?react';

const contactFeatures = [
    {
        title: "Email",
        desc: "email@email.com",
        icon: IconMail,
    },
    {
        title: "Téléphone",
        desc: "+33 6 33 66 66 33.",
        icon: IconTel,
    },
    {
        title: "Cabinet",
        desc: "16 rue des lilas, 05000 GAP.",
        icon: IconLoc,
    },
];


export default function Contact() {
    return (
        <section className="min-h-screen bg-bg py-40 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-18 items-center">

                    <div className="flex flex-col gap-10">
                        <div className="max-w-5xl mx-auto mb-10">
                            <h2 className="text-3xl md:text-4xl font-title text-bold text-text m-4">
                                Prêt à commencer votre accompagnement ?
                            </h2>
                            <p className="font-body text-text/70 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores quisquam dolorem cum tenetur? Rem, minima blanditiis. Eum, expedita! Sint, minus. Esse quisquam inventore hic perspiciatis.</p>
                        </div>
                        {contactFeatures.map((item, index) => {
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
                    <div className="aspect-4/3 flex items-center bg-primary/20 justify-center rounded-[80px] p-12 relative">

                        <span className="absolute top-10 left-10 text-8xl text-secondary font-serif leading-none select-none">“</span>

                        <div className="relative z-10 text-center">
                            <p className="font-title text-3xl md:text-4xl text-text leading-tight italic">
                                Dans chaque grain de raisin, il y a le <span className="text-secondary font-bold">soleil</span> de toute une année.
                            </p>

                            <div className="mt-8 flex justify-center items-center gap-4">
                                <span className="h-px w-12 bg-primary/20"></span>
                                <span className="text-sm uppercase tracking-widest text-text/40 font-body">Sagesse Populaire</span>
                                <span className="h-px w-12 bg-primary/20"></span>
                            </div>
                        </div>
                        <span className="absolute bottom-10 right-10 text-8xl text-secondary font-serif leading-none select-none">”</span>
                    </div>

                </div>
            </div>
        </section>
    )
}