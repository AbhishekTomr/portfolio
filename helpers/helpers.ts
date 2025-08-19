export enum DOWNLOAD_TYPE {
  RESUME = "AbhishekTomarResume.pdf",
  COVER_LETTER = "AbhishekTomarCoverLetter.pdf",
}

export const copyEmailToClipboard = () => {
  navigator.clipboard.writeText("imabhishek111@gmail.com");
};

export const handleDownload = (type: DOWNLOAD_TYPE) => {
  const link = document.createElement("a");
  link.href = `/assets/${type}`; // path inside public folder
  link.download = `${type}`; // file name for download
  link.click();
};
