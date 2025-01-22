import React, {forwardRef, useEffect, useRef} from 'react';

//forwardRef позволяет вашему компоненту передать узел DOM родительскому компоненту с помощью ref
/*
мы хотим получать управление ребенком, ребенку прокидываем ref, корневому элементу в разметке ребенка
этот реф присваиваем

а родитель с этим рефом может что-либо делать

 */

const Input = forwardRef((props, ref:any) => {
    return <input ref={ref} {...props} />;
});


const App = () => {
    const inputRef = useRef(null) as any;

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = '33333'
    }, []);

    return <Input ref={inputRef} />;
};

export default App;
