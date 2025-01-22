import React, {useState, useEffect, useRef} from 'react';


//менятеся ref.current, но компонента не ререндерится

const App = () => {
    let {current} = useRef(null) as any
    const [value, setValue] = useState(0)
debugger
    useEffect(() => {
        setValue(value + 1)
    }, [current])

    return (
        <div>
            <span>{value}</span>
            <button onClick={()=>{
                debugger
                current = current +1
            }}>+</button>
        </div>
    )

};

export default App;
