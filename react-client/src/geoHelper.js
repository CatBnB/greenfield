import get from './ajaxHelper.js';

// data rounded to 7 decimal places
var formatGeoData = data => {
  var coordinates = data.results[0].geometry.location;
  return [coordinates.lat, coordinates.lng];
}

var getAutocomplete = (input, cb) => {
  var endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=AIzaSyBcxddjCYsNoBYFD_52AGkJpFKw2lCjlOE`;
  get(endpoint, data => db(data));
}

var getCoordinates = (address, cb) => {
  var endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBcxddjCYsNoBYFD_52AGkJpFKw2lCjlOE`;
  get(endpoint, data => db(formatGeoData(data)));
}

export default {
  getAutocomplete,
  getGeocoding
}
