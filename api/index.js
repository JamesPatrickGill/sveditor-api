import {generate} from "../lib/generate";

const extractUrlParams = (req) => {
    return req.url.split('?')[1].split("&").map((el) => {
        return {[el.split('=')[0]]: el.split('=')[1]}
    }).reduce((params, el) => {
        return {...params, ...el}
    }, {})
}


export default (req, res) => {
    const options = JSON.parse(decodeURIComponent(extractUrlParams(req)['options']))
    console.log(options)
    if (!options) {
        res.send({body: "No arguments provided"})
    }
    res.setHeader('content-type', 'image/svg+xml')

    res.send(`${generate(options)}`);

}
