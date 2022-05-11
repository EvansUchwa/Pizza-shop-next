export function getProtocolAndHost(req) {
    const host = req.headers.host
    const protocol = req.headers["x-forwarded-proto"]
        || req.connection.encrypted ? "https://" : "http://";

    return protocol + host;
}

export function getClientProtocolAndHost() {
    return window.location.protocol + '//' + window.location.host;
}