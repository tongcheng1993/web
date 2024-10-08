import {get, postForm, postJson} from '../axios'


export const saveFriendInfo = (parameter) => {
    let url = '/api/business/friend/saveFriendInfo';
    return postJson(url, parameter);
}

export const getFriendInfoByMyself = (parameter) => {
    let url = '/api/business/friend/getFriendInfoByMyself';
    return get(url, parameter);
}

export const getFriendInfoById = (parameter) => {
    let url = '/api/business/friend/getFriendInfoById';
    return get(url, parameter);
}

export const queryPageFriend = (parameter) => {
    let url = '/api/business/friend/queryPageFriend';
    return postJson(url, parameter);
}

export const downloadFriendInfoImgFile = (parameter) => {
    let url = '/api/business/friend/downloadFriendInfoImgFile';
    return postForm(url, parameter);
}
