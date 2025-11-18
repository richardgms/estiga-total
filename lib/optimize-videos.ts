import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';

const VIDEO_FOLDERS = ['public/videos/testimonials'];

// Configurações de compressão
const VIDEO_CONFIG = {
  codec: 'libx264', // H.264 codec
  crf: 28, // Constant Rate Factor (18-28 = boa qualidade, menor tamanho)
  preset: 'medium', // Velocidade de encoding vs compressão
  audioBitrate: '128k', // Bitrate do áudio
  audioCodec: 'aac', // Codec de áudio
};

const POSTER_CONFIG = {
  timestamp: '00:00:02', // Captura frame aos 2 segundos
  size: '1920x1080', // Resolução do thumbnail
};

async function optimizeVideo(
  inputPath: string,
  outputPath: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(`   🎬 Convertendo: ${path.basename(inputPath)}`);

    ffmpeg(inputPath)
      .videoCodec(VIDEO_CONFIG.codec)
      .outputOptions([
        `-crf ${VIDEO_CONFIG.crf}`,
        `-preset ${VIDEO_CONFIG.preset}`,
      ])
      .audioCodec(VIDEO_CONFIG.audioCodec)
      .audioBitrate(VIDEO_CONFIG.audioBitrate)
      .output(outputPath)
      .on('start', (commandLine) => {
        console.log(`   ⚙️  Comando: ${commandLine}`);
      })
      .on('progress', (progress) => {
        if (progress.percent) {
          process.stdout.write(
            `\r   📊 Progresso: ${Math.floor(progress.percent)}%`
          );
        }
      })
      .on('end', () => {
        console.log('\n   ✅ Vídeo otimizado com sucesso!');
        resolve();
      })
      .on('error', (err) => {
        console.error(`\n   ❌ Erro: ${err.message}`);
        reject(err);
      })
      .run();
  });
}

async function generatePoster(
  videoPath: string,
  posterPath: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(`   🖼️  Gerando thumbnail: ${path.basename(posterPath)}`);

    ffmpeg(videoPath)
      .screenshots({
        timestamps: [POSTER_CONFIG.timestamp],
        filename: path.basename(posterPath),
        folder: path.dirname(posterPath),
        size: POSTER_CONFIG.size,
      })
      .on('end', () => {
        console.log('   ✅ Thumbnail gerado com sucesso!');
        resolve();
      })
      .on('error', (err) => {
        console.error(`\n   ❌ Erro ao gerar thumbnail: ${err.message}`);
        reject(err);
      });
  });
}

function getFileSize(filePath: string): string {
  const stats = fs.statSync(filePath);
  const sizeInMB = stats.size / (1024 * 1024);
  return `${sizeInMB.toFixed(2)} MB`;
}

async function processFolder(folderPath: string) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⏭️  Pasta não encontrada: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);
  const videoFiles = files.filter((file) =>
    /\.(mov|avi|mp4|mkv)$/i.test(file)
  );

  if (videoFiles.length === 0) {
    console.log(`⏭️  Nenhum vídeo em: ${folderPath}`);
    return;
  }

  console.log(`\n📁 Processando: ${folderPath}`);
  console.log(`   ${videoFiles.length} vídeo(s) encontrado(s)\n`);

  for (let i = 0; i < videoFiles.length; i++) {
    const file = videoFiles[i];
    const inputPath = path.join(folderPath, file);

    // Gerar nomes de saída baseados no índice
    const videoNumber = i + 1;
    const outputPath = path.join(folderPath, `testimonial-${videoNumber}.mp4`);
    const posterPath = path.join(folderPath, `poster-${videoNumber}.jpg`);

    // Pular se já foi processado
    if (fs.existsSync(outputPath)) {
      console.log(`\n⏭️  Já processado: ${path.basename(outputPath)}`);
      console.log(`   Tamanho: ${getFileSize(outputPath)}\n`);
      continue;
    }

    const originalSize = getFileSize(inputPath);
    console.log(`\n🎥 Processando: ${file}`);
    console.log(`   Tamanho original: ${originalSize}`);

    try {
      // Converter e comprimir vídeo
      await optimizeVideo(inputPath, outputPath);

      const newSize = getFileSize(outputPath);
      const reduction = (
        ((fs.statSync(inputPath).size - fs.statSync(outputPath).size) /
          fs.statSync(inputPath).size) *
        100
      ).toFixed(1);

      console.log(`   📦 Tamanho final: ${newSize}`);
      console.log(`   🎯 Redução: ${reduction}%`);

      // Gerar thumbnail
      await generatePoster(outputPath, posterPath);
      console.log(`   📸 Poster salvo: ${path.basename(posterPath)}`);
    } catch (error) {
      console.error(`   ❌ Erro ao processar ${file}:`, error);
    }
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de vídeos...');
  console.log('⚙️  Configurações:');
  console.log(`   - Codec: ${VIDEO_CONFIG.codec}`);
  console.log(`   - CRF: ${VIDEO_CONFIG.crf}`);
  console.log(`   - Preset: ${VIDEO_CONFIG.preset}`);
  console.log(`   - Audio: ${VIDEO_CONFIG.audioCodec} @ ${VIDEO_CONFIG.audioBitrate}`);

  try {
    for (const folder of VIDEO_FOLDERS) {
      await processFolder(folder);
    }

    console.log('\n✨ Otimização concluída!');
    console.log('📊 Vídeos convertidos para MP4 (H.264)');
    console.log('🖼️  Thumbnails gerados para cada vídeo');
  } catch (error) {
    console.error('\n❌ Erro durante a otimização:', error);
    process.exit(1);
  }
}

main();
