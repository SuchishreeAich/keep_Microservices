const app = require('../app');
const config = require('../config');

app.listen(config.PORT, () => {
   console.log('notes on port : '+config.PORT);
})