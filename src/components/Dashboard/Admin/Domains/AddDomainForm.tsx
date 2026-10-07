import { useForm } from "react-hook-form";

type DomainFormValues = {
  domain: string;
};

export const AddDomainForm = () => {
  const { register, handleSubmit } = useForm<DomainFormValues>();

  const onSubmit = () => {};

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
