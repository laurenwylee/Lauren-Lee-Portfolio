"use client";

import { useState, useEffect, ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";


interface TerminalTextProps
{
    children: ReactNode;
}

export default function TerminalText({children} : TerminalTextProps)
{
    const raw = 
        typeof children === "string"
        ? children
        : Array.isArray(children)
        ? children.join("")
        : "";
    
    const lines = raw.split("\n").map(line => line.trim());
    const [display, setDisplay] = useState([""]);
    const [activeLine, setActiveLine] = useState(0);

    const options = [
    { key: "A", label: "About", path: "/about" },
    { key: "B", label: "Courses", path: "/courses" },
    { key: "C", label: "Experience", path: "/experience" },
    { key: "D", label: "Projects", path: "/projects" },
    { key: "E", label: "Bridging Seas", path: "https://www.bridgingseas.com/", external: true },
    { key: "F", label: "Contact", path: "/contact" },
    { key: "G", label: "Resume", path: "/Lauren_Lee_Resume.pdf", external: true },
    ];

    const go = (path: string, external?: boolean) => {
        if (external) {
            window.open(path, "_blank", "noopener,noreferrer");
        } else {
            router.push(path);
        }
    };
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectionEnabled, setSelectionEnabled] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const router = useRouter();

    useEffect(() => {
        if (selectionEnabled) return; 

        const handleSkip = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setSelectionEnabled(true);
                setDisplay(lines);
                setActiveLine(lines.length - 1);
            }
        };

        window.addEventListener("keydown", handleSkip);
        return () => window.removeEventListener("keydown", handleSkip);
    }, [selectionEnabled, lines]);

    useEffect(() => {
        if (!selectionEnabled) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" || e.key === "s") {
                setSelectedIndex((prev) => (prev + 1) % options.length);
            }
            if (e.key === "ArrowUp" || e.key === "w") {
                setSelectedIndex((prev) =>
                    prev === 0 ? options.length - 1 : prev - 1
            );
            }
            if (e.key === "Enter") {
                go(options[selectedIndex].path, options[selectedIndex].external);
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        }, [selectionEnabled, selectedIndex]);


    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;

        intervalRef.current = setInterval(() => {
            const currLine = lines[lineIndex];

            setDisplay(prev => {
                const copy = [...prev];
                copy[lineIndex] = currLine.slice(0, charIndex);
                setActiveLine(lineIndex);
                return copy;
            });

            charIndex++
            if (charIndex > currLine.length) {
                lineIndex++;
                charIndex = 0;

                if (lineIndex === lines.length) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setSelectionEnabled(true);
                } else {
                    setDisplay(prev => [...prev, ""]);
                }
            }
        }, 40)

    }, [raw]);
   return (
        <div className="mt-5 ml-2 font-mono text-md text-white">
        {display.map((line, i) => {
            const isOptionLine =
            selectionEnabled && 
            line.trim().match(/^[A-G]\./);

            const optionIndex = isOptionLine
            ? options.findIndex((opt) => line.trim().startsWith(opt.key + "."))
            : -1;

            const highlighted = optionIndex === selectedIndex;

            return (
            <div
                key={i}
                onClick={
                    isOptionLine
                    ? () => go(options[optionIndex].path, options[optionIndex].external)
                    : undefined
                }
                onMouseEnter={
                    isOptionLine
                    ? () => setSelectedIndex(optionIndex)
                    : undefined
                }
                className={`flex gap-2 items-start px-1 ${
                isOptionLine ? "cursor-pointer" : ""
                } ${
                highlighted ? "bg-green-600/70 text-black rounded-sm" : ""
                }`}
            >
                <span className="text-green-500 w-4">
                    {(selectionEnabled ? highlighted : i === activeLine) ? "❯" : ""}
                </span>

                <span className="whitespace-pre-wrap">
                    {line}
                    {i === activeLine && !selectionEnabled && (
                        <span className="animate-pulse inline-block w-[1ch] h-[1em] bg-gray-300"></span>
                    )}
                </span>
            </div>
            );
        })}

            {selectionEnabled || 
                <div className="text-gray-300/70 text-sm mt-1">
                    Press Enter to skip
                </div>}

        </div>
    );
}

