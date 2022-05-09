export const axiosBaseSelector = ({ axiosDefault }) => {
    return axiosDefault.urlBase
}

export const axiosHeadersSelector = ({ axiosDefault }) => {
    return axiosDefault.headers
}

export const axiosInfos = ({ axiosDefault }) => {
    return axiosDefault;
}