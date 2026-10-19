# Rossi Brothers Contracting website

## Contact form setup

The contact form sends submissions through EmailJS. Configure these Vite environment variables for both local builds and the Netlify site:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

For Netlify, add all three under the site's environment variables and trigger a new deploy after saving them. Environment files are excluded from Git, so the local `.env` values do not automatically reach Netlify. Confirm that the selected EmailJS template uses the form's fields (`from_name`, `from_email`, `phone`, `address`, `city`, `state`, `zipcode`, and `message`) and routes messages to the intended inbox.

The production build command is `npm run build`; it generates the sitemap and writes the Vite site to `dist`.
