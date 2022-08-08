module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("normalize.css");
    eleventyConfig.addPassthroughCopy("frosh2022.css");
    eleventyConfig.addPassthroughCopy("bootstrap.min-scrollspy-collapse-transitions.js");
    eleventyConfig.addPassthroughCopy("sponsors");
    eleventyConfig.addPassthroughCopy("favicon");
    eleventyConfig.addPassthroughCopy("Frosh2022_Logo_NoSH_DarkSubtitle.png");

    return {
        passthroughFileCopy: true
    };
}