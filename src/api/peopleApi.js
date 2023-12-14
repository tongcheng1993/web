import {get, postJson} from '../axios'

export const savePeopleInfo = (parameter) =>{
    let url='/api/business/people/savePeopleInfo';
    return postJson(url,parameter);
}
