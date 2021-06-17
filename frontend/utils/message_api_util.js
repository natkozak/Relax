
export const fetchMessages = (channelId) => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}/messages`,
  })
); 

export const fetchComments = (channelId, topId) => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}/messages/${topId}/comments`,
  })
);