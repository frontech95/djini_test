module.exports = {
    postcss: [],
    svg: {
        active: true,
        workflow: 'sprite',
        symbolsConfig: {
            loadingType: 'inject',
            usePolyfillForExternalSymbols: true,
            pathToExternalSymbolsFile: '',
        },
    },
    css: {
        workflow: 'concat',
    },
    js: {
        workflow: 'modular',
        bundler: 'webpack',
        lint: true,
        useBabel: true,
        removeConsoleLog: true,
        webpack: {
            useHMR: false,
            providePlugin: {
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                // "Vue": "vue"
            },
        },
        jsPathsToConcatBeforeModulesJs: [],
        lintJsCodeBeforeModules: false,
        jsPathsToConcatAfterModulesJs: [],
        lintJsCodeAfterModules: false,
    },
    sourcemaps: {
        js: {
            active: true,
            inline: true,
        },
        css: {
            active: true,
            inline: true,
        },
    },
    notifyConfig: {
        useNotify: false,
        title: 'TARS notification',
        sounds: {},
        taskFinishedText: 'Task finished at: ',
    },
    minifyHtml: false,
    generateStaticPath: true,
    devPath: './dev/',
    buildPath: './builds/',
    useBuildVersioning: false,
    useArchiver: false,
    ulimit: 4096,
    templater: 'pug',
    cssPreprocessor: 'scss',
    useImagesForDisplayWithDpi: [96],
    fs: {
        staticFolderName: 'assets',
        imagesFolderName: 'img',
        componentsFolderName: 'components',
    },
    staticPrefix: 'assets_main/',
};
