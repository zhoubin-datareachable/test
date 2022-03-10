/**
 * @file
 * @date 2022-01-14
 * @author zhoubin
 * @lastModify zhoubin 2022-01-14
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, Icon } from '@datareachable/dr_front_componentlibrary';
import React from 'react';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const NoPermissionBox = (): JSX.Element => {
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
        <div className={style.noPermissionBox_container}>
            <div className={style.noPermissionBox_title}>
                <span className={style.noPermissionBox_icon}>
                    <Icon type="info" fontSize="2.3rem" color="#1890FF" />
                </span>
                <div>
                    The role group your chosen does not have permission to edit but can read only.
                </div>
            </div>
            <div className={style.noPermissionBox_btn}>
                <Button height="2.8rem" label="OK, I got it." size="normal" width="8.7rem" />
            </div>
        </div>
    );
};
export default NoPermissionBox;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
