import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createPostAPI } from "../../services/posts/postAPI";
const CreatePost = () => {
  const postMutation = useMutation({
    mutationKey: ["create-post"],
    mutationFn: createPostAPI,
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is Required"),
      author: Yup.string().required("Author is required"),
    }),
    onSubmit: (values) => {
      const postData = {
        title: values.title,
        description: values.description,
        author: values.author,
      };
      postMutation.mutate(postData);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          {...formik.getFieldProps("title")}
        />
        {formik.touched.title && formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          {...formik.getFieldProps("description")}
        />
        {formik.touched.title && formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <input
          type="text"
          name="author"
          placeholder="Enter author name"
          {...formik.getFieldProps("author")}
        />
        {formik.touched.author && formik.errors.author && (
          <span style={{ color: "red" }}>{formik.errors.author}</span>
        )}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
