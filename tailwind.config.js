// tailwind.config.js
module.exports = {
    purge: {
        content: ['./src/**/*.html'],

        // These options are passed through directly to PurgeCSS
        options: {
            safelist: ['bg-red-500', 'px-4'],
            blocklist: [/^debug-/],
            keyframes: true,
            fontFace: true,
        },
    },
    // ...
}