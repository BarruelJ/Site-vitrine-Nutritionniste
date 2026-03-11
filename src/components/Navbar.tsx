import Button from "./ui/Button"
import Navlink from "./ui/Navlinks"
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-start h-20 md:h-25 bg-primary md:bg-[linear-gradient(to_right,var(--color-primary)_45%,var(--color-bg)_45%)] transition-all">
            <div className="relative h-full w-full md:w-[50%] xl:w-2/5 items-center justify-center md:justify-end flex px-4 md:pr-10 xl:pr-25">
                <h1 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-title text-text font-bold antialiased">
                    L'Équilibre Nutrition
                </h1>
            </div>

            <div className="hidden md:flex h-full items-center gap-6 lg:gap-10 pl-5 font-body text-xl font-medium text-text/70">
                <Navlink href="#Accueil" label="Accueil" />
                <Navlink href="#About" label="À Propos" />
                <Navlink href="#Service" label="Services" />
                <Navlink href="#Contact" label="Contact" />
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1 md:hidden absolute top-1/2 -translate-y-1/2 right-5 z-60"
            >
                <span className={`bg-text h-0.5 w-6 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`bg-text h-0.5 w-6 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`bg-text h-0.5 w-6 transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            <div className={`fixed top-0 right-0 h-full w-72 bg-bg flex flex-col justify-start gap-8 px-10 py-10 shadow-2xl transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="text-2xl font-title text-text uppercase font-bold">
                    L'Équilibre Nutrition
                </div>
                <div className="flex flex-col gap-6">
                    <Navlink href="#Accueil" label="Accueil" onClose={() => setIsOpen(false)} />
                    <Navlink href="#About" label="A propos" onClose={() => setIsOpen(false)} />
                    <Navlink href="#Service" label="Services" onClose={() => setIsOpen(false)} />
                    <Navlink href="#Contact" label="Contact" onClose={() => setIsOpen(false)} />
                </div>

                <div className="flex items-center justify-start">
                    <Button href="#Contact" label="Prendre RDV" />
                </div>
            </div>
        </nav>
    )
}