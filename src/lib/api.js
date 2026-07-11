export async function submitEnquiry(data) {
  console.log("Enquiry Submitted:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1000);
  });
}

export async function submitNotifyMe(data) {
  console.log("Notify Me:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1000);
  });
}