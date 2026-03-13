interface NavlinkProps {
    label: string
    href: string
    active?: boolean
    onClose?: () => void
}

export default function Navlink({ label, href, active, onClose }: NavlinkProps) {
    return (
        <a
            href={href}
            onClick={() => onClose?.()}
            className="relative group font-body text-text hover:transition-colors duration-300 pb-1"
        >
            {label}

            <span className={`
        absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-secondary
        transition-all duration-300 ease-in-out
        /* État initial : largeur 0, centré */
        ${active ? 'w-[80%]' : 'w-0 group-hover:w-[80%]'}
      `} />
        </a>
    )
}