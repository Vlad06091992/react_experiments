import {useRef, useLayoutEffect, useState, useEffect} from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer';

export default function Tooltip({ children, targetRect }:any) {
    const ref = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);

    useLayoutEffect(() => {
        // debugger
        // @ts-ignore
        const { height } = ref.current.getBoundingClientRect();
        setTooltipHeight(height);
    }, []);

    useEffect(() => {
       // debugger
        // @ts-ignore
        const { height } = ref.current.getBoundingClientRect();
        setTooltipHeight(height);
    }, []);

    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
        tooltipX = targetRect.left;
        tooltipY = targetRect.top - tooltipHeight;
        if (tooltipY < 0) {
            // Она не помещается сверху, поэтому размещаем снизу.
            tooltipY = targetRect.bottom;
        }
    }

    return createPortal(
        <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </TooltipContainer>,
        document.body
    );
}
