import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserPreferences } from '~/core/models';

const { persistAtom } = recoilPersist();

const defaultPreferences: UserPreferences = {
  theme: null,
};

export const userPreferences = atom<UserPreferences>({
  key: 'userPreferences',
  default: defaultPreferences,
  effects_UNSTABLE: [persistAtom],
});
