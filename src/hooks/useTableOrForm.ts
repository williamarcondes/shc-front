import { useState } from 'react';

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const showTable = () => setVisible('table');
  const showForms = () => setVisible('form');

  return {
    formularioVisivel: visible === 'form',
    visibleTable: visible === 'table',
    showTable,
    showForms,
  };
}
