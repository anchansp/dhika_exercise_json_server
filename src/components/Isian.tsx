import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(6, "Error mssg: Harus 6 bg").required("Wajib"),
  email: Yup.string().email("Invalid email address").required("Wajib"),
  password: Yup.string()
    .min(10, "sepuluh huruf bg")
    .required("Wajib")
    .matches(/[a-z]/, "Must contain at least one lowercase")
    .matches(/[A-Z]/, "Must contain at least one uppercase")
    .matches(/[!@#$%^*(),.?":{}<>+-=_]/, "Must contain a symbol biatch")
    .matches(/[0-9]/, "Must contain at least one number"),
});

function Isian() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema,

    // validate: (values) => {
    //   const errors = {};

    //   if (!values.name) {
    //     errors.name = "Required";
    //   } else if (values.name.length < 6) {
    //     errors.name = "Name must be at least 6 characters";
    //   }

    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = "Invalid email address";
    //   }

    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (
    //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/i.test(
    //       values.password
    //     )
    //   ) {
    //     errors.password =
    //       "Password minimal have 6 characters, at least contain one lowercase, one uppercase, one number, and one symbol";
    //   }

    //   return errors;
    // },

    onSubmit: (values) => console.log(values),
  });

  return (
    <form style={{ display: "grid" }} onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <>
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        </>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <>
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        </>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <>
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        </>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Isian;
