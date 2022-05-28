import {get, postJson} from '../axios'


export const info = (parameter) => {
    let url='/api/sys/dashboard/info';
    return get(url,parameter);
}
