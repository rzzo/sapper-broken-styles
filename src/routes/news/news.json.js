import news from '../../../data/news';

const newsWithNoHtml = news.map(newsPost => ({ ...newsPost, html: 'N/A' }))
const content = JSON.stringify(newsWithNoHtml);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(content);
}
