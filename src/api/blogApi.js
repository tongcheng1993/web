import {get, postJson} from '../axios'

export const saveBlog = (parameter) => {
    let url = '/api/sys//blog/apply/saveBlog';
    return postJson(url, parameter);
}


export const getBlogById = (parameter) => {
    let url = '/api/sys//blog/apply/getBlogById';
    return get(url, parameter);
}