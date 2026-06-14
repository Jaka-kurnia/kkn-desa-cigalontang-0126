const https = require('https');
https.get({
  hostname: 'nominatim.openstreetmap.org',
  path: '/search?q=Cigalontang,Tasikmalaya&format=json&polygon_geojson=1',
  headers: { 'User-Agent': 'FigmaMake' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data.substring(0, 500)));
});