const config = {
    mode: "production",
    entry: {
        index: "./src/js/index.js",
    },
    output: {
        filename: "[name].bundle.js",
    },
};

module.exports = config;