import analyzeReadme from '../../utils/analyzeReadme';

export default async function handler(req, res) {
  const resDate = await fetch(
    'https://raw.githubusercontent.com/barrystone/hackmd_public-notes/master/README.md'
  );
  const data = await resDate.text();
  const analyzedData = analyzeReadme(data);

  res.status(200).json({ 'Generated date': Date(), analyzedData });
}
