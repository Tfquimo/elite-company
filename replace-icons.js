const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(process.cwd()).filter((name) => name.endsWith('.html'));
const svgFb = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.5 3h-2.4v7C18.3 21.1 22 17 22 12z"/></svg>';
const svgWhatsapp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5C18.7 1.7 16 1 13.1 1 7.3 1 2.2 6.1 2.2 11.9c0 2.1.6 4.1 1.7 5.8L1 23l5.6-1.5c1.6.9 3.4 1.4 5.4 1.4 5.8 0 10.9-5.1 10.9-10.9 0-2.9-1.2-5.7-3.4-7.8zM14.8 16.8c-.2.6-.7 1.1-1.3 1.3-.4.2-.9.2-1.5.1-1.5-.2-3-1.4-4.4-3.4-1-1.4-1.6-2.9-1.8-4.3-.1-.5 0-1 .3-1.4.2-.4.6-.6 1-.6h1.4c.3 0 .6.1.8.4l.8 1.3c.2.3.2.6.1 1-.1.4-.3.7-.6.9l-.4.3c-.2.2-.3.3-.2.5.5 1.4 1.6 2.8 3.1 4.3 1.2 1.2 2.4 1.8 3.5 2 .2 0 .4 0 .6-.1.3-.1.5-.3.6-.6l.3-.8c.1-.4.3-.7.7-.8.4-.1.9 0 1.3.1.5.1.9.3 1.2.6.2.3.2.7.1 1l-.4 1.6z"/></svg>';
const svgLinkedin = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C3.34 3.5 2 4.82 2 6.42c0 1.6 1.32 2.92 2.98 2.92h.03C6.6 9.34 8 8 8 6.42 8 4.82 6.64 3.5 4.98 3.5zM2.5 20.5h5V9.5h-5v11zM9.5 20.5h5v-5.7c0-3.2 4-3.45 4 0v5.7h5v-6.9c0-6.3-6.8-6.07-9.6-2.97V9.5h-4.4v11z"/></svg>';
const svgLocation = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5C8.1 2.5 5 5.6 5 9.5 5 14.9 12 21 12 21s7-6.1 7-11.5c0-3.9-3.1-7-7-7zm0 9.9a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z"/></svg>';
const svgPhone = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 2.5h4.8c.7 0 1.3.6 1.3 1.3v2.2c0 .7-.5 1.3-1.2 1.4-.5 0-1.2-.1-1.8-.1-.4 0-.7.1-.9.4l-1.5 1.8c1.2 2.4 2.9 4.2 5.3 5.4l1.9-1.5c.3-.2.6-.5.6-.9 0-.6.1-1.3.1-1.8.1-.7.7-1.2 1.4-1.2h2.2c.7 0 1.3.6 1.3 1.3 0 3.2-1.4 6.3-3.9 8.7-2.5 2.5-5.5 3.9-8.7 3.9-.7 0-1.3-.6-1.3-1.3V8.8c0-.7.5-1.3 1.2-1.4.6-.1 1.1-.2 1.8-.2.4 0 .7-.1.9-.4l1.5-1.8c-.1-.4-.1-1-.1-1.5V3.8c0-.7.6-1.3 1.3-1.3z"/></svg>';
const svgEmail = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 6.5C4 5.7 4.7 5 5.5 5h13c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-13C4.7 19 4 18.3 4 17.5v-11zm1.5.5l6 4.5 6-4.5h-12zm0 10.5V8.2l5.7 4.3c.2.1.5.1.7 0L19 8.2v9.3h-13z"/></svg>';
const svgClock = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 4.5c-4.1 0-7.5 3.4-7.5 7.5S7.9 19.5 12 19.5s7.5-3.4 7.5-7.5S16.1 4.5 12 4.5zm0 13c-3 0-5.5-2.5-5.5-5.5S9 6.5 12 6.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm.2-8.3v3.1l2.3 1.4.7-1.1-1.9-1.2V9.2h-1.1z"/></svg>';

files.forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = content;

  updated = updated.replace(/<a([^>]*aria-label=\"Facebook\"[^>]*)>📘<\/a>/g, `<a$1 class=\"social-icon social-facebook\">${svgFb}</a>`);
  updated = updated.replace(/<a([^>]*aria-label=\"WhatsApp\"[^>]*)>💬<\/a>/g, `<a$1 class=\"social-icon social-whatsapp\">${svgWhatsapp}</a>`);
  updated = updated.replace(/<a([^>]*aria-label=\"LinkedIn\"[^>]*)>💼<\/a>/g, `<a$1 class=\"social-icon social-linkedin\">${svgLinkedin}</a>`);
  updated = updated.replace(/<a([^>]*class=\"whatsapp-float\"[^>]*)>💬<\/a>/g, `<a$1>${svgWhatsapp}</a>`);

  updated = updated.replace(/<div class=\"contact-icon\">📍<\/div>/g, `<div class=\"contact-icon\">${svgLocation}</div>`);
  updated = updated.replace(/<div class=\"contact-icon\">📞<\/div>/g, `<div class=\"contact-icon\">${svgPhone}</div>`);
  updated = updated.replace(/<div class=\"contact-icon\">✉️<\/div>/g, `<div class=\"contact-icon\">${svgEmail}</div>`);
  updated = updated.replace(/<div class=\"contact-icon\">🕐<\/div>/g, `<div class=\"contact-icon\">${svgClock}</div>`);

  updated = updated.replace(/<div class=\"hero-value-icon\">.*?<\/div>/gs, '<div class=\"hero-value-icon\"></div>');
  updated = updated.replace(/<div class=\"service-card-icon\">.*?<\/div>/gs, '<div class=\"service-card-icon\"></div>');

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('updated', file);
  }
});
