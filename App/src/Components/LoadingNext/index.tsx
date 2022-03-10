/**
 * @file
 * @date 2021-10-29
 * @author zhoubin
 * @lastModify zhoubin 2021-10-29
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { LoadingComponent } from '@datareachable/dr_front_componentlibrary';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface LoadingNextProps {
    status: boolean;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const LoadingNext: React.FC<LoadingNextProps> = ({ status }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const loadingStyle = { opacity: status ? '1' : '0' };
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.loadingNext_container} style={loadingStyle}>
            <span>Loading</span>
            <LoadingComponent
                color="#BDBDBD"
                delay={0}
                height="1.4rem"
                type="spinningBubbles"
                width="1.4rem"
            />
        </div>
    );
};
export default LoadingNext;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
