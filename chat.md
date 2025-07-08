---
layout: page
title:  
permalink: /chat/
---

<div id="chat-container">
  <div id="chat-header">
    <h2>Chat with Nikhil</h2>
    <p>Ask me about AI, investing, poker, or anything else!</p>
    <div id="health-status">
      <span id="health-icon">●</span>
      <span id="health-text">Checking...</span>
    </div>
  </div>

  <div id="chat-messages"></div>

  <div id="chat-input-container">
    <textarea id="chat-input" placeholder="Type your message..." rows="3"></textarea>
    <button id="send-button">Send</button>
  </div>

  <div id="loading" style="display: none;">
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="conversation-actions">
    <button id="new-conversation-btn">New Conversation</button>
    <button id="conversation-history-btn">View History</button>
  </div>
</div>

<div id="history-modal" class="modal" style="display: none;">
  <div class="modal-content">
    <div class="modal-header">
      <h3>Recent Conversations</h3>
      <span class="modal-close">&times;</span>
    </div>
    <div id="conversation-list"></div>
  </div>
</div>

<style>
<style>
:root {
  --chat-primary: #0066cc;
  --chat-primary-hover: #0056b3;
  --chat-background: #ffffff;
  --chat-user-bg: var(--chat-primary);
  --chat-bot-bg: #f8f9fa;
  --chat-border: #333333;
  --chat-text: #333333;
  --chat-text-light: #ffffff;
  --chat-shadow: 5px 5px 0px 0px var(--chat-border);
  --chat-error: #dc3545;
  --chat-success: #28a745;
}

#chat-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 3px solid var(--chat-border);
  box-shadow: var(--chat-shadow);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: var(--chat-background);
  min-height: 600px;
  display: flex;
  flex-direction: column;
}

#chat-header {
  background: var(--chat-border);
  color: var(--chat-text-light);
  padding: 1rem;
  border-bottom: 3px solid var(--chat-border);
}

#chat-header h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5em;
}

#chat-header p {
  margin: 0;
  font-size: 1em;
  opacity: 0.9;
}

#health-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.9em;
}

#health-icon {
  font-size: 1.2em;
  color: #666;
  transition: color 0.3s ease;
}

#health-icon.healthy {
  color: var(--chat-success);
}

#health-icon.unhealthy {
  color: var(--chat-error);
}

#health-text {
  opacity: 0.9;
}

#chat-messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  min-height: 400px;
  max-height: 500px;
  scroll-behavior: smooth;
}

.message {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  animation: fadeIn 0.3s ease-in;
}

.message.user {
  justify-content: flex-end;
}

.message-content {
  max-width: 70%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--chat-border);
  box-shadow: 2px 2px 0px 0px var(--chat-border);
  border-radius: 0;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.4;
}

.message.user .message-content {
  background: var(--chat-user-bg);
  color: var(--chat-text-light);
}

.message.bot .message-content {
  background: var(--chat-bot-bg);
  color: var(--chat-text);
}

.message-avatar {
  width: 32px;
  height: 32px;
  border: 2px solid var(--chat-border);
  background: var(--chat-border);
  color: var(--chat-text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8em;
  flex-shrink: 0;
}

.message.user .message-avatar {
  background: var(--chat-user-bg);
}

.message.bot .message-avatar {
  background: var(--chat-bot-bg);
  color: var(--chat-text);
}

.message-timestamp {
  font-size: 0.7em;
  opacity: 0.6;
  margin-top: 0.25rem;
}

#chat-input-container {
  padding: 1rem;
  border-top: 3px solid var(--chat-border);
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

#chat-input {
  flex: 1;
  border: 2px solid var(--chat-border);
  padding: 0.75rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 1em;
  resize: vertical;
  min-height: 60px;
  max-height: 120px;
  background: var(--chat-background);
  color: var(--chat-text);
  transition: box-shadow 0.2s ease;
}

#chat-input:focus {
  outline: none;
  box-shadow: 2px 2px 0px 0px var(--chat-border);
}

#send-button {
  border: 2px solid var(--chat-border);
  background: var(--chat-primary);
  color: var(--chat-text-light);
  padding: 0.75rem 1.5rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 2px 2px 0px 0px var(--chat-border);
}

#send-button:hover:not(:disabled) {
  background: var(--chat-primary-hover);
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px 0px var(--chat-border);
}

#send-button:active {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0px 0px var(--chat-border);
}

#send-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.typing-indicator {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 1rem;
}

.typing-indicator span {
  height: 8px;
  width: 8px;
  background: var(--chat-text);
  border-radius: 50%;
  display: inline-block;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.error-message {
  background: #ffebee;
  color: var(--chat-error);
  border: 2px solid var(--chat-error);
  padding: 0.75rem;
  margin: 0.5rem 0;
  box-shadow: 2px 2px 0px 0px var(--chat-error);
  border-radius: 0;
}

.success-message {
  background: #e8f5e8;
  color: var(--chat-success);
  border: 2px solid var(--chat-success);
  padding: 0.75rem;
  margin: 0.5rem 0;
  box-shadow: 2px 2px 0px 0px var(--chat-success);
  border-radius: 0;
}

#conversation-actions {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--chat-border);
  background: #f8f9fa;
}

#conversation-actions button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--chat-border);
  background: white;
  color: var(--chat-text);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.2s ease;
}

#conversation-actions button:hover {
  background: var(--chat-border);
  color: white;
}

/* Modal Styles */
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  border: 3px solid var(--chat-border);
  box-shadow: var(--chat-shadow);
  max-width: 600px;
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid var(--chat-border);
  background: var(--chat-border);
  color: white;
}

.modal-close {
  font-size: 24px;
  cursor: pointer;
}

.modal-close:hover {
  color: var(--chat-error);
}

#conversation-list {
  padding: 1rem;
}

.conversation-item {
  padding: 0.75rem;
  border: 1px solid var(--chat-border);
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.conversation-item:hover {
  background: #f8f9fa;
}

.conversation-preview {
  font-size: 0.9em;
  opacity: 0.7;
  margin-top: 0.25rem;
}

.conversation-meta {
  font-size: 0.8em;
  color: #666;
  margin-top: 0.25rem;
}

/* Loading states */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

#conversation-actions {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--chat-border);
  background: #f8f9fa;
}

#conversation-actions button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--chat-border);
  background: white;
  color: var(--chat-text);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.2s ease;
}

#conversation-actions button:hover {
  background: var(--chat-border);
  color: white;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  border: 3px solid var(--chat-border);
  box-shadow: var(--chat-shadow);
  max-width: 600px;
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid var(--chat-border);
  background: var(--chat-border);
  color: white;
}

.modal-close {
  font-size: 24px;
  cursor: pointer;
}

.modal-close:hover {
  color: #ff0000;
}

#conversation-list {
  padding: 1rem;
}

.conversation-item {
  padding: 0.75rem;
  border: 1px solid var(--chat-border);
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.conversation-item:hover {
  background: #f8f9fa;
}

.conversation-preview {
  font-size: 0.9em;
  opacity: 0.7;
  margin-top: 0.25rem;
}

.conversation-meta {
  font-size: 0.8em;
  color: #666;
  margin-top: 0.25rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  #chat-container {
    margin: 0 1rem;
    min-height: 500px;
  }

  .message-content {
    max-width: 85%;
  }

  #chat-input-container {
    flex-direction: column;
    gap: 0.75rem;
  }

  #send-button {
    align-self: stretch;
  }

  #conversation-actions {
    flex-direction: column;
  }

  .modal-content {
    width: 95%;
    max-height: 90%;
  }
}
</style>

<script>
class ChatInterface {
  constructor() {
    this.apiUrl = 'https://llm-chat-backend-nikhilr24.replit.app/api/chat';
    this.healthUrl = 'https://llm-chat-backend-nikhilr24.replit.app/api/health';
    this.conversationsUrl = 'https://llm-chat-backend-nikhilr24.replit.app/api/conversations/recent';
    this.conversationUrl = 'https://llm-chat-backend-nikhilr24.replit.app/api/conversation';
    this.messagesContainer = document.getElementById('chat-messages');
    this.chatInput = document.getElementById('chat-input');
    this.sendButton = document.getElementById('send-button');
    this.loadingIndicator = document.getElementById('loading');
    this.healthIcon = document.getElementById('health-icon');
    this.healthText = document.getElementById('health-text');
    this.newConversationBtn = document.getElementById('new-conversation-btn');
    this.conversationHistoryBtn = document.getElementById('conversation-history-btn');
    this.historyModal = document.getElementById('history-modal');
    this.conversationList = document.getElementById('conversation-list');
    this.modalClose = document.querySelector('.modal-close');

    this.currentConversationId = null;
    this.isLoading = false;
    this.retryCount = 0;
    this.maxRetries = 3;

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.checkHealth();
    this.addWelcomeMessage();
    this.loadStoredConversation();
  }

  setupEventListeners() {
    this.sendButton.addEventListener('click', () => this.sendMessage());

    this.chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    this.chatInput.addEventListener('input', () => {
      this.validateInput();
      this.autoResizeTextarea();
    });

    this.newConversationBtn.addEventListener('click', () => this.startNewConversation());
    this.conversationHistoryBtn.addEventListener('click', () => this.showConversationHistory());
    this.modalClose.addEventListener('click', () => this.closeModal());

    this.historyModal.addEventListener('click', (e) => {
      if (e.target === this.historyModal) {
        this.closeModal();
      }
    });
  }

  validateInput() {
    const message = this.chatInput.value.trim();
    const isValid = message.length > 0 && message.length <= 1000;
    this.sendButton.disabled = !isValid || this.isLoading;
  }

  autoResizeTextarea() {
    this.chatInput.style.height = 'auto';
    this.chatInput.style.height = Math.min(this.chatInput.scrollHeight, 120) + 'px';
  }

  async checkHealth() {
    try {
      const response = await fetch(this.healthUrl);
      if (response.ok) {
        const data = await response.json();
        const isHealthy = data.status === 'healthy';
        this.updateHealthStatus(isHealthy, isHealthy ? 'Backend Online' : 'Backend Unhealthy');
      } else {
        this.updateHealthStatus(false, 'Backend Offline');
      }
    } catch (error) {
      console.error('Health check error:', error);
      this.updateHealthStatus(false, 'Backend Offline');
    }
  }

  updateHealthStatus(isHealthy, statusText) {
    this.healthIcon.className = isHealthy ? 'healthy' : 'unhealthy';
    this.healthText.textContent = statusText;
  }

  addWelcomeMessage() {
    const welcomeMessage = "Hey there! I'm Nikhil. Ask me anything about AI, poker, or my projects!";
    this.addMessage('bot', welcomeMessage);
  }

  async sendMessage() {
    const message = this.chatInput.value.trim();
    if (!message || this.isLoading) return;

    this.addMessage('user', message);
    this.chatInput.value = '';
    this.setLoading(true);

    try {
      const response = await this.sendMessageWithRetry(message);
      this.addMessage('bot', response.response);

      if (response.conversation_id) {
        this.currentConversationId = response.conversation_id;
        this.saveConversationToStorage();
      }
    } catch (error) {
      console.error('Chat error:', error);
      this.handleChatError(error);
    } finally {
      this.setLoading(false);
    }
  }

  async sendMessageWithRetry(message, retryCount = 0) {
    try {
      const requestBody = {
        message: message,
        timestamp: new Date().toISOString()
      };

      if (this.currentConversationId) {
        requestBody.conversation_id = this.currentConversationId;
      }

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`HTTP ${response.status}: ${errorData.error || response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      if (retryCount < this.maxRetries) {
        await this.delay(1000 * Math.pow(2, retryCount));
        return this.sendMessageWithRetry(message, retryCount + 1);
      }
      throw error;
    }
  }

  handleChatError(error) {
    let errorMessage = 'An unexpected error occurred. Please try again.';

    if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Cannot connect to backend server. Please check your connection.';
    } else if (error.message.includes('HTTP 429')) {
      errorMessage = error.message.includes('rate limit') 
        ? 'Rate limit exceeded. Please wait a moment before sending another message.'
        : 'You\'ve reached the maximum number of chats. Please email contact@rnikhil.com for more assistance.';
    } else if (error.message.includes('HTTP 400')) {
      errorMessage = 'Invalid message format. Please check your input.';
    } else if (error.message.includes('HTTP 500')) {
      errorMessage = 'Server error occurred. Please try again in a moment.';
    }

    this.addMessage('bot', errorMessage);
  }

  addMessage(sender, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'user' ? 'U' : 'N';

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = content;

    if (sender === 'user') {
      messageDiv.appendChild(messageContent);
      messageDiv.appendChild(avatar);
    } else {
      messageDiv.appendChild(avatar);
      messageDiv.appendChild(messageContent);
    }

    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
    this.sendButton.disabled = isLoading;
    this.chatInput.disabled = isLoading;
    this.loadingIndicator.style.display = isLoading ? 'block' : 'none';
    this.sendButton.textContent = isLoading ? 'Sending...' : 'Send';

    if (isLoading) {
      this.messagesContainer.appendChild(this.loadingIndicator);
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  startNewConversation() {
    if (confirm('Start a new conversation? This will clear the current chat.')) {
      this.currentConversationId = null;
      this.messagesContainer.innerHTML = '';
      this.clearStoredConversation();
      this.addWelcomeMessage();
      this.chatInput.focus();
    }
  }

  async showConversationHistory() {
    try {
      const response = await fetch(this.conversationsUrl + '?limit=10');
      if (!response.ok) throw new Error('Failed to fetch conversations');

      const conversations = await response.json();
      this.renderConversationHistory(conversations);
      this.historyModal.style.display = 'flex';
    } catch (error) {
      console.error('Error loading conversation history:', error);
      this.addMessage('bot', 'Unable to load conversation history. Please try again later.');
    }
  }

  renderConversationHistory(conversations) {
    this.conversationList.innerHTML = '';

    if (!conversations || conversations.length === 0) {
      this.conversationList.innerHTML = '<p>No recent conversations found.</p>';
      return;
    }

    conversations.forEach(conversation => {
      const item = document.createElement('div');
      item.className = 'conversation-item';
      item.onclick = () => this.loadConversation(conversation.conversation_id);

      const preview = conversation.messages && conversation.messages.length > 0
        ? conversation.messages[0].user_message.substring(0, 100) + '...'
        : 'No messages';

      item.innerHTML = `
        <div><strong>Conversation ${conversation.conversation_id.substring(0, 8)}</strong></div>
        <div class="conversation-preview">${preview}</div>
        <div class="conversation-meta">
          ${conversation.messages?.length || 0} messages • 
          ${new Date(conversation.created_at).toLocaleDateString()}
        </div>
      `;

      this.conversationList.appendChild(item);
    });
  }

  async loadConversation(conversationId) {
    try {
      const response = await fetch(`${this.conversationUrl}/${conversationId}`);
      if (!response.ok) throw new Error('Failed to load conversation');

      const conversation = await response.json();
      this.currentConversationId = conversationId;
      this.messagesContainer.innerHTML = '';

      if (conversation.messages) {
        conversation.messages.forEach(msg => {
          this.addMessage('user', msg.user_message);
          this.addMessage('bot', msg.bot_response);
        });
      }

      this.closeModal();
      this.saveConversationToStorage();
    } catch (error) {
      console.error('Error loading conversation:', error);
      this.addMessage('bot', 'Unable to load conversation. Please try again.');
    }
  }

  closeModal() {
    this.historyModal.style.display = 'none';
  }

  saveConversationToStorage() {
    if (this.currentConversationId) {
      localStorage.setItem('currentConversationId', this.currentConversationId);
    }
  }

  loadStoredConversation() {
    const storedId = localStorage.getItem('currentConversationId');
    if (storedId) {
      this.currentConversationId = storedId;
    }
  }

  clearStoredConversation() {
    localStorage.removeItem('currentConversationId');
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Initialize chat when page loads
document.addEventListener('DOMContentLoaded', function() {
  new ChatInterface();
});