import { type ChangeEvent, type FC, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const App: FC = () => {
  const [value, setValue] = useState('');
  return (
    <main>
      <h1 className="underline">Playground</h1>
      <InputText
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button label="Submit" />
      <p>{value}</p>
    </main>
  );
};

