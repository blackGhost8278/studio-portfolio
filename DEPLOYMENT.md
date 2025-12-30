# Production Deployment Checklist

## Elite-Level Polish Items

### 1. Dynamic Open Graph Images ✅
- [x] Created `/api/og/route.tsx` for dynamic OG image generation
- [x] Integrated with industry landing pages
- [x] Personalized images show company name and industry theme
- [ ] Test OG images in Slack, WhatsApp, LinkedIn

**Result:** When leads share your magic links, they see "Bespoke Fashion Solutions for Gucci" in luxury gold theme.

### 2. Agent Handshake Notifications ✅
- [x] Added webhook notification to industry landing pages
- [x] Triggers when page loads with `company` and `ref` parameters
- [ ] Configure webhook URL in environment variables
- [ ] Test notifications in Discord/Slack

**Result:** Get real-time alerts when high-value leads click your magic links.

---

## Pre-Deployment Tasks

### Assets & Content
- [ ] Replace placeholder images with real project screenshots
- [ ] Add actual 3D video renders to `/public/videos/`
- [ ] Update project descriptions in Web Dev page
- [ ] Add real client testimonials (if applicable)

### Configuration
- [ ] Set up Cloudinary account and add credentials to `.env.local`
- [ ] Configure webhook URL for agent notifications
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Review and update all metadata (titles, descriptions)

### Performance Optimization
- [ ] Enable Vercel Speed Insights
- [ ] Monitor Interaction to Next Paint (INP) on mobile
- [ ] Test video loading on 3G connection
- [ ] Verify Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Run Lighthouse audit (target: 90+ all categories)

### Testing
- [ ] Test all navigation links
- [ ] Verify VibeCheckForm submission
- [ ] Test LiveUISwitcher theme transitions
- [ ] Verify VideoGallery category filtering
- [ ] Test TypewriterCode on different browsers
- [ ] Test magic links with different industries/companies
- [ ] Verify OG images display correctly when shared

### Security & SEO
- [ ] Add robots.txt
- [ ] Add sitemap.xml
- [ ] Configure security headers in `next.config.ts`
- [ ] Add analytics (Google Analytics, Plausible, or Vercel Analytics)
- [ ] Set up error monitoring (Sentry, LogRocket)

---

## Deployment Steps

### 1. Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### 2. Environment Variables
Add to Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://yourstudio.com
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

### 3. Custom Domain
- [ ] Add custom domain in Vercel dashboard
- [ ] Configure DNS records
- [ ] Enable SSL (automatic with Vercel)
- [ ] Verify domain is accessible

### 4. Post-Deployment
- [ ] Test all pages on production URL
- [ ] Generate test magic links
- [ ] Share magic link in Slack to verify OG image
- [ ] Monitor webhook notifications
- [ ] Check Vercel Speed Insights dashboard

---

## Magic Link Testing

### Test Scenarios
1. **Fashion Industry:**
   ```bash
   node scripts/generate-magic-link.js --company "Gucci" --industry "fashion" --ref "test001"
   ```
   - Verify luxury gold theme
   - Check OG image shows "Bespoke Fashion Solutions for Gucci"
   - Confirm webhook notification received

2. **Hospitality Industry:**
   ```bash
   node scripts/generate-magic-link.js --company "Ritz Carlton" --industry "hospitality" --ref "test002"
   ```
   - Verify emerald/maroon theme
   - Check personalized headline
   - Confirm webhook notification

3. **Generic Fallback:**
   ```bash
   node scripts/generate-magic-link.js --company "Test Co" --industry "unknown" --ref "test003"
   ```
   - Verify fallback theme
   - Check generic messaging

---

## Performance Monitoring

### Key Metrics to Watch
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **INP (Interaction to Next Paint):** < 200ms (critical for animations)

### Vercel Speed Insights
Enable in Vercel dashboard to monitor:
- Real User Monitoring (RUM)
- Core Web Vitals by page
- Device-specific performance
- Geographic performance data

### Video Performance
- Monitor video loading times on mobile
- Check CDN cache hit rates (Cloudinary dashboard)
- Verify adaptive bitrate streaming works
- Test on throttled 3G connection

---

## Lead-Gen Integration

### Agent Configuration
1. Update agent with production magic link generator
2. Configure batch processing for campaigns
3. Set up webhook monitoring dashboard
4. Test full lead-gen workflow:
   - Agent scrapes lead
   - Generates magic link
   - Sends personalized email
   - Lead clicks link
   - Webhook notification received
   - Follow-up triggered

### Conversion Tracking
- [ ] Set up conversion goals in analytics
- [ ] Track magic link click-through rates
- [ ] Monitor VibeCheckForm submission rates
- [ ] Measure time-to-conversion by industry

---

## Optional Enhancements

### Future Features
- [ ] Add BeforeAfter slider for IPTV page
- [ ] Implement contact form backend (Resend, SendGrid)
- [ ] Add blog/case studies section
- [ ] Create admin dashboard for lead management
- [ ] Add A/B testing for magic link variations
- [ ] Implement progressive web app (PWA) features

### Advanced Analytics
- [ ] Heat mapping (Hotjar, Microsoft Clarity)
- [ ] Session recording
- [ ] Funnel analysis
- [ ] Cohort analysis by industry

---

## Support & Maintenance

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error alerts (Sentry)
- Monitor webhook delivery rates
- Track CDN performance

### Regular Tasks
- Weekly: Review Speed Insights data
- Monthly: Update project portfolio
- Quarterly: Refresh 3D renders
- As needed: Add new industries to config

---

**Deployment Status:** Ready for production  
**Next Action:** Configure environment variables and deploy to Vercel
