import {get, postJson} from '../axios'


export const getMenu = (parameter) => {
    let url = '/api/sys/user/apply/getMenu';
    return get(url, parameter);
}
export const drawCaptcha = (parameter) => {
    let url = '/api/sys/user/apply/drawCaptcha';
    return get(url, parameter);
}
export const register = (parameter) => {
    let url = '/api/sys/user/apply/register';
    return postJson(url, parameter);
}
export const login = (parameter) => {
    let url = '/api/sys/user/apply/login';
    return postJson(url, parameter);
}
export const sendRegisterEmailCaptcha = (parameter) => {
    let url = '/api/sys/user/apply/sendRegisterEmailCaptcha';
    return postJson(url, parameter);
}
export const sendForgetPassWordCaptcha = (parameter) => {
    let url = '/api/sys/user/apply/sendForgetPassWordCaptcha';
    return postJson(url, parameter);
}
export const resetForgetPassWord = (parameter) => {
    let url = '/api/sys/user/apply/resetForgetPassWord';
    return postJson(url, parameter);
}
export const getUserInfo = (parameter) => {
    let url = '/api/sys/user/apply/getUserInfo';
    return get(url, parameter);
}
export const saveName = (parameter) => {
    let url = '/api/sys/user/apply/saveName';
    return postJson(url, parameter);
}
export const getPeopleInfo = (parameter) => {
    let url = '/api/sys/user/apply/getPeopleInfo';
    return get(url, parameter);
}
export const savePeopleInfo = (parameter) => {
    let url = '/api/sys/user/apply/savePeopleInfo';
    return postJson(url, parameter);
}
export const getCompanyInfo = (parameter) => {
    let url = '/api/sys/user/apply/getCompanyInfo';
    return get(url, parameter);
}
export const saveCompanyInfo = (parameter) => {
    let url = '/api/sys/user/apply/saveCompanyInfo';
    return postJson(url, parameter);
}
export const sendBindEmailCaptcha = (parameter) => {
    let url = '/api/sys/user/apply/sendBindEmailCaptcha';
    return postJson(url, parameter);
}
export const saveBindEmail = (parameter) => {
    let url = '/api/sys/user/apply/saveBindEmail';
    return postJson(url, parameter);
}
export const sendBindPhoneCaptcha = (parameter) => {
    let url = '/api/sys/user/apply/sendBindPhoneCaptcha';
    return postJson(url, parameter);
}
export const saveBindPhone = (parameter) => {
    let url = '/api/sys/user/apply/saveBindPhone';
    return postJson(url, parameter);
}



