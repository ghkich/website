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
  faPlane
} from '@fortawesome/pro-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
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
    faYoutube
  )
}

export { importAndAddIcons }
