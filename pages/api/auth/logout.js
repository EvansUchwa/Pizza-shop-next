import cookie from "cookie";
export default async function handler(req, res) {
    const { method } = req;


    if (method == 'DELETE') {
        res.setHeader("Set-Cookie", cookie.serialize("token", '',
            { maxAge: -1, sameSite: "strict", path: "/" }))
        res.json({ isDisconnected: true })

    }
}
