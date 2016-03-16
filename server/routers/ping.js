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
  const ip = headers["x-forwarded-for"]
  const geo = geoip.lookup(ip)
  const agent = userAgent(headers["user-agent"])
  agent.device.type = device.getDeviceType(headers["user-agent"])
  Visits.insert({
    dkey: query.k,
    rf: req.headers.referer,
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
      h: +query.h,
    }
  })
  res.writeHead(204)
  res.end()
})
