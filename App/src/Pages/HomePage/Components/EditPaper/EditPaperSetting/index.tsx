/**
 * @file
 * @date 2022-02-11
 * @author zhoubin
 * @lastModify zhoubin 2022-02-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Accordion, Icon, ResetInput } from '@datareachable/dr_front_componentlibrary';
import React, { useState } from 'react';
import style from './style.scss';
import labels from '~/DefaultData/settingAccording';
import Empty from '~/Components/Empty';
import spr_plugin from '~/Assets/images/spr_plugin4.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface EditPaperSettingProps {
    handleSetIsSave: (isSave: boolean) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const EditPaperSetting: React.FC<EditPaperSettingProps> = ({ handleSetIsSave }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [isEdit, setIsEdit] = useState(false);

    const [isEmpty, setIsEmpty] = useState(true);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.editPaperSetting_container}>
            <div className={style.editPaperSetting_according}>
                <Accordion
                    indent="2rem"
                    width="25.8rem"
                    className={style.editPaperSetting_setting}
                    labels={labels}
                    handleSelectedChange={(id, subsId, parentsId) => setIsEmpty(!!subsId.length)}
                />
            </div>
            {isEmpty ? (
                <div className={style.editPaperSetting_empty}>
                    <Empty description="Please select one parameter in left-side bar to show setting details for you." />
                </div>
            ) : (
                <div className={style.editPaperSetting_settingItem}>
                    <div className={style.editPaperSetting_settingItem_title}>
                        Parameter Name xxxxxxx 001
                    </div>
                    <div className={style.editPaperSetting_settingItem_description}>
                        Consectetur tempor adipiscing elit, sed do eiusmod tempor. Sed do adipisce
                        elit, consectetur tempor adipiscing elit, sed do eiusmod tempor. Sed do
                        adipisce elit.
                    </div>
                    <div className={style.editPaperSetting_settingItem_number}>
                        <span>Number:</span>
                        <div className={style.editPaperSetting_settingItem_numberInput}>
                            <ResetInput
                                width="45.2rem"
                                height="3.6rem"
                                defaultValue="sfgghrhrhj"
                                onBlur={() => setIsEdit(false)}
                                onFocus={() => setIsEdit(true)}
                                onChange={(value) => handleSetIsSave(!value)}
                            />
                            {!isEdit && (
                                <div className={style.editPaperSetting_settingItem_editIcon}>
                                    <Icon type="pen" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className={style.editPaperSetting_pluginName}>
                <img src={spr_plugin} alt="" />
                <span>Plugin name xxxxxxxxxx A</span>
            </div>
        </div>
    );
};
export default EditPaperSetting;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
