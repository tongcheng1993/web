// import Vue from 'vue'
// import axios from 'axios'

import store from '../store/index.js'
let axiosOne = axios.create();
let axiosFile = axios.create();
axiosOne.defaults.timeout = 150000;

axiosOne.interceptors.response.use(response => {
    if (response.data.code === 20000) {
        // 页面没有提醒 方法有返回内容
        if (response.data.success) {
            return response.data.result;
        } else {
            ELEMENT.Message({
                showClose: true,
                message: response.data.message,
                type: "warning"
            })
            return Promise.reject(response.data.message)
        }
    } else if (response.data.code === 30000) {
        ELEMENT.Message({
            showClose: true,
            message: "丢失身份信息，请重新登陆",
            type: "warning"
        })
        store.commit("del_token");
        // window.location.reload();
        return Promise.reject(response.data.message)
    } else if (response.data.code === 40000) {
        ELEMENT.Message({
            showClose: true,
            message: "访问接口验证身份权限不足，请申请权限",
            type: "warning"
        })
        // store.commit("del_token");
        // window.location.reload();
        return Promise.reject(response.data.message)
    } else if (response.data.code === 50000) {
        ELEMENT.Message({
            showClose: true,
            message: "网络问题",
            type: "warning"
        })
        // store.commit("del_token");
        // window.location.reload();
        return Promise.reject(response.data.message)
    } else {
        ELEMENT.Message({
            showClose: true,
            message: "未知问题",
            type: "warning"
        })
        return Promise.reject(response.data.message)
    }
}, error => {
    ELEMENT.Message({
        showClose: true,
        message: "未知问题" + error,
        type: "warning"
    })
    return Promise.reject(error)
});


export const get = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axiosOne({
            url: url,
            method: 'get',
            params: parameter,
            headers: {
                'Tc-Token': token
            }
        })
    } else {
        return axiosOne({
            url: url,
            method: 'get',
            params: parameter,
            headers: {}
        })
    }
};


export const postForm = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axiosOne({
            url: url,
            method: 'post',
            params: parameter,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Tc-Token': token
            }
        })
    } else {
        return axiosOne({
            url: url,
            method: 'post',
            params: parameter,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    }
};

export const postFormFile = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axiosOne({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Tc-Token': token
            }
        })
    } else {
        return axiosOne({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export const postJson = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axiosOne({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type': 'application/json',
                'Tc-Token': token
            }
        })
    } else {
        return axiosOne({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
};




export const downFile = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axiosFile({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Tc-Token': token
            }
        })
    } else {
        return axiosFile({
            url: url,
            method: 'post',
            data: parameter,
            headers: {}
        })
    }
};