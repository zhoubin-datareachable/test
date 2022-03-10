/**
 * @file
 * @date 2021-10-29
 * @author zhoubin
 * @lastModify zhoubin 2021-10-29
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from '@datareachable/dr_front_componentlibrary';

import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ViewButtonProps {
    viewType: boolean;
    handleChangeView: (status: boolean) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ViewButton: React.FC<ViewButtonProps> = ({ viewType, handleChangeView }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /** grid class */
    const gridClass = !viewType ? style.viewButton_item__select : style.viewButton_item__unselect;
    /** list class */
    const listClass = viewType ? style.viewButton_item__select : style.viewButton_item__unselect;
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.viewButton_container}>
            <div onClick={() => handleChangeView(false)} className={gridClass}>
                <Icon type="grid" />
            </div>
            <div onClick={() => handleChangeView(true)} className={listClass}>
                <Icon type="list" />
            </div>
        </div>
    );
};
export default ViewButton;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
