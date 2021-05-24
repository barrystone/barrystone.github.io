export default function analyzeReadme(data) {
  let notesData = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i] == '#' && data[i + 1] == '#') {
      let j = i + 3;
      let title = '';
      for (j; j < j + data.length; j++) {
        title += data[j];
        if (data[j] == '\n') {
          title = title.slice(0, -1);
          i = j;
          break;
        }
      }
      notesData[title] = [];

      for (i; i <= data.length; i++) {
        if (data[i] == '#') {
          i -= 1;
          break;
        }
        if (data[i] == '-' && data[i + 1] == ' ') {
          let noteName = '';
          let k = i + 3;
          for (k; k < data.length; k++) {
            noteName += data[k];
            if (data[k] == ']') {
              noteName = noteName.slice(0, -1);
              i = k;
              break;
            }
          }
          let noteUrl = '';
          let l = k + 2;
          for (l; l < data.length; l++) {
            noteUrl += data[l];
            if (data[l] == ')') {
              noteUrl = noteUrl.slice(0, -1);
              i = l;
              break;
            }
          }
          // console.log('title:', title,' noteName:', noteName,' noteUrl:', noteUrl);
          let note = {};
          note[noteName] = noteUrl;
          notesData[title] = [...notesData[title], note];
        }
      }
    }
  }
  return notesData;
}
