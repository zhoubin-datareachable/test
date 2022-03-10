/**
 * @file tool bar main file
 * @date 2020-10-22
 * @author Frank
 * @lastModify Frank 2020-10-22
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { SyntheticEvent, useState } from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faCopy, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import {
    styleBarSet,
    settingBarSet,
    fontColorSet,
    filledColorSet,
    handleChangeIntoComment,
} from '../../DefaultData/TextEditor/textEditor';
import { toolBarFunction } from '../../util/toolBarFunction';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface ToolBarProps {
    /**
     * default styleBarSet
     */
    defaultStyleBarSet?: typeof styleBarSet;
    /**
     * default settingBarSet
     */
    defaultSettingBarSet?: typeof settingBarSet;
    /**
     * default fontColorSet
     */
    defaultFontColorSet?: typeof fontColorSet;
    /**
     * default filledColorSet
     */
    defaultFilledColorSet?: typeof filledColorSet;
    /**
     * default scriptLabelSet
     */
    defaultScriptLabelSet?: Array<string>;

    /**
     * on copy
     */
    onCopy?: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const ToolBar = ({ ...props }: ToolBarProps): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [showFontColorSelect, setShowFontColorSelect] = useState(false);
    const [showFilledColorSelect, setShowFilledColorSelect] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    if (props.defaultStyleBarSet === undefined) {
        props.defaultStyleBarSet = styleBarSet;
    }
    if (props.defaultSettingBarSet === undefined) {
        props.defaultSettingBarSet = settingBarSet;
    }
    if (props.defaultFontColorSet === undefined) {
        props.defaultFontColorSet = fontColorSet;
    }
    if (props.defaultFilledColorSet === undefined) {
        props.defaultFilledColorSet = filledColorSet;
    }
    if (props.defaultScriptLabelSet === undefined) {
        props.defaultScriptLabelSet = ['Turn Into', 'Script', 'Link'];
    }
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * this funtion will stop propagation
     */
    const handleStopPropagationAndDefault = (e: SyntheticEvent) => {
        e.nativeEvent.stopImmediatePropagation();
    };
    /**
     * this function will show the font color item list when click color select
     */
    const handleFontColorDisplay = () => {
        setShowFontColorSelect(true);
    };
    /**
     * this function will hidden the font color item list when blur
     */
    const handleFontColorBlur = () => {
        setShowFontColorSelect(false);
    };
    /**
     * this function will show the font color item list when click color select
     */
    const handleFilledColorDisplay = () => {
        setShowFilledColorSelect(true);
    };
    /**
     * this function will hidden the font color item list when blur
     */
    const handleFilledColorBlur = () => {
        setShowFilledColorSelect(false);
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div
            onMouseDown={(e) => {
                handleStopPropagationAndDefault(e);
            }}
        >
            <div className={style.toolBar_wrapper}>
                {/* <------------------------------------ **** this section is the commonet section START **** ------------------------------------ */}
                <div className={style.toolBar_commentWrapper} onClick={handleChangeIntoComment}>
                    <FontAwesomeIcon icon={faCommentDots} className={style.toolBar_commentIcon} />
                    <span className={style.toolBar_commentContent}>comment</span>
                </div>
                {/* <------------------------------------ **** this section is the commonet section END **** ------------------------------------ */}

                {/* <------------------------------------ **** this section is the style bar section START **** ------------------------------------ */}
                <div className={style.toolBar_styleBar}>
                    {props.defaultStyleBarSet.map((item, index) => {
                        if (item.subMenu) {
                            return (
                                <div
                                    className={style.toolBar_styleBarItemWrapper}
                                    key={`${index}itemSubmenu`}
                                >
                                    <div className={style.toolBar_styleBarItem}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <div className={style.toolBar_styleBarHintWrapper}>
                                            <div className={style.toolBar_styleBarHintBlock}>
                                                {item.title}
                                            </div>
                                            <div className={style.toolBar_styleBarPoint} />
                                        </div>
                                        <div className={style.toolBar_styleBarSubMenuWrapper}>
                                            {item.subMenuSet.map((item, index) => {
                                                return (
                                                    <div
                                                        className={
                                                            style.toolBar_styleBarSubMenuItemWrapper
                                                        }
                                                        onClick={item.func}
                                                        key={`${index}item`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={item.icon}
                                                            className={
                                                                style.toolBar_styleBarSubMenuItemIcon
                                                            }
                                                        />
                                                        <div
                                                            className={
                                                                style.toolBar_styleBarSubMenuItemContent
                                                            }
                                                        >
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className={style.toolBar_styleBarItemWrapper}
                                    key={index}
                                    onClick={item.func}
                                >
                                    <div className={style.toolBar_styleBarItem}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <div className={style.toolBar_styleBarHintWrapper}>
                                            <div className={style.toolBar_styleBarHintBlock}>
                                                {item.title}
                                            </div>
                                            <div className={style.toolBar_styleBarPoint} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                {/* <------------------------------------ **** this section is the style bar section END **** ------------------------------------ */}
                {/* <------------------------------------ **** this section is the color bar section START **** ------------------------------------ */}
                <div className={style.toolBar_colorBar}>
                    {/* <------------------------------------ **** font color section START **** ------------------------------------ */}
                    <div className={style.toolBar_styleBarItemWrapper}>
                        <div className={style.toolBar_styleBarItem}>
                            <FontAwesomeIcon icon={props.defaultFontColorSet.icon} />
                            <div className={style.toolBar_styleBarHintWrapper}>
                                <div className={style.toolBar_styleBarHintBlock}>
                                    {props.defaultFontColorSet.title}
                                </div>
                                <div className={style.toolBar_styleBarPoint} />
                            </div>
                            <div
                                className={style.toolBar_styleBarSubMenuWrapper}
                                style={{
                                    opacity: showFontColorSelect ? '1' : '',
                                    visibility: showFontColorSelect ? 'visible' : undefined,
                                }}
                            >
                                {props.defaultFontColorSet.subMenuSet.map((item, index) => {
                                    if (!item.customered) {
                                        return (
                                            <div
                                                className={style.toolBar_styleBarSubMenuItemWrapper}
                                                onClick={item.func}
                                                key={`${index}itemToolbar`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={item.icon}
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemIcon
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                />
                                                <div
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemContent
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                >
                                                    {item.title}
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className={style.toolBar_styleBarSubMenuItemWrapper}
                                                key={`${index}itemToolbar`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={item.icon}
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemIcon
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                />
                                                <div
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemContent
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                >
                                                    {item.title}
                                                </div>
                                                <div
                                                    className={
                                                        style.toolBar_hiddenColorSelectWrapper
                                                    }
                                                >
                                                    <input
                                                        type="color"
                                                        className={style.toolBar_hiddenColorSelect}
                                                        onClick={handleFontColorDisplay}
                                                        onBlur={handleFontColorBlur}
                                                        onChange={(e) => {
                                                            toolBarFunction.fortColor(
                                                                e,
                                                                e.target.value,
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    {/* <------------------------------------ **** font color section END **** ------------------------------------ */}
                    {/* <------------------------------------ **** filled color section START **** ------------------------------------ */}
                    <div className={style.toolBar_styleBarItemWrapper}>
                        <div className={style.toolBar_styleBarItem}>
                            <FontAwesomeIcon icon={props.defaultFilledColorSet.icon} />
                            <div className={style.toolBar_styleBarHintWrapper}>
                                <div className={style.toolBar_styleBarHintBlock}>
                                    {props.defaultFilledColorSet.title}
                                </div>
                                <div className={style.toolBar_styleBarPoint} />
                            </div>
                            <div
                                className={style.toolBar_styleBarSubMenuWrapper}
                                style={{
                                    opacity: showFilledColorSelect ? '1' : '',
                                    visibility: showFilledColorSelect ? 'visible' : undefined,
                                }}
                            >
                                {props.defaultFilledColorSet.subMenuSet.map((item, index) => {
                                    if (!item.customered) {
                                        return (
                                            <div
                                                className={style.toolBar_styleBarSubMenuItemWrapper}
                                                onClick={item.func}
                                                key={`${index}itemToolbar`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={item.icon}
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemIcon
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                />
                                                <div
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemContent
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                >
                                                    {item.title}
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className={style.toolBar_styleBarSubMenuItemWrapper}
                                                key={`${index}itemToolbar`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={item.icon}
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemIcon
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                />
                                                <div
                                                    className={
                                                        style.toolBar_styleBarSubMenuItemContent
                                                    }
                                                    style={{ color: `${item.color}` }}
                                                >
                                                    {item.title}
                                                </div>
                                                <div
                                                    className={
                                                        style.toolBar_hiddenColorSelectWrapper
                                                    }
                                                >
                                                    <input
                                                        type="color"
                                                        className={style.toolBar_hiddenColorSelect}
                                                        onClick={handleFilledColorDisplay}
                                                        onBlur={handleFilledColorBlur}
                                                        onChange={(e) => {
                                                            toolBarFunction.filledColor(
                                                                e,
                                                                e.target.value,
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    {/* <------------------------------------ **** filled color section END **** ------------------------------------ */}
                    <div className={style.toolBar_styleBarItemWrapper}>
                        <div className={style.toolBar_styleBarItem}>
                            <div
                                className={style.toolBar_styleBarSuccessHintWrapper}
                                style={{ display: showSuccess ? 'flex' : 'none' }}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faExclamationCircle} />
                                </span>
                                Copy Success!
                            </div>
                            <FontAwesomeIcon
                                icon={faCopy}
                                onClick={() => {
                                    if (props.onCopy) {
                                        props.onCopy();
                                        setShowSuccess(true);
                                        setTimeout(() => {
                                            setShowSuccess(false);
                                        }, 1000);
                                    }
                                }}
                            />
                            <div className={style.toolBar_styleBarHintWrapper}>
                                <div className={style.toolBar_styleBarHintBlock}>{'Copy'}</div>
                                <div className={style.toolBar_styleBarPoint} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <------------------------------------ **** this section is the color bar section END **** ------------------------------------ */}
                {/* <------------------------------------ **** this section si the remove style section START **** ------------------------------------ */}
                <div className={style.toolBar_removeStyleWrapper}>
                    {props.defaultSettingBarSet.map((item, index) => {
                        return (
                            <div
                                className={style.toolBar_styleBarItemWrapper}
                                key={index}
                                onClick={item.func}
                            >
                                <div className={style.toolBar_styleBarItem}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <div className={style.toolBar_styleBarHintWrapper}>
                                        <div className={style.toolBar_styleBarHintBlock}>
                                            {item.title}
                                        </div>
                                        <div className={style.toolBar_styleBarPoint} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <------------------------------------ **** this section si the remove style section END **** ------------------------------------ */}
                {/* <------------------------------------ **** this section is the turn into section START **** ------------------------------------ */}
                <div className={style.toolBar_turnIntoWrapper}>
                    <span>{props.defaultScriptLabelSet[0]}</span>
                    <div className={style.toolBar_turnIntoIconWrapper}>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className={style.toolBar_turnIntoList}>
                        <span>{props.defaultScriptLabelSet[1]}</span>
                        <div className={style.toolBar_divideLine} />
                        <span>{props.defaultScriptLabelSet[2]}</span>
                    </div>
                </div>
                {/* <------------------------------------ **** this section is the turn into section END **** ------------------------------------ */}
            </div>
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
