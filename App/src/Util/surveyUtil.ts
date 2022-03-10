/**
 * @file date
 * @date 2021-08-17
 * @author zhoubin
 * @lastModify zhoubin 2021-08-17
 */

const getTotalPage = (total: number, pageSize: number): number => {
    return total % pageSize == 0 ? total / pageSize : Math.floor(total / pageSize) + 1;
};
export { getTotalPage };
