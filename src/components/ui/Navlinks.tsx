interface NavlinkProps {
  label: string
  href: string
  onClose? : () => void
}

export default function Navlink({ label, href, onClose }: NavlinkProps) {
  return (
     <a href={href} onClick={() => onClose?.()} className="font-body text-text text-sm hover:text-secondary">{label}</a>
  )
}