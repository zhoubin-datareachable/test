/**
 * @file
 * @date 2022-02-11
 * @author zhoubin
 * @lastModify zhoubin 2022-02-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from 'react';
import TabPane from '../TabPane';
import Tabs from '../Tabs';
import MyPlugins from './MyPlugins';
import PluginInMarket from './PluginInMarket';
import PluginsInOrganization from './PluginsInOrganization';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginsCard = (): JSX.Element => {
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
        <div className={style.pluginsCard_container}>
            <Tabs defaultActiveKey="3">
                <TabPane tabId="1" tab="My Plugins">
                    <MyPlugins />
                </TabPane>
                <TabPane tabId="2" tab="Plugins in Market">
                    <PluginInMarket />
                </TabPane>
                <TabPane tabId="3" tab="Plugins in my Organization">
                    <PluginsInOrganization />
                </TabPane>
            </Tabs>
        </div>
    );
};
export default PluginsCard;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
