/**
 * @file
 * @date 2022-01-13
 * @author zhoubin
 * @lastModify zhoubin 2022-01-13
 */

/**
 * @file
 * @date 2022-01-13
 * @author zhoubin
 * @lastModify zhoubin 2022-01-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Alert, Icon } from '@datareachable/dr_front_componentlibrary';
import React from 'react';
import ABTestingCard from './Components/ABTestingCard';
import AddArgument from './Components/AddArgument';
import AddNewPaper from './Components/AddNewPaper';
import ChoosePaper from './Components/ChoosePaper';
import EditPaper from './Components/EditPaper';
import EditReturnValue from './Components/EditReturnValue';
import HoverContent from './Components/HoverContent';
import NoPermissionBox from './Components/NoPermissionBox';
import PluginDetails from './Components/PluginDetails';
import PluginDropDown from './Components/PluginDropDown';
import PluginsCard from './Components/PluginsCard';
import ResetPaper from './Components/ResetPaper';
import SearchPluginInput from './Components/SearchPluginInput';
import TabPane from './Components/TabPane';
import Tabs from './Components/Tabs';
import { TextEditor } from './Components/TextEditor';
import ToolTip from './Components/ToolTip';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Home = (): JSX.Element => {
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
        <div style={{ marginTop: '200px', marginLeft: '200px' }}>
            {/* 弹窗 */}
            <Alert status={true} custom={true} width="auto" height="auto">
                {/* <AddArgument /> */}
                {/* <EditReturnValue /> */}
                {/* <NoPermissionBox /> */}
                {/* <PluginDetails /> */}
                {/* <ChoosePaper /> */}
                {/* <EditPaper /> */}
                {/* <AddNewPaper /> */}
                <ResetPaper />
            </Alert>

            {/* ---------------------------- */}
            {/* <ToolTip /> */}
            {/* <ToolTip tipContent="hello">FDFDS</ToolTip> */}
            {/* ---------------------------- */}
            {/* <HoverContent /> */}

            {/* ---------------------------- */}
            {/* <div style={{ border: '1px solid #ccc' }}>
                <TextEditor id="a" handleAddScript={() => console.log('a')} />
            </div> */}

            {/* plugin drop down */}
            {/* <PluginDropDown /> */}

            {/* tab pane */}
            {/* <Tabs defaultActiveKey="1">
                <TabPane tabId="1" tab="My Plugins">
                    My Plugins
                </TabPane>
                <TabPane tabId="2" tab="Plugins in Market">
                    Plugins in Market
                </TabPane>
                <TabPane tabId="3" tab="Plugins in my Organization">
                    Plugins in my Organization
                </TabPane>
            </Tabs> */}

            {/* se */}
            {/* <SearchPluginInput /> */}

            <div style={{ width: '503px', height: '660px', border: '1px solid #ccc' }}>
                {/* <PluginsCard /> */}
                {/* <ABTestingCard /> */}
            </div>
        </div>
    );
};
export default Home;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
