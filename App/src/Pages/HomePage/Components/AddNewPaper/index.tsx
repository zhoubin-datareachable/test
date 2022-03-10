/**
 * @file
 * @date 2022-02-11
 * @author zhoubin
 * @lastModify zhoubin 2022-02-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, DropDownListV2, GeneralInput } from '@datareachable/dr_front_componentlibrary';
import React, { useState } from 'react';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface AddNewPaperProps {
    handleCancel?: () => void;
    handleAddNewPaper?: (paperName: string) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const AddNewPaper: React.FC<AddNewPaperProps> = ({
    handleAddNewPaper,
    handleCancel,
}): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [paperName, setPaperName] = useState('initialState');
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.addNewPaper_container}>
            <div className={style.addNewPaper_title}>Add New Paper</div>
            <div className={style.addNewPaper_paperName}>
                <div>Paper Name</div>
                <GeneralInput width="37.2rem" handleInputOnChange={setPaperName} />
            </div>
            <div className={style.addNewPaper_btn}>
                <Button
                    height="3.2rem"
                    label="Cancel"
                    size="big"
                    type="primary"
                    width="9.5rem"
                    onClick={handleCancel}
                />
                <Button
                    height="3.2rem"
                    label="Confirm"
                    size="small"
                    type="primary"
                    width="9.5rem"
                    onClick={() => {
                        if (paperName.trim() && handleAddNewPaper) {
                            handleAddNewPaper(paperName.trim());
                            handleCancel && handleCancel();
                        } else {
                            handleCancel && handleCancel();
                        }
                    }}
                />
            </div>
        </div>
    );
};
export default AddNewPaper;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
