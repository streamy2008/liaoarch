
export interface OssExifData {
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: string;
}

export async function fetchOssExif(imageUrl: string): Promise<OssExifData | null> {
  if (!imageUrl || !imageUrl.includes('oss-cn-')) return null;

  try {
    const response = await fetch(`${imageUrl}?x-oss-process=image/info`);
    if (!response.ok) return null;

    const data = await response.json();
    const exif = data.ExifTag;

    if (!exif) return null;

    // Helper to format FNumber (e.g., "8/1" -> "f/8")
    const formatAperture = (val: string) => {
      if (!val) return '-';
      const [num, den] = val.split('/').map(Number);
      if (den === 0) return '-';
      const f = num / den;
      return `f/${f % 1 === 0 ? f : f.toFixed(1)}`;
    };

    return {
      camera: exif.Model?.value || '-',
      lens: exif.LensModel?.value || '-',
      aperture: formatAperture(exif.FNumber?.value),
      shutter: exif.ExposureTime?.value ? `${exif.ExposureTime.value}s` : '-',
      iso: exif.ISOSpeedRatings?.value || '-',
    };
  } catch (error) {
    console.error('Failed to fetch OSS EXIF:', error);
    return null;
  }
}
