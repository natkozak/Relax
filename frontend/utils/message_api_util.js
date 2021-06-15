export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/messages',
  })
);

// channels refactor: change above to below:
// export const fetchMessages = (channelId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/channels/${channelId}/messages`,
//   })
// );

export const fetchComments = (topId) => (
  $.ajax({
    method: 'GET',
    url: `/api/messages/${topId}/comments`,
  })
);

// channels refactor: change above to below:
// export const fetchComments = (topId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/channels/${channelId}/messages/${topId}/comments`,
//   })
// );