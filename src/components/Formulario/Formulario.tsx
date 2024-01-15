"use client";
import { useEffect } from 'react';
import { InputText } from "../InputText/InputText";
import { Button } from "../Button/Button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export const Formulario = () => {
    const methods = useForm();

    const onSubmitData = (data: any) => {
        console.log(data);
        // Aqui você pode adicionar o código para enviar os dados para o servidor
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmitData)}
                className="flex flex-col gap-2">
                <InputTextComponent name="name" placeholder="Digite seu nome" type="text" />
                <InputTextComponent name="email" placeholder="Digite seu email" type="email" />
                <InputTextComponent name="message" placeholder="Escreva sua mensagem" type="textarea" />
                <Button type="submit" variant="white" iconLeft={<ArrowRight size={20} />} text="Enviar" />
            </form>
        </FormProvider>
    )
}

const InputTextComponent = ({ name, placeholder, type }: any) => {
    const { register, watch, setValue, formState: { errors, touchedFields } } = useFormContext();
    const value = watch(name);

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <InputText
            {...register(name, { required: `${name} é obrigatório` })}
            disabled={false}
            fullWidth={false}
            placeholder={placeholder}
            helperText={touchedFields[name] ? null : errors[name]?.message}
            type={type}
            onChange={(e) => setValue(name, e.target.value)}
            value={value}
        />
    )
}
