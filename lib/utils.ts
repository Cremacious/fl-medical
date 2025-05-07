import defaultIcon from '@/assets/images/icons/stash/default.png';
import flowerIcon from '@/assets/images/icons/stash/flower.png';
import vapeIcon from '@/assets/images/icons/stash/vape.png';
import concentrateIcon from '@/assets/images/icons/stash/concentrate.png';
import edibleIcon from '@/assets/images/icons/stash/edible.png';
import topicalIcon from '@/assets/images/icons/stash/topical.png';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatError(error: any) {
  if (error.name === 'ZodError') {
    const fieldErrors = Object.keys(error.errors).map(
      (field) => error.errors[field].message
    );

    return fieldErrors.join('. ');
  } else if (
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    const field = error.meta?.target ? error.meta.target[0] : 'Field';
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else {
    return typeof error.message === 'string'
      ? error.message
      : JSON.stringify(error.message);
  }
}

export function capitalizeFirstLetter(username: string) {
  if (!username) return '';
  return username.charAt(0).toUpperCase() + username.slice(1);
}

export function getCategoryIcon(category: string | null | undefined): string {
  switch (category) {
    case 'flower':
      return flowerIcon.src || flowerIcon.toString();
    case 'vape':
      return vapeIcon.src || vapeIcon.toString();
    case 'concentrate':
      return concentrateIcon.src || concentrateIcon.toString();
    case 'edible':
      return edibleIcon.src || edibleIcon.toString();
    case 'topical':
      return topicalIcon.src || topicalIcon.toString();
    default:
      return defaultIcon.src || defaultIcon.toString();
  }
}
