import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form } from "rsuite";
import { Link } from "react-router-dom";

const Field = ({ as: Component = Input, field, error, ...rest }) => {
  return (
    <Form.Group>
      <Component
        id={field.name}
        value={field.value}
        onChange={(value) => field.onChange(value)}
        {...rest}
      />
      <Form.ErrorMessage show={!!error} placement="bottomStart">
        {error}
      </Form.ErrorMessage>
    </Form.Group>
  );
};
const ResetPassPage = () => {
  const defaultValues = {
    email: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your user account's verified email address and we will send you a password reset link."
    >
      <div className="mx-auto border border-gray-300 w-full p-5 rounded-md">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            }}
            render={({ field, fieldState }) => (
              <Field
                field={field}
                error={errors[field.name]?.message}
                placeholder="Email"
              />
            )}
          />

          <button
            className="w-full px-3 py-2 bg-black hover:bg-gray-500 transition-all duration-700 rounded-md   text-white text-sm font-bold leading-5"
            type="submit"
          >
            Send password reset email
          </button>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassPage;
