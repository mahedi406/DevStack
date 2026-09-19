import React from 'react';
import type { IContent } from '../../Type/Content';
import ContentCard from './ContentCard';

interface OptionsContentProps {
    Contents: IContent[];
    onAdd: (content: IContent) => void;
    stack: IContent[]; 
}

const OptionsContent = ({
    Contents,
    onAdd,
    stack 
}: OptionsContentProps) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5">

            {Contents.map((content) => {

                const isAdded = stack.some(
                    (item) => item.id === content.id
                ); 

                return (
                    <ContentCard
                        key={content.id}
                        content={content}
                        onAdd={onAdd}
                        isAdded={isAdded}
                    />
                );

            })}

        </div>
    );
};

export default OptionsContent;