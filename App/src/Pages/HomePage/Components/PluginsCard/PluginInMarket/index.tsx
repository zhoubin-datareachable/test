/**
 * @file
 * @date 2022-02-11
 * @author zhoubin
 * @lastModify zhoubin 2022-02-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useState } from 'react';
import style from './style.scss';
import { Alert, Icon, PaginationV2 } from '@datareachable/dr_front_componentlibrary';
import PluginDetails from '../../PluginDetails';
import SearchPluginInput from '../../SearchPluginInput';
import spr_plugin4 from '~/Assets/images/spr_plugin4.png';
import spr_plugin5 from '~/Assets/images/spr_plugin5.png';
import spr_plugin6 from '~/Assets/images/spr_plugin6.png';
import spr_plugin7 from '~/Assets/images/spr_plugin7.png';
import spr_plugin8 from '~/Assets/images/spr_plugin8.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginInMarket = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [showPluginDetail, setShowPluginDetail] = useState(false);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const plugins = [
        {
            name: 'Plugin Name xxxxxxxx A',
            img: spr_plugin4,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Wire Box lets you convert your designs back to to wires with one click, helping you and your team mates focus on the UX...',
            price: '200',
        },
        {
            name: 'Plugin Name xxxxxxxx B',
            img: spr_plugin5,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Wire Box lets you convert your designs back to to wires with one click, helping you and your team mates focus on the UX...',
            price: '160',
        },
        {
            name: 'Plugin Name xxxxxxxx xxxxxx',
            img: spr_plugin6,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Embed media directly into Figma from industry leading platforms such as YouTube, Loom, Chorus, Cloudapp, Google...',
            price: '100',
        },
        {
            name: 'Plugin Demo Name xxxxxxxx xxxxxx 01',
            img: spr_plugin7,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Embed media directly into Figma from industry leading platforms such as YouTube, Loom, Chorus, Cloudapp, Google...',
            price: '160',
        },
        {
            name: 'Plugin Name xxxxxxxx xxxxxx',
            img: spr_plugin8,
            keyword: ['Official', 'Customer Satisfaction', 'Events'],
            description:
                'Embed media directly into Figma from industry leading platforms such as YouTube, Loom, Chorus, Cloudapp, Google...',
            price: '200',
        },
    ];
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.pluginInMarket_container}>
            <SearchPluginInput />
            <div className={style.pluginInMarket_pluginList}>
                {plugins.map((item, index) => (
                    <div key={index} className={style.pluginInMarket_pluginItem}>
                        <img src={item.img} alt="plugin" />
                        <div className={style.pluginInMarket_pluginInfo}>
                            <div className={style.pluginInMarket_pluginInfo_title}>
                                <span>{item.name}</span>
                                <Icon
                                    className={style.pluginInMarket_pluginInfo_enter}
                                    type="exit"
                                    onClick={() => setShowPluginDetail(true)}
                                />
                                <div className={style.pluginInMarket_pluginInfo_price}>
                                    ${item.price}
                                </div>
                            </div>
                            <div className={style.pluginInMarket_pluginInfo_keyword}>
                                {item.keyword.map((item, key) => (
                                    <span key={key}>Official</span>
                                ))}
                            </div>
                            <div className={style.pluginInMarket_pluginInfo_description}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.pluginInMarket_pagination}>
                <PaginationV2 defaultCurrentPage={1} />
            </div>
            <Alert
                status={showPluginDetail}
                custom={true}
                width="auto"
                height="auto"
                changeStatus={() => setShowPluginDetail(false)}
            >
                <PluginDetails
                    handleConfirm={() => setShowPluginDetail(false)}
                    handleCancel={() => setShowPluginDetail(false)}
                />
            </Alert>
        </div>
    );
};
export default PluginInMarket;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
