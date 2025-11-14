import '../index.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';

type AddProduct = {
  name: string;
  description: string;
  price: number;
}

export function AddItem() {
  const {
    control,
    register,
    handleSubmit,
  } = useForm<AddProduct>()
  const onSubmit: SubmitHandler<AddProduct> = (data) => console.log(data)
  return (
    <div className='flex flex-col gap-4'>
      <div className='card justify-children w-[800px]'>
        <h1 className='h1'>
          Add Item
        </h1>
        <div className='flex gap-4'>
          <Button label='Cancel' severity='secondary'></Button>
          <Button onClick={handleSubmit(onSubmit)} label='Add'></Button>
        </div>
      </div>

      <div className='card'>
        <form>
          <div className='h2'>Product Details</div>
          <div className='mt-4'>
            <div>Product Name</div>
            <InputText {...register("name")} className='w-full' />
          </div>
          <div className='mt-4'>
            <div>Product Description</div>
            <InputTextarea {...register("description")} className='w-full' rows={5} />
          </div>
          <div className='h2 mt-4'>Pricing</div>
          <div className='mt-4'>
            <div>Price</div>
             <Controller
                name="price"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputNumber
                      value={field.value}
                      onValueChange={(e) => field.onChange(e.value)} 
                      onBlur={field.onBlur}
                      inputRef={field.ref}
                      useGrouping={false}
                      placeholder="Enter a number"
                      className='w-full'
                    />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
          </div>
        </form>
      </div>
    </div>
  )
}
