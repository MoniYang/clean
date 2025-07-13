const { parallel, series, task }  = require('gulp');
// const core_asia                   = require("./tasks/");
const core_njk               = require("./tasks/njk");


// const core_popuppages             = require("./tasks/infinity/Popuppages");



// Asiaview 2022 CSS
// // -------------------------------------------------
// task('c-css-asia-global',                                   // 編譯 global/global-core.css, global-l/global-core.css, global-popup-pages.css
//     parallel(
//         core_asia.css_asia_global,
//         core_asia.css_asia_global_l,
//         core_popuppages.css_popup_global
//     )
// );
// task('c-css-asia-icon-global',                              // 編譯 global/global-core.css, global-l/global-core.css, global-theme.css, global-popup-pages.css
//     parallel(
//         core_asia.css_asia_global,
//         core_asia.css_asia_global_l,
//         core_asia.css_asia_theme,
//         core_popuppages.css_popup_global
//     )
// );
// task('c-css-asia', core_asia.css_asia_global);              // 編譯 global/global-core.css
// task('c-css-asia-l', core_asia.css_asia_global_l);          // 編譯 global-l/global-core.css
// task('c-css-asia-site', core_asia.css_asia_site);           // 編譯指定 site 的 main-core.css
// task('c-css-asia-credit', core_asia.css_asia_credit);       // 編譯 credit site 的 main-core.css
// task('c-css-asia-theme', core_asia.css_asia_theme);         // 編譯 credit site 的 global-theme.css
// task('c-css-asia-theme-all',                                // 編譯 credit site 的 global-theme.css / 編譯 membersite-help 的 global-theme.css (用於 RnR)
//     parallel(
//         core_asia.css_asia_theme,
//         core_asia.css_asia_theme_rnr
//     )
// );
// task('c-css-asia-auto', core_asia.css_asia_auto);             // 編譯 credit site 的 global-colorscheme.css
// task('c-css-asia-lic', core_asia.css_asia_lic);             // 編譯 Athena000 的 main-core.css




// Asiaview 2022 NJK
// -------------------------------------------------
task('njk', core_njk.njk);                       // 編譯 Asia Html 靜態頁



// task('c-html',                                                    // 編譯所有 Asia Html 靜態頁
//     series(
//         core_asia_njk.njk_asia
//     )
// );




// NF All Tasks
// -------------------------------------------------
// const nf                          = require('./tasks/nf');