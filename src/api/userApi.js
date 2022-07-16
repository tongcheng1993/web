import {get, postJson} from '../axios'


export const getMenu = (parameter) => {
    let url='/api/sys/user/getMenu';
    return get(url,parameter);
}

export const drawCaptcha = (parameter) =>{
    let url='/api/sys/user/drawCaptcha';
    return get(url,parameter);
}

export const login = (parameter) =>{
    let url='/api/sys/user/login';
    return postJson(url,parameter);
}

export const register = (parameter) =>{
    let url='/api/sys/user/register';
    return postJson(url,parameter);
}

export const getUserInfo = (parameter) =>{
    let url='/api/sys/user/getUserInfo';
    return get(url,parameter);
}

export const getPeopleInfo = (parameter) =>{
    let url='/api/sys/user/getPeopleInfo';
    return get(url,parameter);
}

export const getCompanyInfo = (parameter) =>{
    let url='/api/sys/user/getCompanyInfo';
    return get(url,parameter);
}