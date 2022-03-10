/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */
let redirectToSignInPage = ''; //redirect to sign in page
let redirectToSignOutPage = ''; //redirect to sign out page
let redirectToProjectManager = '';
let redirectToSurveyDistribution = '';
let redirectToSurveyAnalysisReport = '';
let redirectToPlugInEditor = '';
let redirectToQeditor = '';
let redirectToProfile = '';
if (process.env.NODE_ENV == 'production') {
    redirectToSignInPage = 'https://qeditor.dev.datareachable.net/db_entry';
    redirectToSignOutPage = `https://qeditor.dev.datareachable.net/api/v1/session/db_logout`;
    redirectToProjectManager = 'https://spm.dev.datareachable.net/';
    redirectToSurveyDistribution = 'https://dist.dev.datareachable.net/';
    redirectToSurveyAnalysisReport = 'https://anlys.dev.datareachable.net/';
    redirectToPlugInEditor = 'https://plugin-system.dev.datareachable.net/';
    redirectToQeditor = 'https://qeditor.dev.datareachable.net/';
    redirectToProfile = 'https://profile.dev.datareachable.net/';
} else {
    redirectToSignInPage = 'https://qeditor.dev.datareachable.net/db_entry';
    redirectToSignOutPage = `https://qeditor.dev.datareachable.net/api/v1/session/db_logout`;
    redirectToProjectManager = 'https://spm.dev.datareachable.net/';
    redirectToSurveyDistribution = 'https://dist.dev.datareachable.net/';
    redirectToSurveyAnalysisReport = 'https://anlys.dev.datareachable.net/';
    redirectToPlugInEditor = 'https://plugin-system.dev.datareachable.net/';
    redirectToQeditor = 'https://qeditor.dev.datareachable.net/';
    redirectToProfile = 'https://profile.dev.datareachable.net/';
}

export {
    redirectToSignInPage,
    redirectToSignOutPage,
    redirectToProjectManager,
    redirectToSurveyDistribution,
    redirectToSurveyAnalysisReport,
    redirectToPlugInEditor,
    redirectToQeditor,
    redirectToProfile,
};
