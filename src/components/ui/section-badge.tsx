import React from 'react';

interface Props {
    title: string;
}

const SectionBadge = ({ title }: Props) => {
    return (
        <div className="px-3 py-1.5 rounded-full bg-white/5 flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                <div className="w-2 h-2 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                    <div className="w-2 h-2 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                </div>
            </div>
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-violet-400">
                {title}
            </span>
        </div>
    )
};

export default SectionBadge
