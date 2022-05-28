
import {get, postJson} from '../axios'

export const getSchoolInfo = (parameter) =>{
    let url='/';
    return get(url,parameter);
}