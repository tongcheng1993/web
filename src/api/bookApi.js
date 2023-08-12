import {get, postForm, postJson} from '../axios'

export const getMyUploadBook = (parameter) => {
    let url = '/api/business/book/getMyUploadBook';
    return postJson(url, parameter);
}
export const getBookDetail = (parameter) => {
    let url = '/api/business/book/getBookDetail';
    return postJson(url, parameter);
}
export const getBookSectionList = (parameter) => {
    let url = '/api/business/book/getBookSectionList';
    return postJson(url, parameter);
}
export const getBookSectionDetail = (parameter) => {
    let url = '/api/business/book/getBookSectionDetail';
    return postJson(url, parameter);
}

