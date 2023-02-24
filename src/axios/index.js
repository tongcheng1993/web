// import Vue from 'vue'
// import axios from 'axios'

import store from '../store/index.js'

axios.defaults.timeout = 150000;

axios.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error)
    }
);
axios.interceptors.response.use(response => {
    if (response.data.code === 200) {
        // 页面没有提醒 方法有返回内容
        if (response.data.success) {
            return response.data.result;
        } else {
            // 页面有提醒 方法有返回内容 例如：用户名密码错误  在页面上提醒后 在err中返回提醒，方法catch到提醒后将登录按钮重置为可点击状态
            ELEMENT.Message({
                showClose: true,
                message:response.data.message,
                type: "warning"
            })
            return Promise.reject(response.data.message)
        }
    } else if (response.data.code === 300) {
        ELEMENT.Message({
            showClose: true,
            message:response.data.message,
            type: "warning"
        })
        console.log(response.data.message)
        window.location.reload();
        return Promise.reject(response.data.message)
    } else if (response.data.code === 400) {
        ELEMENT.Message({
            showClose: true,
            message:"登陆时间超时，重新登陆",
            type: "warning"
        })
        console.log(response.data.message)
        store.commit("del_token");
        window.location.reload();
        return Promise.reject(response.data.message)
    } else if (response.data.code === 500) {
        ELEMENT.Message({
            showClose: true,
            message:"网络问题",
            type: "warning"
        })
        console.log(response.data.message)
        window.location.reload();
        return Promise.reject(response.data.message)
    } else {
        return Promise.reject(response.data.message)
    }
}, error => {
    console.log(error);
    return Promise.reject(error)
});


export const get = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axios({
            url: url,
            method: 'get',
            params: parameter,
            headers: {
                'Tc-Token': token
            }
        })
    } else {
        return axios({
            url: url,
            method: 'get',
            params: parameter,
            headers: {}
        })
    }
};
export const postJson = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axios({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type':'application/json',
                'Tc-Token': token
            }
        })
    } else {
        return axios({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type':'application/json',
            }
        })
    }
};