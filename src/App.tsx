import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const ref = useRef(0); // Создание рефа с начальным значением 0
    const [value, setValue] = useState(0);

    const increment = () => {
        ref.current += 1; // Увеличение значения ref.current
        setValue(ref.current); // Обновляем состояние для рендеринга
    };

    return (
        <div>
            <span>{value}</span>
            <span>{ref.current}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default App;
