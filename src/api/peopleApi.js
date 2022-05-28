import {get, postJson} from '../axios'

export const savePeopleInfo = (parameter) =>{
    let url='/api/sys/people/savePeopleInfo';
    return postJson(url,parameter);
}
