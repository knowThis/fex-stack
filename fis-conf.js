/**
 * Created by zhoub on 2015/10/1.
 */
fis.match('*.js', {
    useHash: false,
    optimizer: fis.plugin('uglify-js'),

});

fis.match('*.css', {
    useHash: false,
    optimizer: fis.plugin('clean-css'),

});

fis.match('*.png', {
    useHash: false,
    optimizer: fis.plugin('png-compressor')
});
