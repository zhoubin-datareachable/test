/**
 * @file
 * @date 2021-07-28
 * @author zhoubin
 * @lastModify zhoubin 2021-07-28
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { ReactNode } from 'react';
import style from './style.scss';
import icon_empty from '~/Assets/images/icon_empty.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface EmptyProps {
    description?: ReactNode;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Empty: React.FC<EmptyProps> = ({ description = 'no data' }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.empty_container}>
            <div className={style.empty_img}>
                <img src={icon_empty} alt="empty_img" />
            </div>
            <div className={style.empty_description}>{description}</div>
        </div>
    );
};
export default Empty;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
