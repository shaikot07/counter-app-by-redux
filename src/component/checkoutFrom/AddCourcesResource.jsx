/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom";
import useCourseResources from "../../../../Hooks/useCourseResources";
import { useFieldArray, useForm } from "react-hook-form";
import axiosSecure from "../../../../api/axiosSecure";
import toast from "react-hot-toast";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";


const AddCourcesResource = () => {
  const course = useLoaderData()
  console.log(course)
  const navigate = useNavigate();
  const { CourseAllResources, loading, refetch } = useCourseResources()

  // Function to filter CourseAllVideo by courseId

  const filterData = CourseAllResources.filter((resource) => resource.courseId === course?._id);
  console.log("Filter Data", filterData)


  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      resources: [{ title: "", link: "" }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "resources"
  });
  const [formData, setFormData] = useState({
    title: course?.title,
    courseId: course._id,
    resources: data.resources,
    // Add other fields here 
  });
  
  const onSubmit = async (data) => {
    try {
      const finalData = { ...formData, pdfLink: uploadedFileUrl };
      if (filterData.length === 0) {
        const response = await axiosSecure.post("/resources", {
          finalData
        });

        console.log(response.data);
        toast.success("resources added successfully");
        refetch();
        navigate(/dashboard/teacher - course - details / ${ course?._id });
      } else {
        // Videos already exist for this course
        toast.info("resources already exist for this course");
      }
    } catch (error) {
      console.error("Error adding course resources:", error);
      toast.error("Failed to add resources");
    }
  };



  const deleteResources = async (id) => {
    try {
      const { data } = await axiosSecure.delete(/resources/delete / ${ id });

      if (data.deletedCount === 1) {
        // await refetch();
        toast.success("resources deleted successfully");
        refetch()
      }
    } catch (error) {
      console.error("Error deleting resources:", error);
      toast.error("Failed to delete resources");
    }
  };





  return (
    <div className="p__cormorant w-8/12 mx-auto">

      <div>
        {CourseAllResources?.map(resource => (
          <div key={resource._id}>
            <p>{resource.title}</p>
            <button onClick={() => deleteResources(resource._id)}>Delete</button>
          </div>
        ))}
      </div>
      <h2 className="my-2 text-2xl text-first">
        Add Resources on
        <span className="mx-2 text-white border-b border-first hover:border-2 hover:text-second ">
          {course?.title}
        </span>
        Course
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div key={item.id} className="mb-4 flex gap-4">
            <div className="w-full">
              <input
                {...register(resources.${ index }.title)}
                type="text"
                placeholder="Enter resources title"
                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
              />
              <hr className="border-t border-first" />
            </div>
            <div className="w-full">
              <input
                {...register(resources.${ index }.link)}
                type="text"
                placeholder="Enter video link"
                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
              />
              <hr className="border-t border-first" />
            </div>
            <button type="button" onClick={() => remove(index)}><MdDelete /></button>
          </div>
        ))}

        <div className="">
          <button
            type="button"
            className=" border rounded-full bg-second text-white"
            onClick={() => append({ title: "", link: "" })}>
            <MdAddCircleOutline className="text-2xl" />
          </button>
        </div>

        <button type="submit" className="btn-style w-full mx-auto text-center">Submit</button>
      </form>
    </div>
  );
};

export default AddCourcesResource;