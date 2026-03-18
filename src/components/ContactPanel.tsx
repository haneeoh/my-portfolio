// src/components/ContactPanel.tsx
import * as S from '../styles/Panels.styles';

const CONTACTS = [
  { label: 'Email', value: 'hani.oh@example.com' },
  { label: 'GitHub', value: 'github.com/hanioh' },
  { label: 'Phone', value: '010-0000-0000' },
];

export default function ContactPanel() {
  return (
    <S.ContactWrap>
      {CONTACTS.map((c) => (
        <S.ContactRow key={c.label}>
          <S.ContactLabel>{c.label}</S.ContactLabel>
          <S.ContactValue>{c.value}</S.ContactValue>
        </S.ContactRow>
      ))}
    </S.ContactWrap>
  );
}