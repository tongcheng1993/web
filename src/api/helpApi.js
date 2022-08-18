import {get, postJson} from '../axios'

export const getHelpContent = (params) => {
    let parameter = params;
    let url = "/api/sys/help/getHelpContent";
    return get(url, parameter);
};

export const saveHelpContent = (params) => {
    let parameter = params;
    let url = "/api/sys/help/saveHelpContent";
    return postJson(url, parameter);
};
