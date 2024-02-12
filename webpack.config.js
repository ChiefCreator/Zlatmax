const config = {
    mode: "production",
    entry: {
        index: "./src/js/index.js",
        catalog: "./src/js/catalog.js",
    },
    output: {
        filename: "[name].bundle.js",
    },
};

module.exports = config;