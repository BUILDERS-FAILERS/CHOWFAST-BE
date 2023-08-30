// require('dotenv').config();
export default {
  port: process.env.PORT || 8000,
  ip: process.env.HOST || "0.0.0.0",
  mongo: {
    // eslint-disable-next-line max-len
    uri: process.env.MONGO_URL || "mongodb+srv://foodBE-api:o1cgVlDLm81mZNVC@foodbecluster.dosyhmx.mongodb.net/?retryWrites=true&w=majority"
  },
  redis: {
    // eslint-disable-next-line max-len
    uri: process.env.REDIS_URL || "redis://default:OrSq4ABL4g9bpuAx26NZeH21jXI987fK@redis-19667.c239.us-east-1-2.ec2.cloud.redislabs.com:19667"
    // uri: "redis://127.0.0.1:6379"
  },
  jwtSecret: process.env.JWT_SECRET
};
