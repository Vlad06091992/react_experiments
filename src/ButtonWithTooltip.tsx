import { useState, useRef } from 'react';
import Tooltip from './Tooltip';

export default function ButtonWithTooltip({ tooltipContent, ...rest }:any) {
    const [targetRect, setTargetRect] = useState<any>(null);
    const buttonRef = useRef(null);
    return (
        <>
            <button
                {...rest}
                ref={buttonRef}
                onPointerEnter={() => {
                    //@ts-ignore
                    const rect = buttonRef.current.getBoundingClientRect() as any;
                    // @ts-ignore
                    setTargetRect({
                        left: rect.left,
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom,
                    });
                }}
                onPointerLeave={() => {
                    setTargetRect(null);
                }}
            />
            {targetRect !== null && (
                <Tooltip targetRect={targetRect}>
                    {tooltipContent}
                </Tooltip>
            )
            }
        </>
    );
}
