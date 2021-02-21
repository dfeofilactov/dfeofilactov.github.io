import { debounce, DebouncedFunc } from 'lodash';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import firebaseApi from '~/core/api/firebase';

type UseButtonClicks = [number, Dispatch<SetStateAction<number>>];
type SyncFunction = DebouncedFunc<(count: number) => void> | null;

export default function useButtonClicks(): UseButtonClicks {
  const [unSyncedClicks, setUnSyncClicks] = useState(0);
  const [syncClicks, setSyncClicks] = useState(0);
  const syncRef = useRef<SyncFunction>(null);

  const syncFirebase = async (count: number) => {
    await firebaseApi.incrementButtonClicks(count);
    await fetchClicks();
    setUnSyncClicks(0);
  };

  const fetchClicks = async () => {
    const count = await firebaseApi.getButtonClicks();
    setSyncClicks(count);
  };

  useEffect(() => {
    fetchClicks();
    syncRef.current = debounce(syncFirebase, 1000);
    return () => {
      syncRef.current && syncRef.current.cancel();
    };
  }, []);

  useEffect(() => {
    const sync = syncRef.current;
    if (sync && unSyncedClicks) sync(unSyncedClicks);
  }, [unSyncedClicks]);

  return [syncClicks + unSyncedClicks, setUnSyncClicks];
}
