// get time from timestamp in 12 horus format
export const getTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour = hours % 12;
  return `${hour}:${minutes} ${ampm}`;
};

// get 'Today' or 'Yesterday' or date in DD/MM/YYYY format
export const getDate = (timestamp) => {
  const date = new Date(timestamp);
  const today = new Date();
  const todayString = today.toDateString();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const dateString = date.toDateString();
  const yesterdayString = yesterday.toDateString();
  if (dateString === todayString) {
    return 'Today';
  } else if (dateString === yesterdayString) {
    return 'Yesterday';
  }
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
