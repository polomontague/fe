import { useForm } from "react-hook-form";

type DomainFormValues = {
  domain: string;
};

export const AddDomainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DomainFormValues>();

  const onSubmit = (data: DomainFormValues) => {
    console.log(data);
  };

  return (
    <form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("domain", {
            required: "Domain is required",
          })}
        />
        <button>Submit</button>
      </form>
    </form>
  );
};
