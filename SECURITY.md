# Security Policy - GuidanceAI

## Reporting a Vulnerability
Please email guidance@college.edu with details. We will respond within 48 hours.

## Supported Versions
- v1.0 (current) - actively maintained

## Security Measures
- **Frontend**: CSP, XSS sanitization (escapeHtml), SRI for CDNs, input validation, rate limiting (30/min anon)
- **Backend**: Django SecurityMiddleware, HSTS, XSS filter, CSRF, CORS restricted, throttling, input validation, pickle validation
- **Data**: No sensitive data stored, localStorage only, no SQL injection (ORM), 500-record synthetic dataset

## Best Practices for Deployment
- Set `DJANGO_SECRET_KEY` env var (not default)
- Set `DJANGO_DEBUG=False`
- Set `DJANGO_ALLOWED_HOSTS` to your domain
- Use HTTPS (Vercel/Render handles)
- Keep dependencies updated: `pip audit` and `npm audit`
