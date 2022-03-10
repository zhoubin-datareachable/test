/**
 * @file
 * @date 2022-02-11
 * @author zhoubin
 * @lastModify zhoubin 2022-02-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useState } from 'react';
import SearchPluginInput from '../../SearchPluginInput';
import style from './style.scss';
import { Alert, Icon, PaginationV2 } from '@datareachable/dr_front_componentlibrary';
import PluginDetails from '../../PluginDetails';
import spr_plugin1 from '~/Assets/images/spr_plugin1.png';
import spr_plugin2 from '~/Assets/images/spr_plugin2.png';
import spr_plugin3 from '~/Assets/images/spr_plugin3.png';
import ChoosePaper from '../../ChoosePaper';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const MyPlugins = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [showPluginDetail, setShowPluginDetail] = useState(false);

    const [choosePaper, setChoosePaper] = useState(false);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const plugins = [
        {
            name: 'Plugin Name xxxxxxxx A',
            img: spr_plugin1,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Wire Box lets you convert your designs back to to wires with one click, helping you and your team mates focus on the UX...',
        },
        {
            name: 'Plugin Name xxxxxxxx B',
            img: spr_plugin2,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Wire Box lets you convert your designs back to to wires with one click, helping you and your team mates focus on the UX...',
        },
        {
            name: 'Plugin Name xxxxxxxx xxxxxx',
            img: spr_plugin3,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Embed media directly into Figma from industry leading platforms such as YouTube, Loom, Chorus, Cloudapp, Google...',
        },
    ];
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.myPlugins_container}>
            <SearchPluginInput />
            <div className={style.myPlugins_pluginList}>
                {plugins.map((item, index) => (
                    <div key={index} className={style.myPlugins_pluginItem}>
                        <img src={item.img} alt="plugin" />
                        <div className={style.myPlugins_pluginInfo}>
                            <div className={style.myPlugins_pluginInfo_title}>
                                <span>{item.name}</span>
                                <Icon
                                    className={style.myPlugins_pluginInfo_enter}
                                    type="exit"
                                    onClick={() => setShowPluginDetail(true)}
                                />
                            </div>
                            <div className={style.myPlugins_pluginInfo_keyword}>
                                {item.keyword.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))}
                            </div>
                            <div className={style.myPlugins_pluginInfo_description}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.myPlugins_pagination}>
                <PaginationV2 defaultCurrentPage={1} />
            </div>
            <Alert
                status={choosePaper}
                custom={true}
                width="auto"
                height="auto"
                handleCancel={() => {
                    setShowPluginDetail(true);
                    setChoosePaper(false);
                }}
            >
                <ChoosePaper
                    handleConfirm={() => setChoosePaper(false)}
                    handleCancel={() => {
                        setShowPluginDetail(true);
                        setChoosePaper(false);
                    }}
                />
            </Alert>
            <Alert
                status={showPluginDetail}
                custom={true}
                width="auto"
                height="auto"
                changeStatus={() => setShowPluginDetail(false)}
            >
                <PluginDetails
                    handleConfirm={() => {
                        setChoosePaper(true);
                        setShowPluginDetail(false);
                    }}
                    handleCancel={() => setShowPluginDetail(false)}
                />
            </Alert>
        </div>
    );
};
export default MyPlugins;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
