import {get, postJson} from '../axios'


export const info = (parameter) => {
    let url='/api/business/dashboard/info';
    return get(url,parameter);
}
