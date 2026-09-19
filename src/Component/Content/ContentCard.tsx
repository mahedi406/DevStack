import React from 'react';
import type { IContent } from '../../Type/Content';
import { FaStar } from "react-icons/fa";

interface ContentCardProps {
    content: IContent;
    onAdd: (content: IContent) => void;
    isAdded: boolean;
}

const ContentCard = ({
    content,
    onAdd,
    isAdded 
}: ContentCardProps) => {

    return (
        <div
            className={`border rounded-xl p-5 transition-all duration-300
                ${isAdded?'border-green-500 bg-green-50 shadow-lg':'border-slate-200 hover:shadow-md'}
            `}>
            <div className="flex justify-between items-center mb-4">

                <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
                    {content.badge}
                </span>

                {isAdded && (
                    <span className="text-xs text-green-600 font-semibold">
                         Added
                    </span>
                )}

            </div>

            <div className="flex items-center gap-3 mb-3">

                <img
                    src={content.icon}
                    alt={content.name}
                    className="w-12 h-12"
                />

                <div>
                    <h3 className="font-bold text-lg">
                        {content.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                        {content.category}
                    </p>
                </div>

            </div>

            <p className="text-sm text-slate-600 mb-4">
                {content.description}
            </p>

            <div className="flex justify-between text-sm mb-4">

                <span className="text-slate-500">
                    {content.difficulty}
                </span>
                
                <div className='flex items-center gap-1'>
                    <FaStar />
                <span>
                     {content.rating}
                </span>
                </div>

            </div>

            <button
                onClick={() => onAdd(content)}
                disabled={isAdded} 
                className={`
                    w-full py-2 rounded-lg font-medium transition
                    ${isAdded?'bg-green-100 text-green-600 cursor-not-allowed':'bg-slate-900 text-white hover:bg-slate-700'}
                `} 
            >
                {isAdded ? 'Already Added' : 'Add to Stack'} 
            </button>

        </div>
    );
};

export default ContentCard;