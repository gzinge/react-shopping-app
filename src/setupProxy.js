const proxy = require("http-proxy-middleware");

module.exports = function(app){
    aap.use(
        proxy("/user",{
            target:"http://localhost:58009",
            changeOrigin:true
        })
    );
};