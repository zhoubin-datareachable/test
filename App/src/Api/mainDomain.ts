/**
 * @file main domain
 * @date 2021-1-16
 * @author Jack
 * @lastModify  2021-1-16
 */
let mainDomain = '';
if (process.env.NODE_ENV == 'production') {
    mainDomain = 'https://qeditor.dev.datareachable.net/api/v1';
} else {
    mainDomain = 'https://qeditor.dev.datareachable.net/api/v1';
}

export default mainDomain;
