module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("normalize.css");
    eleventyConfig.addPassthroughCopy("frosh2022.css");

    return {
        passthroughFileCopy: true
    };
}