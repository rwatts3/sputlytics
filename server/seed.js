Seed = {
  init() {
    if (process.env.NODE_ENV === "development") {
      console.log("Seeding database...");
      Domains.remove({});
      const domainId1 = Domains.insert({domain: "sputlytics.com"});
      const domainId2 = Domains.insert({domain: "blog.sputlytics.com"});
      Visits.remove({});
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com",
        ip: "100.100.88.25",
        geo: { ll: [-23.960766, -46.396080], c: "BR", ct: "São Vicente", rg: null},
        ua: {
          browser: { name: "Chrome", version: "48.0.2564.116", major: "48" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "pt-br",
        screen: { w: 1440, h: 900 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/about",
        ip: "100.100.100.99",
        geo: { ll: [49.282729, -123.120738], c: "CA", ct: "Vancouver", rg: null},
        ua: {
          browser: { name: "Chrome", version: "48.0.2564.116", major: "48" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Mac OSX", version: "10.10" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-ca",
        screen: { w: 1440, h: 900 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/jobs",
        ip: "100.100.100.99",
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5", major: "4" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-uk",
        screen: { w: 768, h: 1280 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/jobs",
        ip: "100.100.100.99",
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5", major: "4" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-uk",
        screen: { w: 768, h: 1280 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/jobs",
        ip: "100.100.100.99",
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5", major: "4" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-uk",
        screen: { w: 768, h: 1280 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/jobs",
        ip: "100.100.100.99",
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Mobile Safari", version: "4.0.5", major: "4" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "iOS", version: "4.0" },
          device: { model: "iPhone", vendor: "Apple", type: "mobile" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-uk",
        screen: { w: 768, h: 1280 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/contacts",
        ip: "100.100.100.99",
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Microsoft Edge", version: "12.0.0.1", major: "12" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-us",
        screen: { w: 1440, h: 900 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/contacts",
        ip: "100.100.100.99",
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Microsoft Edge", version: "12.0.0.1", major: "12" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-us",
        screen: { w: 1440, h: 900 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/contacts",
        ip: "98.92.191.200",
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Opera", version: "12.00", major: "12" },
          engine: { name: "Presto", version: "2.9.181" },
          os: { name: "Windows", version: "7" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-us",
        screen: { w: 1920, h: 1080 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/contacts",
        ip: "100.100.100.99",
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "Microsoft Edge", version: "12.0.0.1", major: "12" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-us",
        screen: { w: 1440, h: 900 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/contacts",
        ip: "198.98.22.100",
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "IE", version: "10.0", major: "10" },
          engine: { name: "Trident", version: "6.0" },
          os: { name: "Windows", version: "7" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-us",
        screen: { w: 1920, h: 1080 }
      });
      Visits.insert({
        dkey: domainId1,
        rf: "http://sputlytics.com/contacts",
        ip: "198.98.22.100",
        geo: { ll: [25.761680, -80.191790], c: "US", ct: "Miami", rg: null},
        ua: {
          browser: { name: "IE", version: "10.0", major: "10" },
          engine: { name: "Trident", version: "6.0" },
          os: { name: "Windows", version: "7" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-us",
        screen: { w: 1920, h: 1080 }
      });


      Visits.insert({
        dkey: domainId2,
        rf: "http://blog.sputlytics.com",
        ip: "100.100.200.54",
        geo: { ll: [-23.960766, -46.396080], c: "BR", ct: "São Vicente", rg: null},
        ua: {
          browser: { name: "Chrome", version: "48.0.2564.116", major: "48" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Windows", version: "10" },
          device: { model: null, vendor: null, type: "desktop" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-uk",
        screen: { w: 1024, h: 768 }
      });
      Visits.insert({
        dkey: domainId2,
        rf: "http://blog.sputlytics.com",
        ip: "100.300.300.53",
        geo: { ll: [51.508002, -1.123456], c: "UK", ct: "West Berkshire", rg: null},
        ua: {
          browser: { name: "Firefox", version: "48.0.2564.116", major: "48" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Android", version: "6" },
          device: { model: null, vendor: null, type: "mobile" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-uk",
        screen: { w: 1280, h: 800 }
      });
      Visits.insert({
        dkey: domainId2,
        rf: "http://blog.sputlytics.com",
        ip: "255.198.172.99",
        geo: { ll: [51.507351, -0.127758], c: "UK", ct: "London", rg: null},
        ua: {
          browser: { name: "Safari", version: "48.0.2564.116", major: "48" },
          engine: { name: "WebKit", version: "537.36" },
          os: { name: "Android", version: "6" },
          device: { model: null, vendor: null, type: "mobile" },
          cpu: { architecture: "amd64" }
        },
        lang: "en-uk",
        screen: { w: 1024, h: 768 }
      });
      Meteor.users.remove({});
      const userId1 = Accounts.createUser({username: "caio", email: "caio@mail.com", password: "123456"});
      const userId2 = Accounts.createUser({username: "lucas", email: "lucas@mail.com", password: "123456"});
      Meteor.users.update(userId1, {$set: {domainIds: [domainId1, domainId2]}});
      Meteor.users.update(userId2, {$set: {domainIds: [domainId1, domainId2]}});
      console.log("Seed is done!");
    }
  }
}
