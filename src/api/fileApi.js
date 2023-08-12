import {get, postForm, postJson} from '../axios'

export const downloadFile = (parameter) => {
    let url = '/api/business/file/downloadFile';
    return postJson(url, parameter);
}


