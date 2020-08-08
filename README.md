# App Store

## Framework7 CN CLI Options

Framework7Cn app created with following options:

```
{
  "cwd": "/Users/fengzhuojia/Documents/GitHub/framework7-cn-appstore-vue",
  "type": [
    "pwa"
  ],
  "name": "App Store",
  "framework": "vue",
  "template": "tabs",
  "bundler": "webpack",
  "cssPreProcessor": "less",
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false,
  "webpack": {
    "developmentSourceMap": true,
    "productionSourceMap": true,
    "hashAssets": false,
    "preserveAssetsPaths": false,
    "inlineAssets": true
  }
}
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build-dev` - build web app using development mode (faster build without minification and optimization)
* 🔧 `build-prod` - build web app for production

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7-cn assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7-cn assets --ui
```

## Documentation & Resources

* [Framework7Cn Core Documentation](https://framework7.io/docs/)
* [Framework7CnVue Documentation](https://framework7.io/vue/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7CN

Love Framework7Cn? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi