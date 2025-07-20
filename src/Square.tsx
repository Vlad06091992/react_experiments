import {useEffect, useLayoutEffect, useRef, useState} from "react";

export const Square = () => {
    const [width, setWidth] = useState(0);
    // @ts-ignore
    const ref = useRef<any>();

    // useLayoutEffect(() => {
    useEffect(() => {
        let start = new Date().getTime();
        let end = start;
        while (end < start + 3000) {
            end = new Date().getTime();
        }
        // @ts-ignore
        let clientWidth = ref.current.clientWidth;
        // debugger
        setWidth(clientWidth);
    }, []);

    return (
        <div className="app">
            <div className="block" ref={ref} />
            <span className="result">
        width: <b>{width}</b>
      </span>
        </div>
    )
}
