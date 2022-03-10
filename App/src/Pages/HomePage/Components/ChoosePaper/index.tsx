/**
 * @file
 * @date 2022-02-10
 * @author zhoubin
 * @lastModify zhoubin 2022-02-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, DropDownListV2 } from '@datareachable/dr_front_componentlibrary';
import React from 'react';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ChoosePaperProps {
    handleConfirm?: () => void;
    handleCancel?: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ChoosePaper: React.FC<ChoosePaperProps> = ({ handleConfirm, handleCancel }): JSX.Element => {
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
        <div className={style.choosePaper_container}>
            <div className={style.choosePaper_title}>Choose Paper</div>
            <div className={style.choosePaper_description}>
                You can create paper in A/B Testing for more choice.
            </div>
            <div className={style.choosePaper_paperName}>
                <div>Paper Name</div>
                <DropDownListV2
                    className={style.choosePaper_dropDown}
                    floatingStyle={{
                        width: '37.2rem',
                    }}
                    labels={[
                        {
                            content: 'Default',
                            id: 0,
                        },
                    ]}
                    placeholder="1213213"
                    size="extraLarge"
                />
            </div>
            <div className={style.choosePaper_btn}>
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
                    label="Go Ahead"
                    size="small"
                    type="primary"
                    width="9.5rem"
                    onClick={handleConfirm}
                />
            </div>
        </div>
    );
};
export default ChoosePaper;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
