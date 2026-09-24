import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const chairSource = readFileSync(new URL('app/components/chair-path.ts', root), 'utf8');
const chairPath = chairSource.match(/^export const CHAIR_PATH = '([^']+)';/m)?.[1];

if (!chairPath) throw new Error('Não encontrei o traçado da cadeira da marca.');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <title>Açaí de Lei</title>
  <rect width="128" height="128" rx="26" fill="#631d3f"/>
  <path d="${chairPath}" transform="translate(17.3 10) scale(0.12)" fill="#fff4bc" fill-rule="evenodd" stroke="#fff4bc" stroke-width="12" stroke-linejoin="round"/>
</svg>
`;

writeFileSync(new URL('public/favicon.svg', root), svg);
