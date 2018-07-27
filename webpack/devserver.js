module.exports = function() {
    return {
        devServer: {
            contentBase: '/public',
            compress: true,
            stats: 'errors-only',
            port: 8082
            
           }
    };
   
};

console.log('настройки devserver');