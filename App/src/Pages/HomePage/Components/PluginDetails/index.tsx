/**
 * @file
 * @date 2022-02-10
 * @author zhoubin
 * @lastModify zhoubin 2022-02-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, QuestionIcon, ScrollComponent } from '@datareachable/dr_front_componentlibrary';
import style from './style.scss';
import avatar from '~/Assets/images/icon_avatar.png';
import React from 'react';
import spr_pluginPreview from '~/Assets/images/spr_pluginPreview.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface PluginDetailsProps {
    isPrice?: boolean;
    handleConfirm?: () => void;
    handleCancel?: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginDetails: React.FC<PluginDetailsProps> = ({
    isPrice = false,
    handleConfirm,
    handleCancel,
}): JSX.Element => {
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
        <div className={style.pluginDetails_container}>
            <div className={style.pluginDetails_title}>Plugin Details</div>
            <ScrollComponent
                className={style.pluginDetails_scroll}
                defaultScrollTop={0}
                height="41.2rem"
                width="86.2rem"
            >
                <div className={style.pluginDetails_preview}>
                    <div className={style.pluginDetails_title}>
                        <img src={spr_pluginPreview} alt="" />
                    </div>
                </div>
                <div className={style.pluginDetails_pluginInfo}>
                    <div className={style.pluginDetails_pluginInfo_leftContainer}>
                        <div className={style.pluginDetails_pluginInfo_item}>
                            <div className={style.pluginDetails_pluginInfo_itemTitle}>
                                Plugin Name
                            </div>
                            <div className={style.pluginDetails_pluginInfo_itemInfo}>
                                Plugin Name xxxxxxxxx xxxxxxxx A
                            </div>
                        </div>
                        <div className={style.pluginDetails_pluginInfo_item}>
                            <div className={style.pluginDetails_pluginInfo_itemTitle}>
                                Version No.
                            </div>
                            <div className={style.pluginDetails_pluginInfo_itemInfo}>V 0.0.3</div>
                        </div>
                        <div className={style.pluginDetails_pluginInfo_item}>
                            <div className={style.pluginDetails_pluginInfo_itemTitle}>
                                Description
                            </div>
                            <div className={style.pluginDetails_pluginInfo_itemInfo}>
                                Amet, consectetur adipiscing elit, sed do eiusmod tempor. Sed do
                                eiusmod, Amet, consectetur adipisce elit, sed do eiusmod tempor.{' '}
                            </div>
                        </div>
                        {isPrice && (
                            <div className={style.pluginDetails_pluginInfo_price}>
                                <div className={style.pluginDetails_pluginInfo_priceInfo}>
                                    <span>$</span>
                                    <span>160</span>
                                </div>
                                <QuestionIcon width="10rem" content="content" />
                            </div>
                        )}
                    </div>
                    <div className={style.pluginDetails_pluginInfo_rightContainer}>
                        <div className={style.pluginDetails_pluginInfo_creator}>
                            <div>Creator</div>
                            <div className={style.pluginDetails_pluginInfo_creatorInfo}>
                                <img src={avatar} alt="avatar" />
                                <span>Cameron Williamson</span>
                            </div>
                        </div>
                        <div className={style.pluginDetails_pluginInfo_keywords}>
                            <div>Keywords</div>
                            <div className={style.pluginDetails_pluginInfo_keywordsLabels}>
                                <span>Official</span>
                                <span>Customer Satisfaction</span>
                                <span>Events</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollComponent>
            <div className={style.pluginDetails_btn}>
                <Button
                    height="2rem"
                    label="Cancel"
                    size="big"
                    type="primary"
                    width="11.7rem"
                    onClick={handleCancel}
                />
                <Button
                    height="3.2rem"
                    label="Confirm"
                    size="small"
                    type="primary"
                    width="8rem"
                    onClick={handleConfirm}
                />
            </div>
        </div>
    );
};
export default PluginDetails;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
