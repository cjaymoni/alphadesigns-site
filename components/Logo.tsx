export function LogoMark() {
  return (
    <svg className="mark" width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
      <polygon
        points="12,86 48,14 48,42 44,42 44,56 56,56 56,42 52,42 52,14 88,86 68,86 50,66 32,86"
        fill="#ffffff"
      />
      <rect x="44" y="42" width="12" height="14" fill="#f2a900" />
    </svg>
  );
}

export function BrandName({ hidden }: { hidden?: boolean }) {
  return (
    <span className="brand-name" aria-hidden={hidden || undefined}>
      <b>alpha</b>
      <span>designs</span>
    </span>
  );
}
