import Handlebars from "handlebars";

const handlebarsHelpers = () => {
  Handlebars.registerHelper("isDefaultAvatar", function (value) {
    if (typeof value === "undefined") return false;
    return value.includes("default_avatar");
  });
};

export { handlebarsHelpers };
