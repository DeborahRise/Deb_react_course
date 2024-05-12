import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup  from "yup"
export const Form = () => {
    const schema = yup.object().shape({
        fullname: yup.string().required("Full Name Required"),
        email: yup.string().email().required("Email is Required"),
        age: yup.number().positive().integer().min(18).required("Enter a Valid Age"),
        password: yup.string().min(6).max(15).required("Password Required"),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match" ).required()

    })
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name..." {...register("fullname")} />
            <p> {errors.fullname?.message} </p>
            <input type="text" placeholder="Email..." {...register("email")} />
            <p> {errors.email?.message} </p>
            <input type="number" placeholder="Age..." {...register("age")} />
            <p> {errors.age?.message} </p>
            <input type="password" placeholder="Password..." {...register("password")} />
            <p> {errors.password?.message} </p>
            <input type="password" placeholder="Confirm password..." {...register("confirmpassword")} />
            <p> {errors.confirmpassword?.message} </p>
            <input type="submit" />

        </form>
    );
    
};