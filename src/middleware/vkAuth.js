const qs = require("querystring");
const crypto = require("crypto");

const mongoose = require("mongoose");
const User = require("../models/User");

const secretKey = "9VyWWYSotHXeeMlrdbEG";

const vkAuth = async (req, res, next) => {
  const urlParams = req.query;
  let isNewUser = false;

  const ordered = {};
  Object.keys(urlParams)
    .sort()
    .forEach((key) => {
      if (key.slice(0, 3) === "vk_") {
        ordered[key] = urlParams[key];
      }
    });

  const stringParams = qs.stringify(ordered);
  const paramsHash = crypto
    .createHmac("sha256", secretKey)
    .update(stringParams)
    .digest()
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=$/, "");

  if (paramsHash === urlParams.sign) {
    const vkUserId = urlParams.vk_user_id;

    let user = await User.findOne({ vkId: vkUserId }).populate("resume");

    if (!user) {
      user = await User.create({
        _id: new mongoose.Types.ObjectId(),
        vkId: vkUserId
      });
      isNewUser = true;
    }

    req.user = user;
    req.isNewUser = isNewUser;
    next();
  } else {
    res.status(403).send("Ошибка авторизации");
  }
};

module.exports = vkAuth;

//?vk_access_token_settings=&vk_app_id=7820093&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=0&vk_language=ru&vk_platform=mobile_web&vk_ref=other&vk_ts=1618079469&vk_user_id=499661605&sign=E2G3Dmq0vRlTJY2wVmKnIxOgxCusPe-L9Asa3bw4wVE
