export default function Header() {
    return (
        <header className="w-full border-b backdrop-blur-sm">
            <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">

                <a href="/" className="text-md">
                    Lauren Lee
                </a>

                <div className="flex gap-6 text-sm font-medium">
                     <a href="/about" className="hover:text-blue-600 transition">Courses</a>
                    <a href="/about" className="hover:text-blue-600 transition">Experience</a>
                    <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
                    <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
                </div>
            </nav>

        </header>
    )
}