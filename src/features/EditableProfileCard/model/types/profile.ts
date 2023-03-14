import { Profile } from '@/entities';

export interface ProfileSchema {
  data: Profile | null;
  form: Profile | null;
  isLoading: boolean;
  error: string | null;
  isReadonly: boolean;
}
