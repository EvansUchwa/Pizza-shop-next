import cookie from "cookie";
export default async function handler(req, res) {
    const { method } = req;


    if (method == 'POST') {
        const { mail, password } = req.body;

        if (mail == process.env.NEXT_PUBLIC_adminMail) {
            if (password == process.env.NEXT_PUBLIC_adminPassword) {

                res.setHeader("Set-Cookie", cookie.serialize("token", process.env.NEXT_PUBLIC_adminToken,
                    { maxAge: 60 * 60, sameSite: "strict", path: "/" }))
                res.send({ mail })
            } else {
                res.status(400).send('Mot de passe incorrect')
            }
        } else {
            res.status(400).send('Identifiant incorrect')
        }
    } else if (method == 'GET') {

    }
}
