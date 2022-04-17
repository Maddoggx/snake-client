
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(connection);
  return stdin;
};


 const handleUserInput = function(key) {
  let moves;
  if (key === '\u0003') {
    process.exit();
  }

  if (key === "w") {
    moves = "Move: up";
  }

  if (key === "a") {
    moves = "Move: left";
  }

  if (key === "s") {
    moves = "Move: down";
  }

  if (key === "d") {
    moves = "Move: right";
  }

// add a custom message
  if (key === "q") {
    moves = "Say: LETS GOOOOO!!!!"
  }

  connection.write(moves);

};


module.exports = { setupInput };
