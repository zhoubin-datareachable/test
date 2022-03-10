/**
 * @file
 * @date 2022-02-09
 * @author zhoubin
 * @lastModify zhoubin 2022-02-09
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { DropDownListV2 } from '@datareachable/dr_front_componentlibrary';
import React, { useState } from 'react';
import style from './style.scss';
import icon_plugin1 from '~/Assets/images/icon_plugin1.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginDropDown = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [selectPlugin, setSelectPlugin] = useState('000');
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    //content: {  name: 'Plugin Name xxxxxxxx A', logo: icon_plugin1, isDefault: true },
    const plugins = [
        {
            id: '001',
            content: 'Default Paper',
        },
        {
            id: '002',
            content: 'Paper Name 01',
        },
        {
            id: '003',
            content: 'Paper Name xxxxxx B',
        },
    ];

    const getLabels = () => {
        const pluginsLabel: Array<{ id: string; content: React.ReactNode | '/' }> = [];
        plugins.map(({ id, content }) => {
            pluginsLabel.push({
                id,
                content: (
                    <div className={style.pluginDropDown_floatingItem}>
                        <span>{content}</span>
                        <div className={style.pluginDropDown_plugin}>
                            <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                            <img src={icon_plugin1} alt={'Plugin Name xxxxxxxx A'} />
                            <span className={style.pluginDropDown_pluginName}>
                                Plugin Name xxxxxxxx A
                            </span>
                        </div>
                    </div>
                ),
            });
        });
        return pluginsLabel;
    };
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <DropDownListV2
                className={style.pluginDropDown_select}
                floatingClassName={style.pluginDropDown_floating}
                floatingStyle={{ width: '27.5rem' }}
                defaultValue={selectPlugin}
                handleValueChange={(id) => setSelectPlugin(id as string)}
                labels={getLabels()}
                placeholder="Default - No plugin bound yet"
                size="extraLarge"
            />
        </div>
    );
};
export default PluginDropDown;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
