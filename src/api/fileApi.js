import {get, postForm, postJson} from '../axios'
import {resultToBlobUrl, createDownloadFile} from "../util/blobUtil"

export const downloadFileTrue = (params) => {
    let parameter = {
        id: params,
    };
    downloadFile(parameter).then((res) => {
        let url = resultToBlobUrl(res)
        createDownloadFile(url, res.fileName)
    });
}
export const downloadFile = (params) => {
    let parameter = params;
    let url = "/api/sys/file/downloadFile";
    return postForm(url, parameter);
};

