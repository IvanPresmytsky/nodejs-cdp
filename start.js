import models from './models';
import config from './config/config.json'

console.log(config.name);
const user = new models.User();
const product = new models.Product();
