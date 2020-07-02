var express = require('express');
var router = express.Router();
const request = require('request-promise');
const cheerio = require('cheerio');
const URL = 'https://www.24h.com.vn/gia-vang-hom-nay-c425.html';
/* GET home page. */

router.get('/', function(req, res, next) {

    const getPageContent = (uri) => {
        const options = {
            uri,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            transform: (body) => {
                return cheerio.load(body)
            }
        }

        return request(options)
    }

    getPageContent(URL).then($ => {
        const mang = [];
        const homqua = [];
        const homnay = [];
        $('.colorBlur').each(function() {
            homqua.push($(this).text())
        });
        $('.colorGrey .fixW').each(function() {
            homnay.push($(this).text())
        });
        mang.push({ ten: 'SJC TP HCM', giahomnay: homnay[15], giahomqua: homqua[15] });
        console.log(mang);
        res.render('index', { mang });
    })


});

module.exports = router;