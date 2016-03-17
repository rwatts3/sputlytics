const url = Meteor.npmRequire("url")
const queryString = Meteor.npmRequire("querystring")
const userAgent = Meteor.npmRequire("user-agent-parser")
const device = Meteor.npmRequire("user-agent-device-mapper")
const geoip = Meteor.npmRequire("geoip-lite")
const cors = Meteor.npmRequire("cors")
const helmet = Meteor.npmRequire("helmet")

Picker.middleware(cors())
Picker.middleware(helmet())
Picker.middleware((req, res, next) => {
  const referer = url.parse(req.headers.referer)
  const query = queryString.parse(req._parsedUrl.query)
  const domain = referer.host || null
  const _id = query.k || null
  if (!!Domains.findOne({_id: _id, domain: domain})) {
    next()
  } else {
    res.writeHead(412)
    res.end()
  }
})

Picker.route("/ping", (params, req, res, next) => {
  const headers = req.headers
  const query = params.query
  const ip = headers["x-forwarded-for"]
  const geo = geoip.lookup(ip) || {}
  const agent = userAgent(headers["user-agent"])
  const path = url.parse(req.headers.referer).pathname
  agent.device.type = device.getDeviceType(headers["user-agent"])
  Visits.insert({
    dkey: query.k || null,
    path: path,
    ip: ip,
    geo: {
      ll: geo.ll || null,
      c: geo.country || null,
      ct: geo.city || null,
      rg: geo.region || null
    },
    ua: agent,
    lang: query.l || null,
    screen: {
      w: +query.w || null,
      h: +query.h || null,
    }
  })
  res.writeHead(204)
  res.end()
})
