export type WithChildren = React.PropsWithChildren;

export type WithId = { id: string; }

export type WithClassName = {
  className?: string;
}

export type WithParams = Record<string, string>;

export type NavLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export type FormState = {
  success?: boolean | null;
  message?: string | null;
  error?: string | null;
}
