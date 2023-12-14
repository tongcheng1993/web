import {get, postJson} from '../axios'


export const getMenu = (parameter) => {
    let url = '/api/business/webUser/getMenu';
    return postJson(url, parameter);
}
export const drawCaptcha = (parameter) => {
    let url = '/api/business/webUser/drawCaptcha';
    return postJson(url, parameter);
}
export const register = (parameter) => {
    let url = '/api/business/webUser/register';
    return postJson(url, parameter);
}
export const login = (parameter) => {
    let url = '/api/business/webUser/login';
    return postJson(url, parameter);
}
export const sendRegisterEmailCaptcha = (parameter) => {
    let url = '/api/business/user/sendRegisterEmailCaptcha';
    return postJson(url, parameter);
}
export const sendForgetPassWordCaptcha = (parameter) => {
    let url = '/api/business/user/sendForgetPassWordCaptcha';
    return postJson(url, parameter);
}
export const resetForgetPassWord = (parameter) => {
    let url = '/api/business/user/resetForgetPassWord';
    return postJson(url, parameter);
}
export const getMyselfInfo = (parameter) => {
    let url = '/api/business/webUser/getMyselfInfo';
    return postJson(url, parameter);
}
export const saveName = (parameter) => {
    let url = '/api/business/user/saveName';
    return postJson(url, parameter);
}
export const getPeopleInfo = (parameter) => {
    let url = '/api/business/user/getPeopleInfo';
    return get(url, parameter);
}
export const savePeopleInfo = (parameter) => {
    let url = '/api/business/user/savePeopleInfo';
    return postJson(url, parameter);
}
export const getCompanyInfo = (parameter) => {
    let url = '/api/business/user/getCompanyInfo';
    return get(url, parameter);
}
export const saveCompanyInfo = (parameter) => {
    let url = '/api/business/user/saveCompanyInfo';
    return postJson(url, parameter);
}
export const sendBindEmailCaptcha = (parameter) => {
    let url = '/api/business/user/sendBindEmailCaptcha';
    return postJson(url, parameter);
}
export const saveBindEmail = (parameter) => {
    let url = '/api/business/user/saveBindEmail';
    return postJson(url, parameter);
}
export const sendBindPhoneCaptcha = (parameter) => {
    let url = '/api/business/user/sendBindPhoneCaptcha';
    return postJson(url, parameter);
}
export const saveBindPhone = (parameter) => {
    let url = '/api/business/user/saveBindPhone';
    return postJson(url, parameter);
}



