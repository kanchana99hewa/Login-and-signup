const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect()