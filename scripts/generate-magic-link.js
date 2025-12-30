#!/usr/bin/env node

/**
 * Magic Link Generator for Lead-Gen Campaigns
 * Generates personalized URLs for dynamic industry landing pages
 * 
 * Usage:
 *   node scripts/generate-magic-link.js --company "Gucci" --industry "fashion"
 *   node scripts/generate-magic-link.js --company "Ritz Carlton" --industry "hospitality" --ref "agent001"
 *   node scripts/generate-magic-link.js --batch companies.json
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourstudio.com';
const SUPPORTED_INDUSTRIES = [
    'fashion',
    'hospitality',
    'real-estate',
    'retail',
    'healthcare',
    'technology',
];

/**
 * Generate a magic link for a single company
 */
function generateMagicLink(company, industry, ref = null) {
    // Validate industry
    if (!SUPPORTED_INDUSTRIES.includes(industry.toLowerCase())) {
        console.warn(`Warning: "${industry}" is not a supported industry. Using generic template.`);
    }

    // URL encode company name
    const encodedCompany = encodeURIComponent(company);
    const encodedIndustry = encodeURIComponent(industry.toLowerCase());

    // Build query parameters
    const params = new URLSearchParams({
        company: company,
    });

    if (ref) {
        params.append('ref', ref);
    }

    // Generate full URL
    const fullUrl = `${BASE_URL}/solutions/${encodedIndustry}?${params.toString()}`;

    // Generate short-friendly version (for display)
    const shortUrl = `${BASE_URL}/solutions/${encodedIndustry}`;

    return {
        company,
        industry,
        ref,
        fullUrl,
        shortUrl,
        displayUrl: fullUrl.replace(BASE_URL, 'yoursite.com'), // For email templates
    };
}

/**
 * Generate magic links from a batch file
 */
function generateBatch(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const companies = JSON.parse(data);

        if (!Array.isArray(companies)) {
            throw new Error('Batch file must contain an array of companies');
        }

        const results = companies.map((item) => {
            if (!item.company || !item.industry) {
                console.error('Skipping invalid entry:', item);
                return null;
            }

            return generateMagicLink(item.company, item.industry, item.ref);
        }).filter(Boolean);

        return results;
    } catch (error) {
        console.error('Error reading batch file:', error.message);
        process.exit(1);
    }
}

/**
 * Format output for display
 */
function formatOutput(links) {
    if (links.length === 1) {
        const link = links[0];
        console.log('\n✨ Magic Link Generated!\n');
        console.log(`Company:  ${link.company}`);
        console.log(`Industry: ${link.industry}`);
        if (link.ref) console.log(`Ref:      ${link.ref}`);
        console.log('\n📧 For Email Template:');
        console.log(`   ${link.displayUrl}`);
        console.log('\n🔗 Full URL:');
        console.log(`   ${link.fullUrl}`);
        console.log('\n💡 Short URL (for display):');
        console.log(`   ${link.shortUrl}`);
        console.log('');
    } else {
        console.log(`\n✨ Generated ${links.length} Magic Links!\n`);
        links.forEach((link, index) => {
            console.log(`${index + 1}. ${link.company} (${link.industry})`);
            console.log(`   ${link.fullUrl}\n`);
        });

        // Optionally save to file
        const outputPath = path.join(process.cwd(), 'magic-links-output.json');
        fs.writeFileSync(outputPath, JSON.stringify(links, null, 2));
        console.log(`📄 Full results saved to: ${outputPath}\n`);
    }
}

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {};

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === '--company' && args[i + 1]) {
            options.company = args[i + 1];
            i++;
        } else if (arg === '--industry' && args[i + 1]) {
            options.industry = args[i + 1];
            i++;
        } else if (arg === '--ref' && args[i + 1]) {
            options.ref = args[i + 1];
            i++;
        } else if (arg === '--batch' && args[i + 1]) {
            options.batch = args[i + 1];
            i++;
        } else if (arg === '--help' || arg === '-h') {
            options.help = true;
        }
    }

    return options;
}

/**
 * Display help message
 */
function showHelp() {
    console.log(`
Magic Link Generator for Lead-Gen Campaigns

Usage:
  node scripts/generate-magic-link.js [options]

Options:
  --company <name>     Company name (required for single link)
  --industry <type>    Industry type (required for single link)
  --ref <reference>    Optional reference/tracking code
  --batch <file>       Generate from JSON file (array of {company, industry, ref?})
  --help, -h           Show this help message

Supported Industries:
  ${SUPPORTED_INDUSTRIES.join(', ')}

Examples:
  # Single link
  node scripts/generate-magic-link.js --company "Gucci" --industry "fashion"

  # With reference code
  node scripts/generate-magic-link.js --company "Ritz Carlton" --industry "hospitality" --ref "agent001"

  # Batch generation
  node scripts/generate-magic-link.js --batch companies.json

Batch File Format (companies.json):
  [
    { "company": "Gucci", "industry": "fashion", "ref": "agent001" },
    { "company": "Ritz Carlton", "industry": "hospitality", "ref": "agent002" }
  ]
  `);
}

/**
 * Main execution
 */
function main() {
    const options = parseArgs();

    if (options.help) {
        showHelp();
        return;
    }

    let links = [];

    if (options.batch) {
        // Batch mode
        links = generateBatch(options.batch);
    } else if (options.company && options.industry) {
        // Single link mode
        const link = generateMagicLink(options.company, options.industry, options.ref);
        links = [link];
    } else {
        console.error('Error: Missing required arguments\n');
        showHelp();
        process.exit(1);
    }

    formatOutput(links);
}

// Run the script
main();
