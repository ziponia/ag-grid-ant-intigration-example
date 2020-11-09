import express from "express";
import cors from "cors";
import logger from "morgan";

import users from "./controller/users.controller";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(logger("tiny"));
app.use(users);

app.listen(PORT, () => console.log(`Server Run :${PORT}`));
