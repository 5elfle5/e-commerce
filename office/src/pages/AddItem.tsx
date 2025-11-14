import '../index.css';
import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';

export function AddItem() {
  const [name, setName] =  React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [price, setPrice] = React.useState<number | null>(null);
  return (
    <div className='flex flex-col gap-4'>
      <div className='card justify-children w-[800px]'>
        <h1 className='h1'>
          Add Item
        </h1>
        <div className='flex gap-4'>
          <Button label='Cancel' severity='secondary'></Button>
          <Button label='Add'></Button>
        </div>
      </div>
      <div className='card'>
        <div className='h2'>Product Details</div>
        <div className='mt-4'>
          <div>Product Name</div>
          <InputText value={name} onChange={(e) => setName(e.target.value)} className='w-full' />
        </div>
        <div className='mt-4'>
          <div>Product Description</div>
          <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} className='w-full' rows={5} />
        </div>
        <div className='h2 mt-4'>Pricing</div>
        <div className='mt-4'>
          <div>Price</div>
          <InputNumber value={price} onValueChange={(e) => setPrice(e.value ?? null)} className='w-full' />
        </div>
      </div>
    </div>
  )
}
