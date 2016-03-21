Seed = {
  init() {
    if (process.env.NODE_ENV === "development") {
      console.log("Seeding database...")
      const userId1 = Accounts.createUser({
        username: "caio",
        email: "caio@mail.com",
        password: "123456",
        profile: {
          domain: "https://sputlytics.com"
        }
      })
      const userId2 = Accounts.createUser({
        username: "lucas",
        email: "lucas@mail.com",
        password: "123456",
        profile: {
          domain: "http://blog.sputlytics.com"
        }
      })
      const domainId1 = Meteor.users.findOne(userId1).domainIds[0]
      const domainId2 = Meteor.users.findOne(userId2).domainIds[0]
      Visits.insert({
        dkey: domainId1,
        path: "/",
        ip: "100.100.88.25",
        rf: null,
        rv: null,
        geo: { ll: [-23.960766, -46.396080], c: "BR", ct: "São Vicente", rg: null},
        ua: {
          browser: { name: "Chrome", version: "48.0.2564.116"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "pt-br",
        sc: { w: 1440, h: 900 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/about",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [49.282729, -123.120738], c: "CA", ct: "Vancouver", rg: null},
        ua: {
          browser: { name: "Chrome", version: "48.0.2564.116"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Mac OSX", version: "10.10" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "en-ca",
        sc: { w: 1440, h: 900 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/jobs",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" }
        },
        l: "en-uk",
        sc: { w: 768, h: 1280 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/jobs",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" }
        },
        l: "en-uk",
        sc: { w: 768, h: 1280 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/jobs",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" }
        },
        l: "en-uk",
        sc: { w: 768, h: 1280 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/jobs",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" }
        },
        l: "en-uk",
        sc: { w: 768, h: 1280 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/contacts",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Microsoft Edge", version: "12.0.0.1"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "en-us",
        sc: { w: 1440, h: 900 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/contacts",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Microsoft Edge", version: "12.0.0.1"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "en-us",
        sc: { w: 1440, h: 900 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/contacts",
        ip: "98.92.191.200",
        rf: null,
        rv: null,
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Opera", version: "12.00"},
          engine: { name: "Presto", version: "2.9.181" },
          os: { name: "Windows", version: "7" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "en-us",
        sc: { w: 1920, h: 1080 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/contacts",
        ip: "100.100.100.99",
        rf: null,
        rv: null,
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Microsoft Edge", version: "12.0.0.1"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "en-us",
        sc: { w: 1440, h: 900 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/contacts",
        ip: "198.98.22.100",
        rf: null,
        rv: null,
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "IE", version: "10.0"},
          engine: { name: "Trident", version: "6.0" },
          os: { name: "Windows", version: "7" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "en-us",
        sc: { w: 1920, h: 1080 }
      })
      Visits.insert({
        dkey: domainId1,
        path: "/contacts",
        ip: "198.98.22.100",
        rf: null,
        rv: null,
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "IE", version: "10.0"},
          engine: { name: "Trident", version: "6.0" },
          os: { name: "Windows", version: "7" },
          device: { model: null, vendor: null, type: "desktop" }
        },
        l: "en-us",
        sc: { w: 1920, h: 1080 }
      })
      Visits.insert({
        dkey: domainId2,
        path: "/",
        ip: "100.100.200.54",
        rf: null,
        rv: null,
        geo: { ll: [-23.960766, -46.396080], c: "BR", ct: "São Vicente", rg: null},
        ua: {
          browser: { name: "Chrome", version: "48.0.2564.116"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: "S20", vendor: "Samsung", type: "desktop" }
        },
        l: "en-uk",
        sc: { w: 1024, h: 768 }
      })
      Visits.insert({
        dkey: domainId2,
        path: "/",
        ip: "100.300.300.53",
        rf: null,
        rv: null,
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Firefox", version: "48.0.2564.116"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Android", version: "6" },
          device: { model: "Moto X", vendor: "Motorola", type: "mobile" }
        },
        l: "en-uk",
        sc: { w: 1280, h: 800 }
      })
      Visits.insert({
        dkey: domainId2,
        path: "/post",
        ip: "255.198.172.99",
        rf: null,
        rv: null,
        geo: { ll: [51.507351, -0.127758], c: "UK", ct: "London", rg: null},
        ua: {
          browser: { name: "Safari", version: "48.0.2564.116"},
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Android", version: "6" },
          device: { model: "Nexus", vendor: "Asus", type: "mobile" }
        },
        l: "en-uk",
        sc: { w: 1024, h: 768 }
      })
      console.log("Seed is done!")
    }
  },
  clear() {
    if (process.env.NODE_ENV === "development") {
      Meteor.users.remove({})
      Visits.remove({})
      Domains.remove({})
    }
  }
}
