/**
 * @file
 * @date 2022-02-07
 * @author zhoubin
 * @lastModify zhoubin 2022-02-07
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ToolTipProps {
    children: ReactNode;
    tipContent: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ToolTip: React.FC<ToolTipProps> = ({ tipContent, children }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [hover, setHover] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            <div
                ref={ref}
                onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}
            >
                {children}
            </div>
            {hover &&
                createPortal(
                    <div
                        className={style.hoverContent_argumentTip}
                        style={{ top: ref.current?.offsetTop, left: ref.current?.offsetLeft }}
                    >
                        {console.log('ref', ref.current)}
                        {tipContent}
                    </div>,
                    document.body,
                )}
        </>
    );
};
export default ToolTip;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
