module.exports = function() {
    return {
        devServer: {
            contentBase: '/public',
            compress: true,
            stats: 'errors-only',
            port: 8081
            
           }
    };
   
};

console.log('настройки devserver');