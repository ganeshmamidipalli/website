# Contentful CMS Setup Guide

This guide will walk you through setting up Contentful CMS for your AI Engineer portfolio website.

## 1. Create Contentful Account

1. Go to [contentful.com](https://contentful.com)
2. Sign up for a free account
3. Create a new space for your portfolio

## 2. Create Content Types

### Project Content Type

**Content Type ID**: `project`

**Fields**:
- `title` (Text - Short text) - Required
- `slug` (Text - Short text) - Required, unique
- `description` (Text - Long text) - Required
- `content` (Rich text) - Required
- `techStack` (Array - Text - Short text) - Required
- `githubUrl` (Text - Short text) - Optional
- `demoUrl` (Text - Short text) - Optional
- `featuredImage` (Media - Single media) - Optional
- `featured` (Boolean) - Required, default: false
- `publishedAt` (Date) - Required

**Field Validation**:
- `slug`: Must be unique, URL-friendly format
- `techStack`: Minimum 1 item, maximum 10 items

### Blog Content Type

**Content Type ID**: `blog`

**Fields**:
- `title` (Text - Short text) - Required
- `slug` (Text - Short text) - Required, unique
- `excerpt` (Text - Long text) - Required
- `content` (Rich text) - Required
- `featuredImage` (Media - Single media) - Optional
- `author` (Text - Short text) - Required
- `tags` (Array - Text - Short text) - Required
- `publishedAt` (Date) - Required

**Field Validation**:
- `slug`: Must be unique, URL-friendly format
- `tags`: Minimum 1 item, maximum 10 items

### Research Content Type

**Content Type ID**: `research`

**Fields**:
- `title` (Text - Short text) - Required
- `slug` (Text - Short text) - Required, unique
- `abstract` (Text - Long text) - Required
- `content` (Rich text) - Required
- `authors` (Array - Text - Short text) - Required
- `publicationUrl` (Text - Short text) - Optional
- `journal` (Text - Short text) - Optional
- `publishedAt` (Date) - Required
- `featuredImage` (Media - Single media) - Optional

**Field Validation**:
- `slug`: Must be unique, URL-friendly format
- `authors`: Minimum 1 item, maximum 10 items

## 3. Get API Keys

1. Go to **Settings** → **API keys**
2. Click **Add API key**
3. Name it "Portfolio API Key"
4. Copy the following values:
   - **Space ID**
   - **Content Delivery API access token**

## 4. Sample Content

### Sample Project

**Title**: "AI-Powered Image Recognition System"
**Slug**: "ai-image-recognition"
**Description**: "A deep learning model that can identify and classify objects in images with 95% accuracy using convolutional neural networks."
**Tech Stack**: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"]
**GitHub URL**: "https://github.com/yourusername/ai-image-recognition"
**Demo URL**: "https://demo.yourdomain.com/image-recognition"
**Featured**: true

### Sample Blog Post

**Title**: "Understanding Transformer Architecture in NLP"
**Slug**: "transformer-architecture-nlp"
**Excerpt**: "A comprehensive guide to understanding how transformer models work and their applications in natural language processing."
**Author**: "Your Name"
**Tags**: ["NLP", "Transformers", "Deep Learning", "AI"]
**Content**: [Rich text content about transformers]

### Sample Research Paper

**Title**: "Efficient Attention Mechanisms for Large Language Models"
**Slug**: "efficient-attention-mechanisms"
**Abstract**: "This paper presents a novel approach to reducing computational complexity in transformer-based language models while maintaining performance."
**Authors**: ["Your Name", "Co-author Name"]
**Journal**: "International Conference on Machine Learning"
**Publication URL**: "https://arxiv.org/abs/your-paper-id"

## 5. Content Guidelines

### Images
- **Profile Image**: 400x400px minimum, square aspect ratio
- **Project Images**: 1200x800px recommended, 16:9 aspect ratio
- **Blog Images**: 1200x600px recommended, 2:1 aspect ratio
- **Research Images**: 1200x800px recommended, 3:2 aspect ratio

### Text Content
- **Project Descriptions**: 100-200 words
- **Blog Excerpts**: 150-250 words
- **Research Abstracts**: 200-300 words

### SEO Best Practices
- Use descriptive, keyword-rich titles
- Include relevant tags for blogs
- Write compelling excerpts that encourage clicks
- Use proper slug formatting (lowercase, hyphens)

## 6. Environment Variables

Add these to your `.env.local`:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_PREVIEW_TOKEN=your_preview_token_here
```

## 7. Testing the Integration

1. Add some sample content in Contentful
2. Run your development server: `npm run dev`
3. Check that content appears on your portfolio
4. Verify that images load correctly
5. Test the responsive design

## 8. Content Management Workflow

### Adding New Projects
1. Go to Contentful dashboard
2. Navigate to "Content" → "Projects"
3. Click "Add entry"
4. Fill in all required fields
5. Publish the entry

### Adding New Blog Posts
1. Go to Contentful dashboard
2. Navigate to "Content" → "Blogs"
3. Click "Add entry"
4. Write compelling content
5. Add relevant tags
6. Publish the entry

### Adding New Research
1. Go to Contentful dashboard
2. Navigate to "Content" → "Research"
3. Click "Add entry"
4. Include full abstract and publication details
5. Publish the entry

## 9. Troubleshooting

### Common Issues

**Content not appearing**:
- Check API keys are correct
- Verify content is published (not draft)
- Check browser console for errors

**Images not loading**:
- Ensure images are uploaded to Contentful
- Check image URLs in browser dev tools
- Verify Contentful image domains in `next.config.js`

**Build errors**:
- Check TypeScript types match Contentful fields
- Verify all required fields are filled
- Check for missing dependencies

### Getting Help

- [Contentful Documentation](https://contentful.com/developers)
- [Next.js Documentation](https://nextjs.org/docs)
- Check the main README.md for additional setup instructions
