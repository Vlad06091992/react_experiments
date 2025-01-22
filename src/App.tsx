import React, {forwardRef, useEffect, useRef} from 'react';

//forwardRef позволяет вашему компоненту передать узел DOM родительскому компоненту с помощью ref
/*
Пример когда прокидываем ref через пропсы, не используя зарезервированный атрибут ref в Input

 */

// const Input = forwardRef((props:any, ref:any) => {
//     return <input onChange={props.onChange} ref={ref} {...props} />;
// });

const Input = ({refs,onChange,...rest}:any) => {
    return <input onChange={onChange} ref={refs} {...rest} />;
}


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
            <Input onChange={onChange} refs={inputRef} />)

        </div>
    )

};

export default App;
