/**
 * @file
 * @date 2022-02-09
 * @author zhoubin
 * @lastModify zhoubin 2022-02-09
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { TabPaneProps } from '../TabPane';
import { TabsContext } from './Unit/context';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TabsProps {
    defaultActiveKey: string;
    className?: string;
    children?: ReactElement<TabPaneProps> | Array<ReactElement<TabPaneProps>>;
    handleChangeTab?: (activeKey: string) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Tabs: React.VFC<TabsProps> = ({ defaultActiveKey, handleChangeTab, className, children }) => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    useEffect(() => {
        children && parseTabList(children);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const parseTabList = (children: React.ReactNode) => {
        const ret: ReactElement[] = [];
        React.Children.forEach(children, (child: any) => {
            if (child === undefined || child === null) {
                return;
            }
            ret.push(child);
        });
        return ret;
    };

    const tabs = parseTabList(children);
    const newInkStyle: React.CSSProperties = {};

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
        <TabsContext.Provider value={{ value: activeKey }}>
            <div className={className}>
                <div className={style.tabs_navBar}>
                    {tabs.map((item) => (
                        <div
                            key={item.props.tabId}
                            className={getClassNames({
                                [style.tabs_tab]: true,
                                [style.tabs_tab__active]: item.props.tabId === activeKey,
                            })}
                            onClick={() => {
                                const activeKey = item.props.tabId as string;
                                setActiveKey(activeKey);
                                handleChangeTab && handleChangeTab(activeKey);
                            }}
                            ref={(e) => {
                                console.log('tab');

                                if (item.props.tabId === activeKey) {
                                    newInkStyle.width = e?.clientWidth;
                                    newInkStyle.left = e?.offsetLeft;
                                }
                            }}
                        >
                            {item.props.tab}
                        </div>
                    ))}
                    <div
                        ref={(e) => {
                            console.log('tab--');
                            if (e && newInkStyle.width) {
                                e.style.width = `${newInkStyle.width}px`;
                                e.style.left = `${newInkStyle.left ?? 0}px`;
                            }
                        }}
                        className={style.tabs_ink}
                    ></div>
                </div>
                {children}
            </div>
        </TabsContext.Provider>
    );
};
export default Tabs;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
