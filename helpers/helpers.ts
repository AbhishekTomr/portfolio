export const copyEmailToClipboard = () => {
  navigator.clipboard.writeText("imabhishek111@gmail.com");
};

export const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/assets/AbhishekTomarResume.pdf"; // path inside public folder
  link.download = "AbhishekTomarResume.pdf"; // file name for download
  link.click();
};
