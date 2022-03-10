/**
 * @file
 * @date 2022-02-09
 * @author zhoubin
 * @lastModify zhoubin 2022-02-09
 */
import { createContext, useContext } from 'react';

interface TabsContextProps {
    value: string;
}
const TabsContextData = {
    value: '',
};

export const TabsContext = createContext<TabsContextProps>(TabsContextData);
export const useTabsContext = (): TabsContextProps => useContext(TabsContext);
