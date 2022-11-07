import { refs } from './js/reference/homeRefs.js';
import { trendsControls } from './js/controls';
import { onOpenModalFilm } from './js/modal';
import { onClick } from './js/modal';
import { scrollToTop } from './js/controls';

trendsControls();
onOpenModalFilm();
onClick(refs.footerBtn);
scrollToTop();
