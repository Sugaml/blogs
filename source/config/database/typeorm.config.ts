import { createConnection } from 'typeorm';

export default createConnection().then((connection) => {
  return connection;
});
