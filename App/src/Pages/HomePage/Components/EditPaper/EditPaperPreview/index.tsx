/**
 * @file
 * @date 2022-02-10
 * @author zhoubin
 * @lastModify zhoubin 2022-02-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import style from './style.scss';
import icon_plug1 from '~/Assets/images/icon_plugin1.png';
import { Radio, RadioGroup } from '@datareachable/dr_front_componentlibrary';
import spr_plugin1 from '~/Assets/images/spr_plugin1.png';
import spr_plugin2 from '~/Assets/images/spr_plugin2.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const EditPaperPreview = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [selectPlugin, setSelectPlugin] = useState(1);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const plugins = [
        {
            id: 1,
            name: 'Plugin Name xxxxxxxx A',
            isUpdate: true,
            img: spr_plugin1,
            description:
                'Amet, consectetur tempor adipiscing elit, sed do eiusmod tempor. Sed do adipisce elit, consectetur...',
        },
        {
            id: 2,
            name: 'Plugin name xxxxxxxx xxxxx...',
            isUpdate: false,
            img: spr_plugin2,
            description:
                'Amet, consectetur tempor adipiscing elit, sed do eiusmod tempor. Sed do adipisce elit, consectetur...',
        },
        {
            id: 3,
            name: 'Plugin Name xxxxxxxx C',
            isUpdate: false,
            img: spr_plugin2,
            description:
                'Amet, consectetur tempor adipiscing elit, sed do eiusmod tempor. Sed do adipisce elit, consectetur...',
        },
    ];
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
        <div className={style.editPaperPreview_container}>
            <div className={style.editPaperPreview_survey}>
                <div className={style.editPaperPreview_survey_title}>
                    4. What&apos;s your first reaction to the product?
                </div>
                <div className={style.editPaperPreview_survey_options}>
                    <RadioGroup
                        //   onChange={() => {}}
                        value={1}
                    >
                        <Radio value={1}>Very positive</Radio>
                        <Radio value={2}>Somewhat positive</Radio>
                        <Radio value={3}>Neutral</Radio>
                        <Radio value={4}>Somewhat negative</Radio>
                        <Radio value={5}>Very negative</Radio>
                    </RadioGroup>
                </div>
            </div>
            <div className={style.editPaperPreview_plugin}>
                <div className={style.editPaperPreview_pluginContent}>
                    <div className={style.editPaperPreview_plugin_title}>My Plugins</div>
                    <div className={style.editPaperPreview_plugin_list}>
                        {plugins.map((item) => (
                            <div
                                key={item.id}
                                className={getClassNames({
                                    [style.editPaperPreview_plugin_item]: true,
                                    [style.editPaperPreview_plugin_item__select]:
                                        selectPlugin === item.id,
                                })}
                                onClick={() => setSelectPlugin(item.id)}
                            >
                                <div className={style.editPaperPreview_plugin_info}>
                                    <img src={icon_plug1} alt="plugin" />
                                    <div className={style.editPaperPreview_plugin_name}>
                                        <span>{item.name}</span>
                                        {item.isUpdate && (
                                            <div>
                                                <span>Update</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className={style.editPaperPreview_plugin_description}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditPaperPreview;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
