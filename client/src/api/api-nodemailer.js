import { handleFetch } from './api-helpers';

export const contactUs = (data) =>
  handleFetch('/api/contactUs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
