import {get, postJson} from '../axios'

export const info = (parameter) => {
    let url='/api/business/websocket/info';
    return get(url,parameter);
}

export const sendWsMessage = (parameter) => {
    let url='/api/business/websocket/sendWsMessage';
    return postJson(url,parameter);
}