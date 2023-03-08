import { json } from './inputV2'
import { mappV2toV1 } from './mapper'
import fs from 'fs' 

const mapeado = mappV2toV1(json)
fs.writeFile('output.json', JSON.stringify(mapeado), () => console.log('success'))
// console.log(`Respuesta mapeada: ${mapeado}`);
