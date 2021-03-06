const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP ADDRESS HERE
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', message => {
    console.log(message);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AA");
  });
    /*
    setTimeout(() => {
       conn.write("Move: left");
     }, 50);
     setInterval(() => {
       conn.write("Move: down");
     }, 50);
*/
  return conn;
}
module.exports = { connect };
