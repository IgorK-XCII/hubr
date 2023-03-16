import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export type Profile = Partial<{
  firstname: string;
  lastname: string
  age: number;
  currency: Currency,
  country: Country,
  city: string;
  username: string;
  avatar: string;
}>
