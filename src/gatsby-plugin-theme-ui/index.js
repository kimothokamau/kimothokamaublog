
import baseTheme from 'gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui'

export default {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      text: "#333",
      background: "#fff",
      primary: "tomato",
    },
    fonts: {
      body: "Georgia, serif",
      heading: "system-ui, sans-serif",
    },
  }


// import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"

// export default {
//   ...baseTheme,
//   colors: {
//     ...baseTheme.colors,
//     text: "#333",
//     background: "#fff",
//     primary: "tomato",
//   },
//   fonts: {
//     body: "Georgia, serif",
//     heading: "system-ui, sans-serif",
//   },
// }