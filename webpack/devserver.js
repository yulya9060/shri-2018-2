module.exports = function() {
    return {
        devServer: {
            contentBase: '/build',
            compress: true,
            stats: 'errors-only',
            port: 8081
            
           }
    };
   
};

console.log('настройки devserver');