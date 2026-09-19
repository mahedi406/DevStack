import { use, useState } from 'react';
import type { IContent } from '../../Type/Content';
import OptionsContent from './OptionsContent';
import { toast } from 'react-toastify'; 

interface ContentProps {
    ContentPromise: Promise<IContent[]>;
}

const Content =({ ContentPromise }: ContentProps) => {

    const elements =use(ContentPromise);

    const [stack, setStack] =useState<IContent[]>([]);

    const addIteam = (content : IContent) => {
        const alreadyExits =stack.some((iteam)=>iteam.id === content.id);

        if(alreadyExits){
            return;
        }else{
            setStack([...stack,content])
        }

        toast.success(`${content.name} added to your stack!`);
    }

    const removeIteam = (id : string) => {

        const item = stack.find(
        (item) => item.id === id
    )

        setStack(stack.filter((item) => item.id !== id))

        toast.info(`${item?.name} removed from your stack`); 
    }

    const removeAll = () =>{
        setStack([]);
        toast.info('All technologies removed from your stack');
    }

    return (
        <div className="container mx-auto p-4">

            <div className="mb-6">

                <h2 className="text-3xl font-bold mb-2">
                    Explore the {" "}
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>

                <p className="text-slate-600 text-lg">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">

                <OptionsContent 
                    Contents={elements} 
                    onAdd={addIteam}
                    stack={stack}
                />

                <div className="border border-slate-200 rounded-xl p-4 h-fit">

                    <h3 className="font-semibold text-lg">
                        Your Stack
                    </h3>

                    <p className="text-xs text-slate-400 mb-4">
                        {stack.length} Technology Selected
                    </p>

                    <div className="space-y-2">

                        {
                            stack.length === 0 ? (
                                <p className="text-sm text-slate-400 text-center py-4">
                                    Your Stack is empty
                                </p>

                            ) : (

                                stack.map((item) => (

                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border rounded-lg p-2"
                                    >

                                        <div className="flex items-center gap-2">

                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-7 h-7"
                                            />

                                            <div>

                                                <p className="text-sm font-medium">
                                                    {item.name}
                                                </p>

                                                <p className="text-[10px] text-slate-400">
                                                    {item.category}
                                                </p>

                                            </div>

                                        </div>


                                        <button
                                            onClick={() => removeIteam(item.id)}
                                            className="text-slate-400"
                                        >
                                            ×
                                        </button>

                                    </div>

                                ))

                            )
                        }

                    </div>


                    <button
                        onClick={removeAll}
                        className="w-full mt-4 border border-red-200 text-red-500 rounded-md py-2 text-sm"
                    >
                        Remove All
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Content;