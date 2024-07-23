import analyzeReadme from '../../utils/analyzeReadme';

// **Only useful in "Dev" mode (may overload), GitHub pages is a hosting provider for static pages.
export default async function handler(req: any, res: any) {
  const resDate = await fetch(
    'https://raw.githubusercontent.com/barrystone/hackmd_public-notes/master/README.md'
  );
  const data = await resDate.text();
  const analyzedData = analyzeReadme(data);

  res.status(200).json({ 'Generated date': Date(), analyzedData });
}
