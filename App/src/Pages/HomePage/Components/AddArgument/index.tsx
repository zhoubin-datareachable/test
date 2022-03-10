/**
 * @file
 * @date 2022-01-13
 * @author zhoubin
 * @lastModify zhoubin 2022-01-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, TextAreaV2 } from '@datareachable/dr_front_componentlibrary';
import React from 'react';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const AddArgument = (): JSX.Element => {
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
        <div className={style.addArgument_container}>
            <div className={style.addArgument_title}>Add argument instruction</div>
            <div className={style.addArgument_hint}>
                Please fill in the related name、type and instruction
            </div>
            <div className={style.addArgument_argumentTypeAndName}>
                <span>Argument Type & Name</span>
                <div className={style.addArgument_argumentTypeInput}>
                    <input type="text" placeholder="Argument type" />
                    <input type="text" placeholder="Argument name" />
                </div>
            </div>
            <div className={style.addArgument_instruction}>
                <span>Argument Instruction</span>
                <TextAreaV2 width="55.2rem" height="12.8rem" placeholder="Input here..." />
            </div>
            <div className={style.addArgument_btn}>
                <Button height="3.1rem" label="Cancel" size="big" type="primary" width="11.7rem" />
                <Button height="3.2rem" label="Confirm" size="normal" type="primary" width="8rem" />
            </div>
        </div>
    );
};
export default AddArgument;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
