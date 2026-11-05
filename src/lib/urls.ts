/** Prefix public-file links while preserving external URLs and section anchors. */
export const publicUrl = (path: string) => path.startsWith('/') && !path.startsWith('//')
  ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
  : path;
