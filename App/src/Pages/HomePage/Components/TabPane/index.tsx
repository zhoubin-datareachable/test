/**
 * @file
 * @date 2022-02-09
 * @author zhoubin
 * @lastModify zhoubin 2022-02-09
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { forwardRef, ReactNode } from 'react';
import { useTabsContext } from '../Tabs/Unit/context';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface TabPaneProps {
    tabId: string;
    tab: ReactNode;
    children: ReactNode | Array<ReactNode>;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TabPane = forwardRef<HTMLElement, TabPaneProps>(({ tabId, children }, ref) => {
    TabPane.displayName = 'TabPane';
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const tabsContext = useTabsContext();
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <>{tabId === tabsContext.value && children}</>;
});
export default TabPane;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
