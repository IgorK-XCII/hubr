const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const dbPath = path.resolve(__dirname, 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(dbPath);

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((r) => {
    setTimeout(r, 800);
  });
  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) return res.status(403).json({ message: 'AUTH ERROR' });

  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const { users } = db;

  const userFromBd = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (userFromBd) return res.json(userFromBd);

  return res.status(403).json({ message: 'user not found' });
});

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
