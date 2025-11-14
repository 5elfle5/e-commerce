import '../index.css';
import { Button } from 'primereact/button';

export function AddItem() {
  return (
    <div className='card justify-children w-[600px]'>
      <h1 className='text-3xl font-bold'>
        Add Item
      </h1>
      <div className='flex gap-4'>
        <Button label='Cancel' severity='secondary'></Button>
        <Button label='Add'></Button>
      </div>
    </div>
  )
}
