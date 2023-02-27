import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";
import env from "utils/env";
import {decodeText} from "utils/cipher";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    delete req.headers.host;
    delete req.headers.origin;
    delete req.headers.referer;
    try {
        let method: any = axios.post;
        switch (req.body.method) {
            case "POST":
                method = axios.post;
                break;
            case "GET":
                method = axios.get;
                break;
            case "DELETE":
                method = axios.delete;
                break;
            case "PATCH":
                method = axios.patch;
                break;
            default:
                method = axios.put;
        }

        let data;
        if (req.body.method !== "GET") {
            data = await method(`${env.api}${req.body.url}`, req.body.data, !req.body.url.includes('/login') && {
                headers: {
                    Authorization: "Bearer " + decodeText(
                        env.key as string,
                        req.headers["token"] || ""
                    ),
                },
            });
        } else {
            data = await method(`${env.api}${req.body.url}`, !req.body.url.includes('/login') && {
                headers: {
                    Authorization: "Bearer " + decodeText(
                        env.key as string,
                        req.headers["token"] || ""
                    ),
                },
            });
        }

        res.status(data.status).json(data.data);
    } catch (e: any) {
        res.status(e.response?.status || 500).json(e.response?.data);
    }
}