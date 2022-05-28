import {get, postJson} from '../axios'



export const checkCompany = (parameter) => {
    let url='/api/sys/company/checkCompany';
    return get(url,parameter);
}


export const saveCompanyInfo = (parameter) =>{
    let url='/api/sys/company/saveCompanyInfo';
    return postJson(url,parameter);
}
