import { Checkbox } from '@mui/material';
import { useState } from 'react';
export function CheckboxCell({
  handleChange,
  isChosen,
}: {
  handleChange: () => void;
  isChosen: boolean;
}) {
  const [chosen, setChosen] = useState(isChosen);
  return (
    <Checkbox 
      checked={chosen}
      onChange={() =>{handleChange(); setChosen(!chosen)}}
    />
  );
}
