import doc from '../../data/setup';

const docWithNoHtml = doc.map(docPost => ({ ...docPost, html: '' }))
const content = JSON.stringify(docWithNoHtml);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(content);
}
