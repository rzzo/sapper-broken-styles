import news from '../../../data/news';

const newsWithNoHtml = news.map(newsPost => ({ ...newsPost, html: 'N/A' }));
// const [one, two, three, four] = newsWithNoHtml;

let content = "";
if (newsWithNoHtml.length < 4) {
	content = newsWithNoHtml;
} else {
	content = newsWithNoHtml.slice(0, 4);
}



export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

	res.end(JSON.stringify(content, null, 4));
}
