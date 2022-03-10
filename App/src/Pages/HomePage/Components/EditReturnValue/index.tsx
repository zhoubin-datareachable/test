/**
 * @file
 * @date 2022-01-13
 * @author zhoubin
 * @lastModify zhoubin 2022-01-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, GeneralInput, TextAreaV2 } from '@datareachable/dr_front_componentlibrary';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const EditReturnValue = (): JSX.Element => {
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
        <div className={style.editReturnValue_container}>
            <div className={style.editReturnValue_title}>Edit the return value</div>
            <div className={style.editReturnValue_hint}>
                Please type something about the return value
            </div>
            <div className={style.editReturnValue_argumentTypeAndName}>
                <span>Value Type</span>
                <GeneralInput width="55.2rem" height="4rem" />
            </div>
            <div className={style.editReturnValue_instruction}>
                <span>Value Description</span>
                <TextAreaV2 width="55.2rem" height="12.8rem" placeholder="Input here..." />
            </div>
            <div className={style.editReturnValue_btn}>
                <Button height="3.1rem" label="Cancel" size="big" type="primary" width="11.7rem" />
                <Button height="3.2rem" label="Confirm" size="normal" type="primary" width="8rem" />
            </div>
        </div>
    );
};
export default EditReturnValue;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
