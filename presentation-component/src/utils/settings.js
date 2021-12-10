export const settings = {
  clickDocumentReloadBrowser() {
    document.addEventListener('click', () => window.location.reload());
  },
  setDocumentTitle(newTitle) {
    document.title = newTitle;
  },
  autoPlaySound({
    src,
    id = 'bgm',
    resolve,
    reject = (errorLog) => console.error(errorLog),
  } = {}) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<audio id=${id} src=${src}></audio>`
    );

    window.navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(() => {
        resolve(document.getElementById(id));
      })
      .catch(({ message }) => reject(message));
  },
};
