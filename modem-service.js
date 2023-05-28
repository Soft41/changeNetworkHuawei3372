import request from 'request-promise'

//Use IP address modem, example: 192.168.8.1
//If success change network, methods return "true"
class AliItemService {

    async change4G(ip) {
        try {
            let jar = request.jar()
            const getToken = {
                method: 'GET',
                uri: `http://${ip}/api/webserver/SesTokInfo`,
                jar: jar
            }
            const token = await request(getToken)
            const parseToken = token.match(/<TokInfo>(.*?)<\/TokInfo>/g)[0].replace('<TokInfo>', '').replace('<\/TokInfo>', '')
            const change4G = {
                method: 'POST',
                uri: `http://${ip}/api/net/net-mode`,
                headers: {
                    __RequestVerificationToken: parseToken,
                    'Content-Type': 'text/xml'
                },
                jar: jar,
                body: '<?xml version: "1.0" encoding="UTF-8"?><request><NetworkMode>03</NetworkMode><NetworkBand>3FFFFFFF</NetworkBand><LTEBand>800C5</LTEBand></request>'
            }
            const result = await request(change4G)
            console.log('Смена на 4G')
            return result.includes('OK')
        } catch (e) {

        }
    }

    async change3G(ip) {
        try {
            let jar = request.jar()
            const getToken = {
                method: 'GET',
                uri: `http://${ip}/api/webserver/SesTokInfo`,
                jar: jar
            }
            const token = await request(getToken)
            const parseToken = token.match(/<TokInfo>(.*?)<\/TokInfo>/g)[0].replace('<TokInfo>', '').replace('<\/TokInfo>', '')
            const change3G = {
                method: 'POST',
                uri: `http://${ip}/api/net/net-mode`,
                headers: {
                    __RequestVerificationToken: parseToken,
                    'Content-Type': 'text/xml'
                },
                jar: jar,
                body: '<?xml version: "1.0" encoding="UTF-8"?><request><NetworkMode>02</NetworkMode><NetworkBand>3FFFFFFF</NetworkBand><LTEBand>800C5</LTEBand></request>'
            }
            const result = await request(change3G)
            console.log('Смена на 3G')
            return result.includes('OK')
        } catch (e) {

        }
    }

    async checkIP({proxy}) {
        try {
            const optionsGetIP = optionsConfig.getConfig({
                requestType: 'optionsGetIP',
                otherOptions: {proxy}
            })
            return await request(optionsGetIP)
        } catch (e) {

        }
    }
}

export default new AliItemService()