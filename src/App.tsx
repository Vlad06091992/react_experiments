import React, {forwardRef, useEffect, useRef} from 'react';

//forwardRef позволяет вашему компоненту передать узел DOM родительскому компоненту с помощью ref
/*
мы хотим получать управление ребенком, ребенку прокидываем ref, корневому элементу в разметке ребенка
этот реф присваиваем

а родитель с этим рефом может что-либо делать

 */

const Input = forwardRef((props:any, ref:any) => {
    return <input onChange={props.onChange} ref={ref} {...props} />;
});


const App = () => {
    const inputRef = useRef(null) as any;
    const spanRef = useRef(null) as any;

    const onChange = (e:any) => {
        debugger
        spanRef.current.innerHTML = e.target.value
    }

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = '33333'
        spanRef.current.innerHTML = '33333'
    }, []);

    debugger

    return (
        <div>
            <div ref={spanRef}></div>
            <Input onChange={onChange} ref={inputRef} />)

        </div>
    )

};

export default App;
