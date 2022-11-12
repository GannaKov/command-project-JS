import { paginationRenderL } from './paginationL';
import { paginationRenderSmall } from './paginationSmall';
import { refs } from '../reference/homeRefs';
import { paginationArrowHidden } from './paginationArrowHidden';
import { paginationRenderMobile } from './paginationMobile';

export function paginationControl(
  totalPage,
  currentPage,
  trendUrl,
  funcOnClick
) {
  if (screen.width >= 768) {
    if (totalPage > 9) {
      const renderedPagination = paginationRenderL(
        Number(totalPage), // total page
        Number(currentPage), // current page
        trendUrl // big part of url
      );
      refs.paginationEl.innerHTML = renderedPagination;
      paginationArrowHidden(currentPage, totalPage);
    }
    if (totalPage <= 9) {
      const renderedPagination = paginationRenderSmall(
        Number(totalPage), // total page
        Number(currentPage), // current page
        trendUrl // big part of url
      );
      refs.paginationEl.innerHTML = renderedPagination;
      paginationArrowHidden(currentPage, totalPage);
    }
  } else {
    const renderedPagination = paginationRenderMobile(
      Number(totalPage), // total page
      Number(currentPage), // current page
      trendUrl // big part of url);
    );
    refs.paginationEl.innerHTML = renderedPagination;
    paginationArrowHidden(currentPage, totalPage);
  }

  refs.paginationEl.addEventListener('click', funcOnClick);
}
