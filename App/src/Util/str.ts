/**
 * @file
 * @date 2021-12-17
 * @author zhoubin
 * @lastModify zhoubin 2021-12-17
 */
export const encrypt = (str: string): string => {
    const temp = str
        .replace('dri:acs::org/', 'ORG')
        .replace('dri:acs::org:tg/', 'TALENT')
        .replace('dri:spm::proj/', 'PROJECT')
        .replace(/\/|-|_/g, 'LINE')
        .toLocaleLowerCase();
    return temp;
};
