import {get, postJson} from '../axios'

export const downloadFileByte = (params) => {
    let parameter = params;
    let url = "/api/sys/file/downloadFileByte";
    return get(url, parameter);
};

