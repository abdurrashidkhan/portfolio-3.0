export type SubItem = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href?: string
  subItems?: SubItem[]
}

export type NavbarButton = {
  label: string
  href: string
  className?: string
}

export interface NavbarProps {
  logo: React.ReactNode
  items: NavItem[]
  buttons?: NavbarButton[]
  className?: string
  mobileClassName?: string
  onLinkClick?: (href: string) => void
}
