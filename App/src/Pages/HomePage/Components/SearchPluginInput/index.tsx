/**
 * @file
 * @date 2022-02-11
 * @author zhoubin
 * @lastModify zhoubin 2022-02-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from '@datareachable/dr_front_componentlibrary';
import React, { useState } from 'react';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const SearchPluginInput = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [selectId, setSelectId] = useState('Name');
    const [showDropDown, setShowDropDown] = useState(false);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const dropList = ['Name', 'keywords'];
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const getClassNames = (classNames: { [key: string]: boolean }) => {
        const cls: Array<string> = [];
        Object.keys(classNames).map((item) => {
            if (classNames[item]) {
                cls.push(item);
            }
        });
        return cls.join(' ');
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.searchPluginInput_container}>
            <div
                className={style.searchPluginInput_drop}
                tabIndex={-1}
                onBlur={() => setShowDropDown(false)}
            >
                <div onClick={() => setShowDropDown(!showDropDown)}>
                    <span>{selectId}</span>
                    <span>
                        <Icon
                            type="dropdown"
                            style={{ transform: `rotate(${showDropDown ? 180 : 0}deg)` }}
                        />
                    </span>
                </div>
                {showDropDown && (
                    <div className={style.searchPluginInput_dropList}>
                        {dropList.map((item, index) => (
                            <div
                                key={index}
                                className={getClassNames({
                                    [style.searchPluginInput_dropItem__select]: selectId === item,
                                })}
                                onClick={() => {
                                    setSelectId(item);
                                    setShowDropDown(false);
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <input className={style.searchPluginInput_input} type="text" placeholder="Search..." />
            <div className={style.searchPluginInput_searchButton}>
                <Icon type="search" />
            </div>
        </div>
    );
};
export default SearchPluginInput;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
