/**
 * @file save config now
 * @date 2021-08-24
 * @author zhoubin
 * @lastModify zhoubin 2021-08-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Alert, LoadingComponent } from '@datareachable/dr_front_componentlibrary';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface LoadingBoxProps {
    status: boolean;
    content?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const LoadingBox: React.FC<LoadingBoxProps> = ({
    status,
    content = 'Adding keyword... please hold on a second.',
}): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Alert
            status={status}
            className={style.loadingBox_noClose}
            width="auto"
            height="auto"
            custom={true}
        >
            <div className={style.loadingBox_container}>
                <span className={style.loadingBox_loadingContainer}>
                    <LoadingComponent
                        type="spinningBubbles"
                        color="#fff"
                        width="4rem"
                        height="4rem"
                    />
                </span>
                <span>{content}</span>
            </div>
        </Alert>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
