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

const SignupPage = () => {
  const defaultValues = {
    name: "",
    email: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));
  return (
    <AuthLayout title="Sign Up" subtitle="Welcome back!">
      <div className="mx-auto border border-gray-300 w-full p-5 rounded-md">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field, fieldState }) => (
              <Field
                field={field}
                error={errors[field.name]?.message}
                placeholder="Name"
              />
            )}
          />
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
          <Controller
            name="pass"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field, fieldState }) => (
              <Field
                field={field}
                error={errors[field.name]?.message}
                placeholder="Password"
              />
            )}
          />

          <button
            className="w-full px-3 py-2 bg-black hover:bg-gray-500 transition-all duration-700 rounded-md   text-white text-sm font-bold leading-5"
            type="submit"
          >
            Sign Up
          </button>
        </Form>
      </div>

      <div className="mx-auto border border-gray-300 w-full p-3 mt-5 rounded-md text-center">
        Have an account? <Link to="/signin">Sign In</Link>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
