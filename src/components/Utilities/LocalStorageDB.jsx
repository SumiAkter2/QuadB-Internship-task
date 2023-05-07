const getStorageItem = () => {
  let storageTicket;
  const getTicket = localStorage.getItem("selected-Ticket");
  if (getTicket) {
    storageTicket = JSON.parse(getTicket);
  } else {
    storageTicket = {};
  }
  return storageTicket;
};
const addToLocalStorage = (id) => {
  let storageTicket = getStorageItem();
  let count = storageTicket[id];
  if (count) {
    storageTicket[id] = count + 1;
  } else {
    storageTicket[id] = 1;
  }
  localStorage.setItem("selected-Ticket", JSON.stringify(storageTicket));
};

export { getStorageItem, addToLocalStorage};