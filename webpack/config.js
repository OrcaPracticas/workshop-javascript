/**
 * Configuracion webpack development.
 *
 * @package Brahma.
 * @subPackage Webapck.
 *
 * @uthor Jmendez <jorge.mendez.ortega@gmail.com>
*/
const MERGE = require("webpack-merge");
const NOTIFIER = require("webpack-notifier");
const PATH = require("path");
const AVATAR = PATH.join(__dirname, "../build.png");
/**
 * Configuracion generica.
 */
const COMMON = require("./common.config.js");

const WEBPACK_DEVELOPMENT = () => MERGE(
    COMMON,
    {
        devtool: "eval",
        mode: "development",
        plugins: [
            new NOTIFIER({
                title: "Transpilacion de WorkShop JS",
                contentImage: AVATAR,
            }),
        ],
    },
);

module.exports = WEBPACK_DEVELOPMENT;
