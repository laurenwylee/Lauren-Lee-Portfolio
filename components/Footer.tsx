export default function Footer() {
  return (
    <footer className="w-full border-t mt-16 py-8 text-center">
      <nav className="flex justify-center gap-8 text-sm text-gray-600 font-medium">
        <a
          href="/Lauren_Lee_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Resume
        </a>
        <a
          href="https://github.com/laurenwylee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/laurenwylee/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:laurenwyl@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
      </nav>
    </footer>
  );
}
