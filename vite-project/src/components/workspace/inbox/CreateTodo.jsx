import React, {useState} from 'react';

const CreateTodo = () => {

    const [isActive, setActive] = useState(false)

    const onToggleActive = () => setActive(!isActive)

    return (
        <div className={'flex justify-center p-2'}>
            {isActive? (
                <div className={'flex flex-col w-full rounded-sm '}>
                    <div className={'flex w-full'}>
                        <input type="text" placeholder={'Enter title'} className={'flex w-full bg-red-200 rounded-t-sm p-2'}/>
                    </div>
                    <div className={'flex justify-center items-center gap-10 w-full bg-green-100 rounded-b-sm p-1'}>
                        <div className={'flex justify-center items-center p-1 px-5 bg-cyan-200 cursor-pointer'}>
                            <span>Добавить</span>
                        </div>
                        <div className={'cursor-pointer'} onClick={onToggleActive}>
                            <span>Отменить</span>
                        </div>
                    </div>

                </div>
            ) : (

                <div className={'flex items-center justify-start w-full rounded-sm p-2 bg-red-300 cursor-pointer'} onClick={onToggleActive}>
                    <span className={''}>add todo</span>
                </div>
            )
            }
        </div>
    );
};

export default CreateTodo;
