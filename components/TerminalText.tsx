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
    { key: "A", label: "Courses", path: "/courses" },
    { key: "B", label: "Experience", path: "/experience" },
    { key: "C", label: "Projects", path: "/projects" },
    { key: "D", label: "Bridging Seas", path: "/bridgingseas" },
    { key: "E", label: "Journalism", path: "/journalism" },
    { key: "F", label: "Contact", path: "/contact" },
    ];
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
                router.push(options[selectedIndex].path);
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
            line.trim().match(/^[A-F]\./); 

            const optionIndex = isOptionLine
            ? options.findIndex((opt) => line.trim().startsWith(opt.key + "."))
            : -1;

            const highlighted = optionIndex === selectedIndex;

            return (
            <div
                key={i}
                className={`flex gap-2 items-start px-1 ${
                highlighted ? "bg-green-600/70 text-black rounded-sm" : ""
                }`}
            >
                <span className="text-green-500 w-4">
                    {line.trim() !== "" ? "❯" : ""}
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
                <div className="text-gray-500/50 text-sm mt-1">
                    Press Enter to skip
                </div>}

        </div>
    );
}

