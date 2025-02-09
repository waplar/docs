import DefaultTheme from 'vitepress/theme'
import Team from './Team.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.component('Team', Team)
    },
}