/**
 * @file date
 * @date 2021-07-28
 * @author zhoubin
 * @lastModify zhoubin 2021-07-28
 */

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec'];

const timestampToDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    return `${month[date.getMonth()]}/${date.getDate()}/${date.getFullYear()}`;
};

const zeroFill = (n: number): string => {
    return n < 10 ? `0${n}` : `${n}`;
};
export { timestampToDate, zeroFill };
