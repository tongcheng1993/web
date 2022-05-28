import {get, postJson} from '../axios'

export const queryListDicItem = (params) => {
    let parameter = params;
    let url = "/api/sys/dic/queryListDicItem";
    return postJson(url, parameter);
};

