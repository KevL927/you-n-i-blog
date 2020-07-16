module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("url", function(value) {
    return value;
  });
};