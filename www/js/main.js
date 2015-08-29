require.config({
    baseUrl: "js/",

    paths: {
        "react": "react-with-addons",
        "JSXTransformer": "JSXTransformer"
    },

    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
});

require(['react', 'jsx!components/MyContainer']);
