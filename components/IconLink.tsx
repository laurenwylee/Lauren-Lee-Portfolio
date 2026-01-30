interface IconLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center text-gray-300 hover:text-white ml-3 transition"
    >
      {children}
    </a>
  );
}
