self.onmessage = ({ data }) => {
  const { images, regexString } = data;
  try {
    const regex = new RegExp(regexString, "i");
    const filtered = images.filter(path => regex.test(path));
    self.postMessage({ success: true, filtered });
  } catch (e) {
    self.postMessage({ success: false, error: "Invalid regex pattern." });
  }
};
