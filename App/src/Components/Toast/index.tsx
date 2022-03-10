/**
 * @file
 * @date 2021-12-13
 * @author zhoubin
 * @lastModify zhoubin 2021-12-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ToastBoxProps {
    node: Element;
    message: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ToastBox: React.FC<ToastBoxProps> = ({ node, message }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/

    useEffect(() => {
        const closeTimer = window.setTimeout(() => {
            ReactDOM.unmountComponentAtNode(node);
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }, 3000);
        return () => {
            window.clearTimeout(closeTimer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <div className={style.toastBox_container}>{message}</div>;
};

const Toast = (message: string): void => {
    const doc = window.document;
    let node = doc.querySelector('.pop_toast_container');
    if (!node) {
        node = doc.createElement('div');
        node.setAttribute('class', style['pop_toast_container']);
        doc.body.appendChild(node);
    }
    const div = doc.createElement('div');
    node.appendChild(div);
    ReactDOM.render(<ToastBox node={div} message={message} />, div);
};
export default Toast;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
