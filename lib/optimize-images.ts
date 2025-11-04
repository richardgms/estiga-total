import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGE_FOLDERS = [
  'public/images/hero',
  'public/images/structure',
  'public/images/modalities',
  'public/images/testimonials',
];

const QUALITY = 85;

async function optimizeImage(inputPath: string, outputPath: string, width?: number) {
  try {
    await sharp(inputPath)
      .resize(width, undefined, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    console.log(`✅ Otimizada: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error);
  }
}

async function processFolder(folderPath: string) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⏭️  Pasta não encontrada: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  if (imageFiles.length === 0) {
    console.log(`⏭️  Nenhuma imagem em: ${folderPath}`);
    return;
  }

  console.log(`\n📁 Processando: ${folderPath}`);
  console.log(`   ${imageFiles.length} imagem(ns) encontrada(s)\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(folderPath, file);
    const outputPath = path.join(folderPath, file);

    await optimizeImage(inputPath, outputPath);
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de imagens...\n');

  for (const folder of IMAGE_FOLDERS) {
    await processFolder(folder);
  }

  console.log('\n✨ Otimização concluída!');
  console.log('📊 Imagens convertidas para WebP com qualidade 85%');
}

main();
