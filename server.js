const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/link-account', (req, res) => {
  const { platform, username } = req.body;
  console.log(`Linked ${platform} account for ${username}`);
  res.json({ message: `Account linked for ${platform}!` });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
