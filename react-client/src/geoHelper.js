import {get} from './ajaxHelper.js';

// data rounded to 7 decimal places
var formatGeoData = data => {
  var coordinates = data.results[0].geometry.location;
  return [coordinates.lat, coordinates.lng];
}

var getAutocomplete = (input) => {
  var endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=AIzaSyBcxddjCYsNoBYFD_52AGkJpFKw2lCjlOE`;
  return get(endpoint);
}

export const getCoordinates = (address) => {
  var endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBcxddjCYsNoBYFD_52AGkJpFKw2lCjlOE`;
  return get(endpoint).then(data => formatGeoData(data));
}

export const getCoordinatesFromInput = (input) => {
  return getAutocomplete(input).then(data => data.predictions[0].description)
                               .then(address => getCoordinates(address));
}
