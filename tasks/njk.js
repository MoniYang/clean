// gulp 流程
const gulp              = require('gulp'); // 建立 gulp 環境
const plumber           = require('gulp-plumber'); // 處理錯誤，修正後自動重新編譯(watch不中斷)

// css 相關
const sass              = require('gulp-sass'); // .scss 編譯為 .css
const autoprefixer      = require('gulp-autoprefixer'); // .css 增加瀏覽器前綴字如： -ms- | -webkit-

// html 相關
const nunjucksRender    = require('gulp-nunjucks-render'); // .njk 編譯為 .html
const htmlbeautify      = require('gulp-html-beautify'); // .html 原始碼格式化

// 檔案操作
const concat            = require('gulp-concat'); // 將多個檔案合併為一個
const rename            = require('gulp-rename'); // 對檔案/目錄進行更名
// var clean             = require('gulp-clean'); // 刪除檔案/目錄

// 預覽相關
const browserSync       = require('browser-sync').create(); // 建立本地端伺服器，頁面即時更新

// 優化相關
// var imagemin          = require('gulp-imagemin'); // 壓縮 PNG, JPEG, GIF, SVG 圖片

// 新增全域變數給圖片路徑變數使用, Core/Lic 可自訂路徑
// const manageEnvironment_Core = function(environment) {
//     environment.addGlobal('core_img_path', '../../../'); // 預設開啟 credit
//     environment.addGlobal('lic_img_path', '../../../../../../nf/public/Views/'); // 預設開啟 credit
// };




// -------------------------------------------------------------
//  gulp-nunjucks-render - 編譯 AsiaView2022
// -------------------------------------------------------------
function njk(cb) {
    // 原始 .njk 所在位置
    return gulp.src([
        // 此路徑內的 .njk 皆會編譯為 .html
        './app/source/Views/**/*.njk',

        // 例外：略過編譯 "Include" 內的 .njk
        '!./app/source/Views/**/include/*.njk', 
    ])

    // "gulp-plumber" - 指定以此插件處理錯誤，修正後自動重新編譯(watch不中斷)
    // .pipe(plumber())

    // 指定編譯 .njk 的路徑
    .pipe(nunjucksRender({
        // .njk 內的語法: {% extends %}, {% include %}，將以此為根路徑
        path: './app/',

        // 初始資料設定
        data: {
            lang: 'en', // 預設語系
            img:'../../images',
            source_path: '../../', // css 預設相對路徑
          
            platform: 'desktop', // 預設平台
        },
        // manageEnv: manageEnvironment_Core // 加上全域變數 (供 Credit / Lic 設定獨有區塊)
    }))

    // "gulp-html-beautify" - .html 原始碼格式化
    .pipe(htmlbeautify({
        indent_size: 4,    // 縮排數量: 4
        indent_char: ' ',  // 縮排字元: 空格
        unformatted: true  // 標籤獨占一行：是 | 否
    }))

    // 編譯後輸出 .html 目標位置
    .pipe(gulp.dest('./app/public/Views/'))

    // "browser-sync" 即時更新 .html
    .pipe(browserSync.stream());

    cb();
}




// -------------------------------------------------
//  發布任務
// -------------------------------------------------
module.exports = {
    njk
}