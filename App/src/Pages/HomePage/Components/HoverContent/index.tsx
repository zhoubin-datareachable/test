/**
 * @file
 * @date 2022-01-13
 * @author zhoubin
 * @lastModify zhoubin 2022-01-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from '@datareachable/dr_front_componentlibrary';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HoverContent = (): JSX.Element => {
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
        <div
            style={{ marginTop: '400px', marginLeft: '300px' }}
            ref={ref}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Icon type="moreHorizontal" />
            {hover &&
                createPortal(
                    <div
                        className={style.hoverContent_argumentTip}
                        style={{ top: ref.current?.offsetTop, left: ref.current?.offsetLeft }}
                    >
                        <div className={style.hoverContent_argumentItem}>
                            <div>Type</div>
                            <div>Number</div>
                        </div>
                        <div className={style.hoverContent_argumentItem}>
                            <div>Name</div>
                            <div>Argument name xxxxxxxx xxxxx</div>
                        </div>
                        <div className={style.hoverContent_argumentItem}>
                            <div>Instruction</div>
                            <div>
                                Something about instruction xxxxxxxxx xxxx xxxxxxxxxxxxxx
                                xxxxxxxxxxxxxxx xxxxxxxxx xxxxxxx xxxxxxxxxxx.
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </div>
    );
};
export default HoverContent;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
