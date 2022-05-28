import {get, postJson} from '../axios'

export const info = (parameter) => {
    let url='/api/websocket/websocket/info';
    return get(url,parameter);
}