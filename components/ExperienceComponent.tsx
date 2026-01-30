"use client"

interface ExperienceComponentProps {
    experienceName: string;
    logo: string;
    role: string;
    date: string;
    description: string;
}

export default function ExperienceComponent({experienceName, logo, role, date, description}: ExperienceComponentProps)
{
    return (
        <div className="ml-6 mr-6 mb-6 mt-6">
            <div className="flex justify-between">
                <div>
                    
                    <div className="font-bold text-2xl">{role} @ {experienceName}</div>
                </div>
                <div className="font-bold text-2xl">{date}</div>
            </div>
        </div>
    );
}