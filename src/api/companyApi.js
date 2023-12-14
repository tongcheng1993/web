import {get, postJson} from '../axios'



export const checkCompany = (parameter) => {
    let url='/api/business/company/checkCompany';
    return get(url,parameter);
}


export const saveCompanyInfo = (parameter) =>{
    let url='/api/business/company/saveCompanyInfo';
    return postJson(url,parameter);
}
