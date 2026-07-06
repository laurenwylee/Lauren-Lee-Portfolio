export default function Header() {
    return (
        <header className="w-full border-b backdrop-blur-sm">
            <nav className="w-full">
                <div className="mx-auto flex items-center justify-between py-4 px-4">
                    <a href="/" className="text-md hover:text-green-600 transition">
                        Lauren Lee
                    </a>
                    
                    <div className="flex gap-6 text-sm font-medium">
                        <a href="/about" className="hover:text-green-600 transition">About</a>
                        <a href="/courses" className="hover:text-green-600 transition">Courses</a>
                        <a href="/experience" className="hover:text-green-600 transition">Experience</a>
                        <a href="/projects" className="hover:text-green-600 transition">Projects</a>
                        <a href="/contact" className="hover:text-green-600 transition">Contact</a>
                        <a href="/Lauren_Lee_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">Resume</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}