import {get, postForm, postJson} from '../axios'

export const queryPageBook = (parameter) => {
    let url = '/api/business/book/queryPageBook';
    return postJson(url, parameter);
}
export const queryOneBookById = (parameter) => {
    let url = '/api/business/book/queryOneBookById';
    return postJson(url, parameter);
}
export const queryListBookSection = (parameter) => {
    let url = '/api/business/book/queryListBookSection';
    return postJson(url, parameter);
}
export const queryOneBookSectionById = (parameter) => {
    let url = '/api/business/book/queryOneBookSectionById';
    return postJson(url, parameter);
}

