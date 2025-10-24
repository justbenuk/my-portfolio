// app/components/TiptapContent.tsx
'use client';
import sanitize from 'sanitize-html';

// Define the props for the component
interface TiptapContentProps {
  content: string; // The HTML string from your Tiptap editor
}

// Define the allowed HTML tags and attributes for sanitization
const sanitizeOptions = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'pre', 'br',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target', 'rel'], // Allow 'rel' for security best practices
  },
  // You can add other options here as needed
};

export default function EditorContent({ content }: TiptapContentProps) {
  // Sanitize the HTML content using the new library and options
  const sanitizedContent = sanitize(content, sanitizeOptions);

  return (
    <div
      // This is where you apply the same CSS classes used in your Tiptap editor
      className="prose"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
