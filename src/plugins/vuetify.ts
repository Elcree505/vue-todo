import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

export default vuetify

// import { createVuetify, ThemeDefinition } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const customTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: '#212529',
//     surface: '#FFFFFF',
//     primary: '#337ab7',
//     'primary-darken-1': '#3700B3',
//     secondary: '#03DAC6',
//     'secondary-darken-1': '#018786',
//     error: '#d9534f',
//     info: '#5bc0de',
//     success: '#5cb85c',
//     warning: '#f0ad4e',
//   },
// }

// export default createVuetify({
//   components,
//   directives,
//   theme: {
//     defaultTheme: 'customTheme',
//     themes: {
//       customTheme,
//     },
//   },
// })