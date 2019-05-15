import {
  faUser,
  faBriefcase,
  faCode,
  faLightbulb,
  faNewspaper,
  faGraduationCap,
  faBook,
  faRss,
  faHeartbeat,
  faLeaf,
  faRocket,
  faGem,
  faPencil,
  faGamepad,
  faFilmAlt,
  faPlane,
  faEnvelope
} from '@fortawesome/pro-solid-svg-icons'
import {
  faYoutube,
  faGithub,
  faBehance,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const importAndAddIcons = () => {
  library.add(
    faUser,
    faBriefcase,
    faCode,
    faLightbulb,
    faNewspaper,
    faGraduationCap,
    faBook,
    faRss,
    faHeartbeat,
    faLeaf,
    faRocket,
    faGem,
    faPencil,
    faGamepad,
    faFilmAlt,
    faPlane,
    faEnvelope,
    faYoutube,
    faGithub,
    faTwitter,
    faBehance,
    faWhatsapp
  )
}

export { importAndAddIcons }
