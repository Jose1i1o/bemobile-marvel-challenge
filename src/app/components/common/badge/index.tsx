import Link from "next/link"
import { AnchorHTMLAttributes, FC } from "react"

interface ExtendedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tooltip?: string
}

type BadgeProps = ExtendedLinkProps & {
  href: string
}

export const Badge: FC<BadgeProps> = ({
  href,
  tooltip,
  ...props
}: BadgeProps) => {
  return (
    <Link
      rel="preload"
      href={href}
      {...props}
      target="_blank"
      title={tooltip}
      style={{ textDecoration: "none", color: "inherit" }}
    />
  )
}
