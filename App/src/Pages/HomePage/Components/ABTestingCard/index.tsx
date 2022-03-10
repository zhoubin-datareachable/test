/**
 * @file
 * @date 2022-02-11
 * @author zhoubin
 * @lastModify zhoubin 2022-02-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Alert, Icon, Popover } from '@datareachable/dr_front_componentlibrary';
import { useState } from 'react';
import AddNewPaper from '../AddNewPaper';
import EditPaper from '../EditPaper';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ABTestingCard = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [showAddNewPage, setShowAddNewPage] = useState(false);
    const [showEditPaper, setShowEditPaper] = useState(false);
    const [paperList, setPaperList] = useState([
        {
            paperName: 'Default',
            appliedPlugin: 'Plugin Name xxxxxxxxx A',
            isDefault: true,
            isUpdate: true,
        },
        {
            paperName: 'Paper A',
            appliedPlugin: 'N/A',
            isDefault: false,
            isUpdate: false,
        },
    ]);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.aBTestingCard_container}>
            <div className={style.aBTestingCard_title}>
                <span>A/B Testing</span>
                <div
                    className={style.aBTestingCard_addPaper}
                    onClick={() => setShowAddNewPage(true)}
                >
                    <Icon type="addition01" />
                    <span>Add new paper</span>
                </div>
            </div>
            <div className={style.aBTestingCard_paperList}>
                {paperList.map((item, index) => (
                    <div key={index} className={style.aBTestingCard_paperItem}>
                        <div className={style.aBTestingCard_paperName}>
                            <span>Paper Name</span>
                            <div>
                                <span>{item.paperName}</span>
                                {item.isDefault ? (
                                    <Icon type="edit" onClick={() => setShowEditPaper(true)} />
                                ) : (
                                    <div tabIndex={-1}>
                                        <Icon
                                            type="moreVertical"
                                            style={{ transform: 'rotate(90deg)' }}
                                        />
                                        <div className={style.aBTestingCard_more}>
                                            <div onClick={() => setShowEditPaper(true)}>
                                                <Icon type="edit" />
                                                <span>Edit</span>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    paperList.splice(index, 1);
                                                    setPaperList([...paperList]);
                                                }}
                                            >
                                                <Icon type="dustbin" />
                                                <span>Delete</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={style.aBTestingCard_paperApplied}>
                            <span>Applied Plugin</span>

                            <div>
                                <span>{item.appliedPlugin}</span>
                                {item.isUpdate && (
                                    <Popover
                                        className={style.aBTestingCard_update}
                                        direction="horizontal"
                                        placement="rc"
                                        root={<div className={style.aBTestingCard_badge}></div>}
                                    >
                                        <Icon type="information" />
                                        <span>This plugin got new version</span>
                                    </Popover>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Alert status={showAddNewPage} custom={true} width="auto" height="auto">
                <AddNewPaper
                    key={Number(showAddNewPage)}
                    handleAddNewPaper={(paperName) => {
                        paperList.push({
                            paperName: paperName,
                            appliedPlugin: 'N/A',
                            isDefault: false,
                            isUpdate: false,
                        });
                        setPaperList([...paperList]);
                    }}
                    handleCancel={() => setShowAddNewPage(false)}
                />
            </Alert>
            <Alert status={showEditPaper} custom={true} width="auto" height="auto">
                {/* {showEditPaper && <EditPaper handleCancel={() => setShowEditPaper(false)} />} */}
                {/* <EditPaper handleCancel={() => setShowEditPaper(false)} /> */}
            </Alert>
        </div>
    );
};
export default ABTestingCard;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
