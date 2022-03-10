/**
 * @file
 * @date 2022-02-10
 * @author zhoubin
 * @lastModify zhoubin 2022-02-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, QuestionIcon, ScrollComponent } from '@datareachable/dr_front_componentlibrary';
import React, { useState } from 'react';
import TabPane from '../TabPane';
import Tabs from '../Tabs';
import EditPaperPreview from './EditPaperPreview';
import EditPaperSetting from './EditPaperSetting';
import style from './style.scss';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface EditPaperProps {
    handleCancel?: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const EditPaper: React.FC<EditPaperProps> = ({ handleCancel }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [isSave, setIsSave] = useState(false);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.editPaper_container}>
            <div className={style.editPaper_title}>Edit Paper</div>
            <ScrollComponent
                className={style.editPaper_scroll}
                defaultScrollTop={0}
                height="42.5rem"
                width="88.6rem"
            >
                <div className={style.editPaper_paperName}>
                    <div>Paper Name</div>
                    <div>Default</div>
                </div>
                <div className={style.editPaper_pluginSetting}>
                    <div className={style.editPaper_pluginSetting_title}>
                        <span>Plugin Setting</span>
                        <QuestionIcon width="8rem" content="content" />
                    </div>
                    <div className={style.editPaper_pluginSetting_content}>
                        <Tabs
                            defaultActiveKey="2"
                            className={style.editPaper_pluginSetting_tabs}
                            // handleChangeTab={setActiveKey}
                        >
                            <TabPane tabId="1" tab="Preview">
                                <EditPaperPreview />
                            </TabPane>
                            <TabPane tabId="2" tab="Setting">
                                <EditPaperSetting handleSetIsSave={(isSave) => setIsSave(isSave)} />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </ScrollComponent>

            <div className={style.editPaper_btn}>
                <Button
                    height="2rem"
                    label="Cancel"
                    size="big"
                    type="primary"
                    width="11.7rem"
                    onClick={handleCancel}
                />
                <Button
                    disabled={isSave}
                    height="3.2rem"
                    label="Save"
                    size="small"
                    type="primary"
                    width="8rem"
                    onClick={handleCancel}
                />
            </div>
        </div>
    );
};
export default EditPaper;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
