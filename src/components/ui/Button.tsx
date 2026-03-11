interface ButtonProps {
  label: string
  href: string
}

export default function Button({ label, href }: ButtonProps) {
  return (
     <a href={href} className="bg-primary text-bg text-body font-medium text-1xl p-4.5 rounded-organic hover:bg-secondary">{label}</a>
  )
}