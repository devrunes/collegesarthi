const withImages = require("next-images");
module.exports = withImages({
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
});
// const withImages = require("next-images");
// module.exports = {
//   images: {
//     domains: ["firebasestorage.googleapis.com"],
//   },
// };
// module.exports = withImages();
