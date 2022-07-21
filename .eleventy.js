module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("normalize.css");
    eleventyConfig.addPassthroughCopy("frosh2022.css");
    eleventyConfig.addPassthroughCopy("bootstrap.min-scrollspy-collapse-transitions.js");

    return {
        passthroughFileCopy: true
    };
}