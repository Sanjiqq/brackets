module.exports = function check(str, bracketsConfig) {
    // function check(str, bracketsConfig)
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (!str.includes(bracketsConfig[i].join("")));
        else {
            str = str.replace(bracketsConfig[i].join(""), "");
            i = 0;
        }
    }
    if (str.length == 0) return true;
    else return false;
};
