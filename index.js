const gulp_imagemin = require('gulp-imagemin');
const imagemin_mozjpeg = require('imagemin-mozjpeg');
const imagemin_pngquant = require('imagemin-pngquant');
const imagemin_svgo = require('imagemin-svgo');

module.exports = () => {
    return gulp_imagemin([
            imagemin_mozjpeg({
                quality: 90,
                progressive: true,
            }),
            imagemin_pngquant({}),
            imagemin_svgo({
                plugins: [
                    {removeViewBox: false}
                ]
            })
        ], {
            verbose: true
        }
    )
};