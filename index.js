// Code your solution here:

function driversWithRevenueOver(dri, rev) {
  return dri.filter(el => {return el.revenue > rev})
}

function driverNamesWithRevenueOver(dri, rev) {
  return dri.filter(el => {return el.revenue > rev}).map(el => el.name)
}

function exactMatch(dri, obj) {
  return dri.filter(el => {
    return el[Object.keys(obj)] === obj[Object.keys(obj)]
  })
}

function exactMatchToList(dri, obj) {
  debugger
}


const extendedDrivers = [];
extendedDrivers.push(
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 },
  { name: 'Sally',   revenue: 200 }
);
