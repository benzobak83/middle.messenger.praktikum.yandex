import Handlebars from "handlebars";

const handlebarsHelpers = () => {
  Handlebars.registerHelper("isDefaultAvatar", function (value) {
    if (typeof value === "undefined" || value == null) return true;
    return value.includes("default_avatar");
  });

  Handlebars.registerHelper("formatDate", function (value) {
    return new Date(value).toLocaleString();
  });
};

export { handlebarsHelpers };
