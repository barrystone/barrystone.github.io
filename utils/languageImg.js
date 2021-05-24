export default function languageImg(e) {
  switch (e) {
    case 'javascript':
      return 'js-icon';
    case 'html':
      return 'html-icon';
    case 'css':
      return 'css-icon';
    case 'scss':
      return 'sass-icon';
    case 'typescript':
      return 'ts-icon';
    case 'vue':
      return 'vuejs-icon';
    case 'c#':
      return 'cSharp-icon';
    case 'python':
      return 'python-icon';
    case 'java':
      return 'java-icon';
    case 'php':
      return 'php-icon';
    case 'c++':
      return 'c++-icon';
    default:
      return 'coding-icon';
  }
}
