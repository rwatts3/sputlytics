const url = Meteor.npmRequire("url")
const userAgent = Meteor.npmRequire("user-agent-parser")
const device = Meteor.npmRequire("user-agent-device-mapper")
const geoip = Meteor.npmRequire("geoip-lite")
const cors = Meteor.npmRequire("cors")
const helmet = Meteor.npmRequire("helmet")

Picker.middleware(cors())
Picker.middleware(helmet())

Picker.route("/ping", (params, req, res, next) => {
  const headers = req.headers
  const query = params.query
  const referer = headers.referer
  const origin = url.parse(referer) || null
  const dkey = query.k || null
  if (!!Domains.findOne({_id: dkey, domain: origin.host})) {
    const ip = headers["x-forwarded-for"]
    const geo = geoip.lookup(ip) || {}
    const agent = userAgent(headers["user-agent"])
    const path = origin.pathname
    agent.device.type = device.getDeviceType(headers["user-agent"])
    Visits.insert({
      dkey: dkey,
      path: path,
      ip: ip,
      geo: {
        ll: geo.ll,
        c: geo.country,
        ct: geo.city,
        rg: geo.region
      },
      ua: agent,
      lang: query.l,
      screen: {
        w: +query.w,
        h: +query.h
      }
    })
    res.writeHead(204)
  } else {
    res.writeHead(412)
  }
  res.end()
})
