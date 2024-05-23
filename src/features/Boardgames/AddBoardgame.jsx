import { Button, PrimaryButton } from '@/components/forms/Buttons';
import { Form } from '@/components/forms/Form';
import { Input } from '@/components/forms/Input';
import { Textarea } from '@/components/forms/Textarea';
import { H1 } from '@/components/ui/Headings';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import { array, number, object, string } from 'yup';

const validationSchema = object({
  bggId: number().required().min(0),
  name: string().required(),
  thumbnail: string().url(),
  image: string().url(),
  alternateNames: array(string()),
  description: string().required(),
  numberOfPlayers: object({
    min: number(),
    max: number(),
    recommended: number(),
    best: number(),
  }),
  playtime: object({
    avg: number(),
    min: number(),
    max: number(),
  }),
  minAge: number(),
  yearpublished: number(),
  rank: number(),
  bayesaverage: number(),
  average: number(),
  usersrated: number(),
  otherRanks: object({
    strategygames: number(),
    thematic: number(),
  }),
});

export function AddBoardgame() {
  const [numberOfAlternateNames, setNumberOfAlternateNames] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <>
      <H1>Add a New Boardgame</H1>
      <Form onSubmit={handleSubmit(console.log)}>
        <Input
          labelText="BGG Id"
          type="number"
          errorMessage={errors.bggId?.message}
          {...register('bggId')}
        />
        <Input
          labelText="Title"
          type="text"
          errorMessage={errors.name?.message}
          {...register('name')}
        />
        <Input
          labelText="Thumbnail"
          type="url"
          errorMessage={errors.thumbnail?.message}
          {...register('thumbnail')}
        />
        <Input
          labelText="Image"
          type="url"
          errorMessage={errors.image?.message}
          {...register('image')}
        />
        <div className="grid grid-cols-[150px,_1fr] gap-1 col-start-2 border border-slate-200 rounded">
          {new Array(numberOfAlternateNames).fill().map((_, i) => (
            <Input
              key={i}
              labelText="Alternate Name"
              type="text"
              errorMessage={errors.alternateNames?.message}
              {...register('alternateNames')}
            />
          ))}
          <PrimaryButton
            className="col-start-2 text-2xl"
            type="button"
            onClick={() =>
              setNumberOfAlternateNames((oldValue) => oldValue + 1)
            }
          >
            <HiMiniPlusCircle />
          </PrimaryButton>
        </div>
        <Textarea labelText="Description" {...register('description')} errorMessage={errors.description?.message} />
        <PrimaryButton className="col-start-2">Add</PrimaryButton>
      </Form>
    </>
  );
}
