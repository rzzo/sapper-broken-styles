import { getDateFromPrettyDate} from '../../src/utils/date';
import news from './*.md';

news.sort((a, b) => {
    const aDate = getDateFromPrettyDate(a.date);
    const bDate = getDateFromPrettyDate(b.date);

    return bDate - aDate;
  });

export default news;
