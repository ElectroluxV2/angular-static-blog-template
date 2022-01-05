const Asciidoctor = require('asciidoctor');
const highlightJsExt = require('asciidoctor-highlight.js');
const fs = require('fs');
const asciidoctor = Asciidoctor();
const BLOG_PATH = 'blog';
const RENDERED_PATH = 'src/assets/blog';
const RENDERED_JSON = 'src/assets/blog.json';
const ROUTES_TXT = 'prerender-routes.txt';

highlightJsExt.register(asciidoctor.Extensions);

const renderedPosts = [];

fs.readdirSync(BLOG_PATH).forEach(file => {
  if (!file.endsWith('.adoc')) return;
  console.info(`Rendering file: ${file}`);

  // Render adoc
  const document = asciidoctor.convertFile(`${BLOG_PATH}/${file}`, {
    to_dir: RENDERED_PATH,
    mkdirs: true,
    standalone: false,
    attributes: {
      'source-highlighter': 'highlightjs-ext'
    }
  });

  // Save metadata, use later in Angular service
  const { doctitle: title, description, category, docdatetime: datetime } = document.getAttributes();
  renderedPosts.push({
    filename: file.replace('.adoc', '.html'),
    title,
    description,
    category,
    datetime
  });
});

fs.writeFileSync(RENDERED_JSON, JSON.stringify({posts: renderedPosts}));
fs.writeFileSync(ROUTES_TXT, renderedPosts.map(post => `/blog/${post.filename.replace('.html', '')}`).join('\n'));
