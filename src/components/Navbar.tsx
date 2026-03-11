import Button from "./ui/Button"
import Navlink from "./ui/Navlinks"
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-bg">
            <div className="text-2xl font-title text-text uppercase relative">
                L'Équilibre Nutrition
            </div>
            <div className="hidden md:flex items-center gap-10">
                <Navlink href="#About" label="A propos" />
                <Navlink href="#Service" label="Services" />
                <Navlink href="#Contact" label="Contact" />
            </div>
            <div className="hidden md:block">
                <Button href="#Contact" label="Prendre RDV" />
            </div>
            <button onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1 md:hidden absolute top-5 right-5">
                <span className="bg-primary h-0.5 w-6"></span>
                <span className="bg-primary h-0.5 w-6"></span>
                <span className="bg-primary h-0.5 w-6"></span>
            </button>


            <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)} />
            <div className={`fixed top-0 right-0 h-full w-72 bg-bg flex flex-col justify-start gap-8 px-10 py-10 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="text-2xl font-title text-text uppercase">
                    L'Équilibre Nutrition
                </div>
                <Navlink href="#About" label="A propos" onClose={() => setIsOpen(false)} />
                <Navlink href="#Service" label="Services" onClose={() => setIsOpen(false)} />
                <Navlink href="#Contact" label="Contact" onClose={() => setIsOpen(false)} />
                <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-primary rotate-45"></span>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-primary -rotate-45"></span>
                </button>
                <div className="flex justify-center mt-10">
                <Button href="#Contact" label="Prendre RDV" />
            </div>
            </div>

        </nav >
    )


}