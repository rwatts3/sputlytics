import {countries} from "countries-list"

CountryService = {
  process(visits) {
    return _
      .chain(visits)
      .map((value) => {
        return {name: value.geo.c || "(not set)" }
      })
      .countBy("name")
      .map((value, key) => {
        return {name: key, total: value}
      })
      .sortBy("total")
      .value()
  },
  group(reports) {
    return _
      .chain(reports)
      .map((value) => {
        return value.topCountries
      })
      .flatten()
      .groupBy("name")
      .map((value, key) => {
        return {
          name: !!countries[key] && countries[key].name || key,
          total: _.reduce(value, (sum, obj) => {
            return sum + obj.total
          }, 0)}
      })
      .sortBy("total")
      .value()
  }
}
