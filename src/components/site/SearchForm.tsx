'use client';

import { escapeCPF } from '@/utils';
import { useState } from 'react';

type Props = {
  onSearchButton: (cpf: string) => void;
  loading: boolean;
};

export const SearchForm = ({ onSearchButton, loading }: Props) => {
  const [cpfInput, setcpfInput] = useState('');

  return (
    <div>
      <p className='mb-3 text-xl'>Qual seu CPF ?</p>
      <input
        type='text'
        inputMode='numeric'
        placeholder='Digite o cpf'
        className='w-full p-3 bg-white text-black text-center 
        text-4xl outline-none rounded-lg disabled:opacity-30'
        autoFocus
        value={cpfInput}
        onChange={(e) => setcpfInput(escapeCPF(e.target.value))}
        disabled={loading}
      />
      <button
        className='w-full p-3 mt-3 rounded-lg bg-blue-800
         text-white text-4xl border-b-4 border-blue-600 
         active:border-0 disabled:opacity-30'
        onClick={() => onSearchButton(cpfInput)}
        disabled={loading}
      >
        {loading ? 'Buscando...' : 'Entrar'}
      </button>
    </div>
  );
};
