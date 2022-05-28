import {get, postJson} from '../axios'

export const queryPageSchoolClass = (parameter) =>{
    let url='/api/schoolClass/queryPageSchoolClass';
    return postJson(url,parameter);
}


export const saveSchoolClassInfo = (parameter) =>{
    let url='/api/schoolClass/saveSchoolClassInfo';
    return postJson(url,parameter);
}
