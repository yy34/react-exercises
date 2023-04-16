const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const userFile = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
const middlewares = jsonServer.defaults();
const SECRET_KEY = "1907FB_?";

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());
server.use(middlewares);

const tokenGenerate = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  return token;
};

const checkMail = ({ email }) => {
  const check = userFile.users.findIndex((user) => user.email === email) !== -1;
  return check;
};
const checkMailPass = ({ email, password }) => {
  const check = (user) => user.email === email && user.password === password;
  return userFile.users.findIndex(check) !== -1;
};
server.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  if (checkMail({ email })) {
    res.status(401).json({ message: "email already taken" });
    return;
  }

  fs.readFile("./users.json", (fileErr, fileData) => {
    if (fileErr) {
      res.status(401).json({ fileErr });
      return;
    }
    fileData = JSON.parse(fileData.toString());
    fileData.users.push({
      id: fileData.users.length + 1,
      email: email,
      password: password,
    });
    fs.writeFile(
      "./users.json",
      JSON.stringify(fileData),
      function (fileErr, result) {
        if (fileErr) {
          res.status(401).json({ fileErr, result });
          return;
        }
      }
    );
  });

  res.status(200).json({ token: tokenGenerate({ email, password }) });
});

server.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!checkMailPass({ email, password })) {
    res.status(401).json({ message: "invalid mail or pass" });
    return;
  }
  res.status(200).json({ token: tokenGenerate({ email, password }) });
});

server.listen(4000, () => {
  console.log("running server");
});
