import { useEffect, useState } from 'react';

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form' | 'profile'>('table');

  useEffect(() => {
    console.log('Estado atualizado:', visible);
  }, [visible]);

  const showTable = () => {
    setVisible('table');
  };

  const showForms = () => {
    setVisible('form');
  };

  const showProfile = () => {
    setVisible('profile');
  };

  return {
    visibleForm: visible === 'form',
    visibleTable: visible === 'table',
    visibleProfile: visible === 'profile',
    showTable,
    showForms,
    showProfile,
  };
}
