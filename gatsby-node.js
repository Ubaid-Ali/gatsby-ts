exports.createPages = async function ({ actions }) {
  console.log("End of Gatsby Node File");

  actions.createPage({
    path: "my_dynamic_page",
    component: require.resolve("./src/templates/dynamic-page.tsx"),
    context: {
      name: "Hello Mr.Abc",
    },
  });

  console.log("End of Gatsby Node File");
};
