/**
 * @file
 * @date 2021-12-25
 * @author zhoubin
 * @lastModify zhoubin 2021-12-25
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon, Kite } from '@datareachable/dr_front_componentlibrary';
import React, { useEffect, useState } from 'react';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export type optionType = {
    value: string;
    label: string;
    children?: Array<optionType>;
};
interface CasecaderProps {
    value: Array<string>;
    separator?: string;
    placeholder?: string;
    options: Array<optionType>;
    handleValueChange?: (value: Array<optionType>) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Cascader: React.FC<CasecaderProps> = ({
    value,
    separator = '-',
    placeholder = '请选择',
    options,
    handleValueChange,
}): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /** visible */
    const [visible, setVisible] = useState(false);
    /** selectItem */
    const [selectItem, setSelectItem] = useState<Array<string>>([]);
    /** select option */
    const [selectOption, setSelectOption] = useState<Array<optionType>>([]);
    /** input value */
    const [inputValue, setInputValue] = useState('');
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    useEffect(() => {
        setSelectItem(value);
    }, [value]);

    useEffect(() => {
        if (!inputValue) {
            getElement();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectOption]);

    useEffect(() => {
        handleSelectOption();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectItem]);
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    const getValue = (option: Array<optionType>) => {
        let value = '';
        for (let i = 0; i < option.length; i++) {
            value += option[i].label;
            if (i < option.length - 1) {
                value += ` ${separator} `;
            }
        }
        setInputValue(value);
        handleValueChange && handleValueChange(option);
    };

    const handleSelectOption = () => {
        if (selectItem.length === 0) {
            return;
        }
        const optionsTemp = [...options];
        const arr = selectItem[0].split('_');
        let option = optionsTemp[Number(arr[1])].children;
        if (!option || option.length === 0) {
            return;
        }
        const optionTemp = [optionsTemp[Number(arr[1])]];
        selectItem.map((_, i) => {
            const arr = selectItem[i].split('_');
            if (i > 0 && option) {
                optionTemp.push([...option][Number(arr[1])]);
                option = [...option][Number(arr[1])].children as Array<optionType>;
            }
            if (!selectOption.length) {
                setSelectOption(optionTemp);
                getValue(optionTemp);
            }
        });
    };
    const getElement = () => {
        if (selectItem.length === 0) {
            return;
        }
        const optionsTemp = [...options];
        const arr = selectItem[0].split('_');
        let option = optionsTemp[Number(arr[1])].children;
        if (!option || option.length === 0) {
            return;
        }

        const optionTemp = [optionsTemp[Number(arr[1])]];
        return selectItem.map((_, i) => {
            const arr = selectItem[i].split('_');
            if (i > 0 && option) {
                optionTemp.push([...option][Number(arr[1])]);
                option = [...option][Number(arr[1])].children as Array<optionType>;
            }
            if (option) {
                return (
                    <div
                        key={i + 1}
                        className={`${style.casCader_menu} ${style.casCader_menu_second}`}
                    >
                        <ul className={style.casCader_menu__list}>
                            {option.map((item, index) => (
                                <li
                                    key={`${i + 1}_${index}`}
                                    className={`${style.casCader_menu__item} ${
                                        selectItem[i + 1] ===
                                        (i + 1).toString() + '_' + index.toString()
                                            ? style.casCader_menu__itemSelect
                                            : ''
                                    }`}
                                    onClick={(e) => {
                                        const selectItemTemp = [...selectItem];
                                        selectItemTemp[i + 1] = `${i + 1}_${index}`;
                                        setSelectItem([...selectItemTemp]);
                                        const selectOptionTemp = [...selectOption];
                                        selectOptionTemp[i + 1] = item;
                                        setSelectOption(selectOptionTemp);
                                        if (!item.children) {
                                            getValue(selectOptionTemp);
                                            setVisible(false);
                                        }
                                    }}
                                >
                                    <span className={style.casCader_menu_label}>{item.label}</span>
                                    {item.children && <Icon type="open" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
        });
    };

    const rootEl = () => {
        return (
            <div
                className={style.caseCader_input}
                onClick={(e) => {
                    setVisible(!visible);
                }}
            >
                <input
                    type="text"
                    className={style.caseCader_input_inner}
                    value={inputValue}
                    readOnly={true}
                    autoComplete="off"
                    placeholder={placeholder}
                ></input>
                <span className={style.caseCader_input_suffix}>
                    <span className={style.caseCader_input_suffix__inner}>
                        <Icon
                            type="dropdown"
                            color="#4d4d4d"
                            style={{ transform: `rotate(${visible ? 180 : 0}deg)` }}
                        />
                    </span>
                </span>
            </div>
        );
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.caseCader_container}>
            <Kite
                root={rootEl()}
                show={visible}
                placement="lb"
                handleGlobalClick={(res) => {
                    if (!res.isBtn && !res.isMenu) {
                        setVisible(false);
                    }
                }}
            >
                <div className={style.caseCader_panel}>
                    <div className={style.casCader_menu}>
                        <ul className={style.casCader_menu__list}>
                            {options.map((item, index) => (
                                <li
                                    key={`0_${index}`}
                                    className={`${style.casCader_menu__item} ${
                                        selectItem[0] === '0_' + index.toString()
                                            ? style.casCader_menu__itemSelect
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setSelectItem([`0_${index}`]);
                                        const selectOptionTemp = [...selectOption];
                                        selectOptionTemp[0] = item;
                                        setSelectOption(selectOptionTemp);
                                    }}
                                >
                                    <span>{item.label}</span>
                                    {item.children && item.children.length > 0 && (
                                        <Icon type="open" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {getElement()}
                </div>
            </Kite>
        </div>
    );
};
export default Cascader;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
