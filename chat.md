
---
layout: page
title: Chat with me
---

<div id="n8n-chat-container"></div>

<script type="module">
// Load the n8n chat CSS
const link = document.createElement('link');
link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Load and initialize the n8n chat
import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js').then(({ createChat }) => {
  createChat({
    webhookUrl: 'https://accel.app.n8n.cloud/webhook/867e2403-b6b3-4d22-8b35-99b559611297/chat',
    target: '#n8n-chat-container',
    mode: 'fullscreen',
    showWelcomeScreen: true,
    defaultLanguage: 'en',
    initialMessages: [
      'Hey there! 👋',
      'I\'m Nikhil. Ask me anything about AI, poker, or my projects!'
    ],
    i18n: {
      en: {
        title: 'Chat with Nikhil',
        subtitle: 'Ask me about AI, investing, poker, or anything else!',
        footer: '',
        getStarted: 'Start Conversation',
        inputPlaceholder: 'Type your message...',
      },
    },
  });
});
</script>

<style>
:root {
  --chat--color-primary: #0066cc;
  --chat--color-primary-shade-50: #0056b3;
  --chat--color-primary-shade-100: #004d99;
  --chat--color-secondary: #333333;
  --chat--color-secondary-shade-50: #2a2a2a;
  --chat--color-white: #ffffff;
  --chat--color-light: #f8f9fa;
  --chat--color-light-shade-50: #e9ecef;
  --chat--color-light-shade-100: #dee2e6;
  --chat--color-medium: #6c757d;
  --chat--color-dark: #212529;
  --chat--color-disabled: #6c757d;
  --chat--color-typing: #495057;

  --chat--spacing: 1rem;
  --chat--border-radius: 0px;
  --chat--transition-duration: 0.2s;

  --chat--window--width: 100%;
  --chat--window--height: 100%;

  --chat--header-height: auto;
  --chat--header--padding: var(--chat--spacing);
  --chat--header--background: var(--chat--color-dark);
  --chat--header--color: var(--chat--color-white);
  --chat--header--border-top: 3px solid var(--chat--color-dark);
  --chat--header--border-bottom: 3px solid var(--chat--color-dark);
  --chat--heading--font-size: 1.5em;
  --chat--subtitle--font-size: 1em;
  --chat--subtitle--line-height: 1.4;

  --chat--textarea--height: 60px;

  --chat--message--font-size: 1rem;
  --chat--message--padding: var(--chat--spacing);
  --chat--message--border-radius: 0px;
  --chat--message-line-height: 1.6;
  --chat--message--bot--background: var(--chat--color-light);
  --chat--message--bot--color: var(--chat--color-dark);
  --chat--message--bot--border: 2px solid var(--chat--color-dark);
  --chat--message--user--background: var(--chat--color-primary);
  --chat--message--user--color: var(--chat--color-white);
  --chat--message--user--border: 2px solid var(--chat--color-dark);
  --chat--message--pre--background: rgba(0, 0, 0, 0.1);

  --chat--toggle--background: var(--chat--color-primary);
  --chat--toggle--hover--background: var(--chat--color-primary-shade-50);
  --chat--toggle--active--background: var(--chat--color-primary-shade-100);
  --chat--toggle--color: var(--chat--color-white);
  --chat--toggle--size: 64px;
}

#n8n-chat-container {
  width: 100%;
  height: 80vh;
  min-height: 600px;
  border: 3px solid var(--text-color);
  box-shadow: 5px 5px 0px 0px var(--text-color);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Override n8n chat styles to match your design */
#n8n-chat-container * {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
}

/* Make buttons more neo-brutalist */
#n8n-chat-container button {
  border: 2px solid var(--chat--color-dark) !important;
  box-shadow: 3px 3px 0px 0px var(--chat--color-dark) !important;
  border-radius: 0px !important;
  font-weight: bold !important;
  transition: all 0.2s ease !important;
}

#n8n-chat-container button:hover {
  transform: translate(-2px, -2px) !important;
  box-shadow: 5px 5px 0px 0px var(--chat--color-dark) !important;
}

/* Style the input field */
#n8n-chat-container textarea,
#n8n-chat-container input {
  border: 2px solid var(--chat--color-dark) !important;
  border-radius: 0px !important;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
}

/* Style message bubbles */
#n8n-chat-container .message {
  border: 2px solid var(--chat--color-dark) !important;
  border-radius: 0px !important;
  box-shadow: 2px 2px 0px 0px var(--chat--color-dark) !important;
  margin: 10px 0 !important;
}
</style>
