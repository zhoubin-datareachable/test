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
import {
    Alert,
    DropDownListV2,
    Icon,
    PaginationV2,
} from '@datareachable/dr_front_componentlibrary';
import PluginDetails from '../../PluginDetails';
import SearchPluginInput from '../../SearchPluginInput';
import icon_plugin1 from '~/Assets/images/icon_plugin1.png';
import spr_plugin4 from '~/Assets/images/spr_plugin4.png';
import spr_plugin5 from '~/Assets/images/spr_plugin5.png';
import spr_plugin6 from '~/Assets/images/spr_plugin6.png';
import spr_org1 from '~/Assets/images/spr_org1.png';
import spr_org2 from '~/Assets/images/spr_org2.png';
import spr_org3 from '~/Assets/images/spr_org3.png';
import spr_org4 from '~/Assets/images/spr_org4.png';
import ChoosePaper from '../../ChoosePaper';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginsInOrganization = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [showPluginDetail, setShowPluginDetail] = useState(false);
    const [selectOrg, setSelectOrg] = useState('001');
    const [choosePaper, setChoosePaper] = useState(false);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const orgs = [
        {
            id: '001',
            content: { name: 'Plugin Name xxxxxxxx A', logo: spr_org1 },
        },
        {
            id: '002',
            content: { name: 'Plugin Name xxxxxx 001', logo: spr_org2 },
        },
        {
            id: '003',
            content: { name: 'Plugin Name xxxxxx B', logo: spr_org3 },
        },
        {
            id: '004',
            content: { name: 'Plugin Name xxxxxxxxxxx 002', logo: spr_org4 },
        },
    ];
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
    ];
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const getLabels = () => {
        const pluginsLabel: Array<{ id: string; content: React.ReactNode | '/' }> = [];
        orgs.map(({ id, content }) => {
            pluginsLabel.push({
                id,
                content: (
                    <div className={style.pluginsInOrganization_floatingItem}>
                        <img src={content.logo} alt={content.name} />
                        <span className={style.pluginsInOrganization_pluginName}>
                            {content.name}
                        </span>
                    </div>
                ),
            });
        });
        return pluginsLabel;
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.pluginsInOrganization_container}>
            <div className={style.pluginsInOrganization_orgContainer}>
                <DropDownListV2
                    className={style.pluginsInOrganization_org}
                    floatingClassName={style.pluginsInOrganization_floating}
                    floatingStyle={{
                        height: '16.7rem',
                        width: '27.5rem',
                    }}
                    defaultValue={selectOrg}
                    handleValueChange={(id) => setSelectOrg(id as string)}
                    labels={getLabels()}
                    placeholder="Default - No plugin bound yet"
                    size="extraLarge"
                />
            </div>
            <SearchPluginInput />

            <div className={style.pluginsInOrganization_pluginList}>
                {plugins.map((item, index) => (
                    <div key={index} className={style.pluginsInOrganization_pluginItem}>
                        <img src={item.img} alt="plugin" />
                        <div className={style.pluginsInOrganization_pluginInfo}>
                            <div className={style.pluginsInOrganization_pluginInfo_title}>
                                <span>{item.name}</span>
                                <Icon
                                    className={style.pluginsInOrganization_pluginInfo_enter}
                                    type="exit"
                                    onClick={() => setShowPluginDetail(true)}
                                />
                            </div>
                            <div className={style.pluginsInOrganization_pluginInfo_keyword}>
                                {item.keyword.map((item, index) => (
                                    <span key={index}>Official</span>
                                ))}
                            </div>
                            <div className={style.pluginsInOrganization_pluginInfo_description}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.pluginsInOrganization_pagination}>
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
export default PluginsInOrganization;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
